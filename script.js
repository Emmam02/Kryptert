const message = document.querySelector('.message');
const answer = document.querySelector('input'); // I innerhtml vil denne vise ordet gjett, ikke answer. 
const button = document.querySelector('.button');
let play = false;
let newWords = '';
let randomWords = '';
let words = [
    'katt', 'hund', 'esel', 'apekatt', 'hest', 'fisk', 'måke',
    'ku', 'geit', 'gris', 'løve', 'sjiraff', 'struts', 'surikat',
    'surikat', 'rødpanda', 'flamingo', 'papegøye', 'skilpadde',
    'ekorn', 'jerv', 'kamel',
]

function createNewWords() {
    let randomNumber = Math.floor(Math.random() * words.length);
    let newTempWords = words[randomNumber];
   
    return newTempWords;
}

function scrambleWords(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let temp = array[i];
        let j = Math.floor(Math.random() * (i + 1));
        array[i] = array[j];
        array[j] = temp;

        return array;
    }
}

button.addEventListener('click', buttonClicked)
function buttonClicked() {
    if (!play) {
        play = true;
        button.innerHTML = 'Gjett';
        answer.classList.toggle('hidden');
        newWords = createNewWords();
        randomWords = scrambleWords(newWords.split('')).join('');
        message.innerHTML= `Gjett ordet: ${randomWords}`;
        
    }else {
        let tempWord = answer.value;
        if( tempWord === newWords){
            message.innerHTML = `Riktig! Det var ${newWords}`;
            play= false;
            button.innerHTML = 'Nytt Ord'
            answer.classList.toggle('hidden');
            answer.value='';
        }else{

            message.innerHTML = `Feil! Prøv igjen: ${randomWords}`;
            answer.value='';
        }
    }
}


