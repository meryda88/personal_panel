const user_name = document.getElementById('name').value.trim();
const user_email = document.getElementById('email').value.trim();
const user_bd = document.getElementById('date').value.trim();
const user_color = document.getElementById('color').value.trim();
const submit_info = document.getElementById('button');
let body = document.querySelector("body")
let background = localStorage.getItem("bkg-color")
body.style.backgroundColor = background;

submit_info.addEventListener("click", function() {
    body.style.backgroundColor = "violet"
    localStorage.setItem("bkg-color", "violet")
})

const user_info = {user_name, user_email, user_bd};
localStorage.setItem("user_info", JSON.stringify(user_info));

