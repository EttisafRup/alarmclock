// --> Setting up the Alarm audio <--
let alarm = new Audio('alarmbell.mp3');

// --> Fixing up the current time <--

setInterval(() => {

let currentDate = new Date();
let currentHour = currentDate.getHours().toString();
let currentMinutes = currentDate.getMinutes().toString();
let dateOutput = parseInt(currentHour + currentMinutes);

// --> Collecting data from user and storing up to the localStorage <--
let setButton = document.getElementById('set');
setButton.addEventListener('click', (e) => {
    e.preventDefault();

    let hours = document.getElementById('hours').value;
    let minutes = document.getElementById('minutes').value;

    let dateInput = hours + minutes;
    localStorage.setItem('alarm', dateInput);

    swal("Owh Yoo!", "Your alarm has been saved!", "success");
})

// --> Writing a statement to play the alarm <--
let dateInput = parseInt(localStorage.getItem('alarm'));
if (dateInput == dateOutput) {
    alarm.play()
}

// --> Alarm status <--

let info = document.getElementById('info');
let showTime = parseInt(localStorage.getItem('alarm'));

info.innerHTML = ` You previously set an alarm at &#8594 ${showTime}`;

}, 1000);
