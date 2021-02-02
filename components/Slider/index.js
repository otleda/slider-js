const Action = (css) => (
    `<li style="${css}"></li>`
);

const Items = (css)  => (
    `<li style="${css}"></li>`
);

const Slider = (css, content) => (
    `<ul style="${css}">${content}</ul>`
);

const stateItems = [true, false, false];

// const showItems = () => itemAcitve + items + items + action;

const action = Action `
    position: absolute;
    list-style: none;
    width: calc( var(--line-height) * 3);
    height: calc( var(--line-height) * 3);
    background: var( --color-ball);
    border-radius: 50%;
    left: 5px;
`
const itemAcitve = Items `
    position: relative;
    list-style: none;
    width: calc( var(--line-height) * 4);
    height: calc( var(--line-height) * 4);
    border-radius: 50%;
    background-color: var(--color-bar);
`
const items = Items`
    position: relative;
    list-style: none;
    width: calc( var(--line-height) * 2);
    height: calc( var(--line-height) * 2);
    border-radius: 50%;
    background-color: var(--color-bar);
`

const slider = Slider `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: var(--line-height);
    background-color: var(--color-bar);
    border-radius: 10px;
    ${showItems() + action};
`

function showItems ()  {
    return itemAcitve + items + items + action
};

