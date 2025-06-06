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
    document.getElementById('dataAtual').innerHTML = `&copy; Todos os direitos á pizzaria Don Francesco ${dataFormatada}`
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
// carrinho
const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeBtn = document.getElementById("close-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("adress")
const adressWarn = document.getElementById("adress-warn")

let cart = [];
// abri o modal do carrinho
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
})
// fechar o modal do carrinho
cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".add-to-cart")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name, price)
    }
})

// função para adicionar ao carrinho.
function addToCart(name, price){
   const existingItem = cart.find(item => item.name)
   if(existingItem) {
    existingItem.quantity += 1;
    return
   } 
    cart.push({
        name,
        price,
        quantity: 1,
    })
}
