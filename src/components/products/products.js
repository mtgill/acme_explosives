import productData from '../../helpers/data/productData';
import typeData from '../../helpers/data/typeData';
import categoryData from '../../helpers/data/categoryData';
import util from '../../helpers/util';

const allButton = document.getElementById('all');
const groundButton = document.getElementById('ground');
const aerialButton = document.getElementById('aerial');
const dropdown = document.getElementById('dropdown');

const writeProducts = (products) => {
  let domString = '';
  if (allButton.checked === true) {
    products.forEach((product) => {
      domString += '<div class="col-3 card-group">';
      domString += `<div id='${product.name}' class="card p-2">`;
      domString += '<div class="card-body">';
      domString += `<h5 class="card-title">${product.name}</h5>`;
      domString += `<h6 class="card-info">Type: ${product.type}</h6>`;
      domString += `<h6 class="card-info">Category: ${product.category}</h6>`;
      domString += `<h6 class="card-info">Description: ${product.description}</h6>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    });
    util.printToDom('products', domString);
  } else if (groundButton.checked === true) {
    products.forEach((product) => {
      if (product.categoryId === groundButton.id) {
        domString += '<div class="col-3 card-group">';
        domString += `<div id='${product.name}' class="card p-2">`;
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title">${product.name}</h5>`;
        domString += `<h6 class="card-info">Type: ${product.type}</h6>`;
        domString += `<h6 class="card-info">Category: ${product.category}</h6>`;
        domString += `<h6 class="card-info">Description: ${product.description}</h6>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      }
      util.printToDom('products', domString);
    });
  } else if (aerialButton.checked === true) {
    products.forEach((product) => {
      if (product.categoryId === aerialButton.id) {
        domString += '<div class="col-3 card-group">';
        domString += `<div id='${product.name}' class="card p-2">`;
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title">${product.name}</h5>`;
        domString += `<h6 class="card-info">Type: ${product.type}</h6>`;
        domString += `<h6 class="card-info">Category: ${product.category}</h6>`;
        domString += `<h6 class="card-info">Description: ${product.description}</h6>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      }
      util.printToDom('products', domString);
    });
  }
};

const buttonEvents = (array) => {
  dropdown.addEventListener('change', () => {
    writeProducts(array);
  });
};

const initProducts = () => {
  categoryData.loadCategories()
    .then(resp => typeData.loadTypesForCategories(resp.data.categories))
    .then((categoriesWithTypes) => {
      productData.loadProductsForTypes(categoriesWithTypes)
        .then((productArray) => {
          writeProducts(productArray);
          buttonEvents(productArray);
        });
    })
    .catch(err => console.error(err));
};

export default { initProducts };
