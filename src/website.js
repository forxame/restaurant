import Menu from "./menu"
import Home from "./home"
import About from "./about"

function createHeader() {
    const header = document.createElement("header");
    const title = document.createElement("h1");
    const nav = document.createElement("nav");
    title.textContent = "Rally's Buck";

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.setAttribute("id", "Home");
    homeBtn.addEventListener("click", () => {
        Home();
    })

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.setAttribute("id", "Menu");
    menuBtn.addEventListener("click", () => {
        Menu();
    })

    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About";
    aboutBtn.setAttribute("id", "About");
    aboutBtn.addEventListener("click", () => {
        About();
    })

    header.appendChild(title);
    nav.append(homeBtn, menuBtn, aboutBtn);
    header.appendChild(nav);

    return header;
}

function createMain() {
    const main = document.createElement("main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");

    const p = document.createElement("p");
    p.textContent = "You can do better. It is true.";

    footer.appendChild(p);

    return footer;
}

export default function initWebsite() {
    const content = document.querySelector("#content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    Home();
}