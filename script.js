"use strict";

let profileImage = document.querySelector("#profile-picture");

let title = document.querySelector("#title");
let descritpion = document.querySelector("#description");

// select buttons
let yesButton = document.querySelector("#btn-yes");
let noButton = document.querySelector("#btn-no");

profileImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxZD8a50Trh_B9WBu01gCJTLjOlZmHJHh28twlkTGxnZkgEte81T9xhNMpMKIr7EGdr8&usqp=CAU"
title.innerHTML = "Moew Confession";
descritpion.innerHTML = "Do you love me?🔪";

// change value in buttons

yesButton.innerHTML = "Yes";
noButton.innerHTML = "No";


let happyCatAudio = new Audio("./happy-happy-happy-cat.mp3");
let sadCatAudio = new Audio("./cry-banana-cat.mp3");

// button yes
yesButton.addEventListener("click", () => {
    // change profile picture
    profileImage.src = "https://www.icegif.com/wp-content/uploads/2023/06/icegif-949.gif"

    // change title
    title.innerHTML = "I love you too!";
    // change description
    descritpion.innerHTML = "I'm so happy to hear that!";

    // play audio
    happyCatAudio.play();
    // stop audio
    sadCatAudio.pause();

    // loop audio
    happyCatAudio.loop = true;

});

let scaleBtnYes = 1;
let scaleBtnNo = 1;

noButton.addEventListener("click", () => {
    profileImage.src = "https://i.pinimg.com/originals/d9/df/92/d9df9239a488ae9f2f5efd5f0b56af5e.gif"

    // change title
    title.innerHTML = "oh no!";
    // change description
    descritpion.innerHTML = "I'm so sad to hear that!";

    // change button size
    scaleBtnYes += 0.1;
    yesButton.style.transform = `scale(${scaleBtnYes})`;

    scaleBtnNo -= 0.5;
    noButton.style.transform = `scale(${scaleBtnNo})`;

    // stop audio
    happyCatAudio.pause();

    // play audio
    sadCatAudio.play();
    // loop audio
    sadCatAudio.loop = true;
})