// menu bar slide js function

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const close_menu = document.getElementById('close_menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('!left-0');
});

close_menu.addEventListener('click', () => {
    mobileMenu.classList.toggle('!left-0');
});


  // Counter Animation Logic
  const counters = [
    { id: "clients-counter", target: 500 },
    { id: "projects-counter", target: 200 },
    { id: "awards-counter", target: 50 },
    { id: "experts-counter", target: 100 },
  ];

  const animateCounter = (id, target) => {
    let count = 0;
    const speed = target / 100; // Adjust speed here
    const element = document.getElementById(id);

    const updateCounter = () => {
      if (count < target) {
        count += speed;
        element.textContent = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target; // Ensure final value
      }
    };

    updateCounter();
  };

  // Observer Callback
  const counterSection = document.getElementById("counter-section");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter =>
            animateCounter(counter.id, counter.target)
          );
          observer.disconnect(); // Stop observing after animation starts
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  observer.observe(counterSection);

