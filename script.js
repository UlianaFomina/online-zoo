let switchMode = document.getElementById("change-button");

switchMode.onclick = function(){
  let theme = document.getElementById("theme");
  if(theme.getAttribute("href") == "landing.css"){
    theme.href = "landing-dark.css";
  }
  else{
    theme.href = "landing.css";
  }
}

let img = document.getElementById("watch-img");

img.onclick = function(){
  let activeImg = document.getElementsByClassName("watch-img-active");
  if(activeImg.className == "watch-img-active"){
    activeImg.classList.replase("watch-img-active" , "watch-img" );
  }
}