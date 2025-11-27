
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileToggle.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileToggle.classList.remove("active");
  });
});


const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  
  lastScroll = currentScroll;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

const animateElements = document.querySelectorAll(".highlight-card, .gallery-item, .visitor-card");
animateElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector(".newsletter-input");
    const email = emailInput.value;
    
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      emailInput.value = "";
    }
  });
}

const heroVideo = document.querySelector(".hero-video");
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroVideo.play();
    } else {
      heroVideo.pause();
    }
  });
}, { threshold: 0.5 });

if (heroVideo) {
  videoObserver.observe(heroVideo);
}

const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const title = item.querySelector(".gallery-title")?.textContent;
    const category = item.querySelector(".gallery-category")?.textContent;
    console.log(`Clicked: ${category} - ${title}`);
 
  });
});

document.querySelectorAll(".btn-primary, .btn-secondary, .nav-cta").forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    console.log(`Button clicked: ${buttonText}`);

  });
});


window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");
  const videoContainer = document.querySelector(".video-container");
  
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
  }
  
  if (videoContainer && scrolled < window.innerHeight) {
    videoContainer.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      if (navLink) {
        navLink.classList.add("active");
      }
    }
  });
});

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach(img => {
    imageObserver.observe(img);
  });
}

console.log("🌊 AquaLumi Aquarium Website Loaded Successfully!");