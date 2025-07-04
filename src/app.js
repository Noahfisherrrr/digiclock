document.addEventListener("DOMContentLoaded", () => {
  function digitalClock() {
    const format = document.getElementById("timeformat").value;
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    if (format === "12") {
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      document.getElementById("time").textContent =
        `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
    } else {
      document.getElementById("time").textContent =
        `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
    }
  }

  setInterval(digitalClock, 1000);
  digitalClock();
  document.getElementById("timeformat").addEventListener("change", digitalClock);

  function countDown() {
    const targetDate = new Date("2025-07-04T20:00:00");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").textContent = "Countdown finished!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");
    document.getElementById("countdown").textContent =
      `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  setInterval(countDown, 1000);
  countDown();

  // SLIDER
  let activeSlide = 0;
  const slides = document.querySelectorAll(".slide-item");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const pgnBtnsContainer = document.querySelector(".pgn-btns");

  slides.forEach(() => {
    const btn = document.createElement("button");
    pgnBtnsContainer.appendChild(btn);
  });

  const paginationButtons = document.querySelectorAll(".pgn-btns button");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    paginationButtons.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    activeSlide = (activeSlide + 1) % slides.length;
    showSlide(activeSlide);
  }

  function prevSlide() {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    showSlide(activeSlide);
  }

  showSlide(activeSlide);
  let autoSlide = setInterval(nextSlide, 2000);

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  paginationButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      activeSlide = index;
      showSlide(activeSlide);
    });
  });

  const wrapper = document.querySelector(".slider-wrapper");
  wrapper.addEventListener("mouseenter", () => clearInterval(autoSlide));
  wrapper.addEventListener("mouseleave", () => {
    autoSlide = setInterval(nextSlide, 2000);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });
});
