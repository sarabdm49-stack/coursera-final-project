function upDate(previewPic){

    document.getElementById("image").innerHTML =
        previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo(){

    document.getElementById("image").style.backgroundImage =
        "url('')";

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

function addTabFocus(){

    console.log("Page Loaded");

    let images = document.querySelectorAll("img");

    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("tabindex", "0");
    }
}
