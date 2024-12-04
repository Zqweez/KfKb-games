function resize() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Set max canvas dimensions
    const maxWidth = viewportWidth * 0.7;
    const maxHeight = viewportHeight * 0.7;

    // Get side-div dimensions and available space
    const availableWidth = viewportWidth; // Account for margin
    const availableHeight = viewportHeight/1.2;

    // Calculate block width to maintain grid ratio
    const blockWidthBasedOnWidth =  Math.min(maxWidth, availableWidth) / sweeper.columns;
    const blockWidthBasedOnHeight = Math.min(maxHeight, availableHeight) / sweeper.rows;
    const blockWidth = Math.min(blockWidthBasedOnWidth, blockWidthBasedOnHeight);
    sweeper.blockSize = blockWidth * ratio;
    canvasWidth = blockWidth*sweeper.columns;
    canvasHeight = blockWidth*sweeper.rows;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    sweeper.draw();
}

function collapseSeeds() {
    const seedContainer = document.getElementById('collapsible-seed-container');
    const isCollapsed = seedContainer.getAttribute("data-collapsed") === "true";
    if (isCollapsed) {
        // Expand
        seedContainer.classList.add("expanded");
        seedContainer.setAttribute("data-collapsed", "false");
    } else {
        // Collapse
        seedContainer.classList.remove("expanded");
        seedContainer.setAttribute("data-collapsed", "true");
    }
}

function darkModeToggle() {
    const element = document.body;
    element.classList.toggle("dark-mode");
    darkMode = !darkMode;
    const b = document.getElementById('dark-mode-button');
    b.innerHTML = darkMode === false ? "&#9788;" : "&#9790;";
    sweeper.draw();
}

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.isMine = false;
        this.isMarked = false;
        this.isShown = false;

        this.neighbors = [];
    }
}

class Sweeper {
    constructor() {
        this.gameStatus = -1; // -1-not Started 0-playing , 1-win , 2-gameOver
        this.time = 0;
        this.showMines = false;

        this.seed = 0;
        this.generateSeed();

        this.mines = 0;
        this.placedMines = 0;

        this.showedNodes = 0;

        this.rows = 15;
        this.columns = 15;
        this.difficultyChange();

        // Grid, 0-empty , 1-mine
        this.grid = [];
        this.setUp();
    }
    resetGame() {
        this.time = 0;
        this.setUp();
        this.gameStatus = -1;
        gameStatusChange();
    }
    difficultyChange() {
        const selected = document.querySelector('input[name="difficulty"]:checked').id;
        console.log('Selected difficulty:', selected);
        const selectedDifficulty = Array.from(document.querySelectorAll('input[name="difficulty"]')).indexOf(document.querySelector('input[name="difficulty"]:checked')) + 1;
        const diffSeed = selectedDifficulty.toString() + this.seed.toString();
        seedInput.value = diffSeed;
        const diff = minesDifficulties[selected];
        this.mines = diff[0];
        this.columns = diff[1];
        this.rows = diff[2];
    }

    generateSeed() {
        this.seed = Math.floor(Math.random()*999999);
        console.warn(this.seed);
        const selectedDifficulty = Array.from(document.querySelectorAll('input[name="difficulty"]')).indexOf(document.querySelector('input[name="difficulty"]:checked')) + 1;
        const diffSeed = selectedDifficulty.toString() + this.seed.toString();
        seedInput.value = diffSeed;
        if (typeof sweeper !== 'undefined') this.resetGame(); // Restart the game when generating a new seed
    }

    setUp() {
        // Make Grid
        this.grid = [];
        for (let r = 0; r < this.rows; r++) {
            this.grid.push([]);
            for (let c = 0; c < this.columns; c++) {
                this.grid[r].push(new Node(c,r))
            }
        }
        // Get neightbors
        for (let r = 0; r < this.grid.length; r++) {
            const row = this.grid[r];
            for (let c = 0; c < row.length; c++) {
                const spot = row[c];
                const { x, y } = spot;
                const neighbors = [];
                const directions = [
                    [0, 1],  // down
                    [1, 0],  // right
                    [0, -1], // up
                    [-1, 0],  // left
                    [1, 1],  // down-right
                    [1, -1],  // up-right
                    [-1, -1], // up-left
                    [-1, 1]  // down-left
                ];

                for (const [dx, dy] of directions) {
                    const newX = x + dx;
                    const newY = y + dy;
                    if (newX >= 0 && newX < this.grid[0].length && newY >= 0 && newY < this.grid.length) {
                        neighbors.push(this.grid[newY][newX]);
                    }
                }
                spot.neighbors = neighbors;
            }
        }
        // Place mines
        this.placedMines = 0;
        this.showedNodes = 0;
        this.placeMines();
    }

