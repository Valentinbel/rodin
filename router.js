import routes from './routes.js';

// Fonction pour charger le contenu HTML depuis un fichier
async function loadTemplate(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur lors du chargement du template: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error('Erreur:', error);
        return '<p>Erreur lors du chargement du template</p>';
    }
}

// Fonction pour rendre la page
async function router() {
    // Récupérer l'URL actuelle
    const path = window.location.pathname;
    
    // Trouver la route correspondante
    const route = routes.find(route => route.path === path) || routes[0];
    
    // Élément où injecter le contenu
    const appElement = document.getElementById('app');
    
    // Si la route utilise un templateUrl, charger le fichier HTML
    if (route.templateUrl) {
        const content = await loadTemplate(route.templateUrl);
        appElement.innerHTML = content;
    } else if (route.template) {
        // Fallback pour utiliser le template inline si nécessaire
        appElement.innerHTML = route.template;
    } else {
        appElement.innerHTML = '<p>Page non trouvée</p>';
    }
}

// Écouteur d'événements pour la navigation
window.addEventListener('popstate', router);

// Intercepter les clics sur les liens pour la navigation SPA
document.addEventListener('click', e => {
    if (e.target.matches('a')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        history.pushState(null, null, href);
        router();
    }
});

// Initialiser le router
document.addEventListener('DOMContentLoaded', () => {
    // Gérer l'état initial
    history.pushState(null, null, window.location.pathname);
    router();
});

export default { router };