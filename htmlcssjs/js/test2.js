import fetch from 'node-fetch';
console.clear();
/**
 * 1.
 * - Tworzymy klase Product
 * - Pobieramy dane z API np. https://fakestoreapi.com/products/1 (async await)
 * w polu "rating" utwórz metodę "show" która zwróci rating oraz liczbe ocen
 * w klasie Product utwórz metodę showProductDetails która przeiteruje po polach obiektu i zwróci informacje na jego temat
 */

//  bind, call, apply
// usuwanie wlasnosci
// 
const path = "https://fakestoreapi.com/products/1";
let product = {};

class Rating {
    constructor(rate, count){
        this.rate = rate;
        this.count = count;
    }

    show(){
        return `Rate: ${this.rate}, count:${count}`;
    }
}

class Product {
    constructor(id,title,price,description,category,image,rating){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = new Rating(ratingRate, ratingCount);;
    }
    showProductDetails(){

        //return this.values();
        return this.id;
    }
}

async function getResponse(apiPath) {
	const response = await fetch(path);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
    
}

const getApiData = async () => {
    try {
      const data = await getResponse(path);
      product = new Product(data);
      return data;
    } catch (err) {
      console.error(err);
    } finally {
    }
};
console.log(product);
getApiData();
console.log(product);