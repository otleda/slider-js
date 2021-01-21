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

const title = Title`
color: #9b59b6;
font-family: 'Rubik', sans-serif;
${textTitle};
`

root.insertAdjacentHTML('beforeend', title);
root.insertAdjacentHTML('beforeend', wappers);