let Pays;
let Reponse;
var data = [        //liste de tout les pays
  {"pays": "Afrique Du Sud", "image": "<img src=../assets/img/Afrique_Du_Sud.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Algérie", "image": "<img src=../assets/img/Algerie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Angola", "image": "<img src=../assets/img/Angola.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Bénin", "image": "<img src=../assets/img/Benin.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Botswana", "image": "<img src=../assets/img/Botswana.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Burkina Faso", "image": "<img src=../assets/img/Burkina_Faso.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Burundi", "image": "<img src=../assets/img/Burundi.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Cameroun", "image": "<img src=../assets/img/Cameroun.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Cap-Vert", "image": "<img src=../assets/img/Cap-Vert.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Comores", "image": "<img src=../assets/img/Comores.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Côte d'Ivoire", "image": "<img src=../assets/img/Cote_d'Ivoire.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Djibouti", "image": "<img src=../assets/img/Djibouti.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Égypte", "image": "<img src=../assets/img/Egypte.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Érythrée", "image": "<img src=../assets/img/Erythree.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Eswatini", "image": "<img src=../assets/img/Eswatini.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Éthiopie", "image": "<img src=../assets/img/Ethiopie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Gabon", "image": "<img src=../assets/img/Gabon.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Gambie", "image": "<img src=../assets/img/Gambie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Ghana", "image": "<img src=../assets/img/Ghana.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Guinée Équatoriale", "image": "<img src=../assets/img/Guinee_Equatoriale.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Guinée", "image": "<img src=../assets/img/Guinee.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Guinée-Bissau", "image": "<img src=../assets/img/Guinee-Bissau.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Kenya", "image": "<img src=../assets/img/Kenya.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Lesotho", "image": "<img src=../assets/img/Lesotho.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Libéria", "image": "<img src=../assets/img/Liberia.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Libye", "image": "<img src=../assets/img/Libye.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Madagascar", "image": "<img src=../assets/img/Madagascar.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Malawi", "image": "<img src=../assets/img/Malawi.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Maroc", "image": "<img src=../assets/img/Maroc.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Maurice", "image": "<img src=../assets/img/Maurice.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Mauritanie", "image": "<img src=../assets/img/Mauritanie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Mozanbique", "image": "<img src=../assets/img/Mozanbique.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Namibie", "image": "<img src=../assets/img/Namibie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Niger", "image": "<img src=../assets/img/Niger.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Nigeria", "image": "<img src=../assets/img/Nigeria.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Ouganda", "image": "<img src=../assets/img/Ouganda.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Rwanda", "image": "<img src=../assets/img/Rwanda.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "République Centrafriquaine", "image": "<img src=../assets/img/Republique_Centrafriquaine.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "République Démocratique Du Congo", "image": "<img src=../assets/img/Republique_Democratique_Du_Congo.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "République Du Congo", "image": "<img src=../assets/img/Republique_du_Congo.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Sao Tomé-et-Principe", "image": "<img src=../assets/img/Sao_Tome-et-Principe.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Sénégal", "image": "<img src=../assets/img/Senegal.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Seychelles", "image": "<img src=../assets/img/Seychelles.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Sierra Leone", "image": "<img src=../assets/img/Sierra_Leone.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Somalie", "image": "<img src=../assets/img/Somalie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Soudan", "image": "<img src=../assets/img/Soudan.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Soudan Du Sud", "image": "<img src=../assets/img/Soudan_Du_Sud.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Tanzanie", "image": "<img src=../assets/img/Tanzanie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Tchad", "image": "<img src=../assets/img/Tchad.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Togo", "image": "<img src=../assets/img/Togo.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Tunisie", "image": "<img src=../assets/img/Tunisie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Turquie", "image": "<img src=../assets/img/Turquie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Zambie", "image": "<img src=../assets/img/Zambie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Zimbabwe", "image": "<img src=../assets/img/Zimbabwe.png class=col-12 col-lg-12 mt-4>"},
]


random = Math.floor(Math.random() * data.length)                     //Séléction de manière aléatoire du pays/ de l'image
Pays = data[random].pays                                             //Et stockage dans la variable pays
document.querySelector(".random").innerHTML = data[random].image     //Grâce a la délimitation établie avec les virgules

btn = document.querySelector(".popup")                               //Quand on appuie sur le bouton avec la class popup
btn.addEventListener("click", reponse);                              //

send = document.getElementById("send").onkeydown = function(e) {    //Fonction pour envoyer la réponse avec la touche entrée
  if (e.code == "Enter") {                                          //
    reponse()                                                       //
  }                                                                 //
};                                                                  //


function reponse() {                                                          //Fonction qui vérifie la réponse et l'affiche sur 
  console.log("ok")                                                           //le popup avec fond vert si bon rouge sinon
  reponse = document.querySelector("input").value                             //
  if (reponse.toLowerCase() == Pays.toLowerCase()) {                          //
    document.querySelector(".popuptext").style.backgroundColor = "lightgreen" //
    document.getElementById("send").disabled = true;                          //
   }                                                                          //
  else {                                                                      //
    document.querySelector(".popuptext").style.backgroundColor = "red"        //
    document.getElementById("send").disabled = true;                          //
  }                                                                           //
};                                                                            //


function popup() {                                                            //Fonction qui affiche le popup
  var popup = document.getElementById("myPopup");                             //
  popup.classList.toggle("show");                                             //
  document.getElementById("nomPays").innerHTML = Pays;                        //
}                                                                             //