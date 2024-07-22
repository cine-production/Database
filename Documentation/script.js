document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const passwordModalcust = document.getElementById('passwordModalcust');
    const checkPasswordButton = document.getElementById('checkPassword');
    const passwordInput = document.getElementById('passwordInput');
    const main = document.getElementById('mainContainer');

    main.style.zIndex = '0';
    // Fonction pour vérifier si le mot de passe est toujours valide
    function isPasswordValid() {
        const timestamp = localStorage.getItem('passwordTimestamp');
        if (!timestamp) {
            return false;
        }

        const currentTime = new Date().getTime();
        const difference = currentTime - parseInt(timestamp);

        // 5 minutes en millisecondes
        const fiveMinutes = 5 * 60 * 1000;

        return difference <= fiveMinutes;
    }

    // Vérifie si le mot de passe a déjà été entré récemment
    const isPasswordEntered = localStorage.getItem('isPasswordEntered') === 'true' && isPasswordValid();

    // Si le mot de passe n'a pas été entré ou a expiré, affiche le popup et l'overlay
    if (!isPasswordEntered) {
        passwordModalcust.style.display = 'block';
        overlay.style.display = 'block';
        main.style.zIndex = '0';
    }

    checkPasswordButton.addEventListener('click', () => {
        const password = passwordInput.value;

        if (password === 'Walt135' || password === 'Minecraft15!' || password === 'Wonder04572424') {
            // Enregistre que le mot de passe a été entré avec succès et le timestamp actuel
            localStorage.setItem('isPasswordEntered', 'true');
            localStorage.setItem('passwordTimestamp', new Date().getTime().toString());
            passwordModalcust.style.display = 'none';
            overlay.style.display = 'none';
            main.style.zIndex = '1';
        } else {
            alert('Mot de passe incorrect. Veuillez réessayer.');
            passwordInput.value = '';
        }
    });
});

// Fonction pour faire défiler la page jusqu'à une section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Fonction pour faire défiler la page vers le haut
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Gestion de l'affichage du bouton de retour en haut avec un effet de fondu
  window.onscroll = function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  };

  function navBarFunction() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}