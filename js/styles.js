const css =`
<style>
:root {
    --line-height: 10px;
    --color-bar: #07ffae;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
    
}
body, html{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background:#34495e;
}

#root {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 70vw;
    max-width: 600px;
    height: 45vh;
    background: #2c3e50;
    border: 5px solid #9b59b6;
    border-radius: 5px;
    box-shadow: 10px 10px 20px rgba(0,0,0, .2);
}
</style>
`
const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', css);