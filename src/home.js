export default function Home() {
    const main = document.querySelector("main");


    const welcomeText = createParagraph(`WELCOME to Rally's Buck! Best restaurant in town
                                        with a big variety of dishes that you can choose from.
                                        Give it a try and you won't regret the experience.`);
    const container1 = createContainer(welcomeText);


    main.innerHTML = null;
    setMainFocusedClass(main); // only for main container
    setFocusedBtn();
    main.append(container1);
}

function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    p.className = "about container-text";
    return p;
}

function createHeader(text) {
    const h2 = document.createElement("h2");
    h2.textContent = text;
    h2.className = "about container-title";

    return h2;
}

function createContainer(...child) {
    const container = document.createElement("div");
    container.classList.add("even-columns");
    for (let i = 0; i < child.length; i++) {
        container.appendChild(child[i]);
    }

    return container;
}

function setMainFocusedClass(main) {
    if (main.classList.length == 0) {
        main.classList.toggle("home");
    } else if (main.classList.contains("menu")) {
        main.classList.replace("menu", "home");
    } else {
        main.classList.replace("about", "home");
    }
}

function setFocusedBtn() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about");

    if (home.classList.length == 0) {
        home.classList.toggle("active");
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        } else {
            about.classList.remove("active");
        }
    }
}

export {createParagraph, createHeader, createContainer};