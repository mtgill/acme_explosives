import axios from 'axios';

const loadProductsForTypes = categoriesWithTypes => new Promise((resolve, reject) => {
  const productArray = [];
  axios.get('../db/products.json')
    .then((resp) => {
      const allProducts = Object.values(resp.data.products[0]);
      for (let i = 0; i < categoriesWithTypes.length; i += 1) {
        for (let j = 0; j < categoriesWithTypes[i].types.length; j += 1) {
          allProducts.forEach((product) => {
            if (product.type === categoriesWithTypes[i].types[j].id) {
              productArray.push({
                name: product.name,
                category: categoriesWithTypes[i].name,
                type: categoriesWithTypes[i].types[j].name,
                description: product.description,
              });
            }
          });
        }
      }
      console.error('product array ', productArray);
      resolve(productArray);
    })
    .catch(err => reject(err));
});

export default { loadProductsForTypes };
