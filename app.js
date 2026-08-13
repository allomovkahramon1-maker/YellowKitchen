// =====================================================
// MENU
// =====================================================

const menuBtn = document.getElementById("menuBtn");

// Overlay yaratish
const overlay = document.createElement("div");
overlay.className = "menu-overlay";

document.body.appendChild(overlay);


// =====================================================
// SIDE MENU YARATISH
// =====================================================

const menu = document.createElement("div");

menu.className = "side-menu";

menu.innerHTML = `

    <div class="side-menu__header">

        <button class="close-menu" type="button">
            ✕
        </button>

    </div>


    <div class="side-menu__content">


        <!-- LOGIN -->

        <button
            class="mobile-menu-btn"
            id="mobileLoginBtn"
            type="button"
        >

            <img
                src="image/person.svg"
                alt="person"
            >

            <span>
                Log in
            </span>

        </button>


        <!-- CART -->

        <button
            class="mobile-menu-btn"
            id="mobileCartBtn"
            type="button"
        >

            <span class="mobile-cart-icon">
                🛒
            </span>

            <span>
                Cart
            </span>

            <span id="mobileCartCount">
                0
            </span>

        </button>


        <!-- PHONE -->

        <div class="phone">

            <span>
                ☎
            </span>

            <span>

                <b>
                    0800 111 126
                </b>

                <small>
                    8:00 - 22:00
                </small>

            </span>

        </div>


        <!-- LINKS -->

        <a href="#">
            Delivery info
        </a>

        <a href="#">
            About us
        </a>

        <a href="#">
            Restaurants
        </a>

        <a href="#">
            Specialities
        </a>


        <!-- LANGUAGE -->

        <div class="language">

            <select class="country">

                <option value="en">
                    English
                </option>

                <option value="uz">
                    O'zbekiston
                </option>

                <option value="kz">
                    Qozog'iston
                </option>

                <option value="kg">
                    Qirg'iziston
                </option>

                <option value="tj">
                    Tojikiston
                </option>

            </select>

        </div>

    </div>

`;

document.body.appendChild(menu);


// =====================================================
// MENU ELEMENTLARI
// =====================================================

const closeMenuBtn =
    menu.querySelector(".close-menu");

const mobileLoginBtn =
    menu.querySelector("#mobileLoginBtn");

const mobileCartBtn =
    menu.querySelector("#mobileCartBtn");

const mobileCartCount =
    menu.querySelector("#mobileCartCount");


// =====================================================
// MENU OCHISH
// =====================================================

function openMenu() {

    menu.classList.add("active");

    overlay.classList.add("active");

    // Menu ochiq → sahifa scroll bo'lmaydi
    document.body.style.overflow = "hidden";

}


// =====================================================
// MENU YOPISH
// =====================================================

function closeMenu() {

    menu.classList.remove("active");

    overlay.classList.remove("active");

    // Menu yopiq → scroll qaytadi
    document.body.style.overflow = "auto";

}


// =====================================================
// MENU BUTTON
// =====================================================

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        openMenu
    );

}


// =====================================================
// CLOSE BUTTON
// =====================================================

if (closeMenuBtn) {

    closeMenuBtn.addEventListener(
        "click",
        closeMenu
    );

}


// =====================================================
// OVERLAY
// =====================================================

overlay.addEventListener(
    "click",
    closeMenu
);


// =====================================================
// LOGIN
// =====================================================

const loginBtn =
    document.getElementById("loginBtn");

const loginForm =
    document.getElementById("loginForm");

const closeLogin =
    document.getElementById("closeLogin");


// Login ochish

function openLogin() {

    // Menu ochiq bo'lsa yopiladi
    closeMenu();

    // Login form ochiladi
    if (loginForm) {

        loginForm.classList.add("active");

    }

}


// Login yopish

function closeLoginForm() {

    if (loginForm) {

        loginForm.classList.remove("active");

    }

}


// =====================================================
// HEADER LOGIN
// =====================================================

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        openLogin
    );

}


// =====================================================
// MENU ICHIDAGI LOGIN
// =====================================================

if (mobileLoginBtn) {

    mobileLoginBtn.addEventListener(
        "click",
        openLogin
    );

}


// =====================================================
// LOGIN CLOSE
// =====================================================

if (closeLogin) {

    closeLogin.addEventListener(
        "click",
        closeLoginForm
    );

}


// =====================================================
// CART
// =====================================================

let count = 0;


const cartCount =
    document.getElementById("cartCount");

const addBtn =
    document.getElementById("addBtn");


// =====================================================
// CART COUNT YANGILASH
// =====================================================

function updateCart() {

    if (cartCount) {

        cartCount.textContent = count;

    }

    if (mobileCartCount) {

        mobileCartCount.textContent = count;

    }

}


// =====================================================
// HEADER CART
// =====================================================

if (addBtn) {

    addBtn.addEventListener(
        "click",
        () => {

            count++;

            updateCart();

        }
    );

}


// =====================================================
// MENU ICHIDAGI CART
// =====================================================

if (mobileCartBtn) {

    mobileCartBtn.addEventListener(
        "click",
        () => {

            count++;

            updateCart();

        }
    );

}


// =====================================================
// LOGIN FORM SUBMIT
// =====================================================

const form =
    loginForm
        ? loginForm.querySelector("form")
        : null;


if (form) {

    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            alert("Login successfully!");

            closeLoginForm();

        }
    );

}


// =====================================================
// ESCAPE
// =====================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMenu();

            closeLoginForm();

        }

    }
);


// =====================================================
// SWIPER
// =====================================================


// =====================================================
// RESTAURANTS
// =====================================================

const restaurantSwiperElement =
    document.querySelector(".restaurantSwiper");


if (restaurantSwiperElement) {

    new Swiper(
        ".restaurantSwiper",
        {

            slidesPerView: 3,

            spaceBetween: 20,


            navigation: {

                nextEl: ".restaurant-next",

                prevEl: ".restaurant-prev"

            },


            breakpoints: {

                0: {

                    slidesPerView: 1

                },

                600: {

                    slidesPerView: 2

                },

                900: {

                    slidesPerView: 3

                }

            }

        }
    );

}


// =====================================================
// SPECIALITIES
// =====================================================

const specialitySwiperElement =
    document.querySelector(".specialitySwiper");


if (specialitySwiperElement) {

    new Swiper(
        ".specialitySwiper",
        {

            slidesPerView: 5,

            spaceBetween: 20,


            navigation: {

                nextEl: ".speciality-next",

                prevEl: ".speciality-prev"

            },


            breakpoints: {

                0: {

                    slidesPerView: 2

                },

                600: {

                    slidesPerView: 3

                },

                900: {

                    slidesPerView: 4

                },

                1200: {

                    slidesPerView: 5

                }

            }

        }
    );

}