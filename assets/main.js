const containerUn = document.getElementById("un");
const containerDeux = document.getElementById("deux");
const containerTrois = document.getElementById("trois");
let page = 1;

const age = document.getElementById("age");
const pays = document.getElementById("pays");
const vehicule = document.getElementById("vehicule");

const reponseAge = document.getElementById("reponseAge");

const submit = document.getElementById("submit");
const retour = document.getElementById("return");

submit.addEventListener("click", recupForm1);

function recupForm1() {
  if (page == 1) {
    reponseAge.innerHTML = age.value;
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
