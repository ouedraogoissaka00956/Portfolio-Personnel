const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const prenom = document.getElementById('name').value;
  const nom = document.getElementById('nom').value;
  const sujet = document.getElementById('sujet').value;
  const message = document.getElementById('message').value;

  if (!prenom) {
    alert('Veuillez entrer votre prénom.');
    return;
  }

  if (!nom) {
    alert('Veuillez entrer votre nom.');
    return;
  }

  if (!sujet) {
    alert('Veuillez entrer le sujet de votre message.');
    return;
  }

  if (!message) {
    alert('Veuillez écrire votre message.');
    return;
  }

  (function(){
    emailjs.init("BASXnd_fksn3NkLJt");
  })();

  emailjs.sendForm('service_3sh4z0a', 'template_8oy5kbr', event.target)
    .then(function() {
      alert('Message envoyé avec succès !!');
      form.reset();
    }, function(error) {
      alert('Échec de l\'envoi de l\'email. Erreur: ' + JSON.stringify(error));
    });
});
