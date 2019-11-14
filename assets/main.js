const containerUn = document.getElementById("un");
const containerDeux = document.getElementById("deux");
const containerTrois = document.getElementById("trois");
let page = 1;

/*---------- element de réponse page 1 ---------- */
const age = document.getElementById("age");
const pays = document.getElementById("pays");
const vehicule = document.getElementById("vehicule");
const aucune = document.getElementById("Aucune");
const basique = document.getElementById("Basique");
const medium = document.getElementById("Medium");
const premium = document.getElementById("Premium");
/*const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const option5 = document.getElementById("option5");*/

/*---------- endroit ou afficher réponse page 1 ---------- */
const reponseAge = document.getElementById("reponseAge");
const reponsePays = document.getElementById("reponsePays");
const reponseVehicule = document.getElementById("reponseVehicule");
const reponseAssurance = document.getElementById("reponseAssurance");
/*const reponseOption1 = document.getElementById("reponseOption1");
const reponseOption1 = document.getElementById("reponseOption2");
const reponseOption1 = document.getElementById("reponseOption3");
const reponseOption1 = document.getElementById("reponseOption4");
const reponseOption1 = document.getElementById("reponseOption5");*/

const submit = document.getElementById("submit");
const retour = document.getElementById("return");

/*---------- algo assurance ---------- */
aucune.addEventListener("click", aucuneCheck);

function aucuneCheck() {
  if (aucune.className == "off") {
    aucune.className.remove("off");
    aucune.className.add("on");
  } else {
    aucune.className.remove("on");
    aucune.className.add("off");
  }
}

if (aucune.classList == "off"){
  let assurance = "aucune";
}/*
else if (basique.classList == 'off'){
let assurance = "basique";        
}else if (medium.value =='off'){
  let assurance = "medium";
}else if (premium.value == 'off'){
  let assurance = "premium";
}*/

/*---------- fonction ---------- */
submit.addEventListener("click", recupForm1);

function recupForm1() {
  if (page == 1) {
    reponseAge.innerHTML = age.value;
    reponsePays.innerHTML = pays.value;
    reponseVehicule.innerHTML = vehicule.value;
    reponseAssurance.innerHTML = assurance.value;
    containerUn.classList.add("cacher");
    containerDeux.classList.remove("cacher");
    page += 1;
  } else if (page == 2) {
    containerDeux.classList.add("cacher");
    containerTrois.classList.remove("cacher");
    submit.innerHTML = "VALIDER";
    page += 1;
  } else {
    /* validation */
  }
}

retour.addEventListener("click", prec);

function prec() {
  if (page == 2) {
    containerUn.classList.remove("cacher");
    containerDeux.classList.add("cacher");
    page -= 1;
  } else if (page == 3) {
    containerDeux.classList.remove("cacher");
    containerTrois.classList.add("cacher");
    submit.innerHTML = "SUIVANT";
    page -= 1;
  } else {
    /*griser bouton*/
  }
}
