const createStyle = (css) => {
    const head = document.querySelector('head');
    const style = `
        <style>${css}</style>
    `
    head.insertAdjacentHTML('beforeend', style);
}

const Action = (css) => {
    createStyle(css);
    return (
        `<li class="action"></li>`
    )
};
const action = Action `
    .action {
        position: absolute;
        list-style: none;
        width: calc( var(--line-height) * 2);
        height: calc( var(--line-height) * 2);
        background: var( --color-ball);
        border-radius: 50%;
        left: 5px;
    }
    .action.second {
       left: 100px;
    }
    .action.third {
        transform: translateX(140px);
    }
`

function clearAction(action) {
    action.classList.remove('second');
    action.classList.remove('third');
}

const handleClick = (event) => {
    const {target} = event;
    const allItems = document.querySelectorAll('.item');
    const action = document.querySelector('.action');

    allItems.forEach((item) =>{
        item.classList.remove('active');
    })
    target.classList.add('active');

    clearAction(action);
    if (target.classList.contains('pos-2')) {
        action.classList.add('second');
    }
    if (target.classList.contains('pos-3')) {
        action.classList.add('third');
    }
}

const Items = (css, className)  => {
    createStyle(css);
    return (
        `<li    class = "item" ${className} 
                onclick= "handleClick(event)">
        </li>`
    )
};

const Slider = (css, content) => (
    `<ul style="${css}">${content}</ul>`
);

const states = [true, false, false];

function showItems (stateItems)  {

    const items = (pos)=> Items`
        .item {    
            position: relative;
            list-style: none;
            width: calc( var(--line-height) * 2);
            height: calc( var(--line-height) * 2);
            border-radius: 50%;
            background-color: var(--color-bar);
            cursor: pointer;
        }
        ${`pos-${pos}`};
    `
    const itemAcitve = (pos)=> Items `
        .item.active {
            transform: scale(1.8);
        }
 
     ${`active pos-${pos}`};
    `
    const itemsShow = stateItems.map((state, index) =>{
        if(state == true) {
            return itemAcitve(index + 1);
        }else {
            return items(index + 1);
        }
    });
    return itemsShow.join('')
};

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


