let the_one = "Nada";
const no = document.getElementById('btnNo');
const ques = document.getElementById('ques');
const paren = document.getElementById('paren');
photos = ['upset', 'angry','mad','pissed'];
pictures = ['happy', 'smily','chilly','excited'];
var questions=['For Real!!!!','Seriously????','WHAT THE HELL IS WRONG WITH YOU!','i am DONE']
var answers=['That\'s my girl','alright, i agree as well','i get it xD','Love you']
const existingquestion =document.getElementById('ques');
ques.innerHTML = `<h3>would you say "YES" ${the_one}?</h3>`;


btnNo.onclick = function() {
    i++
    if(i>3){
        i=0
    }
    // Move the button
    btnNo.style.position = "absolute";
    btnNo.style.top = `${Math.random()*200}px`;
    btnNo.style.left = `${Math.random()*500}px`;
    
    // Check if an image already exists
    const existingImg = document.getElementById('img');
    
    // Pick a random photo
    const randomPhoto = photos[i];
    
    if (existingImg) {
        // If image exists, just update its source
        existingImg.src = `${randomPhoto}.png`;
    } 
    if (ques.querySelector('h3')) {
        // If an <h3> exists, update its text
        const h3 = ques.querySelector('h3');
        h3.innerText = `${questions[Math.floor(Math.random() * questions.length)]}`;
    } 

}
let i=-1 
btnYes.onclick =function(){
        i++
        if(i>3){
            i=0
        }
    
    const existingImg = document.getElementById('img');

    // Pick a random photo
    const randomPicture = pictures[Math.floor(Math.random() * pictures.length)];
    
    if (existingImg) {
        // If image exists, just update its source
        existingImg.src = `${randomPicture}.png`;
    } 
    if (ques.querySelector('h3')) {
        // If an <h3> exists, update its text
        const h3 = ques.querySelector('h3');
        h3.innerText = `${answers[i]}`;
    } 
}