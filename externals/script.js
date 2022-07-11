// --> Setting up the Alarm audio <--
const alarm = new Audio('alarmbell.mp3');

// --> Fixing up the current time <--

setInterval(() => {

let currentDate = new Date();
let currentHour = parseInt(currentDate.getHours());
let currentMinutes = parseInt(currentDate.getMinutes());
let dateOutput = currentHour + currentMinutes;

// --> Collecting data from user and storing up to the localStorage <--
let setButton = document.getElementById('set');
setButton.addEventListener('click', (e) => {
    e.preventDefault();

    let hours = parseInt(document.getElementById('hours').value);
    let minutes = parseInt(document.getElementById('minutes').value);

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

// --> Alarm status <--

let info = document.getElementById('info');
let showTime = parseInt(localStorage.getItem('alarm'));

info.innerHTML = ` You previously set an alarm at &#8594 ${showTime}`;

console.log(dateInput, dateOutput);
}, 1000);
