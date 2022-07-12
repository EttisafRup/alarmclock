// --> Setting up the Alarm audio <--
let alarm = new Audio('alarmbell.mp3');

setInterval(() => {

    // --> Fixing up the current time <--
    let currentDate = new Date();
    let currentHour = parseInt(currentDate.getHours());
    let currentMinutes = parseInt(currentDate.getMinutes());
    let dateOutput = currentHour + currentMinutes;

    // --> Displaying current time to the user
    let currentTime = document.getElementById('currentTime');
    currentTime.innerHTML = `Current Time  &#8594 <span class="time">${currentHour}:${currentMinutes}:${currentDate.getSeconds()}</span> (24Hrs format)`

    // --> Collecting data from user and storing up to the localStorage <--
    let setButton = document.getElementById('set');
    setButton.addEventListener('click', (e) => {
        e.preventDefault();

        let hours = parseInt(document.getElementById('hours').value);
        let minutes = parseInt(document.getElementById('minutes').value);

        localStorage.setItem('hour', hours);
        localStorage.setItem('minute', minutes);

        let dateInput = hours + minutes;
        localStorage.setItem('alarm', dateInput);

        swal("Owh Yoo!", "Your alarm has been saved!", "success");
    })

    // --> Writing a statement to play the alarm <--
    let dateInput = parseInt(localStorage.getItem('alarm'));
    let div = document.getElementById('gif');
    if (dateInput == dateOutput) {
        div.style.display = 'block';
        alarm.play();
    }

    // --> Live Alarm status <--

    let showHours = localStorage.getItem('hour');
    let showMinutes = localStorage.getItem('minute');

    let info = document.getElementById('info');
    if (showHours == null) {
        info.innerHTML = `No alarms yet! Try to save an <span class="time">alarm</span> right now.`;
    } else {
        info.innerHTML = ` You've previously set an alarm at &#8594 <span class="time">${showHours}:${showMinutes}</span> `;
    }

    console.log(dateInput, dateOutput);
}, 1000);
