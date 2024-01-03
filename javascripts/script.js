var en = document.getElementById("en");
en.style.display = "none";

function language() {
var fr = document.getElementById("fr");

  if (fr.style.display === "none") {
    fr.style.display = "block";
    en.style.display = "none";
  } 
  else {
    fr.style.display = "none";
    en.style.display = "block";
  }
}