const pathPokemon = '../imgs/01.svg';

//CSS
const pokemon = Images`
    ${pathPokemon};
    width: 80px;
    padding: 6px;
`

//Obj
const Wrapper = (css, children) => (
    `<div style="${css}">${children}</div>`
);

//CSS
const wappers = Wrapper`
    display: flex;
    justify-content: center;
    width: 100%;
    ${pokemon + pokemon + pokemon};
`