const aE = b;
(function (aa, ab) {
    const ax = b, ac = aa();
    while (!![]) {
        try {
            const ad = parseInt(ax(0x1ba)) / 0x1 + parseInt(ax(0x1e9)) / 0x2 * (-parseInt(ax(0x1a5)) / 0x3) + parseInt(ax(0x1cb)) / 0x4 + -parseInt(ax(0x207)) / 0x5 + parseInt(ax(0x1ce)) / 0x6 + -parseInt(ax(0x1e8)) / 0x7 + parseInt(ax(0x1d0)) / 0x8 * (parseInt(ax(0x1e3)) / 0x9);
            if (ad === ab)
                break;
            else
                ac['push'](ac['shift']());
        } catch (ae) {
            ac['push'](ac['shift']());
        }
    }
}(a, 0xc343a));
function E() {
    const ay = b, aa = window[ay(0x1b8)], ab = window[ay(0x1f7)], ac = Math[ay(0x1f5)](window[ay(0x1d6)]);
    let ad = ab / 0x2, ae = ad * 0x2, af = 0.35;
    ad > ab * af && (ad = ab * af, ae = ad * 0x2);
    let ag = 0.75;
    ae > aa * ag && (ae = aa * ag, ad = ae / 0x2);
    G['width'] = ad * ac, G['height'] = ae * ac, G[ay(0x1d2)][ay(0x1db)] = ad + 'px', G[ay(0x1d2)][ay(0x203)] = ae + 'px';
    const ah = G[ay(0x1db)] / V, ai = G[ay(0x203)] / W;
    I[ay(0x1db)] = 0x4 * ah, I[ay(0x203)] = 11.5 * ai, I[ay(0x1d2)][ay(0x1db)] = 0x4 * ad / V + 'px', I[ay(0x1d2)][ay(0x203)] = 11.5 * ae / W + 'px', a0();
}
function startButtonPress() {
    const az = b;
    S['style'][az(0x20e)] = 'none', T[az(0x20d)] = 'Spela', O['style']['display'] = az(0x1be), R[az(0x1d2)]['display'] = 'none', X[az(0x1b9)] == 0x3 && (X = new a9()), X['state'] = 0x1;
}
function pauseButtonPress() {
    const aA = b;
    X[aA(0x1b9)] == 0x1 && (T[aA(0x20d)] = aA(0x1dd), S[aA(0x1d2)][aA(0x20e)] = aA(0x1c1), X[aA(0x1b9)] = 0x2);
}
function infoButtonPress() {
    const aB = b;
    pauseButtonPress(), P[aB(0x1d2)][aB(0x20e)] == aB(0x1be) ? P[aB(0x1d2)][aB(0x20e)] = aB(0x1e6) : P[aB(0x1d2)][aB(0x20e)] = aB(0x1be);
}
function F() {
    const aC = b;
    T['innerText'] = aC(0x1a7), console[aC(0x1b2)](aC(0x20b)), O['style']['display'] = aC(0x1c1), R[aC(0x1d2)][aC(0x1b3)] = 0x0 + 'px', R[aC(0x1d2)]['display'] = aC(0x1e6), R[aC(0x1d2)][aC(0x1b3)] = aC(0x205);
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0x1a5;
        let h = e[f];
        return h;
    }, b(c, d);
}
function controllerPress(aa, ab) {
    const aD = b;
    if (X[aD(0x1b9)] != 0x1) {
        console['log'](aD(0x1c7));
        return;
    }
    if (aa == aD(0x1af))
        X['c']();
    else {
        if (aa == aD(0x1bb))
            X['d']();
        else {
            if (aa == aD(0x1d8))
                X['e'](0x1), X['f']();
            else {
                if (aa == aD(0x1ac))
                    X['g'](-0x1);
                else
                    aa == aD(0x1c3) && X['g'](0x1);
            }
        }
    }
}
const G = document[aE(0x1d1)](aE(0x20a)), H = G[aE(0x1de)]('2d'), I = document[aE(0x1d1)](aE(0x211)), J = I[aE(0x1de)]('2d'), K = document[aE(0x1d1)](aE(0x1ec)), L = document[aE(0x1d1)](aE(0x1d9)), M = document[aE(0x1d1)](aE(0x1d3)), N = document['getElementById'](aE(0x1f1)), O = document[aE(0x1d1)](aE(0x1fb)), P = document[aE(0x1d1)](aE(0x1e5)), Q = document[aE(0x1d1)](aE(0x1d4)), R = document[aE(0x1d1)](aE(0x1fd));
var S = document[aE(0x1d1)]('start_button'), T = document['getElementById'](aE(0x204)), U, V = 0xa, W = 0x14, X, Y = [];
window[aE(0x1bf)] = async function () {
    const aF = aE;
    console[aF(0x1b2)](aF(0x1ca)), document['querySelectorAll']('.controller')[aF(0x1e4)](aa => {
        const aG = aF;
        aa[aG(0x1bd)]('touchstart', () => {
            aa['classList']['add']('pressed');
        }), aa['addEventListener'](aG(0x1a6), () => {
            const aH = aG;
            aa[aH(0x1c9)]['remove'](aH(0x1ea));
        });
    }), playerDetailForm[aF(0x1bd)](aF(0x202), aa => {
        const aI = aF;
        aa[aI(0x1c8)](), submitPlayerDetails();
    }), E(), window[aF(0x1bd)](aF(0x1b1), E), X = new a9(), a2(), document[aF(0x1bd)]('keydown', aa => {
        const aJ = aF;
        if (X[aJ(0x1b9)] != 0x1) {
            console[aJ(0x1b2)](aJ(0x1c7));
            return;
        }
        if (aa[aJ(0x1aa)] == aJ(0x1f9))
            X['g'](-0x1);
        else {
            if (aa['code'] == 'ArrowRight')
                X['g'](0x1);
            else {
                if (aa[aJ(0x1aa)] == 'ArrowUp')
                    X['c'](), aa['preventDefault']();
                else {
                    if (aa[aJ(0x1aa)] == aJ(0x1f6))
                        X['f'](), X['e'](0x1), aa[aJ(0x1c8)]();
                    else
                        aa[aJ(0x1aa)] == aJ(0x1da) && (X['d'](), aa[aJ(0x1c8)]());
                }
            }
        }
    }), U = setInterval(Z, 0x3e8 / 0x3c);
};
function Z() {
    const aK = aE;
    a0();
    if (X['state'] == 0x1)
        X['h'] <= 0x0 && (X['f'](), X['h'] = a7[Math[aK(0x1dc)](X['i'], a7[aK(0x1df)] - 0x1)]), X['h']--, X['j']();
    else {
        if (X[aK(0x1b9)] == 0x0)
            return;
        else {
            if (X['state'] == 0x2) {
            } else
                X[aK(0x1b9)] == 0x3 && (S[aK(0x1d2)][aK(0x20e)] = 'block', X[aK(0x1b9)] == 0x0);
        }
    }
}
function a0() {
    const aL = aE;
    H[aL(0x1b4)] = 'rgb(220,\x20220,\x20220)', H[aL(0x1f8)](0x0, 0x0, G[aL(0x1db)], G[aL(0x203)]), J[aL(0x1b4)] = aL(0x1f3), J[aL(0x1f8)](0x0, 0x0, I['width'], I['height']);
    const aa = G[aL(0x1db)] / V, ab = G['height'] / W;
    H[aL(0x1b4)] = 'rgb(180,180,180)';
    for (let ac = 0x0; ac < V; ac++) {
        H[aL(0x1cf)](), H[aL(0x1eb)](ac * aa, 0x0), H['lineTo'](ac * aa, G[aL(0x203)]), H[aL(0x1b6)]();
    }
    for (let ad = 0x0; ad < W; ad++) {
        H[aL(0x1cf)](), H['lineTo'](0x0, ad * ab), H[aL(0x1eb)](G[aL(0x1db)], ad * ab), H[aL(0x1b6)]();
    }
    if (typeof X != aL(0x1fc)) {
        for (let aj = 0x0; aj < X[aL(0x1e0)][aL(0x1df)]; aj++) {
            const ak = X[aL(0x1e0)][aj];
            for (let al = 0x0; al < ak[aL(0x1df)]; al++) {
                const am = ak[al];
                am != null && (H[aL(0x1b4)] = a6[am], H[aL(0x1f8)](al * aa + 0x1, aj * ab + 0x1, aa - 0x2, ab - 0x2));
            }
        }
        let ae = aa / 5.5, af = X['k'];
        if (af != null) {
            H[aL(0x1b4)] = af[aL(0x1b7)], af['l']()['forEach'](ap => {
                const aM = aL;
                let aq = af['x'] + ap[0x0], ar = af['y'] + ap[0x1];
                H[aM(0x1f8)](aq * aa, ar * ab, aa, ab);
            }), H[aL(0x1b4)] = 'rgba(30,30,30,0.8)', af['m']()['forEach'](ap => {
                H['fillRect'](ap[0x0] * aa + ae, ap[0x1] * ab + ae, aa - ae * 0x2, ab - ae * 0x2);
            });
            let an = af['y'], ao = -0x1;
            while (!X['n']()) {
                af['y']++, ao++;
            }
            af['y'] = an, H[aL(0x1b4)] = af['color'], af['m']()[aL(0x1e4)](ap => {
                H['fillRect'](ap[0x0] * aa + ae, (ao + ap[0x1]) * ab + ae, aa - ae * 0x2, ab - ae * 0x2);
            });
        }
        let ag = 0x0, ah = X['o'], ai = 1.25;
        ah[aL(0x1e4)](ap => {
            const aN = aL;
            let aq = ap['l']()[aN(0x212)](au => au[0x0]), ar = Math[aN(0x1fa)](Math[aN(0x1dc)](...aq)) + Math['max'](...aq) + 0x1, as = ap['l']()[aN(0x212)](au => au[0x1]), at = Math[aN(0x1fa)](Math[aN(0x1dc)](...as)) + Math[aN(0x1f2)](...as) + 0x1;
            ap['l']()[aN(0x1e4)](au => {
                const aO = aN;
                let av = au[0x0] + 0x1 + (0x4 - ar) / 0x2, aw = au[0x1] + ai;
                at == 0x1 && (aw = aw - 0.5), J['fillStyle'] = ap[aO(0x1b7)], J[aO(0x1f8)](av * aa, aw * ab, aa, ab), J[aO(0x1b4)] = 'rgba(30,30,30,0.8)', J[aO(0x1f8)](av * aa + ae, aw * ab + ae, aa - ae * 0x2, ab - ae * 0x2);
            }), ai = ai + 2.25;
        }), K[aL(0x20d)] = X['p'], L[aL(0x1b0)] = X['p'], M[aL(0x20d)] = X['q'], N[aL(0x20d)] = X['i'];
    }
}
function a() {
    const ba = [
        'submit-score-container',
        'hash',
        'value',
        'rgb(170,\x20200,\x20160)',
        'random',
        'submit',
        'height',
        'start_button_text',
        'fit-content',
        'floor',
        '7933030XQnuNF',
        'Sluta\x20fuska!\x20Stoppar\x20spel...',
        'https://webmasteriet.vercel.app/players',
        'canvas',
        'Game\x20Over',
        'There\x20was\x20a\x20problem\x20with\x20the\x20fetch\x20operation:',
        'innerText',
        'display',
        'rgb(20,\x2020,\x2020)',
        'push',
        'nextBlock_canvas',
        'map',
        '12IvUoRw',
        'animationend',
        'Spela\x20igen',
        'splice',
        'type',
        'code',
        'shift',
        'left',
        'POST',
        'sort',
        'rotate',
        'innerHTML',
        'resize',
        'log',
        'maxHeight',
        'fillStyle',
        'rgb(70,\x20140,\x2070)',
        'stroke',
        'color',
        'innerHeight',
        'state',
        '960761BzFZLT',
        'bottom',
        'createElement',
        'addEventListener',
        'none',
        'onload',
        'warn',
        'block',
        'Network\x20response\x20was\x20not\x20ok',
        'right',
        'rotation',
        'No\x20data\x20submitted',
        'rgb(130,\x20130,\x20130)',
        'Starta\x20spelet\x20först',
        'preventDefault',
        'classList',
        'Loaded\x20KfKblock',
        '4357236jEFahS',
        'textContent',
        'Sent\x20data',
        '2554572bBqmNC',
        'beginPath',
        '8VcnvaX',
        'getElementById',
        'style',
        'clearedRows_text',
        'leader-board',
        'charCodeAt',
        'devicePixelRatio',
        'playerID-input',
        'down',
        'score-submit-score',
        'Space',
        'width',
        'min',
        'Fortsätt',
        'getContext',
        'length',
        'grid',
        'GET',
        'application/json',
        '19021599hwbKCj',
        'forEach',
        'information_texts',
        'flex',
        '#leader-board\x20tbody',
        '5094621YnhKpY',
        '737566QYtode',
        'pressed',
        'lineTo',
        'score_text',
        'error',
        'shape',
        'https://webmasteriet.vercel.app/add-player',
        'json',
        'level_text',
        'max',
        'rgb(220,\x20220,\x20220)',
        'appendChild',
        'ceil',
        'ArrowDown',
        'innerWidth',
        'fillRect',
        'ArrowLeft',
        'abs',
        'gameOver_text',
        'undefined'
    ];
    a = function () {
        return ba;
    };
    return a();
}
async function submitPlayerDetails() {
    const aP = aE;
    try {
        R[aP(0x1d2)][aP(0x20e)] = aP(0x1be);
        const aa = document[aP(0x1d1)](aP(0x1d7))[aP(0x1ff)], ab = document[aP(0x1d1)]('realName-input')['value'], dataToSend = {
            'playerID': aa,
            'RealName': ab,
            'Score': X['p']
        };
        console.log('Sent data',dataToSend);
        Y[aP(0x210)]({
            'playerID': aa,
            'Score': X['p']
        }), a4();

        const response = await fetch(aP(0x1ef), {method: aP(0x1ad), headers: {
            'Content-Type': 'application/json'  // Make sure the request is treated as JSON
        }, body: JSON.stringify(dataToSend)});
        
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API res:',data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    /*const aP = aE;
    try {
        R[aP(0x1d2)][aP(0x20e)] = aP(0x1be);
        const aa = document[aP(0x1d1)](aP(0x1d7))[aP(0x1ff)], ab = document[aP(0x1d1)]('realName-input')['value'], ac = {
                'playerID': aa,
                'RealName': ab,
                'Score': X['p']
            };
        console['log'](aP(0x1cd), ac), Y[aP(0x210)]({
            'playerID': aa,
            'Score': X['p']
        }), a4();
        console.log()
        const ad = await fetch(aP(0x1ef), {
            method: aP(0x1ad),
            headers: { 'Content-Type': aP(0x1e2) },
            body: JSON.stringify(ac)
        });
        if (!ad['ok'])
            throw new Error(aP(0x1c2));
        const ae = await ad[aP(0x1f0)]();
        console[aP(0x1b2)]('API\x20res:', ae);
    } catch (af) {
        console[aP(0x1ed)](aP(0x20c), af);
    }*/
}
async function a2() {
    const aQ = aE;
    try {
        const aa = await fetch(aQ(0x209), { 'method': aQ(0x1e1) });
        if (!aa['ok'])
            throw new Error(aQ(0x1c2));
        const ab = await aa['json']();
        console[aQ(0x1b2)]('API\x20res:', ab), Y = ab, a4();
    } catch (ac) {
        console[aQ(0x1ed)](aQ(0x20c), ac);
    }
}
function dontSubmitPlayerDetails() {
    const aR = aE;
    console[aR(0x1b2)](aR(0x1c5)), R[aR(0x1d2)][aR(0x20e)] = aR(0x1be);
}
function a4() {
    const aS = aE, aa = document['querySelector'](aS(0x1e7));
    aa['innerHTML'] = '', Y[aS(0x1ae)]((ab, ac) => {
        return ac['t'] - ab['t'];
    });
    for (let ab = 0x0; ab < Y[aS(0x1df)]; ab++) {
        const ac = Y[ab];
        const player = ac;

        // Create a new row
        const row = document.createElement('tr');

        // Create and append the Ranking cell
        const rankCell = document.createElement('td');
        rankCell.textContent = (ab+1).toString();
        row.appendChild(rankCell);

        // Create and append the playerID cell
        const playerIdCell = document.createElement('td');
        playerIdCell.textContent = player.playerID;
        row.appendChild(playerIdCell);

        // Create and append the Score cell
        const scoreCell = document.createElement('td');
        scoreCell.textContent = player.Score;
        row.appendChild(scoreCell);

        // Append the row to the table body
        aa.appendChild(row);
    }
    ;
}
const a5 = [
        [[
                [
                    -0x1,
                    -0x1
                ],
                [
                    0x0,
                    -0x1
                ],
                [
                    -0x1,
                    0x0
                ],
                [
                    0x0,
                    0x0
                ]
            ]],
        [[
                [
                    -0x1,
                    -0x1
                ],
                [
                    0x0,
                    -0x1
                ],
                [
                    0x0,
                    0x0
                ],
                [
                    0x1,
                    0x0
                ]
            ]],
        [[
                [
                    -0x1,
                    0x0
                ],
                [
                    0x0,
                    0x0
                ],
                [
                    0x0,
                    -0x1
                ],
                [
                    0x1,
                    -0x1
                ]
            ]],
        [[
                [
                    -0x1,
                    0x0
                ],
                [
                    0x0,
                    0x0
                ],
                [
                    0x1,
                    0x0
                ],
                [
                    0x0,
                    -0x1
                ]
            ]],
        [[
                [
                    -0x1,
                    0x0
                ],
                [
                    0x0,
                    0x0
                ],
                [
                    0x1,
                    0x0
                ],
                [
                    0x2,
                    0x0
                ]
            ]],
        [[
                [
                    -0x1,
                    0x0
                ],
                [
                    0x0,
                    0x0
                ],
                [
                    0x1,
                    0x0
                ],
                [
                    0x1,
                    -0x1
                ]
            ]],
        [[
                [
                    -0x1,
                    0x0
                ],
                [
                    0x0,
                    0x0
                ],
                [
                    0x1,
                    0x0
                ],
                [
                    -0x1,
                    -0x1
                ]
            ]]
    ], a6 = [
        'rgb(70,\x20140,\x2070)',
        aE(0x200),
        'rgb(130,\x20170,\x20120)',
        aE(0x1b5),
        aE(0x1b5),
        aE(0x20f),
        aE(0x1c6)
    ], a7 = [
        0x30,
        0x2b,
        0x26,
        0x21,
        0x1c,
        0x17,
        0x12,
        0xd,
        0x8,
        0x6,
        0x5
    ];
class a8 {
    constructor(aa, ab, ac) {
        const aT = aE;
        this['x'] = aa, this['y'] = ab, this[aT(0x1a9)] = ac, this[aT(0x1ee)] = a5[ac][0x0], this[aT(0x1b7)] = a6[ac], this[aT(0x1c4)] = 0x0;
    }
    ['l']() {
        const aU = aE;
        return this[aU(0x1ee)];
    }
    ['m']() {
        const aV = aE;
        return this[aV(0x1ee)][aV(0x212)](aa => [
            aa[0x0] + this['x'],
            aa[0x1] + this['y']
        ]);
    }
    ['rotate']() {
        const aW = aE;
        let aa = [];
        this[aW(0x1ee)][aW(0x1e4)](ab => {
            const aX = aW;
            if (this[aX(0x1a9)] == 0x4)
                aa[aX(0x210)]([
                    -ab[0x1] + 0x1,
                    ab[0x0]
                ]);
            else
                this[aX(0x1a9)] == 0x0 ? aa[aX(0x210)]([
                    -ab[0x1] - 0x1,
                    ab[0x0]
                ]) : aa[aX(0x210)]([
                    -ab[0x1],
                    ab[0x0]
                ]);
        }), this[aW(0x1ee)] = aa;
    }
}
class a9 {
    constructor() {
        const aY = aE;
        this['i'] = 0x0, this['q'] = 0x0, this['p'] = 0x0, this[aY(0x1fe)] = this['v'](this['p']), this[aY(0x1b9)] = 0x0, this['k'] = null, this['o'] = [], this['w'] = [], this['z'](), this['h'] = 0x0, this['grid'] = [];
        for (let aa = 0x0; aa < W; aa++) {
            this[aY(0x1e0)]['push']([]);
            for (let ab = 0x0; ab < V; ab++) {
                this['grid'][aa][aY(0x210)](null);
            }
        }
        for (let ac = 0x0; ac < 0x5; ac++) {
            this['A']();
        }
        this['B']();
    }
    ['e'](aa) {
        this['p'] += aa, this['hash'] = this['v'](this['p']);
    }
    ['v'](aa) {
        const aZ = aE;
        let ab = 0x0;
        const ac = aa['toString']();
        for (let ad = 0x0; ad < ac[aZ(0x1df)]; ad++) {
            ab ^= ac[aZ(0x1d5)](ad);
        }
        return ab;
    }
    ['j']() {
        const b0 = aE, aa = this['v'](this['p']);
        aa !== this['hash'] && (console[b0(0x1c0)](b0(0x208)), this[b0(0x1b9)] = 0x3);
    }
    ['z']() {
        const b1 = aE;
        let aa = 0x2;
        for (let ab = 0x0; ab < a5[b1(0x1df)] * aa; ab++) {
            this['w'][b1(0x210)](ab % a5[b1(0x1df)]);
        }
    }
    ['A']() {
        const b2 = aE;
        this['w'][b2(0x1df)] == 0x0 && this['z']();
        let aa = this['w'][b2(0x1a8)](Math[b2(0x206)](this['w']['length'] * Math[b2(0x201)]()), 0x1);
        this['o'][b2(0x210)](new a8(0x5, 0x0, aa));
    }
    ['B']() {
        const b3 = aE;
        let aa = this['o'][b3(0x1ab)]();
        this['k'] = aa, this['A'](), this['n']() && (this[b3(0x1b9)] = 0x3, this['k'] = null, F());
    }
    ['g'](aa) {
        (aa == -0x1 || aa == 0x1) && (this['k']['x'] = this['k']['x'] + aa, X['n']() && (X['k']['x'] = this['k']['x'] - aa));
    }
    ['f']() {
        this['k']['y'] = this['k']['y'] + 0x1;
        if (this['n']())
            return this['k']['y'] = this['k']['y'] - 0x1, this['C'](), !![];
        return ![];
    }
    ['d']() {
        let aa = ![];
        while (!aa) {
            aa = this['f'](), this['e'](0x1);
        }
        this['e'](-0x1);
    }
    ['c']() {
        const b4 = aE;
        let aa = this['k'][b4(0x1ee)];
        this['k']['rotate'](), this['n']() && (this['k']['x']++, this['n']() && (this['k']['x']--, this['k']['x']--, this['n']() && (this['k'][b4(0x1ee)] = aa, this['k']['x']++)));
    }
    ['C']() {
        const b5 = aE;
        this['k']['m']()[b5(0x1e4)](aa => {
            const b6 = b5;
            aa[0x1] >= 0x0 && aa[0x0] >= 0x0 && (this[b6(0x1e0)][aa[0x1]][aa[0x0]] = this['k'][b6(0x1a9)]);
        }), this['B'](), this['D']();
    }
    ['n']() {
        const b7 = aE;
        let aa = ![];
        return this['k']['m']()[b7(0x1e4)](ab => {
            const b8 = b7;
            if (ab[0x1] >= 0x0)
                (ab[0x1] > W - 0x1 || ab[0x0] < 0x0 || ab[0x0] > V - 0x1 || this[b8(0x1e0)][ab[0x1]][ab[0x0]] != null) && (aa = !![]);
            else
                ab[0x1] < 0x0 && ((ab[0x1] > W - 0x1 || ab[0x0] < 0x0 || ab[0x0] > V - 0x1) && (aa = !![]));
        }), aa;
    }
    ['D']() {
        const b9 = aE;
        let aa = 0x0;
        for (let ac = 0x0; ac < this['grid'][b9(0x1df)]; ac++) {
            const ad = this['grid'][ac];
            let ae = 0x0;
            for (let af = 0x0; af < ad[b9(0x1df)]; af++) {
                const ag = ad[af];
                ag === null && ae++;
            }
            if (ae === 0x0) {
                aa++;
                for (let ah = ac; ah > 0x1; ah--) {
                    for (let ai = 0x0; ai < V; ai++) {
                        this[b9(0x1e0)][ah][ai] = this[b9(0x1e0)][ah - 0x1][ai];
                    }
                }
            }
        }
        let ab = 0x0;
        if (aa == 0x1)
            ab = 0x28 * (this['i'] + 0x1);
        else {
            if (aa == 0x2)
                ab = 0x64 * (this['i'] + 0x1);
            else {
                if (aa == 0x3)
                    ab = 0x12c * (this['i'] + 0x1);
                else
                    aa == 0x4 && (ab = 0x4b0 * (this['i'] + 0x1));
            }
        }
        this['e'](ab), this['q'] = this['q'] + aa, this['q'] >= 0xa && (this['i']++, this['q'] = 0x0);
    }
}