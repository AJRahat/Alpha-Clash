const home = document.getElementById('home-container');
const playGround = document.getElementById('playground-container');
const scoreResult=document.getElementById('score-container');
const playNowButton = document.getElementById('playNowBtn');
// ----------------------Add/Remove
function addClass(input) {
    input.classList.add('hidden');
}
function removeClass(input) {
    input.classList.remove('hidden');
}
// ----------------------Word Generator
function wordGenerator() {
    let words = 'qwertyuiopasdfghjklzxcvbnm';
    const word = words.split('');
    const id = Math.round((Math.random() * 25));
    const generatedWord = word[id];

    return generatedWord;
}
// ---------------------Display To Button
function addTagColorHandler(input) {
    document.getElementById(input).classList.add('bg-yellow-400');
}
function removeTagColorHandler(input) {
    document.getElementById(input).classList.remove('bg-yellow-400');
}
// ---------------------Game Over
function result() {
    const fScore = document.getElementById('score');
    const finScore = fScore.innerText;
    const finalScore = document.getElementById('final-score');
    finalScore.innerText = finScore;
}