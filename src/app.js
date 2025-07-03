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

function countDown() {
    const targetDate = new Date('2025-07-04T20:00:00');
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').textContent = 'Countdown finished!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent =
        `${days}d ${hours}:${minutes}:${seconds}`;
}

countDown();
setInterval(countDown, 1000);

