// kötések létrehozása
const doc = {
    tbody: null
};

//todos tömb 2. fügvény adja át az adatokat.
const state = {
    todos: []
}


// 1. ablak - képernyő - betöltődés eseményre 'load' reagál.
// 2. Lefut a Todos.
// 3. render függvény meghívása
window.addEventListener('load', () => {
    init();
    getTodos();
})

function init() {
    doc.tbody = document.querySelector('#tbody');
}

// a függvény letölti a 'Todos' listát. Fetch-csel betölti a 'host' gépre.
function getTodos () {
    let host = 'http://localhost:8000/';
    let endpoint = 'todos'
    let url = host + endpoint;
    fetch(url)
    .then(response  => response.json())
    .then(result => {
        // console.log(result);
        state.todos = result;
        render();
    });
}

function render () {
    let rows = '';

    state.todos.forEach(todo => {
        console.log(todo.name);
        // ferde ', amit ALTGr + 7-el hozhatunk ki.
        rows += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>${todo.ready}</td>
            </tr>
        `;
    });
    doc.tbody.innerHTML = rows;
}