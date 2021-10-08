import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('user: rock, throw: scissors', (expect) => {
    const expected = 'win';
    const actual = didUserWin('rock', 'scissors');
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

test('user: rock, throw: paper', (expect) => {
    const expected = 'lost';
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

test('user: paper, throw: scissors', (expect) => {
    const expected = 'lost';
    const actual = didUserWin('paper', 'scissors');
    expect.equal(actual, expected);
});

test('user: scissors, throw: rock', (expect) => {
    const expected = 'lost';
    const actual = didUserWin('scissors', 'rock');
    expect.equal(actual, expected);
});

test('user: rock, throw: rock', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');
    expect.equal(actual, expected);
});

test('user: paper, throw: paper', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('paper', 'paper');
    expect.equal(actual, expected);
});

test('user: scissors, throw: scissors', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('scissors', 'scissors');
    expect.equal(actual, expected);
});