    placeMines() {
        let emptyNodes = this.grid.slice().flat();
        emptyNodes = emptyNodes.filter(node => !node.isMine && !node.isShown);
        while (this.placedMines < this.mines) {
            let mineIndex = Math.floor(this.randomIndexSeed(this.seed+this.placedMines) * emptyNodes.length);

            emptyNodes[mineIndex].isMine = true;
            emptyNodes.splice(mineIndex,1);
            
            this.placedMines++;
        }
        let minesLeft = this.placedMines - this.grid.flat().filter(node => node.isMarked).length;
        mineText.innerHTML = minesLeft.toString();
    }
    randomIndexSeed(seed) {
        let x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    showNeighbors(node) {
        if (node.isShown) {
            node.isMarked = false;
        }
        let mineNeighbor = node.neighbors.filter(n => n.isMine).length;
        if (mineNeighbor == 0) {
            for (const neighbor of node.neighbors) {
                if (!neighbor.isMine && !neighbor.isShown) {
                    neighbor.isShown = true;
                    this.showedNodes++;
                    let mineNeigh = neighbor.neighbors.filter(n => n.isMine).length;
                    if (mineNeigh == 0) this.showNeighbors(neighbor);
                }
                if (neighbor.isShown) {
                    neighbor.isMarked = false;
                }
            }
        }
    }

    move(node, button) {
        if (button == 0){
            if (this.showedNodes == 0) {
                // First press
                this.gameStatus = 0;
                gameStatusChange();
                if (node.isMine) {
                    node.isMine = false;
                    this.placedMines--;
                }
                if (node.neighbors.filter(n => n.isMine).length > 0) {
                    for (const neighbor of node.neighbors.filter(n => n.isMine)) {
                        neighbor.isMine = false;
                        this.placedMines--;
                    }
                }
                node.isShown = true; 
                this.showedNodes++;
                this.showNeighbors(node);
                this.placeMines();
            } else {
                // Not first press
                if (!node.isShown && !node.isMarked) {
                    node.isShown = true; 
                    this.showedNodes++;
                    this.showNeighbors(node);
                    if (node.isMine) {
                        this.showedNodes--;
                        this.gameStatus = 2;
                        gameStatusChange();
                        console.error("Game Over");
                    }
                }
            }
        } else if (button == 2) {
            node.isMarked = !node.isMarked;
            if (node.isShown) {
                node.isMarked = false;
            }
        }
        let minesLeft = this.placedMines - this.grid.flat().filter(node => node.isMarked).length;
        mineText.innerHTML = minesLeft.toString();

        // Check Win
        if (((this.grid.length*this.grid[0].length)-this.showedNodes) <= this.mines) {
            this.gameStatus = 1;
            gameStatusChange();
        }
    }

    draw() {
        // Background
        const bg_color = darkMode === false ? `#aaaaaa`: `#989898`;
        ctx.fillStyle = bg_color;
        ctx.fillRect(0,0,canvas.width,canvas.height);


        // Draw nodes
        ctx.font = `${Math.floor(this.blockSize/1.5)}px Courier New`;
        for (let r = 0; r < this.grid.length; r++) {
            const row = this.grid[r];
            for (let c = 0; c < row.length; c++) {
                const spot = row[c];
                
                ctx.fillStyle = darkMode === false ? `#dddddd`: `#454545`;
                ctx.fillRect(c*this.blockSize+1, r*this.blockSize+1, this.blockSize-2, this.blockSize-2);
                if ((spot.isMine && this.showMines) || (spot.isMine && [1, 2].includes(this.gameStatus))) {
                    ctx.fillStyle = darkMode === false ? `#ff89a1`: `#ff89a1`;
                    ctx.beginPath();
                    ctx.arc(c*this.blockSize+this.blockSize/2, r*this.blockSize+this.blockSize/2, this.blockSize/3, 0, Math.PI*2, false);
                    ctx.fill();
                }

                
                if (spot.isMarked) {
                    ctx.fillStyle = darkMode === false ? `#31ce41`: `#51ee71`;
                    ctx.beginPath();
                    ctx.arc(c*this.blockSize+this.blockSize/2, r*this.blockSize+this.blockSize/2, this.blockSize/3, 0, Math.PI*2, false);
                    ctx.fill();
                    //ctx.fillRect(c*this.blockSize+10, r*this.blockSize+10, this.blockSize-20, this.blockSize-20);
                }

                if (spot.isShown && !spot.isMine) {
                    ctx.fillStyle = darkMode === false ? "rgba(40,200,60, 0.2)": "rgba(40,220,70, 0.3)";
                    ctx.fillRect(c*this.blockSize+1, r*this.blockSize+1, this.blockSize-2, this.blockSize-2);
                    // Number visual
                    let mineNeigh = spot.neighbors.filter(n => n.isMine).length;
                    ctx.fillStyle = mineColor[mineNeigh];
                    if (mineNeigh > 0) ctx.fillText(mineNeigh.toString(), c*this.blockSize+this.blockSize/3.2, r*this.blockSize+this.blockSize/1.4, this.blockSize)
                }
            }
        }
    }
}

// Content
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const ratio = Math.ceil(window.devicePixelRatio);

const difficultyForm = document.getElementById('difficulty-form');
const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');

const seedInput = document.getElementById('seed-Input');
const timeText = document.getElementById('time-text');
const mineText = document.getElementById('mine-text');
const restartButton = document.getElementById('restart-button');
const gameOverText = document.getElementById('gameOver_text');
const progressBar = document.getElementById('progress-bar');

const fps = 30;
let runningTime = performance.now();
const mineColor = ['#ffffff', '#1414c8', '#14c828', '#c82832', '#b48228', '#aa28aa', '#28aaaa', '#000000', '#000000'];

// Settings and objects
const minesDifficulties = {
    'easy' : [15, 12,10],
    'medium' : [30,16,13],
    'hard' : [60,20,16],
    'extreme' : [100,23,19]
}

let darkMode = false;
let isMouseDown = false;
var sweeper = new Sweeper();

window.addEventListener("resize", resize);
resize();

window.onload = function() {
    document.addEventListener("mousedown", function(event) {
        isMouseDown = true;
        handleMouseMove(event);
    });
    document.addEventListener("mouseup", function(event) {
        isMouseDown = false;
    });
    // Handle mouse movement
    /*document.addEventListener("mousemove", function(event) {
        if (isMouseDown) {
            handleMouseMove(event);
        }
    });*/
    canvas.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Prevent the default context menu on right click
    });

    difficultyRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            sweeper.difficultyChange();
            sweeper.resetGame();
            resize();
        });
    });

    gameStatusChange();
    intervalID = setInterval(update, 1000/fps); //Every 100ms
}

