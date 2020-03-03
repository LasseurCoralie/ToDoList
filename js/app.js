const app = {

    todo: null, //cible dans le dom

    init: function() {
        // vérification branchement js
        console.log('init');

        // Ciblage élément id todo
        app.todo = document.getElementById('todo');

        // Génération du form
        app.createForm();
        // Génération du compteur
        app.createCounter();
        // Génération de la liste
        app.createList();
    },

    createForm: function() {
        console.log('app : createForm');
        // ajout du form
        const form = document.createElement('form');
        form.id = 'todo-form';

        // ajout d'un input text et l'ajouter au form
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'todo-input';
        input.autocomplete = 'off';
        input.name = 'inputValue';
        input.placeholder = 'Ajouter une tâche';

        // ajout du form dans le dom
        form.appendChild(input);
        app.todo.appendChild(form);
    },

    createCounter: function() {
        console.log('app : createCounter');

        // ajout d'un div
        const counter = document.createElement('div');
        counter.id = 'todo-counter';

        // Préparer le contenu
        counter.textContent = '2 tâche(s) en cours';

        // ajout du compteur au dom
        app.todo.appendChild(counter);
    },

    createList: function() {
        console.log('app : createList');

        const list = document.createElement('ul');
        list.id = 'tasks-list';

        // je stock dans tout mon app mon élément list
        app.list = list;

        // Génération des tâches 
        app.generateTask({
            label: 'Coder une todolist en JS',
            done: false,
        });

        app.generateTask({
            label: 'Coder un site en PHP',
            done: true,
        });

        // Ajout au DOM
        app.todo.appendChild(list);
    },

    generateTask: function (data) {
        const task = document.createElement('li');
        task.className = 'task';

        // ajout d'un checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = data.done;

        const label = document.createElement('span')
        label.className = 'task-label';
        label.textContent = data.label;

        // ajouter checkbox et span au li
        task.appendChild(checkbox);
        task.appendChild(label);

        app.list.appendChild(task);
    }
};

// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init)