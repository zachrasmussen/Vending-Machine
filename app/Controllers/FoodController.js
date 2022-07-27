import { ProxyState } from "../AppState.js";

function _drawFoods() {
    let foods = ProxyState.foods
    console.log('drawing foods', foods);
    let template = ''
    foods.forEach(f => template += f.Template)
    document.getElementById('foods').innerHTML = template
}

// function _drawTotal() {
//     let subtotal = 0
//     orders.forEach(order => subtotal += order.price)
//     console.log('subtotal', subtotal);
//     let totalElm = document.getElementById('total')
//     subtotal *= 1.06
//     totalElm.innerText = subtotal.toFixed(2)
// }

export class FoodController {
    constructor() {
        console.log('constructor test')
        _drawFoods()
        _drawTotal()
    }

}

