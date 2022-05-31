console.clear();

/*
 * 1.
 * - Tworzymy klase Product
 * - Pobieramy dane z API np. https://fakestoreapi.com/products/1 (async await)
 * w polu "rating" utwórz metodę "show" która zwróci rating oraz liczbe ocen
 * w klasie Product utwórz metodę showProductDetails która przeiteruje po polach obiektu i zwróci informacje na jego temat
 */

// Klasa, która pozwala na utworzenie obiektu z danymi z API
// obiekt po odwołaniu do obj.rating.show() powinien zwrócić rating
// obiekt po odwołaniu do obj.showProductDetails powinien zwrócić detale na jego temat

class Rating {
  constructor(rate, count) {
    this.rate = rate;
    this.count = count;
  }

  show() {
    return `Avg rate: ${this.rate} of ${this.count} vote(s).`;
  }
}

class Product {
  constructor(
    id,
    title,
    price,
    description,
    category,
    image,
    ratingRate,
    ratingCount
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = new Rating(this.ratingRate, this.ratingCount); // kompozycja, "has a"
  }

  showProductDetails() {
    let productDetails = "";
    // const {id, title, price} = this;
    // let details = `${id}, ${title}`;
    // 1. for in

    // zadanie domowe: przerobienie metody showProductDetails na funkcje rekurencyjną
    for (const property in this) {
      if (typeof this[property] === "object") {
        for (const prop in this[property]) {
          productDetails += `${prop}: ${this[property][prop]}, `;
        }
      } else {
        productDetails += `${property}: ${this[property]}, `;
      }
    }
    return productDetails;
  }

  

}

const test = new Product(1, 2, 3, 4, 5, 6, 7, 8);
console.log(test.showProductDetails());
console.log(test.rating.show());
