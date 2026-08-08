function commencerMission() {

    alert("Bienvenue dans la Cyber Academy !");

    document.getElementById("message").innerHTML =
    "✅ Mission lancée ! Tu es maintenant un futur analyste cybersécurité.";

    document.getElementById("message").style.color = "cyan";

}
function testerAge() {

    let age = prompt("Quel âge as-tu ?");

    if (age > 16) {
        document.getElementById("resultat").innerHTML =
        "✅ Accès autorisé à la Cyber Academy !";

        window.ageAutorise = true;

    } else {
        document.getElementById("resultat").innerHTML =
        "❌ Désolé, il faut avoir plus de 16 ans.";

        window.ageAutorise = false;
    }
}
function lancerMission(texte) {
    document.getElementById("mission").innerHTML = texte;
}
function allerContact() {

    if (window.ageAutorise === true) {

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

    } else {

        alert("❌ Il faut avoir plus de 16 ans pour accéder au Contact.");
    }
}
function afficherDomaine(domaine) {

    let message = document.getElementById("domaine-message");

    if (domaine === "pentest") {
        message.textContent = "🛡️ Mission Pentest : tu vas apprendre à tester la sécurité d'un système.";
    }

    if (domaine === "analyse") {
        message.textContent = "🔍 Mission Analyse : tu vas apprendre à détecter les risques et les failles.";
    }

    if (domaine === "developpement") {
        message.textContent = "💻 Mission Développement : tu vas apprendre à créer des outils et applications.";
    }
}