const app = {

    todo: null, //cible dans le dom
    count: 0,
    todo: null,


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

    addTask: function (evt) {
        evt.preventDefault();
        console.log('submit');

        // ajout d'une tache dans la liste de tache
        const formInput = document.querySelector('#todo-input');
        const value = formInput.value;

        // Génération d'une nouvelle tâche
        app.generateTask({
            label: value,
            done: false,
        });

        // vider le champ
        formInput.value = '';

        // Maj du compteur :
        app.count++;
        app.updateCounter();
        console.log(app.count);

    }, 

    createForm: function() {
        console.log('app : createForm');
        // ajout du form
        const form = document.createElement('form');
        form.id = 'todo-form';

        form.addEventListener('submit', app.addTask);

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

    updateCounter: function() {
        const counter = document.getElementById('todo-counter');
        counter.textContent = `${app.count} tâche(s) en cours`;
    },

    createCounter: function() {
        console.log('app : createCounter');

        // ajout d'un div
        const counter = document.createElement('div');
        counter.id = 'todo-counter';

        // Préparer le contenu
        counter.textContent = `${app.count} tâche(s) en cours`;

        // ajout du compteur au dom
        app.todo.appendChild(counter);
    },

    createList: function() {
        console.log('app : createList');

        const list = document.createElement('ul');
        list.id = 'tasks-list';

        // je stock dans tout mon app mon élément list
        app.list = list;

        // Ajout au DOM
        app.todo.appendChild(list);
    },

    generateTask: function (data) {
        const task = document.createElement('li');
        task.className = 'task';

        // condition affichage tache done
        if (data.done){
            task.classList.add('task-label--done');
        }

        // ajout d'un checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = data.done;

        // écoute changement d'état checkbox
        checkbox.addEventListener('change', function () {
            // changement de class (toggle)
            task.classList.toggle('task-label--done');

            if (checkbox.checked) {
                app.count--;
            } else {
                app.count++;
            }

            // maj compteur sur dom
            app.updateCounter();
        })

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