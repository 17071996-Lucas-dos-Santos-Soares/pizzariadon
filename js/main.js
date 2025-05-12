const inputCheck = document.querySelector('#dark-mode')
const element = document.querySelector('body')
inputCheck.addEventListener('click',() => {
    const mode = inputCheck.checked ? 'dark': 'light'
    element.setAttribute("data-bs-theme", mode)
})
function atualizarData() {
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()
    let dataFormatada = `${dia}/${mes}/${ano}`
    document.getElementById('dataAtual').innerHTML = `&copy; Desenvolvido por Lucas Soares ${dataFormatada}`
}
window.onload = function() {
    atualizarData()
}
window.revelar = ScrollReveal({reset:true})
revelar.reveal('.animate-title1',{
     duration: 2000,
     distance: '90px',
     origin: 'left'
})

window.revelar = ScrollReveal({reset:true})
revelar.reveal('.animate-paragraph1',{
     duration: 2000,
     distance: '90px',
     origin: 'left'
})

window.revelar = ScrollReveal({reset:true})
revelar.reveal('.animate-main-btn',{
     duration: 2000,
     distance: '90px',
     origin: 'left'
})