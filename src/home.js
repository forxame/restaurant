export default function Home() {
    const main = document.querySelector("main");

    const h1 = document.createElement("h1");
    h1.textContent = "Rally's Buck!";
    const container1 = createContainer(h1);

    const welcomeText = createParagraph(`WELCOME to Rally's Buck! Best restaurant in town
                                        with a big variety of dishes that you can choose from.
                                        Give it a try and you won't regret the experience.`);
    const container2 = createContainer(welcomeText);

    const scheduleHeader = createHeader("Schedule");
    const workDays = createParagraph("Mon - Fri: 8am - 10pm");
    const freeDays = createParagraph("Sat - Sun: 10am - 5pm");
    const container3 = createContainer(scheduleHeader, workDays, freeDays);


    const locationHeader = createHeader("Location");
    const locationText = createParagraph("11 Berry West, Joremy City, Leonda");
    const container4 = createContainer(locationHeader, locationText);

    main.innerHTML = null;
    setClassName(main);
    main.append(container1, container2, container3, container4);
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

function setClassName(obj) {
    if (obj.classList.length == 0) {
        obj.classList.toggle("home");
    } else if (obj.classList.contains("menu")) {
        obj.classList.replace("menu", "home");
    } else {
        obj.classList.replace("about", "home");
    }
}