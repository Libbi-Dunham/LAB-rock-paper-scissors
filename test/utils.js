export function didUserWin(userThrow, actualDraw){
    return userThrow === actualDraw;
}

export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random() * 2)];
}