// Tagged Template String
const root = document.querySelector('#root');
const textTitle = 'Level';

const title = Title`
color: #9b59b6;
font-family: 'Rubik', sans-serif;
${textTitle};
`

root.insertAdjacentHTML('beforeend', title);
root.insertAdjacentHTML('beforeend', wappers);
root.insertAdjacentHTML('beforeend', slider);