console.log("epk js");

document.getElementById("nav").style.display = "none";
document.getElementById("video_epk").style.display = "block";
document.getElementById("footer").style.display = "none";

document.getElementById("blockATLoad").style.display = "block";
document.getElementById("noneAtLoad").style.display = "none";


function displayLenga(lenga) {
    console.log("display Lengas");
    document.getElementById("blockATLoad").style.display = "none";
    document.getElementById("noneAtLoad").style.display = "block";

    if (lenga === "cat") {
        console.log("cat");
        document.getElementById("catala").style.display = "block";
        document.getElementById("frances").style.display = "none";
    }
    if (lenga === "fr") {
        console.log("frrrr");
        document.getElementById("frances").style.display = "block";
        document.getElementById("catala").style.display = "none";

    }

}