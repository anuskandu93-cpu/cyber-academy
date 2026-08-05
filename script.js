function commencerMission() {

    alert("Bienvenue dans la Cyber Academy !");

    document.getElementById("message").innerHTML =
    "✅ Mission lancée ! Tu es maintenant un futur analyste cybersécurité.";

    document.getElementById("message").style.color = "cyan";

}
function testerAge() {

    let age = prompt("Quel âge as-tu ?");

    if (age >= 16) {
        document.getElementById("resultat").innerHTML =
        "✅ Accès autorisé à la Cyber Academy !";
    } else {
        document.getElementById("resultat").innerHTML =
        "❌ Désolé, il faut avoir au moins 16 ans.";
    }

}
function lancerMission(texte) {
    document.getElementById("mission").innerHTML = texte;
}
function allerContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}