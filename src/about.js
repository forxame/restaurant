export default function About() {
    const main = document.querySelector("main");


    main.innerHTML = null;
    setClassName(main);
    main.appendChild(div);
}

function setClassName(obj) {
    if (obj.classList.contains("home")) {
        obj.classList.replace("home", "about");
    } else {
        obj.classList.replace("menu", "about");
    }
}