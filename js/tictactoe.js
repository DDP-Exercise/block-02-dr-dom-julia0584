"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

const BATTLEFIELD = [
    [O, X, O],
    [X, X, X],
    [O, O, X],
];

let winner = null;
const n = BATTLEFIELD.length;

// Horizontal
for (let row = 0; row < n; row++) {
    let first = BATTLEFIELD[row][0];
    if (first === null) continue;

    let counter = 0;
    for (let col = 0; col < n; col++) {
        if (BATTLEFIELD[row][col] === first) {
            counter++;
        }
    }

    if (counter === n) winner = first;
}

// Vertikal
for (let col = 0; col < n; col++) {
    let first = BATTLEFIELD[0][col];
    if (first === null) continue;

    let counter = 0;
    for (let row = 0; row < n; row++) {
        if (BATTLEFIELD[row][col] === first) {
            counter++;
        }
    }

    if (counter === n) winner = first;
}

// Hauptdiagonal
{
    let first = BATTLEFIELD[0][0];
    if (first !== null) {
        let counter = 0;

        for (let i = 0; i < n; i++) {
            if (BATTLEFIELD[i][i] === first) {
                counter++;
            }
        }

        if (counter === n) winner = first;
    }
}

// Gegendiagonal
{
    let first = BATTLEFIELD[0][n - 1];
    if (first !== null) {
        let counter = 0;

        for (let i = 0; i < n; i++) {
            if (BATTLEFIELD[i][n - 1 - i] === first) {
                counter++;
            }
        }

        if (counter === n) winner = first;
    }
}

if (winner !== null) {
    console.log(winner + " hat gewonnen!");
} else {
    console.log("Kein Gewinner.");
}