import { didUserWin } from "./utils";

const test = QUnit.test;

test('user: rock, throw: scissors', (expect) => {
    const expected = true;
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});

test('user: rock, throw: paper', (expect) => {
    const expected = false;
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

test('user: paper, throw: rock', (expect) => {
    const expected = true;
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});

test('user: scissors, throw: paper', (expect) => {
    const expected = true;
    const actual = didUserWin('scissors', 'paper');
    expect.equal(actual, expected);
});

test('user: paper, throw: rock', (expect) => {
    const expected = true;
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});