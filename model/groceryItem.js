// 
/**
 * Grocery item with name, quantity, and price
 */
class GroceryItem  {
    /**
     * 
     * @param {String} name 
     * @param {Number} quantity 
     * @param {Number} price 
     */
    constructor (name, quantity, price) {
        this.name = name
        this.quantity = quantity
        this.price = price
    }
}

module.exports = GroceryItem


