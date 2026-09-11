console.log("epk js");

document.getElementById("nav").style.display = "none";
document.getElementById("video_epk").style.display = "block";
document.getElementById("footer").style.display = "none";

document.getElementById("blockATLoad").style.display = "block";
document.getElementById("noneAtLoad").style.display = "none";


function displayLenga(lenga) {
    document.getElementById("blockATLoad").style.display = "none";
    document.getElementById("noneAtLoad").style.display = "block";
    document.getElementById('body').classList.add('gradient-background');

    const videos = document.getElementById('videos');
    videos.querySelectorAll('iframe[data-src]').forEach(iframe => {
        iframe.src = iframe.dataset.src;
        iframe.removeAttribute('data-src');
    });

    if (lenga === "cat") {
        document.getElementById("catala").style.display = "block";
        document.getElementById("frances").style.display = "none";

        document.getElementById("rider").href="https://neblum.art/Images/pdf/pereu/rodin_RIDER2026_CAT.pdf";
        document.getElementById("dossier").href="https://neblum.art/Images/pdf/pereu/pereu_bookingCAT.pdf";
    }
    if (lenga === "fr") {
        document.getElementById("frances").style.display = "block";
        document.getElementById("catala").style.display = "none";

        document.getElementById("rider").href="https://neblum.art/Images/pdf/pereu/pereu_bookingFR.pdf";
        document.getElementById("dossier").href="https://neblum.art/Images/pdf/pereu/pereu_bookingFR.pdf";
    }

}