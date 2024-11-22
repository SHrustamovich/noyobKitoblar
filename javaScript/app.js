const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    if (!burger.classList.contains("open")) {
        burger.classList.add("open");
        menu.classList.add("show");
    } else {
        burger.classList.remove("open");
        menu.classList.remove("show");
    }
});

const menuData = [
    {
        id: 1,
        title: "Barcha kitoblar",
        path: "/allBooks",
    },
    {
        id: 2,
        title: "Biznes",
        path: "/biznes",
    },
    {
        id: 3,
        title: "Fan",
        path: "/fan",
    },
    {
        id: 4,
        title: "Badiiy adabiyot",
        path: "/adabiyot",
    },
    {
        id: 5,
        title: "Falsafa",
        path: "/falsafa",
    },
    {
        id: 6,
        title: "Bialogiya",
        path: "/bio",
    },
];

const menuList = document.querySelector(".menu__list");

menuData.map((item) => {
    const liItem = document.createElement("li");
    const link = document.createElement("a");
    liItem.classList.add("menu__item");

    link.classList.add("menu__link");
    link.setAttribute("href", "#");
    link.textContent = item.title;

    liItem.appendChild(link);

    menuList.appendChild(liItem);
});

const booksData = [
    {
        id: 1,
        title: "All the light we cannot see",
        auther: "Anthony Doerr",
        star: 4,
        votes: "888.300",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
        img: "https://m.media-amazon.com/images/I/81Jk-jl3JfL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        id: 2,
        title: "where the crawdads sing",
        auther: "Anthony Doerr",
        star: 4,
        votes: "988.200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
    },
    {
        id: 3,
        title: "where the crawdads sing",
        auther: "Anthony Doerr",
        star: 4,
        votes: "988.200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
    },
    {
        id: 4,
        title: "where the crawdads sing",
        auther: "Anthony Doerr",
        star: 4,
        votes: "988.200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
    },
];

const bookCards = document.querySelector(".book__cards");

booksData.map((item) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book__card")

    const bookImg = document.createElement("div");
    bookImg.classList.add("book__img");
    const img = document.createElement("img");
    img.setAttribute("src", item.img);
    bookImg.appendChild(img);

    const bookInfo = document.createElement("div");
    bookInfo.classList.add("book__info")
    const bookTitle = document.createElement("h1");
    bookTitle.classList.add("book__title")
    bookTitle.textContent = item.title;
    const bookAuther = document.createElement("p");
    bookAuther.classList.add("book__auther")
    bookAuther.textContent = item.auther;
    const bookStars = document.createElement("p");
    bookStars.innerHTML = `<span class="star">${"&star;".repeat(
        item.star
    )}</span> <span>${item.votes} votes</span>`;
    const bookDesc = document.createElement("p");
    bookDesc.textContent = item.desc;

    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuther);
    bookInfo.appendChild(bookStars);
    bookInfo.appendChild(bookDesc);

    bookCard.appendChild(bookImg);
    bookCard.appendChild(bookInfo);

    bookCards.appendChild(bookCard);
});
