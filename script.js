// Input de entrada
const input = document.getElementById('decoder')
const btnCrypt = document.getElementById('cript')
const btnDescrypt = document.getElementById('descript')

// Input de saída
const decoded = document.getElementById('decoded')
const copyText = document.getElementById('copy')

const popup = document.querySelector('.popup')

input.focus()

function encrypt(textEncrypted) {
    const matriz = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat'],
    ];

    textEncrypted = textEncrypted.toLowerCase()

    for (let index = 0; index < matriz.length; index++) {
        if (textEncrypted.includes(matriz[index][0])) {
            textEncrypted = textEncrypted.replaceAll(matriz[index][0], matriz[index][1])
        }
    }

    return textEncrypted
}

function descrypt(textDescypted) {
    const matriz = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat'],
    ];

    textDescypted = textDescypted.toLowerCase()

    for (let index = 0; index < matriz.length; index++) {
        if (textDescypted.includes(matriz[index][1])) {
            textDescypted = textDescypted.replaceAll(matriz[index][1], matriz[index][0])
        }
    }

    return textDescypted
}

btnCrypt.onclick = () => {
    let textEncrypted = encrypt(input.value)
    decoded.value = textEncrypted

    if(textEncrypted == ''){
        copyText.style.display = 'none'
        decoded.style.backgroundImage = 'url(assets/illustration.svg)'
    } else {
        copyText.style.display = 'block'
        decoded.style.backgroundImage = 'none'
    }
}

btnDescrypt.onclick = () => {
    let textDescrypted = descrypt(input.value)
    decoded.value = textDescrypted
    
    if(textDescrypted == ''){
        copyText.style.display = 'none'
        decoded.style.backgroundImage = 'url(assets/illustration.svg)'
    } else {
        copyText.style.display = 'block'
        decoded.style.backgroundImage = 'none'
    }
}

copyText.onclick = () => {
    let copy = decoded
    copy.select();
    navigator.clipboard.writeText(copy.value);
    popup.classList.remove('hide')

    setTimeout(() => {
        popup.classList.add('hide')
    }, 3000)
}
