import axios from 'axios';

const loadProductsForTypes = () => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const allProducts = resp.data.products;
      // const matchingProducts = allProducts.filter(product => product.type === type);
      resolve(allProducts);
    })
    .catch(err => reject(err));
});

export default { loadProductsForTypes };
