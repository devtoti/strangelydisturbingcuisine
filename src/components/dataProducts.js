const products = [
    {
        id: 0,
        name: 'Habanero Turtle Soup',
        rating: 5,
        price: 14,
        img: 'https://i.postimg.cc/0QY802cp/photo-2022-09-14-20-12-40-2.jpg',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'Gourmet fried dishes'
    },
    {
        id: 1,
        name: 'Tarantula Vanilla Cake',
        rating: 3,
        price: 8,
        img: 'https://i.postimg.cc/y8GYVGDS/photo-2022-09-14-20-12-42.jpg',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'Unclassified'
    },
    {
        id: 2,
        name: 'La spécialité de la maison',
        rating: 2,
        price: 29,
        img: 'https://i.postimg.cc/sgH1MXNx/photo-2022-09-14-20-12-32.jpg',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'Gourmet fried dishes'
    },
    {
        id: 3,
        name: 'Cosmic Axolotl',
        rating: 5,
        price: 29,
        img: 'https://i.postimg.cc/Y0ttnKsT/photo-2022-09-14-20-12-41.jpg',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'Gourmet fried dishes'
    },
    {
        id: 4,
        name: 'Compact Beef Taco',
        rating: 3,
        price: 18,
        img: 'https://i.postimg.cc/prkR3cNr/photo-2022-09-14-20-12-40.jpg',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'Gourmet fried dishes'
    },
    {
        id: 5,
        name: 'Pepperoni Octopus Pizza',
        rating: 4,
        price: 23,
        img: 'https://i.postimg.cc/K8j8hb82/photo-2022-09-14-20-12-39.jpg',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'Gourmet fried dishes'
    },
    {
        id: 6,
        name: 'Fried Pigeon Nuggets',
        rating: 2,
        price: 14,
        img: 'https://i.postimg.cc/GtB0tPnJ/QAAf1-I5c8q-C4-N2-O39-Jt-E-1-wwnrr.jpg',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'Gourmet fried dishes'
    },
    {
        id: 7,
        name: 'Escargots de Bourgogne',
        rating: 5,
        price: 33,
        img: 'https://i.postimg.cc/Y9DKtnZC/Yk-Otdqwn-FKO1p-UFPop9d.jpg',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'French recipes'
    },
    {
        id: 8,
        name: 'Exotic Beef Tacos',
        rating: 3.5,
        price: 33,
        img: 'https://i.postimg.cc/SsxbFFZP/rg-P7-MSl7-Ji-Oyl8-Vfjji4-2-y8o8u.jpg',
        description: "If you're in the mood for something spicy, try this recipe for beef tacos. This dish is a true flavor bomb, and will definitely satisfy your craving for something exotic. The best part about this recipe is that it's relatively easy to make, so you can enjoy your favorite gourmet dish without spending hours in the kitchen.",
        category: 'Mexican recipes'
    },
    {
        id: 9,
        name: 'Innocent Cheese Croissant',
        rating: 4,
        price: 9,
        img: 'https://i.postimg.cc/kXfgHG9s/photo-2022-09-14-20-12-38-2.jpg',
        description: "There's nothing quite like a freshly baked croissant. This French specialty is made with layers of light, fluffy dough and is often filled with cheese. While they're commonly found in cafes and bakeries, making your own at home can be a fun and rewarding experience.This recipe is for a classic cheese and ham croissant, but feel free to get creative and add your favorite fillings. Once you've mastered the basic technique, you can experiment with all sorts of exotic ingredients from our store.",

        category: 'French recipes'
    },
    {
        id: 10,
        name: 'Evil Jar of Pickles',
        rating: 3,
        price: 26,
        img: 'https://i.postimg.cc/3wyNmTsB/photo-2022-09-14-20-12-35.jpg',
        description: 'Pickles are a specialty item that can be either evil or sour. They are often used in recipes that call for exotic or unusual ingredients. Gourmet pickles are often made with special spices and herbs.',
        category: 'French recipes'
    },
    {
        id: 11,
        name: 'Banana Salmon Dessert',
        rating: 5,
        price: 24,
        img: 'https://i.postimg.cc/KvZYQBX4/photo-2022-09-14-20-12-37.jpg',
        description: 'This jaw dropping recipe for salmon with a banana dessert is sure to please even the most exotic of tastes. The delicious combination of sweet and savory is truly unique, and will leave you wanting more.',
        category: 'French recipes'
    },
]

export default products