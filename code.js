let a = [
    {
    name: 'mini bridge',
    type: 'decoration',
    price: 5000,
    material: 'wood',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wWQ899YOCCu4J9MhpQAgIh1Jrx-QbfTX8w&s'},
    {
    name: 'mini bridge',
    type: 'decoration',
    price: 5000,
    material: 'wood',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wWQ899YOCCu4J9MhpQAgIh1Jrx-QbfTX8w&s'},
    {
    name: 'mini bridge',
    type: 'decoration',
    price: 5000,
    material: 'wood',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wWQ899YOCCu4J9MhpQAgIh1Jrx-QbfTX8w&s'},
    {
    name: 'mini bridge',
    type: 'decoration',
    price: 5000,
    material: 'wood',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wWQ899YOCCu4J9MhpQAgIh1Jrx-QbfTX8w&s'},
    {
    name: 'mini bridge',
    type: 'decoration',
    price: 5000,
    material: 'wood',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wWQ899YOCCu4J9MhpQAgIh1Jrx-QbfTX8w&s'}
]

// `<div class="card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wWQ899YOCCu4J9MhpQAgIh1Jrx-QbfTX8w&s" alt="">
//             <h1>Mini Bridge</h1>
//             <p>5000 рублей</p>
//             <button>В корзину</button>
//         </div>
//         <div class="card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wWQ899YOCCu4J9MhpQAgIh1Jrx-QbfTX8w&s" alt="">
//             <h1>Mini Bridge</h1>
//             <p>5000 рублей</p>
//             <button>В корзину</button>
//         </div>
//         <div class="card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wWQ899YOCCu4J9MhpQAgIh1Jrx-QbfTX8w&s" alt="">
//             <h1>Mini Bridge</h1>
//             <p>5000 рублей</p>
//             <button>В корзину</button>
//         </div>
//         <div class="card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wWQ899YOCCu4J9MhpQAgIh1Jrx-QbfTX8w&s" alt="">
//             <h1>Mini Bridge</h1>
//             <p>5000 рублей</p>
//             <button>В корзину</button>
//         </div>`
let market = document.getElementById('market')

for (i = 0; i < a.length; i++){
    let object = a[i]
    market.innerHTML = market.innerHTML +`<div class="card">
            <img src="${object.image}" alt="">
            <h1>${object.name}</h1>
            <p>${object.price}
            <button>В корзину</button>
        </div>`
}