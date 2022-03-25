const html = document.querySelector("html");
const checkbox = document.querySelector('#switch');

const getStyle = (style) => 
    window
        .getComputedStyle(html) // todas as variaveis estao no html entao nao passei isso como propriedade 
        .getPropertyValue(style)
const initialColors = {
    bg: getStyle("--bg"),
    bgPanel:getStyle('--bg-panel'),
    colorsHeadings: getStyle('--color-headings'),
    colorText: getStyle('--color-text')
}

const darkMode = {
    bg: "#3333",
    bgPanel:"#434343",
    colorsHeadings:'#3664ff',
    colorText: '#b5b5b5',
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changeColors=(colors) => {
        Object.keys(colors).map(key => 
            html.style.setProperty(transformKey(key),colors[key]))
}

checkbox.addEventListener('change',({target})=>{
    target.checked ? changeColors(darkMode) :changeColors(initialColors)
})