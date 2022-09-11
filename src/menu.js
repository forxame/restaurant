export default function Menu() {
    const main = document.querySelector("main");
    
    const img1 = createContainer("img/waffles.jpg", "Waffles");
    const img2 = createContainer("img/potato-bacon.jpg", "Potato & bacon");
    const img3 = createContainer("img/shakshuka.jpg", "Shakshuka");
    const img4 = createContainer("img/salmon.jpg", "Salmon");


    main.innerHTML = null;
    setMainFocusedClass(main); // only for main container
    setFocusBtn();
    main.append(img1, img2, img3, img4);
}

function createContainer(source, title) {
    const container = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.classList.add("dish-title");
    h3.textContent = title;

    const img = document.createElement("img");
    h3.classList.add("dish-image");
    img.setAttribute("src", source);

    container.append(h3, img);
    return container;
}

function setMainFocusedClass(main) {
    if (main.classList.contains("home")) {
        main.classList.replace("home", "menu");
    } else {
        main.classList.replace("about", "menu");
    }
}

function setFocusBtn() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about");

    if (menu.classList.length == 0) {
        menu.classList.toggle("active");
        if (home.classList.contains("active")) {
            home.classList.remove("active");
        } else {
            about.classList.remove("active");
        }
    } 

}