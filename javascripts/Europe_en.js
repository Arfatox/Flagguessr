let Pays;
let Reponse;
var data = [        //list of all countries
  {"pays": "Albania", "image": "<img src=../assets/img/39ZxGxwjsQ2Jl3jE.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Germany", "image": "<img src=../assets/img/KXup461H2orISA2v.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Andorra", "image": "<img src=../assets/img/1Eg2JrIj5MTvaeli.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Austria", "image": "<img src=../assets/img/dppjyd7n5KEBZeeZ.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Belgium", "image": "<img src=../assets/img/O51efZoXsF1DKPW9.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Belarus", "image": "<img src=../assets/img/UKXOBjDjjr9xxZQl.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Bosnia and Herzegovina", "image": "<img src=../assets/img/0CtcCUUr6OZKqKSM.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Bulgaria", "image": "<img src=../assets/img/111630xzaS3Fs9Iq.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Cyprus", "image": "<img src=../assets/img/TMr4pDd47q64YSzq.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Croatia", "image": "<img src=../assets/img/bdM4r67Oz5RXLOOS.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Denmark", "image": "<img src=../assets/img/Ag1NFyJVFySgszKG.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Spain", "image": "<img src=../assets/img/lp2RAVuDMOdK6DHn.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Estonia", "image": "<img src=../assets/img/29LaDiy8F3OYs7JS.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Finland", "image": "<img src=../assets/img/E3ON51CakBb9GdfB.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "France", "image": "<img src=../assets/img/jLVgHt9OheV49LmL.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Greece", "image": "<img src=../assets/img/aI3y09G5wknudQuo.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Hungary", "image": "<img src=../assets/img/Im6OIVi8poBdXvVy.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Ireland", "image": "<img src=../assets/img/UXMLg69pzSVxaGIv.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Iceland", "image": "<img src=../assets/img/b1XH17VkiqWWzJQt.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Italy", "image": "<img src=../assets/img/uF084aeC7a36YFj0.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Kazakhstan", "image": "<img src=../assets/img/0TJvVdVnqFnEPT7A.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Latvia", "image": "<img src=../assets/img/Ilr5YfERByvn28kO.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Liechtenstein", "image": "<img src=../assets/img/a2LXUXLB3xaoBYqh.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Lithuania", "image": "<img src=../assets/img/Ro7eBCrFRugQiUkr.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Luxembourg", "image": "<img src=../assets/img/IDokNyxV74liUoQl.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "North Macedonia", "image": "<img src=../assets/img/I3zj2rM8OAIgN2pO.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Malta", "image": "<img src=../assets/img/24iCpjVbsx4dNxa1.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Moldova", "image": "<img src=../assets/img/k8G1PJPkllTsz6l0.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Monaco", "image": "<img src=../assets/img/ub9V7MMlpLFOcPXb.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Montenegro", "image": "<img src=../assets/img/sXJJ0sFmHaTOFXfQ.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Norway", "image": "<img src=../assets/img/9lrkIF1r2L5hZET8.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Netherlands", "image": "<img src=../assets/img/WlsgTYN88lkgVCJA.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Poland", "image": "<img src=../assets/img/Yv0HW7bFglOOD1tr.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Portugal", "image": "<img src=../assets/img/Kh4EEmlUhhnV0wGH.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Czech Republic", "image": "<img src=../assets/img/r3Mxtsn9ojT2mJi1.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Romania", "image": "<img src=../assets/img/etzpjLPntii4g1GP.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "United Kingdom", "image": "<img src=../assets/img/T0990QGWVErpVMeQ.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Russia", "image": "<img src=../assets/img/MRZvfcMCtq3KsKrR.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "San Marino", "image": "<img src=../assets/img/B2nGzcxZDgk39mUE.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Serbia", "image": "<img src=../assets/img/UUz5nnfg2J4JKtox.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Slovakia", "image": "<img src=../assets/img/qxnPusNs4fhaney8.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Slovenia", "image": "<img src=../assets/img/puYRoSHvRW33RW3W.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Sweden", "image": "<img src=../assets/img/tmLweftvfvt29R5t.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Switzerland", "image": "<img src=../assets/img/GNZ9hn50nOwlNUxm.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Turkey", "image": "<img src=../assets/img/LcTbOo8I0HmBvR1Y.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Ukraine", "image": "<img src=../assets/img/dXEHVNyCbABpEEoE.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Vatican City", "image": "<img src=../assets/img/v80gPOL9u2zcJ7Us.png class=col-12 col-lg-12 mt-4>"},
]







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

oui = document.getElementById("input").onkeydown = function(e) {    //Fonction pour envoyer la réponse avec la touche entrée
  if (e.code == "Enter") {                                          //
    reponse()                                                       //
  }                                                                 //
};                                                                  //






random = Math.floor(Math.random() * data.length)                     //Séléction de manière aléatoire du pays/ de l'image
Pays = data[random].pays                                             //Et stockage dans la variable pays
document.querySelector(".random").innerHTML = data[random].image     //Grâce a la délimitation établie avec les virgules                            //

btn = document.querySelector(".popup")                               //Quand on appuie sur le bouton avec la class popup
btn.addEventListener("click", reponse);                              //

entrer = document.getElementById("input").onkeydown = function(e) {    
  if (e.code == "Enter") {
    popup()
  }
};


document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    console.log("ok")                                                           //le popup avec fond vert si bon rouge sinon
    reponse = document.querySelector("input").value                             //
    if (reponse.toLowerCase() == Pays.toLowerCase()) {                          //
      document.querySelector(".popuptext").style.backgroundColor = "#1ab315"    //
      document.getElementById("input").disabled = true; 
      btnnewflag = document.getElementById("divnewflag")
      btnnewflag.style.display  = 'inline-flex';
    }                                                                           //
    else {                                                                      //
      document.querySelector(".popuptext").style.backgroundColor = "red"        //
      document.getElementById("input").disabled = true;                         //
      document.getElementById("refresh").style.display = "block";
    }  
  }
});


function reponse() {                                                          //Fonction qui vérifie la réponse et l'affiche sur 
  console.log("ok")                                                           //le popup avec fond vert si bon rouge sinon
  reponse = document.querySelector("input").value                             //
  if (reponse.toLowerCase() == Pays.toLowerCase()) {                          //
    document.querySelector(".popuptext").style.backgroundColor = "#1ab315"    //
    document.getElementById("input").disabled = true;                          //
    document.getElementById("refresh").style.display = "none";
   }                                                                          //
  else {                                                                      //
    document.querySelector(".popuptext").style.backgroundColor = "red"        //
    document.getElementById("input").disabled = true;                          //
    document.getElementById("refresh").style.display = "block";
  }                                                                           //
};                                                                          //                                                                            //


function popup() {                                                            //Fonction qui affiche le popup
  var popup = document.getElementById("myPopup");                             //
  popup.classList.toggle("show");                                             //
  document.getElementById("nomPays").innerHTML = Pays;                        //
}                                                                             //