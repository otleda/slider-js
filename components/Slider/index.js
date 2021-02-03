function createStyle(css) {
    const head = document.querySelector('head');
    const style = `
        <style>${css}</style>
    `
    head.insertAdjacentHTML('beforeend', style);
}

const Action = (css) => {
    createStyle(css);
    return (
        `<li class="action" style="${css}"></li>`
    )
};


function handleClick() {
    console.log('vai');
}

const Items = (css, className)  => {
    createStyle(css);
    return (
        `<li    class = "item" ${className} 
                style = "${css}" 
                onclick= "handleClick()">
        </li>`
    )
};

const Slider = (css, content) => (
    `<ul style="${css}">${content}</ul>`
);

const states = [true, false, false];

function showItems (stateItems)  {
  const itemsShow = stateItems.map(state =>{
        if(state == true) {
            return itemAcitve;
        }else {
            return items;
        }
    });
    return itemsShow.join('')
};



const action = Action `
    .action {
        position: absolute;
        list-style: none;
        width: calc( var(--line-height) * 3);
        height: calc( var(--line-height) * 3);
        background: var( --color-ball);
        border-radius: 50%;
        left: 5px;
    }
`
const itemAcitve = Items `
    .item {  
        position: relative;
        list-style: none;
        width: calc( var(--line-height) * 4);
        height: calc( var(--line-height) * 4);
        border-radius: 50%;
        background-color: var(--color-bar);
     }
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
    ${showItems(states) + action};
`


