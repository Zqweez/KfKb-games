const aR = b;
(function (aj, ak) {
    const aG = b, al = aj();
    while (!![]) {
        try {
            const am = -parseInt(aG(0xdf)) / 0x1 * (-parseInt(aG(0x14a)) / 0x2) + -parseInt(aG(0xc6)) / 0x3 * (parseInt(aG(0x117)) / 0x4) + parseInt(aG(0x101)) / 0x5 + -parseInt(aG(0x124)) / 0x6 + parseInt(aG(0x125)) / 0x7 + -parseInt(aG(0x144)) / 0x8 + -parseInt(aG(0x114)) / 0x9 * (-parseInt(aG(0xf5)) / 0xa);
            if (am === ak)
                break;
            else
                al['push'](al['shift']());
        } catch (an) {
            al['push'](al['shift']());
        }
    }
}(a, 0x7f71f));
function I() {
    const aH = b, aj = window[aH(0xe6)], ak = window[aH(0x140)], al = Math['ceil'](window[aH(0xc4)]);
    let am = ak / 0x2, an = am * 0x2, ao = 0.35;
    am > ak * ao && (am = ak * ao, an = am * 0x2);
    let ap = 0.75;
    an > aj * ap && (an = aj * ap, am = an / 0x2);
    N[aH(0x127)] = am * al, N[aH(0x13d)] = an * al, N[aH(0xd0)][aH(0x127)] = am + 'px', N[aH(0xd0)][aH(0x13d)] = an + 'px';
    const aq = N[aH(0x127)] / a2;
    P[aH(0x127)] = 0x4 * aq, P[aH(0x13d)] = 11.5 * aq, P[aH(0xd0)][aH(0x127)] = 0x4 * am / a2 + 'px', P[aH(0xd0)][aH(0x13d)] = 11.5 * an / a3 + 'px', a9();
}
function J() {
    const aI = b, aj = window[aI(0xe6)], ak = window['innerWidth'], al = Math[aI(0xf6)](window[aI(0xc4)]), am = 0.35, an = 0.75, ao = a3 / a2, ap = Math[aI(0x128)](ak * am * ao, aj * an);
    let aq = ap / ao, ar = ap;
    N[aI(0x127)] = aq * al, N[aI(0x13d)] = ar * al, N['style']['width'] = aq + 'px', N[aI(0xd0)]['height'] = ar + 'px';
    const as = N[aI(0x127)] / a2;
    P['width'] = 0x4 * as, P[aI(0x13d)] = 11.5 * as, P[aI(0xd0)]['width'] = 0x4 * aq / a2 + 'px', P[aI(0xd0)][aI(0x13d)] = 11.5 * ar / a3 + 'px', a9();
}
function startButtonPress() {
    const aJ = b;
    Z[aJ(0xd0)][aJ(0xca)] = 'none', a0[aJ(0xf1)] = aJ(0xde), V['style'][aJ(0xca)] = aJ(0xd8), Y[aJ(0xd0)]['display'] = aJ(0xd8), a4['state'] == 0x3 && (a4 = new ai()), a4[aJ(0x113)] = 0x1;
}
function pauseButtonPress() {
    const aK = b;
    a4[aK(0x113)] == 0x1 && (a0['innerText'] = aK(0xe8), Z['style']['display'] = aK(0x129), a4[aK(0x113)] = 0x2);
}
function infoButtonPress() {
    const aL = b;
    pauseButtonPress(), W['style']['display'] == aL(0xd8) ? W[aL(0xd0)][aL(0xca)] = aL(0x14e) : W[aL(0xd0)][aL(0xca)] = aL(0xd8);
}
function darkModeToggle() {
    const aM = b;
    var aj = document[aM(0x143)];
    aj[aM(0xfe)][aM(0xf3)](aM(0xd7)), a5 = !a5;
    const ak = document[aM(0xd1)](aM(0x14c));
    ak[aM(0xef)] = a5 === ![] ? aM(0xc3) : aM(0xd2), a9();
}
function K(aj) {
    const aN = b;
    let ak = Object['keys'](a7)['map'](Number)[aN(0x110)]((al, am) => al - am);
    if (aj < ak[0x0]) {
        let al = a7[ak[0x0]];
        return al[Math[aN(0x12a)](Math[aN(0xd5)]() * al['length'])];
    }
    if (aj > ak[ak[aN(0x12c)] - 0x1]) {
        let am = a7[ak[ak['length'] - 0x1]];
        return am[Math[aN(0x12a)](Math[aN(0xd5)]() * am[aN(0x12c)])];
    }
    for (let an = ak[aN(0x12c)] - 0x1; an >= 0x0; an--) {
        if (aj >= ak[an]) {
            let ao = a7[ak[an]];
            return ao[Math[aN(0x12a)](Math['random']() * ao['length'])];
        }
    }
}
function L() {
    const aO = b;
    a0[aO(0xf1)] = aO(0x137), console[aO(0x10d)](aO(0xd9)), V['style'][aO(0xca)] = aO(0x129);
    let aj = a4['c'](), ak = K(aj);
    console[aO(0x10d)](ak), V[aO(0xef)] = ak, Y[aO(0xd0)]['maxHeight'] = 0x0 + 'px', Y[aO(0xd0)]['display'] = aO(0x14e), Y[aO(0xd0)][aO(0xd4)] = aO(0xc9);
}
function controllerPress(aj, ak) {
    const aP = b;
    if (a4['state'] != 0x1) {
        console['log'](aP(0x150));
        return;
    }
    if (aj == 'rotate')
        a4['d']();
    else {
        if (aj == 'bottom')
            a4['e']();
        else {
            if (aj == 'down')
                a4['f'](0x1), a4['g']();
            else {
                if (aj == aP(0x135))
                    a4['h'](-0x1);
                else
                    aj == aP(0x116) && a4['h'](0x1);
            }
        }
    }
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0xc3;
        let h = e[f];
        return h;
    }, b(c, d);
}
function M(aj) {
    const aQ = b;
    if (aj['code'] == 'Escape' || aj[aQ(0xcb)] == aQ(0x147)) {
        if (a4[aQ(0x113)] == 0x1)
            pauseButtonPress();
        else
            a4[aQ(0x113)] == 0x2 && startButtonPress();
    }
    if (a4[aQ(0x113)] != 0x1) {
        console['log'](aQ(0x150));
        aj[aQ(0xcb)] == aQ(0x13f) && aj[aQ(0x13a)] == document[aQ(0x143)] && aj[aQ(0x149)]();
        return;
    }
    if (aj['code'] == aQ(0xfd) || aj[aQ(0xcb)] == aQ(0x10f))
        a4['h'](-0x1);
    else {
        if (aj[aQ(0xcb)] == aQ(0x126) || aj[aQ(0xcb)] == aQ(0x146))
            a4['h'](0x1);
        else {
            if (aj[aQ(0xcb)] == aQ(0x108) || aj[aQ(0xcb)] == aQ(0x112))
                a4['d'](), aj[aQ(0x149)]();
            else {
                if (aj['code'] == aQ(0x105) || aj[aQ(0xcb)] == 'KeyS')
                    a4['g'](), a4['f'](0x1), aj[aQ(0x149)]();
                else
                    aj[aQ(0xcb)] == aQ(0x13f) && (a4['e'](), aj[aQ(0x149)]());
            }
        }
    }
}
const N = document['getElementById'](aR(0xff)), O = N[aR(0x141)]('2d'), P = document[aR(0xd1)](aR(0xf9)), Q = P[aR(0x141)]('2d'), R = document[aR(0xd1)](aR(0x11c)), S = document[aR(0xd1)](aR(0x11f)), T = document[aR(0xd1)]('clearedRows_text'), U = document['getElementById']('level_text'), V = document[aR(0xd1)]('gameOver_text'), W = document[aR(0xd1)](aR(0x14b)), X = document[aR(0xd1)]('leader-board'), Y = document['getElementById']('submit-score-container');
let Z = document['getElementById']('start_button'), a0 = document[aR(0xd1)](aR(0xee)), a1, a2 = 0xa, a3 = 0x14, a4, a5 = ![], a6 = [], a7 = {
        0x7d0: [
            aR(0xcd),
            aR(0x134),
            'Ge\x20upp'
        ],
        0x1388: [
            aR(0xcf),
            aR(0x136),
            aR(0xe3)
        ],
        0x2710: [
            aR(0x12f),
            'Du\x20hade\x20fått\x20en\x203a'
        ],
        0x3a98: [
            aR(0xe1),
            aR(0xe0)
        ],
        0x4e20: [aR(0x13b)],
        0x7530: [aR(0x142)],
        0x9c40: [
            aR(0xdd),
            aR(0xed)
        ],
        0xc350: [
            aR(0x10c),
            aR(0x120),
            aR(0xf7)
        ]
    };
