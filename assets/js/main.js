  
  
  const btnTheme = document.getElementById( "theme-btn" )
  const body = document.body
  const cartBtnOpen = document.getElementById( "cart-btn" )
  const cartBtnClose = document.getElementById( "close-cart" )
  const cartContainer = document.getElementById( "cart-container" )
  const plusAdd = document.getElementById( "plus-add" )
  const plusAdd1 = document.getElementById( "plus-add1" )
  const plusAdd2 = document.getElementById( "plus-add2" )
  const counter = document.getElementById( "cart-counter" )
  let count = 1
  plusAdd.addEventListener("click", e => {
    
    
    counter.innerHTML = count++ 
    
  })
  plusAdd1.addEventListener("click", e => {
    
    
    counter.innerHTML = count++ 
  
  })
  plusAdd2.addEventListener("click", e => {
    
    
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
  
  const items = [
      {
        id: 1,
        name: 'Hoodies',
        price: 14.00,
        image: 'assets/images/featured1.png',
        category: 'hoodies',
        quantity: 10
      },
      {
        id: 2,
        name: 'Shirts',
        price: 24.00,
        image: 'assets/images/featured2.png',
        category: 'shirts',
        quantity: 15
      },
      {
        id: 3,
        name: 'Sweatshirts',
        price: 24.00,
        image: 'assets/images/featured3.png',
        category: 'sweatshirts',
        quantity: 20
      }
    ]
  
    const cartProducts = []
    let countersk, countersk1, countersk2 = 0;
    plusAdd.addEventListener("click", e=> {
      addProduct(1)
      
    })
    plusAdd1.addEventListener("click", e=> {
      addProduct(2)
    })
    plusAdd2.addEventListener("click", e=> {
      addProduct(3)
    })
  
  
    function addProduct ( itemId ) {
  
      let productSelected = cartProducts.find( product => product.id === itemId)
  
      
      if (productSelected) {
  
          let index = cartProducts.indexOf( productSelected )
  
          cartProducts[index].quantitySelected++
  
      } else {
  
          const item = items.find(item => item.id === itemId)
  
          item.quantitySelected = 1
          cartProducts.push( item )
          console.log(item)
          console.log(cartProducts)
      }
      showProducts();
    }
  
    function showProducts(){
      const content = document.getElementById( "cart-content" )
  
      let fragment = ""
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
          <div id = "minus">
          <i class='bx bx-plus-circle'></i>
          <div>Cantidad: ${count - 1}</div>
          <i class='bx bx-minus-circle'></i>
          </div>
          </div>
          </div>
          `
      })
  
      content.innerHTML = fragment
    }
    showProducts();
    const nav = document.querySelector("nav")
  
  window.addEventListener( "scroll", () =>{
      if(scrollY >= 50){
          nav.classList.add("scroll-bg")
      }else{
          nav.classList.remove("scroll-bg")
      }
  } )
  
  
  