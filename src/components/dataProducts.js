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
        img: 'https://create.starryai.com/_next/image?url=https%3A%2F%2Fstorage.starryai.com%2Fresults%2F93990294%2F4.png%3F*%26Policy%3DeyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6ICJodHRwczovL3N0b3JhZ2Uuc3RhcnJ5YWkuY29tL3Jlc3VsdHMvOTM5OTAyOTQvNC5wbmc~KiIsICJDb25kaXRpb24iOiB7IkRhdGVMZXNzVGhhbiI6IHsiQVdTOkVwb2NoVGltZSI6IDE2NjU3ODU5MjN9fX1dfQ__%26Signature%3DaIOmcK6VUPoVNl1puE8bBP4yfQwJ06w9N8Jg~0rBEuZ5oxy9h1KiGUWrskZx-MAJmpMUBCSNo4Xls6Gwl4EMy~J5i3JdweanGjc2wzTZk5-oudhtpe0mxS73lDWw8yYZNcy2D1ZlSzFubHFiQ0-e57Qw2dOJ9cOcWWkDngtbxPqKENha~stjiEjPhFKIBzouHpMKBUUgy9Vvfaulqj8y2dsqQ1FEJD5P2qYSaJg~49QQ8H9bzfQ59caSsV2XycTF-jVjaWVLuPjDYJf2YIdEJwfz7YFfDb-8DT8tAxJs-fAyru2iMrZXrDoQSAABFlG4wMuszHbLg8tlBpXLjJqpIg__%26Key-Pair-Id%3DK35YXSO59Z7GJ9&w=1920&q=100',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'Gourmet fried dishes'
    },
    {
        id: 7,
        name: 'Escargots de Bourgogne',
        rating: 5,
        price: 33,
        img: 'https://create.starryai.com/_next/image?url=https%3A%2F%2Fstorage.starryai.com%2Fresults%2F809552490%2F2.png%3F*%26Policy%3DeyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6ICJodHRwczovL3N0b3JhZ2Uuc3RhcnJ5YWkuY29tL3Jlc3VsdHMvODA5NTUyNDkwLzIucG5nPyoiLCAiQ29uZGl0aW9uIjogeyJEYXRlTGVzc1RoYW4iOiB7IkFXUzpFcG9jaFRpbWUiOiAxNjY1Nzg2MDEyfX19XX0_%26Signature%3DIizn1xIkySID7j7~m-1RMWcezGB4hNxatInZsra7a0j7A3-ILxn-f2mGGL-AYLpdl66ThjwDAGaAmxpwTuufvIlFU2Qt5gftGqvbhPIER3WRAIET6J0TD1WZZXCX6iVgCbYrsVlYTupwDPzWGLlfQTbvP9Y0V~5lc8pvTTk6jE4Sqt4d9fQ4rG2h9Z4tq9ZaZR3wuFo8NIiPNBNoYSaqBUd~l9yQ837x5G0Y4MH2hIUxWkwpuHQwRKIFSF1InPSMwuYbi6QCCw6QgtszfkHvgnzer6-mCg9-FGZtvnjgg3Wr7sXIxA9SOfA-3rz88AEXSIPZK8bF9dyCEHBH9qZVuQ__%26Key-Pair-Id%3DK35YXSO59Z7GJ9&w=1920&q=100',
        description: 'In eget aliquam lorem. Donec imperdiet tempor nisl eu vulputate. Fusce aliquam est non mi tempus maximus. Etiam in neque sit amet sapien tincidunt cursus. Morbi tristique neque velit, a sodales neque egestas vel.',
        category: 'French recipes'
    },
    {
        id: 8,
        name: 'Exotic Beef Tacos',
        rating: 3.5,
        price: 33,
        img: 'https://create.starryai.com/_next/image?url=https%3A%2F%2Fstorage.starryai.com%2Fresults%2F515631841%2F2.png%3F*%26Policy%3DeyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6ICJodHRwczovL3N0b3JhZ2Uuc3RhcnJ5YWkuY29tL3Jlc3VsdHMvNTE1NjMxODQxLzIucG5nPyoiLCAiQ29uZGl0aW9uIjogeyJEYXRlTGVzc1RoYW4iOiB7IkFXUzpFcG9jaFRpbWUiOiAxNjY1Nzg2MDMwfX19XX0_%26Signature%3DcCsaZYYoandtJLioBFrtTCfrjnjC-GAtqsDac86Qa4xiBdbVWjEZtu5EDlOqymzzjtEv~5uIKk-LXJJtVi~zeAueYIi2ezrdqkQaiUmI2KO6oUm9C7raJB-YDB~qLRZ8Fc~RMbPIj2TVfKii1pCO2bqer3AOwyjACjMEUA7idc2e-AdtLI-VyMAOEDzIOy6Apuvo7C-ac-f~KxV4ODA4voDf83-0qPdqZdYa~hSBPV2T851p5hgO34p9GuMkxT8rkRgj-q2u~TYoDmp2T8NRX575P5c8Vh2BP7i0iUoRvvvwFWIhRY-rfEvM8Sh3V2fcuqRlRl7F2xUN5Q56Kpa4Fg__%26Key-Pair-Id%3DK35YXSO59Z7GJ9&w=1920&q=100',
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
        name: 'Evil Pickles Jar',
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