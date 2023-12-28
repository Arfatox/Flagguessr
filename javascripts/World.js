let Pays;
let Reponse;
var data = [        //liste de tout les pays
{"pays": "Afghanistan", "image": "<img src=../assets/img/Afghanistan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Afrique Du Sud", "image": "<img src=../assets/img/Afrique_Du_Sud.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Albanie", "image": "<img src=../assets/img/Albanie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Algerie", "image": "<img src=../assets/img/Algerie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Allemagne", "image": "<img src=../assets/img/Allemagne.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Andorre", "image": "<img src=../assets/img/Andorre.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Angola", "image": "<img src=../assets/img/Angola.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Antigua-et-Barbuda", "image": "<img src=../assets/img/Antigua-et-Barbuda.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Arabie Saoudite", "image": "<img src=../assets/img/Arabie_Saoudite.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Argentine", "image": "<img src=../assets/img/Argentine.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Arménie", "image": "<img src=../assets/img/Armenie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Australie", "image": "<img src=../assets/img/Australie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Autriche", "image": "<img src=../assets/img/Autriche.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Azerbaïdjan", "image": "<img src=../assets/img/Azerbaidjan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bahamas", "image": "<img src=../assets/img/Bahamas.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bahreïn", "image": "<img src=../assets/img/Bahrein.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bangladesh", "image": "<img src=../assets/img/Bangladesh.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Barbade", "image": "<img src=../assets/img/Barbade.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Belgique", "image": "<img src=../assets/img/Belgique.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bélize", "image": "<img src=../assets/img/Belize.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bénin", "image": "<img src=../assets/img/Benin.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bhoutan", "image": "<img src=../assets/img/Bhoutan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Biélorussie", "image": "<img src=../assets/img/Bielorussie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bolivie", "image": "<img src=../assets/img/Bolivie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bosnie-Herzégovine", "image": "<img src=../assets/img/Bosnie-Herzegovine.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Botswana", "image": "<img src=../assets/img/Botswana.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Brésil", "image": "<img src=../assets/img/Bresil.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Brunei", "image": "<img src=../assets/img/Brunei.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bulgarie", "image": "<img src=../assets/img/Bulgarie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Burkina Faso", "image": "<img src=../assets/img/Burkina_Faso.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Burundi", "image": "<img src=../assets/img/Burundi.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cambodge", "image": "<img src=../assets/img/Cambodge.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cameroun", "image": "<img src=../assets/img/Cameroun.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Canada", "image": "<img src=../assets/img/Canada.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cap-Vert", "image": "<img src=../assets/img/Cap-Vert.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Chili", "image": "<img src=../assets/img/Chili.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Chine", "image": "<img src=../assets/img/Chine.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Chypre", "image": "<img src=../assets/img/Chypre.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Colombie", "image": "<img src=../assets/img/Colombie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Comores", "image": "<img src=../assets/img/Comores.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Corée Du Nord", "image": "<img src=../assets/img/Coree_Du_Nord.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Corée Du Sud", "image": "<img src=../assets/img/Coree_Du_Sud.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Costa Rica", "image": "<img src=../assets/img/Costa_Rica.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Côte d'Ivoire", "image": "<img src=../assets/img/Cote_d'Ivoire.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Croatie", "image": "<img src=../assets/img/Croatie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cuba", "image": "<img src=../assets/img/Cuba.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Danemark", "image": "<img src=../assets/img/Danemark.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Djibouti", "image": "<img src=../assets/img/Djibouti.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Dominique", "image": "<img src=../assets/img/Dominique.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Écosse", "image": "<img src=../assets/img/Ecosse.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Égypte", "image": "<img src=../assets/img/Egypte.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Emirats Arabes Unis", "image": "<img src=../assets/img/Emirats_Arabes_Unis.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Équateur", "image": "<img src=../assets/img/Equateur.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Érythrée", "image": "<img src=../assets/img/Erythree.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Espagne", "image": "<img src=../assets/img/Espagne.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Estonie", "image": "<img src=../assets/img/Estonie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Eswatini", "image": "<img src=../assets/img/Eswatini.png class=col-12 col-lg-12 mt-4>"},
{"pays": "États-Unis", "image": "<img src=../assets/img/Etats-Unis.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Éthiopie", "image": "<img src=../assets/img/Ethiopie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Fidji", "image": "<img src=../assets/img/Fidji.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Finlande", "image": "<img src=../assets/img/Finlande.png class=col-12 col-lg-12 mt-4>"},
{"pays": "France", "image": "<img src=../assets/img/France.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Gabon", "image": "<img src=../assets/img/Gabon.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Gambie", "image": "<img src=../assets/img/Gambie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Géorgie", "image": "<img src=../assets/img/Georgie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ghana", "image": "<img src=../assets/img/Ghana.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Grèce", "image": "<img src=../assets/img/Grece.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Grenade", "image": "<img src=../assets/img/Grenade.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guatemala", "image": "<img src=../assets/img/Guatemala.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guinée Équatoriale", "image": "<img src=../assets/img/Guinee_Equatoriale.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guinée", "image": "<img src=../assets/img/Guinee.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guinée-Bissau", "image": "<img src=../assets/img/Guinee-Bissau.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guyana", "image": "<img src=../assets/img/Guyana.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Haïti", "image": "<img src=../assets/img/Haiti.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Honduras", "image": "<img src=../assets/img/Honduras.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Hongrie", "image": "<img src=../assets/img/Hongrie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Îles Marshall", "image": "<img src=../assets/img/Iles_Marshall.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Îles Salomon", "image": "<img src=../assets/img/Iles_Salomon.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Inde", "image": "<img src=../assets/img/Inde.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Indonésie", "image": "<img src=../assets/img/Indonesie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Irak", "image": "<img src=../assets/img/Irak.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Iran", "image": "<img src=../assets/img/Iran.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Irlande", "image": "<img src=../assets/img/Irlande.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Islande", "image": "<img src=../assets/img/Islande.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Israël", "image": "<img src=../assets/img/Israel.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Italie", "image": "<img src=../assets/img/Italie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Jamaïque", "image": "<img src=../assets/img/Jamaique.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Japon", "image": "<img src=../assets/img/Japon.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Jordanie", "image": "<img src=../assets/img/Jordanie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kazakhstan", "image": "<img src=../assets/img/Kazakhstan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kenya", "image": "<img src=../assets/img/Kenya.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kirghizistan", "image": "<img src=../assets/img/Kirghizistan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kiribati", "image": "<img src=../assets/img/Kiribati.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Koweit", "image": "<img src=../assets/img/Koweit.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Laos", "image": "<img src=../assets/img/Laos.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Lesotho", "image": "<img src=../assets/img/Lesotho.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Lettonie", "image": "<img src=../assets/img/Lettonie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Liban", "image": "<img src=../assets/img/Liban.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Libéria", "image": "<img src=../assets/img/Liberia.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Libye", "image": "<img src=../assets/img/Libye.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Liechtenstein", "image": "<img src=../assets/img/Liechtenstein.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Lituanie", "image": "<img src=../assets/img/Lituanie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Luxembourg", "image": "<img src=../assets/img/Luxembourg.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Macédoine Du Nord", "image": "<img src=../assets/img/Macedoine_Du_Nord.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Madagascar", "image": "<img src=../assets/img/Madagascar.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Malaisie", "image": "<img src=../assets/img/Malaisie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Malawi", "image": "<img src=../assets/img/Malawi.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Maldives", "image": "<img src=../assets/img/Maldives.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mali", "image": "<img src=../assets/img/Mali.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Malte", "image": "<img src=../assets/img/Malte.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Maroc", "image": "<img src=../assets/img/Maroc.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Maurice", "image": "<img src=../assets/img/Maurice.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mauritanie", "image": "<img src=../assets/img/Mauritanie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mexique", "image": "<img src=../assets/img/Mexique.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Micronésie", "image": "<img src=../assets/img/Micronesie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Moldavie", "image": "<img src=../assets/img/Moldavie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Monaco", "image": "<img src=../assets/img/Monaco.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mongolie", "image": "<img src=../assets/img/Mongolie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Monténégro", "image": "<img src=../assets/img/Montenegro.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mozanbique", "image": "<img src=../assets/img/Mozanbique.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Myanmar", "image": "<img src=../assets/img/Myanmar.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Namibie", "image": "<img src=../assets/img/Namibie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nauru", "image": "<img src=../assets/img/Nauru.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Népal", "image": "<img src=../assets/img/Nepal.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nicaragua", "image": "<img src=../assets/img/Nicaragua.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Niger", "image": "<img src=../assets/img/Niger.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nigeria", "image": "<img src=../assets/img/Nigeria.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Norvège", "image": "<img src=../assets/img/Norvege.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nouvelle-Zélande", "image": "<img src=../assets/img/Nouvelle-Zelande.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Oman", "image": "<img src=../assets/img/Oman.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ouganda", "image": "<img src=../assets/img/Ouganda.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ouzbékistan", "image": "<img src=../assets/img/Ouzbekistan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Pakistan", "image": "<img src=../assets/img/Pakistan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Palaos", "image": "<img src=../assets/img/Palaos.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Palestine", "image": "<img src=../assets/img/Palestine.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Panama", "image": "<img src=../assets/img/Panama.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Papouasie-Nouvelle-Guinée", "image": "<img src=../assets/img/Papouasie-Nouvelle-Guinee.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Paraguay", "image": "<img src=../assets/img/Paraguay.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Pays-Bas", "image": "<img src=../assets/img/Pays-Bas.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Pérou", "image": "<img src=../assets/img/Perou.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Philippines", "image": "<img src=../assets/img/Philippines.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Pologne", "image": "<img src=../assets/img/Pologne.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Portugal", "image": "<img src=../assets/img/Portugal.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Qatar", "image": "<img src=../assets/img/Qatar.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République Centrafiquaine", "image": "<img src=../assets/img/Republique_Centrafriquaine.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République Démocratique Du Congo", "image": "<img src=../assets/img/Republique_Democratique_Du_Congo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République Dominicaine", "image": "<img src=../assets/img/Republique_Dominicaine.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République du Congo", "image": "<img src=../assets/img/Republique_du_Congo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République Tchèque", "image": "<img src=../assets/img/Republique_Tcheque.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Roumanie", "image": "<img src=../assets/img/Roumanie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Royaume-Uni", "image": "<img src=../assets/img/Royaume-Uni.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Russie", "image": "<img src=../assets/img/Russie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Rwanda", "image": "<img src=../assets/img/Rwanda.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saint-Christophe-et-Niévès", "image": "<img src=../assets/img/Saint-Christophe-et-Nieves.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sainte-Lucie", "image": "<img src=../assets/img/Sainte-Lucie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saint-Marin", "image": "<img src=../assets/img/Saint-Marin.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saint-Vincent-et-les-Grenadines", "image": "<img src=../assets/img/Saint-Vincent-et-les-Grenadines.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Salvador", "image": "<img src=../assets/img/Salvador.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Samoa", "image": "<img src=../assets/img/Samoa.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sao Tomé-et-Principe", "image": "<img src=../assets/img/Sao_Tome-et-Principe.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sénégal", "image": "<img src=../assets/img/Senegal.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Serbie", "image": "<img src=../assets/img/Serbie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Seychelles", "image": "<img src=../assets/img/Seychelles.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sierra Leone", "image": "<img src=../assets/img/Sierra_Leone.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Singapour", "image": "<img src=../assets/img/Singapour.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Slovaquie", "image": "<img src=../assets/img/Slovaquie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Slovénie", "image": "<img src=../assets/img/Slovenie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Somalie", "image": "<img src=../assets/img/Somalie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Soudan", "image": "<img src=../assets/img/Soudan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Soudan Du Sud", "image": "<img src=../assets/img/Soudan_Du_Sud.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sri Lanka", "image": "<img src=../assets/img/Sri_Lanka.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Suède", "image": "<img src=../assets/img/Suede.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Suisse", "image": "<img src=../assets/img/Suisse.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Suriname", "image": "<img src=../assets/img/Suriname.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Syrie", "image": "<img src=../assets/img/Syrie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tadjikistan", "image": "<img src=../assets/img/Tadjikistan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tanzanie", "image": "<img src=../assets/img/Tanzanie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tchad", "image": "<img src=../assets/img/Tchad.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Thaïland", "image": "<img src=../assets/img/Thailand.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Timor-Leste", "image": "<img src=../assets/img/Timor-Leste.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Togo", "image": "<img src=../assets/img/Togo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tonga", "image": "<img src=../assets/img/Tonga.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Trinité-et-Tobago", "image": "<img src=../assets/img/Trinite-et-Tobago.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tunisie", "image": "<img src=../assets/img/Tunisie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Turkménistan", "image": "<img src=../assets/img/Turkmenistan.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Turquie", "image": "<img src=../assets/img/Turquie.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tuvalu", "image": "<img src=../assets/img/Tuvalu.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ukraine", "image": "<img src=../assets/img/Ukraine.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Uruguay", "image": "<img src=../assets/img/Uruguay.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vanuatu", "image": "<img src=../assets/img/Vanuatu.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vatican", "image": "<img src=../assets/img/Vatican.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vénézuela", "image": "<img src=../assets/img/Venezuela.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vietnam", "image": "<img src=../assets/img/Vietnam.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Yémen", "image": "<img src=../assets/img/Yemen.png class=col-12 col-lg-12 mt-4>"},
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
    document.querySelector(".popuptext").style.backgroundColor = "#1ab315"    //
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