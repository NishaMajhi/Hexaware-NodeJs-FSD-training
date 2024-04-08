const products = [
    {
        id: 1,
        pName: "iphone 14 pro",
        price: 120000,
        qty: 10,
        category: "phone"
    },
    {
        id: 2,
        pName: "samsung galaxy s24",
        price: 130000,
        qty: 5,
        category: "phone"
    },
    {
        id: 3,
        pName: "Bajaj Fan",
        price: 1200,
        qty: 100,
        category: "fan"
    },
    {
        id: 4,
        pName: "voltas ac",
        price: 100000,
        qty: 6,
        category: "ac"
    },
    {
        id: 5,
        pName: "macbook m2 pro",
        price: 200000,
        qty: 0,
        category: "laptop"
    },
    {
        id: 6,
        pName: "thinkpad",
        price: 50000,
        qty: 10,
        category: "laptop"
    }
];


// a.  display the product details based on the given product id    
const productId = 4;
const productDetailsById = products.find((product) => product.id === productId);
console.log(`Details of product id : ${productId} ------>  `, productDetailsById);

// b.  display the product names and unit price based on the given category
const category = "phone";
const productDataByCategory = products.filter((product) => product.category === category);
productDataByCategory.forEach((product) => {
    console.log(`Product Name : ${product.pName}, unit price : ${product.price}`);
});

// c.  add new product to array 
const newProduct = {
    id: 10,
    pName: "freemind notebook",
    price: 50,
    qty: 500,
    category: "stationary"
};
if (!products.find((product) => product.id === newProduct.id)) {
    products.push(newProduct);
    console.log("New Product inserted successfully : ", products);
} else {
    console.log(`Product with product id : ${newProduct.id} already present`);
}

// d. delete the product based on the product id
const productIdToBeDeleted = 6;
const index = products.findIndex((product) => product.id === productIdToBeDeleted);
if (index !== -1) {
    products.splice(index, 1);
    console.log(`Product Deleted Successfully `, products);
} else {
    console.log(`Product with product id : ${productIdToBeDeleted} not found`);
}

// e. display the product details based on the range of price (min, max)
const minPrice = 50000;
const maxPrice = 150000;
const productsInRange = products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
console.log("Products within the price range : ");
console.log(productsInRange);

// f. display out of stock products (i.e., qty is zero)
const outOfStockProducts = products.filter((product) => product.qty === 0);
console.log("Out of stock products : ");
console.log(outOfStockProducts);

// g. perform sorting the array based on the price
const sortedProductsByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Sorted products by price : ");
console.log(sortedProductsByPrice);


/*-------------------output------------------------------

Details of product id : 4 ------>   { id: 4, pName: 'voltas ac', price: 100000, qty: 6, category: 'ac' }
Product Name : iphone 14 pro, unit price : 120000
Product Name : samsung galaxy s24, unit price : 130000
New Product inserted successfully :  [
  {
    id: 1,
    pName: 'iphone 14 pro',
    price: 120000,
    qty: 10,
    category: 'phone'
  },
  {
    id: 2,
    pName: 'samsung galaxy s24',
    price: 130000,
    qty: 5,
    category: 'phone'
  },
  { id: 3, pName: 'Bajaj Fan', price: 1200, qty: 100, category: 'fan' },
  { id: 4, pName: 'voltas ac', price: 100000, qty: 6, category: 'ac' },
  {
    id: 5,
    pName: 'macbook m2 pro',
    price: 200000,
    qty: 0,
    category: 'laptop'
  },
  {
    id: 6,
    pName: 'thinkpad',
    price: 50000,
    qty: 10,
    category: 'laptop'
  },
  {
    id: 10,
    pName: 'freemind notebook',
    price: 50,
    qty: 500,
    category: 'stationary'
  }
]
Product Deleted Successfully  [
  {
    id: 1,
    pName: 'iphone 14 pro',
    price: 120000,
    qty: 10,
    category: 'phone'
  },
  {
    id: 2,
    pName: 'samsung galaxy s24',
    price: 130000,
    qty: 5,
    category: 'phone'
  },
  { id: 3, pName: 'Bajaj Fan', price: 1200, qty: 100, category: 'fan' },
  { id: 4, pName: 'voltas ac', price: 100000, qty: 6, category: 'ac' },
  {
    id: 5,
    pName: 'macbook m2 pro',
    price: 200000,
    qty: 0,
    category: 'laptop'
  },
  {
    id: 10,
    pName: 'freemind notebook',
    price: 50,
    qty: 500,
    category: 'stationary'
  }
]
Products within the price range :
[
  {
    id: 1,
    pName: 'iphone 14 pro',
    price: 120000,
    qty: 10,
    category: 'phone'
  },
  {
    id: 2,
    pName: 'samsung galaxy s24',
    price: 130000,
    qty: 5,
    category: 'phone'
  },
  { id: 4, pName: 'voltas ac', price: 100000, qty: 6, category: 'ac' }
]
Out of stock products :
[
  {
    id: 5,
    pName: 'macbook m2 pro',
    price: 200000,
    qty: 0,
    category: 'laptop'
  }
]
Sorted products by price :
[
  {
    id: 10,
    pName: 'freemind notebook',
    price: 50,
    qty: 500,
    category: 'stationary'
  },
  { id: 3, pName: 'Bajaj Fan', price: 1200, qty: 100, category: 'fan' },
  { id: 4, pName: 'voltas ac', price: 100000, qty: 6, category: 'ac' },
  {
    id: 1,
    pName: 'iphone 14 pro',
    price: 120000,
    qty: 10,
    category: 'phone'
  },
  {
    id: 2,
    pName: 'samsung galaxy s24',
    price: 130000,
    qty: 5,
    category: 'phone'
  },
  {
    id: 5,
    pName: 'macbook m2 pro',
    price: 200000,
    qty: 0,
    category: 'laptop'
  }
]
*/
