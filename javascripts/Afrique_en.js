let Pays;
let Reponse;
var data = [
  {"pays": "South Africa", "image": "<img src=../assets/img/EgBQmruHisxvzZXw.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Algeria", "image": "<img src=../assets/img/xA73HzKRYZ6ClrXC.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Angola", "image": "<img src=../assets/img/u6JQn54n5sTZRP18.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Benin", "image": "<img src=../assets/img/hKGC0wZuMdXo2YY9.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Botswana", "image": "<img src=../assets/img/AMAURvfspvEpjuOG.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Burkina Faso", "image": "<img src=../assets/img/OkKVtmDnBSRPePb7.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Burundi", "image": "<img src=../assets/img/GTBdpGglxCkqIsqq.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Cameroon", "image": "<img src=../assets/img/FvkWqrVkydaLSmKH.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Cape Verde", "image": "<img src=../assets/img/YpztUkB7bilS2ejo.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Comoros", "image": "<img src=../assets/img/Ddb9jljlHjeQF7q9.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Ivory Coast", "image": "<img src=../assets/img/TyTJvtbxSk4vhJon.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Djibouti", "image": "<img src=../assets/img/WcOwNaRyGhtiClnv.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Egypt", "image": "<img src=../assets/img/GrWBHTeDXlmPrHKP.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Eritrea", "image": "<img src=../assets/img/C0UdE6gaFtS9B7P4.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Eswatini", "image": "<img src=../assets/img/3XouzhK4ZKjfhIRs.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Ethiopia", "image": "<img src=../assets/img/57N4EZNMSNudZCM8.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Gabon", "image": "<img src=../assets/img/8Bf6TFsecR0FDNne.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Gambia", "image": "<img src=../assets/img/i44W0oRrsx2SeTbr.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Ghana", "image": "<img src=../assets/img/FfiJhwBElLHYGnvo.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Equatorial Guinea", "image": "<img src=../assets/img/P0ZuTxMGM53XpoPp.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Guinea", "image": "<img src=../assets/img/fjlnGBJA6u1qK5fh.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Guinea-Bissau", "image": "<img src=../assets/img/OedQKZkr511SQmq4.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Kenya", "image": "<img src=../assets/img/4WmKIrzDLmuOJv4U.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Lesotho", "image": "<img src=../assets/img/6Qx64b1sq8uuWfci.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Liberia", "image": "<img src=../assets/img/vnnVjrgaf6EmK5ZD.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Libya", "image": "<img src=../assets/img/YMgRyTQ71liiOfDs.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Madagascar", "image": "<img src=../assets/img/EWWI1MSc2KAKzpjE.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Malawi", "image": "<img src=../assets/img/bRVOzx61hFwMWBiu.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Morocco", "image": "<img src=../assets/img/I8QOCy2AsIBNLxxK.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Mauritius", "image": "<img src=../assets/img/vawyiFxeZ1IPM63f.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Mauritania", "image": "<img src=../assets/img/omkJa4Gn4UdPPeJd.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Mozambique", "image": "<img src=../assets/img/sSk1l1IIAfSIOUQg.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Namibia", "image": "<img src=../assets/img/RCo5gzi3rmWR9zLz.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Niger", "image": "<img src=../assets/img/IBufDl78cRERAe8j.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Nigeria", "image": "<img src=../assets/img/n9b3ibe8KjDmH0p8.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Uganda", "image": "<img src=../assets/img/QnhN1X1wnaQctgaE.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "The Central African Republic", "image": "<img src=../assets/img/XnsgvlkGfjc56IcS.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "The Democratic Republic of the Congo", "image": "<img src=../assets/img/yoRzfWyvi05V0D11.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "The Republic of the Congo", "image": "<img src=../assets/img/VlRdwVDDmRRy8uQt.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Rwanda", "image": "<img src=../assets/img/j3vzI0RTDYSek481.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Sao Tome and Principe", "image": "<img src=../assets/img/NWQBauiYOdcZhUsE.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Senegal", "image": "<img src=../assets/img/qZqJTm3NY4gkyQse.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Seychelles", "image": "<img src=../assets/img/Uwx8Fpg0IVX5Vgbr.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Sierra Leone", "image": "<img src=../assets/img/jHPttlNXpXmle27i.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Somalia", "image": "<img src=../assets/img/oJLjnQ27ROQSeTmp.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Sudan", "image": "<img src=../assets/img/ysCFJ68rlj1gVJgr.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "South Sudan", "image": "<img src=../assets/img/JKiV9SYBqQ3nK0rQ.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Tanzania", "image": "<img src=../assets/img/GQ1ZIpCSOGIcI0m2.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Chad", "image": "<img src=../assets/img/LBnHt6pvWSlrHFC3.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Togo", "image": "<img src=../assets/img/J6bCdxFz8bhSklrl.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Tunisia", "image": "<img src=../assets/img/mV0yV3zzTqvr0m4O.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Zambia", "image": "<img src=../assets/img/2NABmcD5D5yTcQxN.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Zimbabwe", "image": "<img src=../assets/img/KxXb3GASQZWVDgny.png class=col-12 col-lg-12 mt-4>"}
];





