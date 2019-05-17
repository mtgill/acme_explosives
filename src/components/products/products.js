import productData from '../../helpers/data/productData';
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
  productData.loadProducts()
    .then((resp) => {
      console.error(resp.data.products['0']['grucci-mineshell-mayhem-16-shot']);
      writeProducts(resp.data.products);
    })
    .catch(err => console.error(err));
};

export default { initProducts };
