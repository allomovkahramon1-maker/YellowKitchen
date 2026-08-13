// =====================================================
// MENU
// =====================================================

const menuBtn = document.getElementById("menuBtn");

const overlay = document.createElement("div");
overlay.className = "menu-overlay";

document.body.appendChild(overlay);


// =====================================================
// SIDE MENU
// =====================================================

const menu = document.createElement("div");

menu.className = "side-menu";

menu.innerHTML = `

    <div class="side-menu__header">

        <button class="close-menu">
            ✕
        </button>

    </div>


    <div class="side-menu__content">


        <!-- LOGIN -->

        <button
            class="mobile-menu-btn"
            id="mobileLoginBtn"
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
// MENU ELEMENTS
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
// OPEN MENU
// =====================================================

menuBtn.addEventListener("click", () => {

    menu.classList.add("active");

    overlay.classList.add("active");

});


// =====================================================
// CLOSE MENU
// =====================================================

function closeMenu() {

    menu.classList.remove("active");

    overlay.classList.remove("active");

}


closeMenuBtn.addEventListener(
    "click",
    closeMenu
);


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

    // Agar menu ochiq bo'lsa yopiladi
    closeMenu();

    // Login form ochiladi
    loginForm.classList.add("active");

}


// Login yopish

function closeLoginForm() {

    loginForm.classList.remove("active");

}


// Header Login

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        openLogin
    );

}


// Menu ichidagi Login

if (mobileLoginBtn) {

    mobileLoginBtn.addEventListener(
        "click",
        openLogin
    );

}


// Login ichidagi X

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


// Cart sonini yangilash

function updateCart() {

    if (cartCount) {

        cartCount.textContent = count;

    }

    if (mobileCartCount) {

        mobileCartCount.textContent = count;

    }

}


// Headerdagi Cart

if (addBtn) {

    addBtn.addEventListener(
        "click",
        () => {

            count++;

            updateCart();

        }
    );

}


// Menu ichidagi Cart

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


// RESTAURANTS

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
// SPECIALITIES SWIPER
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