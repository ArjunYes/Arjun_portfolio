letterArray = [
    'The creator.',
    'The developer.',
    'The pro noob.'
]
let i=0;

let content = document.getElementById('content');


function typeAnimation(){
    
    setInterval(() => {
        WordLoop();
    }, 1400);


}

function WordLoop(){
    // letterLoop(letterArray[i]);
    content.innerHTML = letterArray[i];
    i++; (i>=letterArray.length) && (i=i%letterArray.length)
}