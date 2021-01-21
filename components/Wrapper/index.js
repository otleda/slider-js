const pathPokemon = '../imgs/01.svg';

const pokemon = Character`
    ${pathPokemon};
    width: 80px;
    padding: 6px;
`

const Wrapper = (css, children) => (`<div style="${css}">${children}</div>`);

const wappers = Wrapper`
    display: flex;
    justify-content: center;
    width: 100%;
    ${pokemon + pokemon + pokemon};
`