var firstImg = document.querySelector("img#img1");
firstImg.onclick = function() {
    var mySrc = firstImg.getAttribute("src");
    if(mySrc === "images/avatar.jpeg") {
      firstImg.setAttribute ("src","images/avatar2.jpeg");
    } else {
      firstImg.setAttribute ("src","images/avatar.jpeg");
    }
}

var secondImg = document.querySelector("img#img2")
secondImg.onclick = function() {
    var mySrc = secondImg.getAttribute("src");
    if(mySrc === "images/hobbies.jpg") {
      secondImg.setAttribute ("src","images/hobbies2.jpg");
    }
    else if (mySrc === "images/hobbies2.jpg") {
      secondImg.setAttribute ("src","images/hobbies3.jpg");
    }
    else if (mySrc === "images/hobbies3.jpg") {
      secondImg.setAttribute ("src","images/hobbies4.jpg");
    }
    else if (mySrc === "images/hobbies4.jpg") {
      secondImg.setAttribute ("src","images/hobbies5.jpg");
    } else {
      secondImg.setAttribute ("src","images/hobbies.jpg");
    }
}
