let a = [
    {
    name: 'садовые_ножницы',
    type: 'садовый_инвентарь',
    price: 2000,
    material: 'метал',
    sold: false,
    image: 'https://elitech.ru/upload/resize_cache/iblock/6c3/x537p3q9kw2a5g95ege2vgubx6gxgtos/1600_1600_1/206419_01.jpg'},
    {
    name: 'лейка',
    type: 'садовый инвентарь',
    price: 1500,
    material: 'пластик',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpK_hHfbz1lUkWhcMZRh6b2FS-uKfE3rr6w&s'},
    {
    name: 'статуя_гнома',
    type: 'декорация',
    price: 1500,
    material: 'керамика',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFruDurQj8T-ogsIzSPL_Jcwsl-HN61F8u9g&s'},
    {
    name: 'горшок_для_цветов',
    type: 'садоый_инвентарь',
    price: 1000,
    material: 'твердый_пластик',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8UzKebJzvjlTdbbvzBror6bsysqdO6xtcA&s'},
    {
    name: 'светильник ',
    type: 'декорация',
    price: 800,
    material: 'wood',
    sold: false,
    image: 'https://img-edg.joomcdn.net/ecc6623f414a9d231c3e3481234506236b481b39_original.jpeg'}
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
    <a href="/product.html?parametr=${object.name}">
            <img src="${object.image}" alt="">
            <h1>${object.name}</h1>
            <p>${object.price}
            <button>В корзину</button>
            </a>
        </div>`
     
}