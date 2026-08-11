
const menuBtn = document.getElementById("menuBtn");



const overlay = document.createElement("div");

overlay.className = "menu-overlay";

document.body.appendChild(overlay);



const menu = document.createElement("div");

menu.className = "side-menu";

menu.innerHTML = `
    <div class="side-menu__header">

        

            <button class="close-menu">
                ✕
            </button>

    </div>

    <div class="side-menu__content">

        <div class="phone">
            ☎

            <span>
                <b>0800 111 126</b>
                <small>8:00 - 22:00</small>
            </span>
        </div>

        <a href="#">Delivery info</a>

        <a href="#">About us</a>

        <a href="#">Restaurants</a>

        <a href="#">Specialities</a>

        <div class="language">
            <select name="country" class="country">
                <option value="en">English</option>
                <option value="uz">O'zbekiston</option>
                <option value="kz">Qozog'iston</option>
                <option value="kg">Qirg'iziston</option>
                <option value="tj">Tojikiston</option>
            </select>
        </div>

    </div>
    `;

document.body.appendChild(menu);



menuBtn.addEventListener("click", () => {

    menu.classList.add("active");
    overlay.classList.add("active");

});



function closeMenu() {

    menu.classList.remove("active");
    overlay.classList.remove("active");

}


menu.querySelector(".close-menu")
    .addEventListener("click", closeMenu);


overlay.addEventListener("click", closeMenu);

// login form button

const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");

loginBtn.addEventListener("click", () => {
    loginForm.classList.toggle("active");
});


