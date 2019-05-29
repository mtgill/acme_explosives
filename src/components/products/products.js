import productData from '../../helpers/data/productData';
import typeData from '../../helpers/data/typeData';
import categoryData from '../../helpers/data/categoryData';
import util from '../../helpers/util';

const allButton = document.getElementById('all');
const groundButton = document.getElementById('ground');
// const aerialButton = document.getElementById('aerial');

let sortArray = [];
const setSortArray = (array) => {
  sortArray = array;
};

const writeProducts = (products) => {
  let domString = '';
  if (allButton.checked === true) {
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
  } else if (groundButton.checked === true) {
    products.forEach((product) => {
      if (product.categoryId === groundButton.id) {
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
      }
      util.printToDom('products', domString);
    });
  }
};

const buttonEvents = (array) => {
  groundButton.addEventListener('select', writeProducts(array));
};

const initProducts = () => {
  categoryData.loadCategories()
    .then(resp => typeData.loadTypesForCategories(resp.data.categories))
    .then((categoriesWithTypes) => {
      productData.loadProductsForTypes(categoriesWithTypes)
        .then((productArray) => {
          writeProducts(productArray);
          setSortArray(productArray);
          buttonEvents(productArray);
        });
    })
    .catch(err => console.error(err));
};

export default { initProducts };
