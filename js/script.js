
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var fullVid = document.getElementById("fullVid");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullVid.style.display = "none";
    fullImg.style.display = "block";
    fullImg.src = pic;
}

function openFullVid(vid){
    fullImgBox.style.display = "flex";
    fullImg.style.display = "none";
    fullVid.style.display = "block";
    fullVid.src = vid;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}

