const containerUn = document.getElementById("un");
const containerDeux = document.getElementById("deux");
const containerTrois = document.getElementById("trois");
let page = 1;

/*---------- element de réponse page 1 ---------- */
const age = document.getElementById("age");
const pays = document.getElementById("pays");
const vehicule = document.getElementById("vehicule");
const aucune = document.getElementById("aucune");
const basique = document.getElementById("basique");
const medium = document.getElementById("medium");
const premium = document.getElementById("premium");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const option5 = document.getElementById("option5");

/*---------- endroit ou afficher réponse page 1 ---------- */
const reponseAge = document.getElementById("reponseAge");
const reponsePays = document.getElementById("reponsePays");
const reponseVehicule = document.getElementById("reponseVehicule");
const reponseAssurance = document.getElementById("reponseAssurance");
const reponseOption1 = document.getElementById("reponseOption1");
const reponseOption2 = document.getElementById("reponseOption2");
const reponseOption3 = document.getElementById("reponseOption3");
const reponseOption4 = document.getElementById("reponseOption4");
const reponseOption5 = document.getElementById("reponseOption5");

/*---------- element de réponse page 2 ---------- */
const dateDepart = document.getElementById("dateDepart");
const dateRetour = document.getElementById("dateRetour");
const heureDepart = document.getElementById("heureDepart");
const heureRetour = document.getElementById("heureRetour");
const ville = document.getElementById("ville");
const agence = document.getElementById("agence");
const codePromo = document.getElementById("codePromo");
const commentaires = document.getElementById("commentaires");

/*---------- endroit ou afficher réponse page 2 ---------- */
const reponseDateDepart = document.getElementById("reponseDateDepart");
const reponseHeureDepart = document.getElementById("reponseHeureDepart");
const reponseVille = document.getElementById("reponseVille");
const reponseCodePromo = document.getElementById("reponseCodePromo");
const reponseCom = document.getElementById("reponseCom");
const reponseDateRetour = document.getElementById("reponseDateRetour");
const reponseHeureRetour = document.getElementById("reponseHeureRetour");
const reponseAgence = document.getElementById("reponseAgence");

/*---------- boutton ---------- */
const submit = document.getElementById("submit");
const retour = document.getElementById("return");

/*---------- algo assurance ---------- */
const assurance = document.getElementById("assurance");

function setAssurance(type){
    assurance.value = type;
}

aucune.addEventListener("click", aucuneCheck);

function aucuneCheck() {
  if (aucune.className.indexOf("off") != -1) {
    aucune.classList.remove("off");
    aucune.classList.add("on");

    basique.classList.add("off");
    basique.classList.remove("on");

    medium.classList.add("off");
    medium.classList.remove("on");

    premium.classList.add("off");
    premium.classList.remove("on");
    setAssurance("aucune")
  }
}

basique.addEventListener("click", basiqueCheck);

function basiqueCheck() {
  if (basique.className.indexOf("off") != -1) {
    basique.classList.remove("off");
    basique.classList.add("on");

    aucune.classList.add("off");
    aucune.classList.remove("on");

    medium.classList.add("off");
    medium.classList.remove("on");

    premium.classList.add("off");
    premium.classList.remove("on");

    setAssurance("basique")
  } else {
    basique.classList.remove("on");
    basique.classList.add("off");
    aucune.classList.remove("off");
    aucune.classList.add("on");
    setAssurance("aucune")
  }
}

medium.addEventListener("click", mediumCheck);

function mediumCheck() {
  if (medium.className.indexOf("off") != -1) {
    medium.classList.remove("off");
    medium.classList.add("on");

    aucune.classList.add("off");
    aucune.classList.remove("on");

    basique.classList.add("off");
    basique.classList.remove("on");

    premium.classList.add("off");
    premium.classList.remove("on");

    setAssurance("medium")
  } else {
    medium.classList.remove("on");
    medium.classList.add("off");
    aucune.classList.remove("off");
    aucune.classList.add("on");
    setAssurance("aucune")
  }
}

premium.addEventListener("click", premiumCheck);

function premiumCheck() {
  if (premium.className.indexOf("off") != -1) {
    premium.classList.remove("off");
    premium.classList.add("on");

    aucune.classList.add("off");
    aucune.classList.remove("on");

    basique.classList.add("off");
    basique.classList.remove("on");

    medium.classList.add("off");
    medium.classList.remove("on");

    setAssurance("premium")
  } else {
    premium.classList.remove("on");
    premium.classList.add("off");
    aucune.classList.remove("off");
    aucune.classList.add("on");
    setAssurance("aucune")
  }
}

function testValeurAssurance() {
  if (aucune.classList == "on"){
    let assurance = "aucune";
  }else if (basique.classList == "on"){
  let assurance = "basique";        
  }else if (medium.classList == "on"){
    let assurance = "medium";
  }else if (premium.classList == "on"){
    let assurance = "premium";
  }
}

/*---------- algo checkbox option ---------- */
function optionVisible(){

}

/*---------- fonction ---------- */
submit.addEventListener("click", recupForm1);

function recupForm1() {
  if (page == 1) {
    reponseAge.innerHTML = age.value;
    reponsePays.innerHTML = pays.value;
    reponseVehicule.innerHTML = vehicule.value;
    reponseAssurance.innerHTML = assurance.value;
    reponseOption1.innerHTML = option1.value;
    reponseOption2.innerHTML = option2.value;
    reponseOption3.innerHTML = option3.value;
    reponseOption4.innerHTML = option4.value;
    reponseOption5.innerHTML = option5.value;
    containerUn.classList.add("cacher");
    containerDeux.classList.remove("cacher");
    page += 1;
  } else if (page == 2) {
    reponseDateDepart.innerHTML = dateDepart.value;
    reponseDateRetour.innerHTML = dateRetour.value;
    reponseHeureDepart.innerHTML = heureDepart.value;
    reponseHeureRetour.innerHTML = heureRetour.value;
    reponseVille.innerHTML = ville.value;
    reponseAgence.innerHTML = agence.value;
    reponseCodePromo.innerHTML = codePromo.value;
    reponseCom.innerHTML = commentaires.value;
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
