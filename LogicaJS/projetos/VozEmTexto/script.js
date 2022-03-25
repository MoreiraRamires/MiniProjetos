const btnListener = document.querySelector('#btn-listener');
const text = document.querySelector('#content-box');

let listening = false; 

btnListener.addEventListener("click", e => {
    if(!recognition) return;


    listening ? recognition.stop(): recognition.start()

    btnListener.innerHTML = listening ? "aperte para falar": "parar de escutar"

    btnListener.classList.toggle('bg-purple-200')
    btnListener.classList.toggle('text-red-500')

})

const recognition = createRecognition()

function createRecognition (){
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = SpeechRecognition !==undefined ? new SpeechRecognition() : null;

    if (!recognition) {
        text.innerHTML= "Não encontrei Speech Recognition"
        return null
    }

    recognition.lang = "pt_BR"
    recognition.onstart = () => listening  = true
    recognition.onend = () => listening  = false
    recognition.onerror = e => console.log('error',e)
    recognition.onresult = e => text.innerHTML = e.results[0][0].transcript

    return recognition

}

