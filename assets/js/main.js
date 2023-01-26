
const items = [
    {
      id: 22231,
      name: 'T-Shirt White and Red',
      price: 184.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 22232,
      name: 'T-Shirt Black and White',
      price: 154.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 22233,
      name: 'T-Shirt White and Red',
      price: 124.00,
      image: 'assets/images/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    }
]

const updateInfo = (items) =>{

const itemsHtml = document.getElementById( 'items' )
let order = 1
info = ''
items.forEach( item => {
  info += `<div class="product1">
  <img src=${item.image} alt="">
    <div class="info-container">
    <h2 id="title-product1">${item.name}</h2>
    <h5 class="stock1" id="stock1">Stock: ${item.quantity}</h5>
    <h3>$${item.price}</h3>
    <h4>Item ID: ${item.id}</h4>
    <svg class="plus-add${order}" id="plus-add${order}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"/><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/></svg>
    </div>
    </div>`
order += 1
})
itemsHtml.innerHTML = info
}

updateInfo(items)

const btnTheme = document.getElementById( "theme-btn" )
const body = document.body
const cartBtnOpen = document.getElementById( "cart-btn" )
const cartBtnClose = document.getElementById( "close-cart" )
const cartContainer = document.getElementById( "cart-container" )
const plusAdd = document.getElementById( "plus-add1" )
const plusAdd1 = document.getElementById( "plus-add2" )
const plusAddN = document.getElementById( "addtocart" )
const plusAdd2 = document.getElementById( "plus-add3" )
const counter = document.getElementById( "cart-counter" )
const titleProduct1 = document.getElementById( "title-product1" )
const titleProduct2 = document.getElementById( "title-product2" )
const titleProduct3 = document.getElementById( "title-product3" )


let count = 1
  plusAdd.addEventListener("click", e => {
    console.log()
    counter.innerHTML = count++ 
  })
  plusAdd1.addEventListener("click", e => {
    counter.innerHTML = count++ 
  })
  plusAdd2.addEventListener("click", e => {
    counter.innerHTML = count++ 
  })
  plusAddN.addEventListener("click", e => {
    counter.innerHTML = count++ 
  })
  
  const darkThemeChange = () => {
          body.classList.toggle("dark")
      
          if (btnTheme.classList.contains("bx-sun")) {
              btnTheme.classList.replace("bx-sun","bx-moon")
          } else {
              btnTheme.classList.replace("bx-moon", "bx-sun")
          }
      
  }
  
  btnTheme.addEventListener("click", e => darkThemeChange())
  
  cartBtnOpen.addEventListener("click", e => cartContainer.classList.remove("hide"))
  cartBtnClose.addEventListener("click", e => cartContainer.classList.add("hide"))
  

  

    const cartProducts = []
    let countersk, countersk1, countersk2 = 0;
    plusAdd.addEventListener("click", e=> {
      addProduct(items[0].id)
      
    })
    plusAdd1.addEventListener("click", e=> {
      addProduct(items[1].id)
    })
    plusAdd2.addEventListener("click", e=> {
      addProduct(items[2].id)
    })
    plusAddN.addEventListener("click", e=> {
      addProduct(items[1].id)
    })
  
    function addProduct ( itemId ) {
      // let quantitySelected = 0
      let productSelected = cartProducts.find( product => product.id === itemId)
  
      
      if (productSelected) {
  
          let index = cartProducts.indexOf( productSelected )
          const item = items.find(item => item.id === itemId)
          cartProducts[index].quantitySelected++
          cartProducts[index].totalValue =  item.price * cartProducts[index].quantitySelected
      } else {
  
          const item = items.find(item => item.id === itemId)
  
          item.quantitySelected = 1
          item.totalValue = item.price
          cartProducts.push( item )
          console.log(item)
          console.log(cartProducts)
      }
      showProducts();
    }
  
    function showProducts(){
      const content = document.getElementById( "cart-content" )
  
      let fragment = ""
      let coun = 0
      console.log(cartProducts)
      cartProducts.forEach( product => {
          
        fragment += `
          <div class="product">
          <i class='bx bxs-x-circle bx-sm' ></i>
          <img src="${product.image}" alt="">
          <div class="info-container">
          <h2>${product.name}</h2>
          <h3>$${product.price}</h3>
          <h4>Stock:${product.quantity - count + 1}</h4>
          <h4>Item ID: ${product.id} </h4>
          <h4>Total: $${product.totalValue} </h4>
          <div id = "minus">
          <div>Cantidad: ${product.quantitySelected}</div>
          </div>
          </div>
          </div>
          `
          // items[coun].quantity = product.quantity - count + 1;
          // coun += 1;
      })
  
      content.innerHTML = fragment
      
    }
    // updateInfo(items)
    showProducts();
    const nav = document.querySelector("nav")
  
  window.addEventListener( "scroll", () =>{
      if(scrollY >= 50){
          nav.classList.add("scroll-bg")
      }else{
          nav.classList.remove("scroll-bg")
      }
  } )
  
  
  