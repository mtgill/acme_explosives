import productData from '../../helpers/data/productData';
import typeData from '../../helpers/data/typeData';
import categoryData from '../../helpers/data/categoryData';
import util from '../../helpers/util';

const writeProducts = (products) => {
  let domString = '';
  for (let i = 0; i < products.length; i += 1) {
    domString += '<div class="col-3">';
    domString += `<div id='${products[i]}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${products[i]['grucci-mineshell-mayhem-16-shot'].description}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }
  util.printToDom('products', domString);
};

const initProducts = () => {
  categoryData.loadCategories()
    .then(resp => typeData.loadTypesForCategories(resp.data.categories))
    .then((categoriesWithTypes) => {
      productData.loadProductsForTypes(categoriesWithTypes)
        .then(resp => console.error(`product data ${resp.data.types}`));
    })
    .catch(err => console.error(err));
  typeData.loadTypesForCategories()
    .then(resp => productData.loadProductsForTypes(resp.data.types))
    .catch(err => console.error(err));
};

export default { initProducts };
