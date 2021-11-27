const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },//[0]
    { name: 'Household Items' },//[1]
    { name: 'Clothing' } //[2]
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tree and Wreath Set',
      description:
        'A tree and wreath set ready to go with minimal setup!',
      image: 'treeAndWreath.jpg',
      category: categories[1]._id,
      price: 100.00,
      quantity: 375
    },
    {
      name: 'Stockings Set',
      description:
        'Stockings for each family member!',
      image: 'stockings.jpg',
      category: categories[1]._id,
      price: 35.00,
      quantity: 150
    },
    {
      name: 'Socks for All',
      description:
        'Socks for the whole family to stay warm by the fire!',
      image: 'socks.jpg',
      category: categories[2]._id,
      price: 12.00,
      quantity: 325
    },
    {
      name: 'Slipper Set',
      description:
        'A set of slippers for Mom, Dad and the kids!',
      image: 'slippers2.jpg',
      category: categories[2]._id,
      price: 25.00,
      quantity: 300
    },
    {
      name: 'Coffee',
      description:
        'Want something to warm you up? How about a lovely cup of coffee!',
      image: 'coffee.jpg',
      category: categories[0]._id,
      price: 8.00,
      quantity: 400
    },
    {
      name: 'Ugly Sweaters',
      description:
        'Going to an ugly sweater party? We have you covered!',
      image: 'holidaySweater.jpg',
      category: categories[2]._id,
      price: 20.00,
      quantity: 450
    },
    {
      name: 'Gift Basket',
      description:
        'Need something nice to bring to that dinner party? Look no further!',
      image: 'giftBasket.jpg',
      category: categories[0]._id,
      price: 50.00,
      quantity: 295
    },
    {
      name: 'Lap Blankets',
      description:
        'Grab one of these warm and toasty blanket to keep you snuggly on those chilly winter nights!',
      image: 'blankets2.jpg',
      category: categories[1]._id,
      price: 40.00,
      quantity: 265
    },
    {
      name: 'Onesies',
      description:
        'Onesie pajamas for everyone; Mom, Dad and the kids!',
      image: 'onesies2.jpg',
      category: categories[2]._id,
      price: 40.00,
      quantity: 200
    },
    {
      name: 'Craft Kit',
      description:
        'Best way to keep the little ones busy during the holidays ',
      image: 'craftKit.jpg',
      category: categories[1]._id,
      price: 10.00,
      quantity: 400
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Denise',
    lastName: 'Tuominen',
    email: 'dmtuominen@gmail.com',
    password: 'password1234',
    orders: [
      {
        product: [products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Shanon',
    lastName: 'Dukes',
    email: 'ShannonDuke@gmail.com',
    password: '1234password'
  });

  console.log('users seeded');

  process.exit();
});