input.onfocus = function () {
  datalistOptions.style.display = 'block';
  input.style.borderRadius = "5px 5px 0 0";  
};
for (let option of datalistOptions.options) {
  option.onclick = function () {
    input.value = option.value;
    datalistOptions.style.display = 'none';
    input.style.borderRadius = "5px";
  }
};

input.oninput = function() {
  currentFocus = -1;
  var text = input.value.toUpperCase();
  for (let option of datalistOptions.options) {
    if(option.value.toUpperCase().indexOf(text) > -1){
      option.style.display = "block";
  }else{
    option.style.display = "none";
    }
  };
}
var currentFocus = -1;
input.onkeydown = function(e) {
  if(e.keyCode == 40){
    currentFocus++
   addActive(datalistOptions.options);
  }
  else if(e.keyCode == 38){
    currentFocus--
   addActive(datalistOptions.options);
  }
  else if(e.keyCode == 13){
    e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (datalistOptions.options) datalistOptions.options[currentFocus].click();
        }
  }
}

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }







random = Math.floor(Math.random() * data.length)                     //Séléction de manière aléatoire du pays/ de l'image
Pays = data[random].pays                                             //Et stockage dans la variable pays
document.querySelector(".random").innerHTML = data[random].image     //Grâce a la délimitation établie avec les virgules

btn = document.querySelector(".popup")                               //Quand on appuie sur le bouton avec la class popup
btn.addEventListener("click", reponse);                              //

oui = document.getElementById("send").onkeydown = function(e) {    //Fonction pour envoyer la réponse avec la touche entrée
  if (e.code == "Enter") {                                          //
    reponse()                                                       //
  }                                                                 //
};                                                                  //


function reponse() {                                                          //Fonction qui vérifie la réponse et l'affiche sur 
  console.log("ok")                                                           //le popup avec fond vert si bon rouge sinon
  reponse = document.querySelector("input").value                             //
  if (reponse.toLowerCase() == Pays.toLowerCase()) {                          //
    document.querySelector(".popuptext").style.backgroundColor = "#1ab315"    //
    document.getElementById("send").disabled = true;                          //
    document.getElementById("refresh").style.display = "none";
   }                                                                          //
  else {                                                                      //
    document.querySelector(".popuptext").style.backgroundColor = "red"        //
    document.getElementById("send").disabled = true;                          //
    document.getElementById("refresh").style.display = "block";
  }                                                                           //
};                                                                            //


input.onblur = function () {
  datalistOptions.style.display = 'none';
  input.style.borderRadius = "5px";
};

for (let option of datalistOptions.options) {
  option.onmousedown = function (e) {
    e.preventDefault();  // Empêche le focus de passer à l'option
    input.value = option.value;
    datalistOptions.style.display = 'none';
    input.style.borderRadius = "5px";
  }
};


function popup() {                                                            //Fonction qui affiche le popup
  var popup = document.getElementById("myPopup");                             //
  popup.classList.toggle("show");                                             //
  document.getElementById("nomPays").innerHTML = Pays;                        //
}                                                                             //