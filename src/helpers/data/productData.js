import axios from 'axios';

const loadProductsForTypes = categoriesWithTypes => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const { products } = resp.data;
      console.error(products);
      const typesWithProducts = categoriesWithTypes.map((type) => {
        const newType = type;
        const matchingProducts = products.filter(product => product.type === type.id);
        newType.products = matchingProducts;
        return newType;
      });
      console.error(typesWithProducts);
      resolve(typesWithProducts);
    })
    .catch(err => reject(err));
});

export default { loadProductsForTypes };
