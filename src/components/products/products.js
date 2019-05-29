import productData from '../../helpers/data/productData';
import typeData from '../../helpers/data/typeData';
import categoryData from '../../helpers/data/categoryData';
import util from '../../helpers/util';

const writeProducts = (products) => {
  let domString = '';
  products.forEach((product) => {
    domString += '<div class="col-3">';
    domString += `<div id='${product.name}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${product.name}</h5>`;
    domString += `<h6>Type: ${product.type}</h6>`;
    domString += `<h6>Category: ${product.category}</h6>`;
    domString += `<h6>Description: ${product.description}</h6>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('products', domString);
};

const initProducts = () => {
  categoryData.loadCategories()
    .then(resp => typeData.loadTypesForCategories(resp.data.categories))
    .then((categoriesWithTypes) => {
      productData.loadProductsForTypes(categoriesWithTypes)
        .then((productArray) => {
          writeProducts(productArray);
        });
    })
    .catch(err => console.error(err));
};

export default { initProducts };
