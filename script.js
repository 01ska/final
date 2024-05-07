document.addEventListener('DOMContentLoaded', () => {
    console.log("Страница 'Чрезвычайные Ситуации' загружена!");

    const audioElement = document.createElement("audio");
    const source = document.createElement("source");
    source.src = "./audio/sound3.mp3"; 
    source.type = "audio/mpeg";
    audioElement.appendChild(source);

    

    audioElement.controls = true;


    const mainSection = document.querySelector("main.content");
    mainSection.appendChild(audioElement); 


    const playAudioButton = document.getElementById("play-audio");
    if (playAudioButton) {
        playAudioButton.addEventListener("click", () => {
            audioElement.play();
        });
    }


    const animatedHeader = document.getElementById('animated-header');
    if (animatedHeader) {
        animatedHeader.style.opacity = 0;
        setTimeout(() => {
            animatedHeader.style.transition = 'opacity 2s';
            animatedHeader.style.opacity = 1;
        }, 500);
    }

    const alertButton = document.getElementById('show-alert');
    if (alertButton) {
        alertButton.addEventListener('click', () => {
            alert('Предупреждение о чрезвычайной ситуации!');
        });
    }

    const timerElement = document.getElementById('countdown');
    let timeRemaining = 600;

    const startCountdown = () => {
        const interval = setInterval(() => {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            timeRemaining--;

            if (timeRemaining < 0) {
                clearInterval(interval);
                timerElement.textContent = 'Время истекло';
            }
        }, 1000);
    };

    const startTimerButton = document.getElementById('start-timer');
    if (startTimerButton) {
        startTimerButton.addEventListener('click', startCountdown);
    }

    // Список дел
    const toDoList = document.getElementById('to-do-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');

    if (addTaskButton) {
        addTaskButton.addEventListener('click', () => {
            const newTaskText = newTaskInput.value.trim();
            if (newTaskText) {
                const newTaskItem = document.createElement('li');
                newTaskItem.textContent = newTaskText;
                toDoList.appendChild(newTaskItem);
                newTaskInput.value = ''; 
            }
        });
    }

    const surpriseButton = document.getElementById("surprise-button");
    if (surpriseButton) {
        surpriseButton.addEventListener("click", () => {
            alert("Пожалуйста, поставьте 85 баллов за старания 🙏");
        });
    }

    const contactItems = document.querySelectorAll("main ul li");
    contactItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.style.color = "#2980b9";
        });
    });
});
