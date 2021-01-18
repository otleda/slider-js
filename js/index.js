// const root = document.querySelector('#root');
// const title = '<h1>Difficulty</h1>';

// root.insertAdjacentHTML('beforeend', title);


const root = document.querySelector('#root');

function newElement(tag, content){
    const title = `<${tag}> ${content} </${tag}>`;
    root.insertAdjacentHTML('beforeend', title);
}

newElement('h1', 'Difficulty');


