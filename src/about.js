import {createParagraph, createHeader, createContainer} from "./home";

export default function About() {
    const main = document.querySelector("main");

    const contact = createHeader("Contact");
    const phoneNo = createParagraph("*403-104");
    const container1 = createContainer(contact, phoneNo);

    const scheduleHeader = createHeader("Schedule");
    const workDays = createParagraph("Mon - Fri: 8am - 10pm");
    const freeDays = createParagraph("Sat - Sun: 10am - 5pm");
    const container2 = createContainer(scheduleHeader, workDays, freeDays);

    const locationHeader = createHeader("Location");
    const locationText = createParagraph("11 Berry West, Joremy City, Leonda");
    const container3 = createContainer(locationHeader, locationText);

    main.innerHTML = null;
    setMainFocusedClass(main); // only for main container
    setFocusedBtn();
    main.append(container1, container2, container3);
}

function setMainFocusedClass(main) {
    if (main.classList.contains("home")) {
        main.classList.replace("home", "about");
    } else {
        main.classList.replace("menu", "about");
    }
}

function setFocusedBtn() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about");

    if (about.classList.length == 0) {
        about.classList.toggle("active");
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        } else {
            home.classList.remove("active");
        }
    }
}