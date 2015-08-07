window.dataLayer = window.dataLayer || [];

var productObj = [{
    "sku": "SDFSDF",
    "name": "Shoes",
    "category": "Footwear",
    "price": "100",
    "quantity": "1"
}, {"sku": "123DSW", "name": "Sandles", "category": "Footwear", "price": "87", "quantity": "1"}, {
    "sku": "UHDF93",
    "name": "Socks",
    "category": "Footwear",
    "price": "5.99",
    "quantity": "2"
}];
var productObjLength = productObj.length;
for (i = 0; i < productObjLength; i++) {
    var prodName = productObj[i].name;
    var prodCategory = productObj[i].category;
    var prodPrice = productObj[i].price;
    var prodSKU = productObj[i].sku;
    console.log(prodCategory + ', ' + prodName + ', ' + prodSKU + ', ' + prodPrice);
}
dataLayer.push({
    'event': 'eCommerce',
    'eventCategory': 'Product',
    'eventAction': 'Product Impression',
    'eventLabel': prodCategory + ': ' + prodName,
    'eventValue': prodPrice,
    'ecommerce': {
        'currencyCode': 'GBP',
        'impressions': [
            {
                'name': 'Shoes',
                'id': 'SDFSDF',
                'price': '100',
                'category': 'Footwear'
            },
            {
                'name': 'Sandles',
                'id': '123DSW',
                'price': '87',
                'category': 'Footwear'
            },
            {
                'name': 'Socks',
                'id': 'UHDF93',
                'price': '5.99',
                'category': 'Footwear'
            },
        ]
    }
});
var productObj = [{
    "sku": "SDFSDF",
    "name": "Shoes",
    "category": "Footwear",
    "price": "100",
    "quantity": "1"
}, {"sku": "123DSW", "name": "Sandles", "category": "Footwear", "price": "87", "quantity": "1"}, {
    "sku": "UHDF93",
    "name": "Socks",
    "category": "Footwear",
    "price": "5.99",
    "quantity": "2"
}];
var productObjLength = productObj.length;
for (i = 0; i < productObjLength; i++) {
    var prodName = productObj[i].name;
    var prodCategory = productObj[i].category;
    var prodPrice = productObj[i].price;
    var prodSKU = productObj[i].sku;
    console.log(prodCategory + ', ' + prodName + ', ' + prodSKU + ', ' + prodPrice);
}
dataLayer.push({
    'event': 'eCommerce',
    'eventCategory': 'Product',
    'eventAction': 'Product Click',
    'eventLabel': prodCategory + ': ' + prodName,
    'eventValue': prodPrice,
    'ecommerce': {
        'currencyCode': 'GBP',
        'clicks': [
            {
                'name': 'Shoes',
                'id': 'SDFSDF',
                'price': '100',
                'category': 'Footwear'
            },
            {
                'name': 'Sandles',
                'id': '123DSW',
                'price': '87',
                'category': 'Footwear'
            },
            {
                'name': 'Socks',
                'id': 'UHDF93',
                'price': '5.99',
                'category': 'Footwear'
            },
        ]
    }
});