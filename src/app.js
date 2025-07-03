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


// slider

let activeSlide = 0;
const slides = document.querySelectorAll(".slide-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const pgnbtns = document.querySelector(".pgn-btns");
slides.forEach((slide) => {
	const createdBtn = document.createElement("button");
	pgnbtns.appendChild(createdBtn);
});

const btns = document.querySelectorAll(".pgn-btns button");

function renderActiveSLide() {
	slides.forEach((slide, index) => {
		if (index === activeSlide) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});

	btns.forEach((btn, index) => {
		if (index === activeSlide) {
			btn.classList.add("active");
		} else {
			btn.classList.remove("active");
		}
	});
	slides[activeSlide].classList.add("active");
}

renderActiveSLide();

function renderNextSlide() {
	if (activeSlide === slides.length - 1) {
		activeSlide = 0;
	} else {
		activeSlide++;
	}

	renderActiveSLide();
}

nextBtn.addEventListener("click", renderNextSlide);
prevBtn.addEventListener("click", () => {
	if (activeSlide === 0) {
		activeSlide = slides.length - 1;
	} else {
		activeSlide--;
	}

	renderActiveSLide();
});

let interval = setInterval(() => {
	renderNextSlide();
}, 3000);

btns.forEach((btn, index) => {
	btn.addEventListener("click", () => {
		activeSlide = index;
		renderActiveSLide();
	});
});

const wrapper = document.querySelector(".slider-wrapper");
wrapper.addEventListener("mouseenter", () => {
	console.log("mouseenter");
	if (interval) {
		clearInterval(interval);
		interval = null;
	}
});
wrapper.addEventListener("mouseleave", () => {
	interval = setInterval(() => {
		renderNextSlide();
	}, 3000);
});


document.addEventListener("keyup", (e) => {
	console.log(e);
});

