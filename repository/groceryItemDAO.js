const GroceryItem = require('../model/groceryItem')
const dynamo = require('./dynamoDB')

// CRUD

// CREATE
/**
 * Inserts new GroceryItem to DynamoDB
 * @param {GroceryItem} newGroceryItem 
 */
function insertNewGroceryItem(newGroceryItem) {
    const params = {
        TableName: 'grocery_items',
        Item: {
            id: newGroceryItem.id,
            name: newGroceryItem.name,
            quantity: newGroceryItem.quantity,
            price: newGroceryItem.price
        }
    };

    dynamo.put(params, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Successfully added ${newGroceryItem}`)
        }
    }).promise()
}

// READ
/**
 * Filters GroceryItem from DynamoDB by name
 * @param {String} id 
 * @returns GroceryItem with matching name, or null if GroceryItem does not exists
 */
const getItemByID = (id) => {
    const params = {
        TableName: 'grocery_items',
        Key: {
            id: id
        }
    };

    dynamo.get(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (data.Item) {
                console.log(data.Item);
            } else {
                console.log(`Item with id ${id} was not found`);
            }
        }
    }).promise();
}
/**
 * Returns list of ALL GroceryItems
 * @returns GroceryItem list
 */
const getGroceryItems = () => {
    list = fs.readFileSync(path, 'utf-8')
    groceryItemList = JSON.stringify(list)
    return groceryItemList
}

module.exports = {
    insertNewGroceryItem,
    getItemByID,
    getGroceryItems
}