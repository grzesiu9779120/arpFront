let favouriteBooks = [
    {
        title: "Podróż do kresu nocy",
        author: {
            name: "Louis-Ferdinand",
            lastName: "Céline"
        },
        year: 1932,
        language: "French"
    },
    {
        title: "Don Kichot",
        author: {
            name: "Miguel",
            lastName: "Cervantes"
        },
        year: 1605,
        language: "French"
    },
    {
        title: "Wściekłość i wrzask",
        author: {
            name: "William",
            lastName: "Faulkner"
        },
        year: 1929,
        language: "English"
    },
    {
        title: "Niewidzialny człowiek",
        author: {
            name: "Ralph",
            lastName: "Ellison"
        },
        year: 1952,
        language: "English"
    },
    {
        title: "Zbrodnia i kara",
        author: {
            name: "Fiodor",
            lastName: "Dostojewski"
        },
        year: 1866,
        language: "Russian"
    }
]

let titlesOnly = [];

/*


for (let i = 0; i < favouriteBooks.length; i++) {
    titlesOnly.push({title: favouriteBooks[i].title, year: favouriteBooks[i].year, authorName:  favouriteBooks[i].author.name});
}


const y = favouriteBooks[titlesOnly.length].year;

while (titlesOnly.length <= favouriteBooks.length) {
    titlesOnly.push({
       title: favouriteBooks[titlesOnly.length].title,
       year: favouriteBooks[titlesOnly.length].year
    });
}



let sum = 0;

numberArray.forEach(element => {
    sum =+ element;
});

console.log(sum);

const sum2 = numberArray.reduce((pV, cV) => (pV+= cV), 0);
console.log(sum2);
*/




const numberArray = [1,2,3,4,5,6,7,8,9];


const newBookArray = favouriteBooks.map(book=> ({...book, pages: Math.floor(Math.random() * 1000) }) 
);

const pagesSum = newBookArray.reduce((pV, cV) => pV += cV.pages)

//console.log(newBookArray);
console.log(pagesSum);