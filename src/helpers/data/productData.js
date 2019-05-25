import axios from 'axios';
// import categories from '../../components/categories/categories';

const loadProductsForTypes = categoriesWithTypes => new Promise((resolve, reject) => {
  const typeArray = [];
  const typeCategories = [];
  axios.get('../db/products.json')
    .then((resp) => {
      const allProducts = Object.values(resp.data.products[0]);
      for (let i = 0; i < categoriesWithTypes.length; i += 1) {
        for (let j = 0; j < categoriesWithTypes[i].types.length; j += 1) {
          // let newObject = {};
          // const type = categoriesWithTypes[i].types[j].id;
          // const category = categoriesWithTypes[i].id;
          // newObject = {
          //   type,
          //   category,
          // };
          // typeArray.push(newObject);
          typeArray.push(categoriesWithTypes[i].types[j].id);
          // typeCategories.push(categoriesWithTypes[i].types[j].category);
          // console.error(`please god work ${categoriesWithTypes[i].types[j].id}`);
        }
      }
      console.error(`type array${typeArray}`);
      for (let i = 0; i < categoriesWithTypes.length; i += 1) {
        allProducts.forEach((product) => {
          for (let k = 0; k < typeArray.length; k += 1) {
            for (let j = 0; j < typeCategories.length; j += 1) {
              console.error(`category name ${categoriesWithTypes[i].id} product name ${product.name} product type ${product.type}`);
            }
          }
        });
      }
      const typesWithProducts = allProducts.map((product) => {
        const newProduct = product;
        const matchingTypes = typeArray.filter(type => type.id === product.type);
        newProduct.type = matchingTypes;
        // console.error(`matching products ${matchingTypes}`);
        return newProduct;
      });
      // console.error(`types with products${typesWithProducts}`);
      resolve(typesWithProducts);
    })
    .catch(err => reject(err));
});

export default { loadProductsForTypes };
