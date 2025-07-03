function digitalClock() {
    const format = document.getElementById('timeformat').value; 
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let timeString = '';

    if (format === '12') {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours === 0 ? 12 : hours;
        timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    } else {
        timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    }

    document.getElementById('time').textContent = timeString;
}

setInterval(digitalClock, 1000);

digitalClock();

document.getElementById('timeformat').addEventListener('change', digitalClock);
