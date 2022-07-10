// --> Setting up the Alarm audio <--
let alarm = new Audio('alarmbell.mp3');

// --> Fixing up the current time <--
let currentDate = new Date();
let currentHour = currentDate.getHours().toString();
let currentMinutes = currentDate.getMinutes().toString();

let dateOutput = currentHour + currentMinutes;
console.log(dateOutput);

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
let getInput = localStorage.getItem('alarm');

if (getInput == dateOutput) {
    alarm.play()
}
else{
    setTimeout(function () {
        window.location.reload(1);
    }, 10000);
}

console.log(getInput);

// --> Alarm status <--

let info = document.getElementById('info');

if (getInput > currentDate) {
    info.innerHTML = `- Your next alarm is going to rang on ${getInput}`;
} else {
    info.innerHTML = `- You have no upcoming alarms yet! Set one :) `;
}