function a() {
    const bs = [
        '45YGPhaw',
        'type',
        'right',
        '2441932fqNktb',
        'includes',
        'push',
        'undefined',
        'finally',
        'score_text',
        'max',
        'touchstart',
        'score-submit-score',
        'Kämpa',
        'abs',
        'Network\x20response\x20was\x20not\x20ok',
        '#leader-board\x20tbody',
        '3475698pSWjsf',
        '2029937YElwpA',
        'ArrowRight',
        'width',
        'min',
        'block',
        'floor',
        'rgb(130,\x20170,\x20120)',
        'length',
        'json',
        'error',
        'Limes',
        'addEventListener',
        'rotate',
        'querySelector',
        'textContent',
        'Klassisk\x20kugg',
        'left',
        'Det\x20är\x20ett\x20U',
        'Spela\x20igen',
        'beginPath',
        'getKey',
        'target',
        'Respektabel\x204a',
        'grid',
        'height',
        'hash',
        'Space',
        'innerWidth',
        'getContext',
        'Nästan\x20en\x20femma',
        'body',
        '2420776wtXXIo',
        'shift',
        'KeyD',
        'KeyP',
        'There\x20was\x20a\x20problem\x20with\x20the\x20fetch\x20operation:',
        'preventDefault',
        '4NRzwqG',
        'information_texts',
        'dark-mode-button',
        'resize',
        'flex',
        'rgb(50,\x2050,\x2050)',
        'Starta\x20spelet\x20först',
        'rgb(70,\x20140,\x2070)',
        '&#9788;',
        'devicePixelRatio',
        'rgb(130,\x20130,\x20130)',
        '3efxkXv',
        'color',
        'rgb(180,180,180)',
        'fit-content',
        'display',
        'code',
        'pressed',
        'Det\x20var\x20inget\x20vidare',
        'spinning',
        'Nästan\x20godkänt',
        'style',
        'getElementById',
        '&#9790;',
        'rgba(30,30,30,0.8)',
        'maxHeight',
        'random',
        'onload',
        'dark-mode',
        'none',
        'Game\x20Over',
        'realName-input',
        'fillRect',
        'Loaded\x20KfKblock',
        'Imponerande',
        'Spela',
        '229291iavlGF',
        'Granska\x20till\x204a',
        'Helt\x20ok',
        'map',
        'Kan\x20granskas',
        'https://webmasteriet.vercel.app/players',
        'rgb(170,\x20200,\x20160)',
        'innerHeight',
        'toString',
        'Fortsätt',
        'lineTo',
        '.update-leaderBoard-arrow',
        'charCodeAt',
        'POST',
        'Bättre\x20kan\x20du',
        'start_button_text',
        'innerHTML',
        'animationend',
        'innerText',
        'createElement',
        'toggle',
        'rgb(20,\x2020,\x2020)',
        '842030zeiCMw',
        'ceil',
        'Du\x20är\x20sämst',
        'splice',
        'nextBlock_canvas',
        'stringify',
        'playerID-input',
        'No\x20data\x20submitted',
        'ArrowLeft',
        'classList',
        'canvas',
        'API\x20res:',
        '4223950LPsbZl',
        'forEach',
        'stroke',
        'fillStyle',
        'ArrowDown',
        'submit',
        'value',
        'ArrowUp',
        'remove',
        'appendChild',
        'shape',
        'Sök\x20webmästeriet',
        'log',
        'rgb(220,\x20220,\x20220)',
        'KeyA',
        'sort',
        'add',
        'KeyW',
        'state'
    ];
    a = function () {
        return bs;
    };
    return a();
}
window[aR(0xd6)] = async function () {
    const aS = aR;
    console[aS(0x10d)](aS(0xdc)), document['querySelectorAll']('.controller')['forEach'](aj => {
        const aT = aS;
        aj[aT(0x130)](aT(0x11e), () => {
            const aU = aT;
            aj[aU(0xfe)][aU(0x111)](aU(0xcc));
        }), aj['addEventListener'](aT(0xf0), () => {
            const aV = aT;
            aj[aV(0xfe)][aV(0x109)](aV(0xcc));
        });
    }), playerDetailForm[aS(0x130)](aS(0x106), aj => {
        const aW = aS;
        aj[aW(0x149)](), ab();
    }), J(), window[aS(0x130)](aS(0x14d), J), a4 = new ai(), updateScoreBoard(), document[aS(0x130)]('keydown', aj => {
        M(aj);
    }), a1 = setInterval(a8, 0x3e8 / 0x3c);
};
function a8() {
    const aX = aR;
    a9();
    if (a4[aX(0x113)] == 0x1)
        a4['i'] <= 0x0 && (a4['g'](), a4['i'] = ag[Math[aX(0x128)](a4['j'], ag[aX(0x12c)] - 0x1)]), a4['i']--, a4['k']();
    else {
        if (a4[aX(0x113)] == 0x0)
            return;
        else {
            if (a4['state'] == 0x2) {
            } else
                a4[aX(0x113)] == 0x3 && (Z[aX(0xd0)][aX(0xca)] = 'block', a4['state'] == 0x0);
        }
    }
}
function a9() {
    const aY = aR;
    let aj;
    aj = a5 === ![] ? aY(0x10e) : aY(0x14f), O[aY(0x104)] = aj, O['fillRect'](0x0, 0x0, N[aY(0x127)], N['height']), Q['fillStyle'] = aj, Q[aY(0xdb)](0x0, 0x0, P[aY(0x127)], P[aY(0x13d)]);
    const ak = N[aY(0x127)] / a2;
    O['fillStyle'] = aY(0xc8);
    for (let al = 0x0; al < a2; al++) {
        O[aY(0x138)](), O['lineTo'](al * ak, 0x0), O['lineTo'](al * ak, N[aY(0x13d)]), O[aY(0x103)]();
    }
    for (let am = 0x0; am < a3; am++) {
        O[aY(0x138)](), O[aY(0xe9)](0x0, am * ak), O[aY(0xe9)](N[aY(0x127)], am * ak), O[aY(0x103)]();
    }
    if (typeof a4 != aY(0x11a)) {
        for (let as = 0x0; as < a4[aY(0x13c)]['length']; as++) {
            const at = a4[aY(0x13c)][as];
            for (let au = 0x0; au < at[aY(0x12c)]; au++) {
                const av = at[au];
                av != null && (O[aY(0x104)] = af[av], O['fillRect'](au * ak + 0x1, as * ak + 0x1, ak - 0x2, ak - 0x2));
            }
        }
        let an = ak / 5.5, ao = a4['l'];
        if (ao != null) {
            O[aY(0x104)] = ao['color'], ao['m']()[aY(0x102)](ay => {
                const aZ = aY;
                let az = ao['x'] + ay[0x0], aA = ao['y'] + ay[0x1];
                O[aZ(0xdb)](az * ak, aA * ak, ak, ak);
            }), O['fillStyle'] = aY(0xd3), ao['n']()[aY(0x102)](ay => {
                const b0 = aY;
                O[b0(0xdb)](ay[0x0] * ak + an, ay[0x1] * ak + an, ak - an * 0x2, ak - an * 0x2);
            });
            let aw = ao['y'], ax = -0x1;
            while (!a4['o']()) {
                ao['y']++, ax++;
            }
            ao['y'] = aw, O[aY(0x104)] = ao[aY(0xc7)], ao['n']()[aY(0x102)](ay => {
                const b1 = aY;
                O[b1(0xdb)](ay[0x0] * ak + an, (ax + ay[0x1]) * ak + an, ak - an * 0x2, ak - an * 0x2);
            });
        }
        let ap = 0x0, aq = a4['p'], ar = 1.25;
        aq[aY(0x102)](ay => {
            const b2 = aY;
            let az = ay['m']()[b2(0xe2)](aD => aD[0x0]), aA = Math[b2(0x121)](Math[b2(0x128)](...az)) + Math[b2(0x11d)](...az) + 0x1, aB = ay['m']()['map'](aD => aD[0x1]), aC = Math[b2(0x121)](Math[b2(0x128)](...aB)) + Math['max'](...aB) + 0x1;
            ay['m']()[b2(0x102)](aD => {
                const b3 = b2;
                let aE = aD[0x0] + 0x1 + (0x4 - aA) / 0x2, aF = aD[0x1] + ar;
                aC == 0x1 && (aF = aF - 0.5), Q[b3(0x104)] = ay[b3(0xc7)], Q[b3(0xdb)](aE * ak, aF * ak, ak, ak), Q['fillStyle'] = b3(0xd3), Q[b3(0xdb)](aE * ak + an, aF * ak + an, ak - an * 0x2, ak - an * 0x2);
            }), ar = ar + 2.25;
        }), R[aY(0xf1)] = a4['q'], S[aY(0xef)] = a4['q'], T[aY(0xf1)] = a4['r'], U[aY(0xf1)] = a4['j'];
    }
}
function updateScoreBoard() {
    const b4 = aR, aj = document[b4(0x132)](b4(0xea));
    aj[b4(0xfe)][b4(0x111)]('spinning'), ac()[b4(0x11b)](() => {
        const b5 = b4;
        aj[b5(0xfe)]['remove'](b5(0xce));
    });
}
async function ab() {
    const b6 = aR;
    try {
        a4['k'](), Y['style'][b6(0xca)] = b6(0xd8);
        const aj = document[b6(0xd1)](b6(0xfb))[b6(0x107)], ak = document[b6(0xd1)](b6(0xda))[b6(0x107)], al = {
                'block': a4['s'] - 0x1,
                'level': a4['j'],
                'levelClearedRows': a4['r']
            }, am = {
                'playerID': aj,
                'RealName': ak,
                'Score': a4['c'](),
                'Other': al,
                'Key': a4[b6(0x139)]()
            };
        console[b6(0x10d)]('Sent\x20data', am), a6['push']({
            'playerID': aj,
            'Score': a4['c']()
        }), ad();
        const an = await fetch('https://webmasteriet.vercel.app/add-player', {method: "POST", headers: {
            'Content-Type': 'application/json'  // Make sure the request is treated as JSON
        }, body: JSON.stringify(am)});
        if (!an['ok'])
            throw new Error(b6(0x122));
        const ao = await an[b6(0x12d)]();
        console['log'](b6(0x100), ao);
    } catch (ap) {
        console[b6(0x12e)]('There\x20was\x20a\x20problem\x20with\x20the\x20fetch\x20operation:', ap);
    }
}
async function ac() {
    const b7 = aR;
    try {
        const aj = await fetch(b7(0xe4), { 'method': 'GET' });
        if (!aj['ok'])
            throw new Error('Network\x20response\x20was\x20not\x20ok');
        const ak = await aj[b7(0x12d)]();
        console['log'](b7(0x100), ak), a6 = ak, ad();
    } catch (al) {
        console[b7(0x12e)](b7(0x148), al);
    }
}
function dontSubmitPlayerDetails() {
    const b8 = aR;
    console[b8(0x10d)](b8(0xfc)), Y['style']['display'] = b8(0xd8);
}
function ad() {
    const b9 = aR, aj = document[b9(0x132)](b9(0x123));
    aj['innerHTML'] = '';
    a6['sort']((ai, aj) => {
        return aj.Score - ai.Score;
    });

    let addedPlayers = [];
    let addedIds = [];
    for (let i = 0; i < a6.length; i++) {
        const player = a6[i];
        if (addedIds.includes(player.playerID)) {
            continue;
        }
        addedIds.push(player.playerID);
        addedPlayers.push(player);
    }

    console.log(addedPlayers);
    for (let ar = 0x0; ar < addedPlayers.length; ar++) {
        const as = addedPlayers[ar];
        const player = as;

        // Create a new row
        const row = document.createElement('tr');

        // Create and append the Ranking cell
        const rankCell = document.createElement('td');
        rankCell.textContent = (ar+1).toString();
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
        aj.appendChild(row);
    }
}
const ae = [
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
    ], af = [
        aR(0x151),
        aR(0xe5),
        aR(0x12b),
        aR(0x151),
        aR(0x151),
        aR(0xf4),
        aR(0xc5)
    ], ag = [
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
        0x5,
        0x4, 
        0x4, 
        0x3, 
        0x2, 
        0x2, 
        0x1
    ];

