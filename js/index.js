// const root = document.querySelector('#root'); 
// const title = '<h1>Difficulty</h1>';
// root.insertAdjacentHTML('beforeend', title);


// const root = document.querySelector('#root');
// function newElement(tag, content){
//     const title = `<${tag}> ${content} </${tag}>`;
//     root.insertAdjacentHTML('beforeend', title);
// }
// newElement('h1', 'Difficulty');



// Tagged Template String
const root = document.querySelector('#root');
const textTitle = 'Difficulty';
const pathPokemon = '../imgs/01.svg';

const title = Title `
    ${textTitle};
    color: #9b59b6;
    font-family: 'Rubik', sans-serif;
`

const pokemon = Character `
    ${pathPokemon};
    width: 80px;
`
root.insertAdjacentHTML('beforeend', title);
root.insertAdjacentHTML('beforeend', pokemon);