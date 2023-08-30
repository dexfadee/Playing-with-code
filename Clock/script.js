let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let week = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"]

let timeUpdate = () => {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let d = date.getDate();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let time = document.getElementsByClassName("time")[0];
    let datee = document.getElementsByClassName("date")[0];

    time.innerHTML = `${hour} : ${min} : ${sec}`;
    datee.innerHTML = `${week[day - 1]}, ${months[month]} ${d}, ${year}`;
}

setInterval(timeUpdate, 1000);