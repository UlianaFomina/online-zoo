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