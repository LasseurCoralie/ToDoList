const app = {
    init: function() {
        // vérification branchement js
        console.log('init');
        // Génération du form
        app.createForm();
        // Génération du compteur
        app.createCounter();
        // Génération de la liste
        app.createList();
    },

    createForm: function() {
        console.log('app : createForm');
    },
    createCounter: function() {
        console.log('app : createCounter');
    },
    createList: function() {
        console.log('app : createList');
    },
};

// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init)