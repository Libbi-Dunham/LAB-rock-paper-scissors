import { didUserWin } from "./utils.js";

const test = QUnit.test;

test('user: rock, throw: scissors', (expect) => {
    const expected = 'win';
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});

test('user: rock, throw: paper', (expect) => {
    const expected = 'lost';
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

test('user: paper, throw: rock', (expect) => {
    const expected = 'win';
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});

test('user: scissors, throw: paper', (expect) => {
    const expected = 'win';
    const actual = didUserWin('scissors', 'paper');
    expect.equal(actual, expected);
});

test('user: paper, throw: rock', (expect) => {
    const expected = 'win';
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});