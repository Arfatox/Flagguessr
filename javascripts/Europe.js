let Pays;
let Reponse;
var data = [        //liste de tout les pays
  {"pays": "Aland", "image": "<img src=../assets/img/Aland.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Albanie", "image": "<img src=../assets/img/Albanie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Allemagne", "image": "<img src=../assets/img/Allemagne.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Andorre", "image": "<img src=../assets/img/Andorre.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Angleterre", "image": "<img src=../assets/img/Angleterre.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Autriche", "image": "<img src=../assets/img/Autriche.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Belgique", "image": "<img src=../assets/img/Belgique.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Biélorussie", "image": "<img src=../assets/img/Bielorussie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Bosnie-Herzégovine", "image": "<img src=../assets/img/Bosnie-Herzegovine.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Bulgarie", "image": "<img src=../assets/img/Bulgarie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Chypre", "image": "<img src=../assets/img/Chypre.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Croatie", "image": "<img src=../assets/img/Croatie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Danemark", "image": "<img src=../assets/img/Danemark.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Espagne", "image": "<img src=../assets/img/Espagne.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Estonie", "image": "<img src=../assets/img/Estonie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Finlande", "image": "<img src=../assets/img/Finlande.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "France", "image": "<img src=../assets/img/France.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Grèce", "image": "<img src=../assets/img/Grece.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Gibraltar", "image": "<img src=../assets/img/Gibraltar.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Guernesey", "image": "<img src=../assets/img/Guernesey.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Hongrie", "image": "<img src=../assets/img/Hongrie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Île De Man", "image": "<img src=../assets/img/Ile_De_Man.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Îles Féroé", "image": "<img src=../assets/img/Iles_Feroe.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Irlande Du Nord", "image": "<img src=../assets/img/Irlande_Du_Nord.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Irlande", "image": "<img src=../assets/img/Irlande.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Islande", "image": "<img src=../assets/img/Islande.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Italie", "image": "<img src=../assets/img/Italie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Jersey", "image": "<img src=../assets/img/Jersey.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Kazakhstan", "image": "<img src=../assets/img/Kazakhstan.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Kosovo", "image": "<img src=../assets/img/Kosovo.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Lettonie", "image": "<img src=../assets/img/Lettonie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Liechtenstein", "image": "<img src=../assets/img/Liechtenstein.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Lituanie", "image": "<img src=../assets/img/Lituanie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Luxembourg", "image": "<img src=../assets/img/Luxembourg.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Macédoine Du Nord", "image": "<img src=../assets/img/Macedoine_Du_Nord.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Malte", "image": "<img src=../assets/img/Malte.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Moldavie", "image": "<img src=../assets/img/Moldavie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Monaco", "image": "<img src=../assets/img/Monaco.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Monténégro", "image": "<img src=../assets/img/Montenegro.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Norvège", "image": "<img src=../assets/img/Norvege.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Pays De Galles", "image": "<img src=../assets/img/Pays_De_Galles.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Pays-Bas", "image": "<img src=../assets/img/Pays-Bas.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Pologne", "image": "<img src=../assets/img/Pologne.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Portugal", "image": "<img src=../assets/img/Portugal.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "République Tchèque", "image": "<img src=../assets/img/Republique_Tcheque.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Roumanie", "image": "<img src=../assets/img/Roumanie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Royaume-Uni", "image": "<img src=../assets/img/Royaume-Uni.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Russie", "image": "<img src=../assets/img/Russie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Saint-Marin", "image": "<img src=../assets/img/Saint-Marin.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Serbie", "image": "<img src=../assets/img/Serbie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Slovaquie", "image": "<img src=../assets/img/Slovaquie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Slovénie", "image": "<img src=../assets/img/Slovenie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Suède", "image": "<img src=../assets/img/Suede.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Suisse", "image": "<img src=../assets/img/Suisse.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Turquie", "image": "<img src=../assets/img/Turquie.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Ukraine", "image": "<img src=../assets/img/Ukraine.png class=col-12 col-lg-12 mt-4>"},
  {"pays": "Vatican", "image": "<img src=../assets/img/Vatican.png class=col-12 col-lg-12 mt-4>"},
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