function update() {
    if (sweeper.gameStatus == 0) {
        let cuttentTime = performance.now();
        sweeper.time = sweeper.time + ((cuttentTime-runningTime)/1000);
        runningTime = performance.now();
        timeText.innerHTML = sweeper.time.toFixed(2);
    }
    sweeper.draw();
    progressBar.style.width = `${100*(sweeper.showedNodes/((sweeper.grid.length*sweeper.grid[0].length)-sweeper.mines))}%`
}

function handleMouseMove (event) {
    var rect = canvas.getBoundingClientRect();
    var x = (event.clientX - rect.left)*ratio;
    var y = (event.clientY - rect.top)*ratio;
    if (x < 0 || x > canvas.width || y < 0|| y > canvas.height) return;
    event.preventDefault();
    let row = Math.floor(y/sweeper.blockSize);
    let col = Math.floor(x/sweeper.blockSize);
    let node = sweeper.grid[row][col];
    //console.log(node);
    node = sweeper.grid[row][col];
    if (sweeper.gameStatus == 0 || sweeper.gameStatus == -1) {
        sweeper.move(node, event.button);
    }
}

function gameStatusChange() {
    if (sweeper.gameStatus == -1) {
        restartButton.disabled = true;
        difficultyRadios.forEach(radio => radio.disabled = false);
        gameOverText.style.display = 'none';
    } else if (sweeper.gameStatus == 0) {
        runningTime = performance.now();
        restartButton.disabled = false;
        difficultyRadios.forEach(radio => radio.disabled = true);
        gameOverText.style.display = 'none';
    } else if (sweeper.gameStatus == 1) {
        console.log("WIN!!!! \n Seed :", sweeper.seed, 'Time:', sweeper.time.toFixed(2));
        restartButton.disabled = false;
        difficultyRadios.forEach(radio => radio.disabled = false);
        gameOverText.style.display = 'inline';
        gameOverText.innerHTML = 'Ez Win';
    } else if (sweeper.gameStatus == 2) {
        restartButton.disabled = false;
        difficultyRadios.forEach(radio => radio.disabled = false);
        gameOverText.style.display = 'inline';
        gameOverText.innerHTML = 'Du är sämst';
    }
}

function seedNewInput () {
    const seedStr = seedInput.value;
    difficultyRadios[Math.min((parseInt(seedStr[0])-1), difficultyRadios.length)].checked = true;
    let slicedSeed = seedStr.slice(1);
    sweeper.seed = parseInt(slicedSeed);
    console.warn(sweeper.seed);
    seedInput.value = seedStr;
    sweeper.resetGame();
}
