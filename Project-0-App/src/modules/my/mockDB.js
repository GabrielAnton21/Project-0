function rand() {
    return (Math.floor(Math.random() * 3) + 1);
}

function imageString() {
    return `/SLDS/images/product${rand()}.jpg`;
}

export const items = [
    {
        id: 1,
        name: "The Martian",
        image: imageString(),
        description: "the Martian",
        price: "$1",
        rating: 5,
        author: "Andy Weir"
    },
    {
        id: 2,
        name: "The Three-Body Problem",
        image: imageString(),
        description: "The Three-Body Problem",
        price: "$1",
        rating: 4,
        author: "Liu Cixin"
    },
    {
        id: 3,
        name: "Rendezvous with Rama",
        image: imageString(),
        description: "Rendezvous with Rama",
        price: "$1",
        rating: 5,
        author: "Arthuer C. Clarke"
    },
    {
        id: 4,
        name: "The Dark Forest",
        image: imageString(),
        description: "The Dark Forest",
        price: "$1",
        rating: 5,
        author: "Liu Cixin"
    },
    {
        id: 5,
        name: "Foundation",
        image: imageString(),
        description: "Foundation",
        price: "$1",
        rating: 4,
        author: "Isaac Asimov"
    },
    {
        id: 6,
        name: "Death's End",
        image: imageString(),
        description: "Death's End",
        price: "$1",
        rating: 5,
        seller: "Liu Cixin"
    }
]