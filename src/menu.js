export default function Menu() {
    const main = document.querySelector("main");
    
    const img1 = createContainer("../dist/img/waffles.jpg", "Waffles");
    const img2 = createContainer("../dist/img/potato-bacon.jpg", "Potato & bacon");
    const img3 = createContainer("../dist/img/shakshuka.jpg", "Shakshuka");
    const img4 = createContainer("../dist/img/salmon.jpg", "Salmon");


    main.innerHTML = null;
    setClassName(main);
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

function setClassName(obj) {
    if (obj.classList.contains("home")) {
        obj.classList.replace("home", "menu");
    } else {
        obj.classList.replace("about", "menu");
    }
}