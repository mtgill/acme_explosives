import axios from 'axios';

const loadProductsForTypes = categoriesWithTypes => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const allProducts = Object.values(resp.data.products[0]);
      console.error(allProducts);
      const typesWithProducts = categoriesWithTypes.map((type) => {
        console.error(type);
        const newType = type;
        const matchingProducts = allProducts.filter(product => product.type === type.id);
        newType.products = matchingProducts;
        console.error(`matching products ${newType.products}`);
        return newType;
      });
      // console.error(`types with products${typesWithProducts}`);
      resolve(typesWithProducts);
    })
    .catch(err => reject(err));
});

export default { loadProductsForTypes };
