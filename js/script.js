let $ = document
//SelectEleman
const firstValue = $.querySelector('.C')
const secondValue = $.querySelector('.F')
const converter = $.querySelector('#converter')
const result = $.querySelector('.result')
const convertButton = $.querySelector('.convertButton')
const resetButton = $.querySelector('.resetButton')
const changeButton = $.querySelector('.changeButton')

function Change () {
    if (firstValue.innerHTML === '°C') {
        firstValue.innerHTML = '°F'
        secondValue.innerHTML = '°C'
        converter.setAttribute('placeholder', '°F')
        document.title = 'Converter °F to °C'
    } else {
        firstValue.innerHTML = '°C'
        secondValue.innerHTML = '°F'
        converter.setAttribute('placeholder', '°C')
        document.title = 'Converter °C to °F'
    } 
}

function convert () {
    if (isNaN(converter.value) || converter.value =="") {
        result.innerHTML = 'Enter a number..!'
        result.style.color = 'rgb(253, 50, 50)'
        result.style.textShadow='5px 3px 4px black'

    } else {
        if (firstValue.innerHTML === '°C') { 
            let resultValue = (converter.value  * 1.8) + 32
            result.style.color = 'rgb(102, 255, 102)'
            result.style.textShadow='5px 3px 4px black'
            result.innerHTML = converter.value + '°C To ' + resultValue.toFixed(2) + '°F'
        } else {
            let resultValue = (converter.value -32) * 5 / 9
            result.style.color = 'rgb(102, 255, 102)'
            result.style.textShadow='5px 3px 4px black'
            result.innerHTML = converter.value + '°F To ' + resultValue.toFixed(2) + '°C'
        }
    }
}

function reset () {
    result.innerHTML = ''
    converter.value = ''
}
