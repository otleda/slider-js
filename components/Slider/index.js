const Items = (css, content = '')  => (
    `<li style="${css}">${content}</li>`
);

const Slider = (css, content) => (
    `<ul style="${css}">${content}</ul>`
);

const items = Items`
    list-style: none;
    width: calc( var(--line-height) * 3);
    height: calc( var(--line-height) * 3);
    border-radius: 50%;
    background-color: var(--color-bar);
`

const slider = Slider `
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80%;
    height: var(--line-height);
    border-radius: 10px;
    background-color: var(--color-bar);
    ${items + items + items};
`