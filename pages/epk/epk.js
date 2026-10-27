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
    
    if (lenga === "esp") {
        document.getElementById("espanyol").style.display = "block";
        document.getElementById("catala").style.display = "none";
        document.getElementById("frances").style.display = "none";
        document.getElementById("english").style.display = "none";

        document.getElementById("vid_espanyol").style.display = "block";
        document.getElementById("vid_catala").style.display = "none";
        document.getElementById("vid_frances").style.display = "none";
        document.getElementById("vid_english").style.display = "none";

        document.getElementById("agenda_espanyol").style.display = "block";
        document.getElementById("agenda_catala").style.display = "none";
        document.getElementById("agenda_frances").style.display = "none";
        document.getElementById("agenda_english").style.display = "none";

        // REMPLACER RIDER ET DOSSIER PAR LES LIENS CORRECTS POUR ESPAGNOL
        document.getElementById("rider").href="https://neblum.art/Images/pdf/pereu/rodin_RIDER2026_CAT.pdf";
        document.getElementById("dossier").href="https://neblum.art/Images/pdf/pereu/pereu_bookingCAT.pdf";
    }

    if (lenga === "cat") {
        document.getElementById("espanyol").style.display = "none";
        document.getElementById("catala").style.display = "block";
        document.getElementById("frances").style.display = "none";
        document.getElementById("english").style.display = "none";
         
        document.getElementById("vid_espanyol").style.display = "none";
        document.getElementById("vid_catala").style.display = "block";
        document.getElementById("vid_frances").style.display = "none";
        document.getElementById("vid_english").style.display = "none";
        
        document.getElementById("agenda_espanyol").style.display = "none";
        document.getElementById("agenda_catala").style.display = "block";
        document.getElementById("agenda_frances").style.display = "none";
        document.getElementById("agenda_english").style.display = "none";

        document.getElementById("rider").href="https://neblum.art/Images/pdf/pereu/rodin_RIDER2026_CAT.pdf";
        document.getElementById("dossier").href="https://neblum.art/Images/pdf/pereu/pereu_bookingCAT.pdf";
    }

    if (lenga === "fr") {
        document.getElementById("espanyol").style.display = "none";
        document.getElementById("catala").style.display = "none";
        document.getElementById("frances").style.display = "block";
        document.getElementById("english").style.display = "none";
        
        document.getElementById("vid_espanyol").style.display = "none";
        document.getElementById("vid_catala").style.display = "none";
        document.getElementById("vid_frances").style.display = "block";
        document.getElementById("vid_english").style.display = "none";
        
        document.getElementById("agenda_espanyol").style.display = "none";
        document.getElementById("agenda_catala").style.display = "none";
        document.getElementById("agenda_frances").style.display = "block";
        document.getElementById("agenda_english").style.display = "none";

        document.getElementById("rider").href="https://neblum.art/Images/pdf/pereu/rodin_RIDER2026_FR.pdf";
        document.getElementById("dossier").href="https://neblum.art/Images/pdf/pereu/pereu_bookingFR.pdf";
    }
    if (lenga === "eng") {
        document.getElementById("espanyol").style.display = "none";
        document.getElementById("frances").style.display = "none";
        document.getElementById("catala").style.display = "none";
        document.getElementById("english").style.display = "block";

        document.getElementById("vid_espanyol").style.display = "none";
        document.getElementById("vid_catala").style.display = "none";
        document.getElementById("vid_frances").style.display = "none";
        document.getElementById("vid_english").style.display = "block";

        document.getElementById("agenda_espanyol").style.display = "none";
        document.getElementById("agenda_catala").style.display = "none";
        document.getElementById("agenda_frances").style.display = "none";
        document.getElementById("agenda_english").style.display = "block";

        // REMPLACER RIDER ET DOSSIER PAR LES LIENS CORRECTS POUR ANGLAIS
        document.getElementById("rider").href="https://neblum.art/Images/pdf/pereu/rodin_RIDER2026_ENG.pdf";
        document.getElementById("dossier").href="https://neblum.art/Images/pdf/pereu/pereu_bookingENG.pdf";
    }
}