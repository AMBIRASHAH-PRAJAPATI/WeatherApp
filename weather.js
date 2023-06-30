
let cf = document.getElementById("cf");
cf.addEventListener("input", () => {
    let bigtemp = document.getElementById("bigtemp");
    let celsius = 27;
    if (cf.value == 1) {
        let fahrenheit = (celsius * 9 / 5) + 32;
        bigtemp.innerHTML = fahrenheit.toFixed(0) + "°ᶠ";
    }
    else {
        bigtemp.innerHTML = "27°";
    }
});


let admincontainer = document.getElementById("weatheradmincontainer");
function adminopnerf() {
    if (admincontainer.style.display === ("none")) {
        admincontainer.style.display = "flex";
    }
    else {
        admincontainer.style.display = "none";
    }
}


let adminopen = document.getElementById("adminopen");
let adminclose = document.getElementById("adminclose");
let navigationli = document.getElementById("navigation");
let navichild = navigationli.getElementsByTagName("li");

adminopen.addEventListener("click", adminopnerf);
adminclose.addEventListener("click", adminopnerf);

for (let i = 0; i < navichild.length - 1; i++) {
    navichild[i].addEventListener("click", adminopnerf);
}


// let body = document.body;
// let lightblue = getComputedStyle(body).getPropertyValue("--lightblue");
// let light = getComputedStyle(body).getPropertyValue("--light");

// let theme = document.getElementById("theme");

// theme.addEventListener("click", () => {
//     if (light === "#FFFFFF") {
//         body.style.setProperty("--light", "#1d1d1d");
//         body.style.setProperty("lightblue", "#1E1E1E");
//         body.style.setProperty("--rightbg", "#292929");
//         body.style.setProperty("--adminbg", "#121212");
//         body.style.setProperty("--shadowwhite", "rgba(0, 0, 0, 0.433)");
//         rgba(188, 221, 255, 0.3)
//         theme.innerHTML = "Darkmode";
//         body.style.color="#fffff"
//     }

// else {
//     body.style.setProperty("--lightblue", "#AFD0F7");
//     body.style.setProperty("--light", "#FFFFFF");
//     body.style.setProperty("--rightbg", "#E4F1FF");
//     body.style.setProperty("--adminbg", "#fffafa");
//     body.style.setProperty("--shadowwhite", "rgba(188, 221, 255, 0.3)");
//     body.style.color="black"
//     theme.innerHTML = "Lightmode";
// }

// });
let body = document.body;
let lightblue = getComputedStyle(body).getPropertyValue("--lightblue");
let theme = document.getElementById("theme");
let progresses = document.querySelectorAll("progress");

theme.addEventListener("click", () => {
    if (getComputedStyle(body).getPropertyValue("--light") === "#FFFFFF") {
        body.style.setProperty("--light", "#121212");
        body.style.setProperty("--lightblue", "#1E1E1E");
        body.style.setProperty("--rightbg", "#292929");
        body.style.setProperty("--adminbg", "#121212");
        body.style.setProperty("--blueedark","#dfdede");
        body.style.setProperty("--bluedarkpro","#ac6f6f");
        body.style.setProperty("--shadowwhite", "rgba(0, 0, 0, 0.433)");
        body.style.color = "#FFFFFF";
        theme.innerHTML = "Light-mode";
    }

    else {
        body.style.setProperty("--lightblue", "#AFD0F7");
        body.style.setProperty("--light", "#FFFFFF");
        body.style.setProperty("--rightbg", "#E4F1FF");
        body.style.setProperty("--adminbg", "#fffafa");
        body.style.setProperty("--blueedark", "#5C9CE4");
        body.style.setProperty("--bluedarkpro","#735c5c");

        body.style.setProperty("--shadowwhite", "rgba(188, 221, 255, 0.3)");
        body.style.color = "black"
        theme.innerHTML = "Dark-mode";
    }


});

