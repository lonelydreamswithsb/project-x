let a = [
    {
    name: 'scissors',
    type: 'type:inventory',
    price: 2000,
    material: 'metal',
    sold: false,
    image: 'https://elitech.ru/upload/resize_cache/iblock/6c3/x537p3q9kw2a5g95ege2vgubx6gxgtos/1600_1600_1/206419_01.jpg'},
    {
    name: 'leika',
type: 'type:inventory',
    price: 1500,
    material: 'plastic',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpK_hHfbz1lUkWhcMZRh6b2FS-uKfE3rr6w&s'},
    {
    name: 'gnom_statue',
    type: 'decoration',
    price: 1500,
    material: 'keramic',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFruDurQj8T-ogsIzSPL_Jcwsl-HN61F8u9g&s'},
    {
    name: 'gotshok_for_flowers',
    type: 'inventory',
    price: 1000,
    material: 'hard plastic',
    sold: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8UzKebJzvjlTdbbvzBror6bsysqdO6xtcA&s'},
    {
    name: 'light ',
    type: 'decoration',
    price: 800,
    material: 'wood',
    sold: false,
    image: 'https://img-edg.joomcdn.net/ecc6623f414a9d231c3e3481234506236b481b39_original.jpeg'}
]
let parametr = location.search.replace("?parametr=", "")
let productData

for (let i = 0; i<a.length; i++){
    if(a[i].name === parametr){
        productData = a[i]
    }
}
let name = document.getElementById("name")
name.innerHTML = parametr
let price = document.getElementById('price')
let type = document.getElementById("type")
let material = document.getElementById("material")
let sold = document.getElementById("sold")
let image = document.getElementById("image")


price.innerHTML = productData.price
type.innerHTML = productData.type
material.innerHTML = productData.material
sold.innerHTML = productData.sold
image.src = productData.image

let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
