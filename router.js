const route = (event) => {
    event = event || window.event;

    if (event === "bio") {
        window.history.pushState({}, "", location.origin + "/bio");
    } else {
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
    }
    
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/bio": "/pages/bio.html",
    "/musica": "/pages/musica.html",
    "/video": "/pages/video.html",
    "/concerts": "/pages/concerts.html",
    "/epk": "/pages/epk/epk.html",
};

const handleLocation = async () => {
    console.log("window.location.pathname: ", window.location.pathname);

    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    const app = document.getElementById("app");
    app.innerHTML = html;

    // Réexécuter les scripts injectés
    app.querySelectorAll("script").forEach((oldScript) => {
        const newScript = document.createElement("script");

        // Copier les attributs (src, type, etc.)
        oldScript.getAttributeNames().forEach((attr) => {
            newScript.setAttribute(attr, oldScript.getAttribute(attr));
        });

        // Copier le contenu inline si pas de src
        if (!oldScript.src) {
            newScript.textContent = oldScript.textContent;
        }

        oldScript.replaceWith(newScript);
    });
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

console.log("router js");
document.getElementById("nav").style.display = "block";
document.getElementById("video_epk").style.display = "none";
document.getElementById("footer").style.display = "block";