class ah {
    constructor(aj, ak, al) {
        const ba = aR;
        this['x'] = aj, this['y'] = ak, this['type'] = al, this[ba(0x10b)] = ae[al][0x0], this[ba(0xc7)] = af[al], this['rotation'] = 0x0;
    }
    ['m']() {
        const bb = aR;
        return this[bb(0x10b)];
    }
    ['n']() {
        const bc = aR;
        return this[bc(0x10b)]['map'](aj => [
            aj[0x0] + this['x'],
            aj[0x1] + this['y']
        ]);
    }
    [aR(0x131)]() {
        const bd = aR;
        let aj = [];
        this[bd(0x10b)][bd(0x102)](ak => {
            const be = bd;
            if (this[be(0x115)] == 0x4)
                aj['push']([
                    -ak[0x1] + 0x1,
                    ak[0x0]
                ]);
            else
                this['type'] == 0x0 ? aj[be(0x119)]([
                    -ak[0x1] - 0x1,
                    ak[0x0]
                ]) : aj[be(0x119)]([
                    -ak[0x1],
                    ak[0x0]
                ]);
        }), this[bd(0x10b)] = aj;
    }
}
class ai {
    constructor() {
        const bf = aR;
        this['j'] = 0x0, this['r'] = 0x0, this['s'] = 0x0, this['q'] = 0x0, this[bf(0x13e)] = this['B'](this['q']), this['state'] = 0x0, this['l'] = null, this['p'] = [], this['C'] = [], this['D'](), this['i'] = 0x0, this[bf(0x13c)] = [];
        for (let aj = 0x0; aj < a3; aj++) {
            this[bf(0x13c)]['push']([]);
            for (let ak = 0x0; ak < a2; ak++) {
                this['grid'][aj][bf(0x119)](null);
            }
        }
        for (let al = 0x0; al < 0x5; al++) {
            this['E']();
        }
        this['F']();
    }
    ['c']() {
        return this['q'];
    }
    ['getKey']() {
        const aj = this['c']() + (this['s'] - 0x1) ** 0x2 + this['r'] * 0x3 - 0x7;
        return aj;
    }
    ['f'](aj) {
        const bg = aR;
        this['q'] += aj, this[bg(0x13e)] = this['B'](this['q']);
    }
    ['B'](aj) {
        const bh = aR;
        let ak = 0x0;
        const al = aj['toString']();
        for (let am = 0x0; am < al['length']; am++) {
            ak ^= al[bh(0xeb)](am);
        }
        return ak;
    }
    ['k']() {
        const bi = aR, aj = this['B'](this['q']);
        aj !== this[bi(0x13e)] && (console['warn']('Sluta\x20fuska!\x20Stoppar\x20spel...'), this['state'] = 0x3);
    }
    ['D']() {
        const bj = aR;
        let aj = 0x2;
        for (let ak = 0x0; ak < ae[bj(0x12c)] * aj; ak++) {
            this['C'][bj(0x119)](ak % ae['length']);
        }
    }
    ['E']() {
        const bk = aR;
        this['C'][bk(0x12c)] == 0x0 && this['D']();
        let aj = this['C'][bk(0xf8)](Math['floor'](this['C']['length'] * Math[bk(0xd5)]()), 0x1);
        this['p'][bk(0x119)](new ah(0x5, 0x0, aj));
    }
    ['F']() {
        const bl = aR;
        let aj = this['p'][bl(0x145)]();
        this['l'] = aj, this['E'](), this['o']() && (this[bl(0x113)] = 0x3, this['l'] = null, L());
    }
    ['h'](aj) {
        (aj == -0x1 || aj == 0x1) && (this['l']['x'] = this['l']['x'] + aj, a4['o']() && (a4['l']['x'] = this['l']['x'] - aj));
    }
    ['g']() {
        this['l']['y'] = this['l']['y'] + 0x1;
        if (this['o']())
            return this['l']['y'] = this['l']['y'] - 0x1, this['G'](), !![];
        return ![];
    }
    ['e']() {
        let aj = ![];
        while (!aj) {
            aj = this['g'](), this['f'](0x1);
        }
        this['f'](-0x1);
    }
    ['d']() {
        const bm = aR;
        let aj = this['l'][bm(0x10b)];
        this['l']['rotate'](), this['o']() && (this['l']['x']++, this['o']() && (this['l']['x']--, this['l']['x']--, this['o']() && (this['l'][bm(0x10b)] = aj, this['l']['x']++)));
    }
    ['G']() {
        const bn = aR;
        this['l']['n']()[bn(0x102)](aj => {
            const bo = bn;
            aj[0x1] >= 0x0 && aj[0x0] >= 0x0 && (this[bo(0x13c)][aj[0x1]][aj[0x0]] = this['l'][bo(0x115)]);
        }), this['F'](), this['H'](), this['s']++;
    }
    ['o']() {
        const bp = aR;
        let aj = ![];
        return this['l']['n']()[bp(0x102)](ak => {
            const bq = bp;
            if (ak[0x1] >= 0x0)
                (ak[0x1] > a3 - 0x1 || ak[0x0] < 0x0 || ak[0x0] > a2 - 0x1 || this[bq(0x13c)][ak[0x1]][ak[0x0]] != null) && (aj = !![]);
            else
                ak[0x1] < 0x0 && ((ak[0x1] > a3 - 0x1 || ak[0x0] < 0x0 || ak[0x0] > a2 - 0x1) && (aj = !![]));
        }), aj;
    }
    ['H']() {
        const br = aR;
        let aj = 0x0;
        for (let al = 0x0; al < this[br(0x13c)]['length']; al++) {
            const am = this[br(0x13c)][al];
            let an = 0x0;
            for (let ao = 0x0; ao < am['length']; ao++) {
                const ap = am[ao];
                ap === null && an++;
            }
            if (an === 0x0) {
                aj++;
                for (let aq = al; aq > 0x1; aq--) {
                    for (let ar = 0x0; ar < a2; ar++) {
                        this[br(0x13c)][aq][ar] = this[br(0x13c)][aq - 0x1][ar];
                    }
                }
            }
        }
        let ak = 0x0;
        if (aj == 0x1)
            ak = 0x28 * (this['j'] + 0x1);
        else {
            if (aj == 0x2)
                ak = 0x64 * (this['j'] + 0x1);
            else {
                if (aj == 0x3)
                    ak = 0x12c * (this['j'] + 0x1);
                else
                    aj == 0x4 && (ak = 0x4b0 * (this['j'] + 0x1));
            }
        }
        this['f'](ak), this['r'] = this['r'] + aj, this['r'] >= 0xa && (this['j']++, this['r'] = 0x0);
    }
}