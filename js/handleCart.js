const products = [
    {
        team: "Oracle Red Bull Racing",
        title: "T-Shirt Męski America 2024",
        price: 169.00,
        imageSrc: "/images/rb/1.jpg",
        id: 0
    },
    {
        team: "Oracle Red Bull Racing",
        title: "T-Shirt Męski Team 2024",
        price: 169.00,
        imageSrc: "/images/rb/2.jpg",
        id: 1
    },
    {
        team: "Oracle Red Bull Racing",
        title: "T-Shirt Las Vegas",
        price: 169.00,
        imageSrc: "/images/rb/3.jpg",
        id: 2
    },
    {
        team: "Oracle Red Bull Racing",
        title: "T-Shirt Kid Sergio Perez",
        price: 169.00,
        imageSrc: "/images/rb/4.jpg",
        id: 3
    },
    {
        team: "Scuderia Ferrari F1 Team",
        title: "T-Shirt Męski Leclerc Czerwony",
        price: 169.00,
        imageSrc: "/images/ferrari/1.jpg",
        id: 4
    },
    {
        team: "Scuderia Ferrari F1 Team",
        title: "T-Shirt Męski Official Team 2024",
        price: 169.00,
        imageSrc: "/images/ferrari/2.jpg",
        id: 5
    },
    {
        team: "Scuderia Ferrari F1 Team",
        title: "Polo Męskie Ferrari F1",
        price: 169.00,
        imageSrc: "/images/ferrari/3.jpg",
        id: 6
    },
    {
        team: "Scuderia Ferrari F1 Team",
        title: "Czapka z daszkiem Scuderia Ferrari",
        price: 169.00,
        imageSrc: "/images/ferrari/4.jpg",
        id: 7
    },
    {
        team: "McLaren F1 Team",
        title: "T-shirt Męski MCL 2024",
        price: 329.00,
        imageSrc: "/images/mclaren/1.jpg",
        id: 8
    },
    {
        team: "McLaren F1 Team",
        title: "T-shirt Męski LN4 2024",
        price: 204.00,
        imageSrc: "/images/mclaren/2.jpg",
        id: 9
    },
    {
        team: "McLaren F1 Team",
        title: "T-shirt Męski Norris Szary",
        price: 199.00,
        imageSrc: "/images/mclaren/3.jpg",
        id: 10
    },
    {
        team: "McLaren F1 Team",
        title: "T-shirt Monte Carlo Special Edition",
        price: 239.00,
        imageSrc: "/images/mclaren/4.jpg",
        id: 11
    },
    {
        team: "Mercedes AMG F1 Team",
        title: "T-shirt Męski Longsleeve Czarny",
        price: 169.00,
        imageSrc: "/images/merc/1.jpg",
        id: 12
    },
    {
        team: "Mercedes AMG F1 Team",
        title: "T-shirt Męski Team Biały",
        price: 202.00,
        imageSrc: "/images/merc/3.jpg",
        id: 13
    },
    {
        team: "Mercedes AMG F1 Team",
        title: "T-shirt Męski Team Czarny",
        price: 202.00,
        imageSrc: "/images/merc/1.jpg",
        id: 14
    },
    {
        team: "Mercedes AMG F1 Team",
        title: "T-shirt Męski Longsleeve Biały",
        price: 169.00,
        imageSrc: "/images/merc/4.jpg",
        id: 15
    },

]

export default products;




const buttons = document.getElementsByClassName('cart-btn')
let productList = document.getElementById('cart-products')
let elems = document.getElementsByClassName('price')
let price = 0
let c =JSON.parse(localStorage.getItem('cart'))
let xs = document.getElementsByClassName('delete')
console.log(c, "s")
if (c != null) {
    for (let i = 0 ; i < c.length; i++) {
        price += products[i].price * c[i]
    }
    console.log(price)
    console.log(elems)
    for (let i = 0 ; i < elems.length; i++) {
        elems[i].innerHTML = parseFloat(price).toFixed(2) + " PLN"
    }
}
else {
    localStorage.setItem('cart', JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
    document.getElementById('cart-q').innerHTML = "0.00 PLN"
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let id = parseInt(e.target.id)
        price = 0
        if (cart == null) {
            cart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        cart[id]++;
        for (let i = 0 ; i < cart.length; i++) {
            price += products[i].price * cart[i]
        }

        for (let i = 0 ; i < elems.length; i++) {
            elems[i].innerHTML = parseFloat(price).toFixed(2) + " PLN"
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(localStorage)
    })
}


const clearButton = document.getElementById('clear-cart')
if (clearButton) {
    clearButton.addEventListener('click', (e) => {
        localStorage.setItem('cart', JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
        location.reload()
    })
}



if (productList) {
    console.log('DADS')
    if (c){
        for(let i = 0 ; i < c.length; i++) {
            if (c[i] !== 0){
                productList.innerHTML += "<div class=\"row row-cols-1 row-cols-md-3 border mb-5 border-2 rounded-3\">\n" +
                    "            <div class=\"col card border-0\">\n" +
                    "                <img src=\"/public/"+ products[i].imageSrc  +"  \" alt=\"\">\n" +
                    "                <p><b>" + products[i].title + "</b></p>\n" +
                    "            </div>\n" +
                    "            <div class=\"col d-flex align-content-end justify-content-end\">\n" +
                    "                <p class=\"align-self-end\">Sztuk: "+ c[i] +"</p>\n" +
                    "            </div>\n" +
                    "            <div class=\"col d-flex flex-column align-content-end justify-content-between\">\n" +
                    "                <div class=\"d-flex justify-content-end m-3\">\n" +
                    "                    <button id=\'" + i +"\' onclick='deleteProduct("+ i +")' type='button' class='btn btn-danger delete'> USUN"+
                    "                    </button>\n" +
                    "                </div>\n" +
                    "\n" +
                    "                <p class=\"align-self-end\">Łączna cena:  " + parseFloat(products[i].price * c[i]).toFixed(2)  + " PLN <span class=\"price\"></span></p>\n" +
                    "            </div>\n" +
                    "        </div>"
            }



        }
    }

}
