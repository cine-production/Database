document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const passwordModal = document.getElementById('passwordModal');
    const checkPasswordButton = document.getElementById('checkPassword');
    const passwordInput = document.getElementById('passwordInput');

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
        passwordModal.style.display = 'block';
        overlay.style.display = 'block';
    }

    checkPasswordButton.addEventListener('click', () => {
        const password = passwordInput.value;

        if (password === 'Walt135' || password === 'Minecraft15!') {
            // Enregistre que le mot de passe a été entré avec succès et le timestamp actuel
            localStorage.setItem('isPasswordEntered', 'true');
            localStorage.setItem('passwordTimestamp', new Date().getTime().toString());
            passwordModal.style.display = 'none';
            overlay.style.display = 'none';
        } else {
            alert('Mot de passe incorrect. Veuillez réessayer.');
            passwordInput.value = '';
        }
    });
});
