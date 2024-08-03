document.addEventListener('DOMContentLoaded', (event) => {
    const startBtn = document.getElementById('start-btn');
    const transcript = document.getElementById('transcript');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('Your browser does not support Speech Recognition');
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        startBtn.textContent = 'Listening...';
    };

    recognition.onend = () => {
        startBtn.textContent = 'Start Listening';
    };

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        transcript.textContent = speechResult;
    };

    recognition.onerror = (event) => {
        alert('Error occurred in recognition: ' + event.error);
    };

    startBtn.addEventListener('click', () => {
        recognition.start();
    });
});
