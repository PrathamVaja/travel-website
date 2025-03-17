
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const avatar = document.querySelectorAll(".avatar")
const profileContainer = document.querySelector(".profile_container")

const body = document.body;







// Toggle profile container when clicking avatar
avatar.forEach((avatar) => {
    avatar.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents immediate closing when clicking the avatar
        profileContainer.classList.toggle("d-none");

        if (!profileContainer.classList.contains("d-none")) {
            body.style.overflow = "hidden"; // Disable scrolling
        } else {
            body.style.overflow = ""; // Enable scrolling
        }
    });
});

// Close profile when clicking outside
document.addEventListener("click", (event) => {
    if (!profileContainer.classList.contains("d-none") && !profileContainer.contains(event.target) && !event.target.closest(".avatar")) {
        profileContainer.classList.add("d-none");
        body.style.overflow = ""; // Enable scrolling again
    }
});





// Function to disable scrolling
function disableScroll() {
    document.body.style.overflow = "hidden";
}

// Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = "";
}

// Open menu
menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    disableScroll(); // Disable scrolling when menu opens
});

// Close menu
closeMenu.addEventListener("click", function () {
    mobileMenu.classList.add("closing");

    setTimeout(() => {
        mobileMenu.classList.remove("active", "closing");
        enableScroll(); // Enable scrolling only after animation finishes
    }, 500); // Matches transition duration (0.5s)
});



const seeMore = document.querySelector(".see_more");
const hiddenItems = document.querySelectorAll(".not_showing");

seeMore.addEventListener("click", function () {
    hiddenItems.forEach(item => {
        item.classList.toggle("d-none");
    });

    // Toggle text between "See more" and "See less"
    if (seeMore.textContent === "See more") {
        seeMore.textContent = "See less";
    } else {
        seeMore.textContent = "See more";
    }
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


    