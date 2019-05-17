import categoryData from '../../helpers/data/categoryData';
import util from '../../helpers/util';
import typeData from '../../helpers/data/typeData';

const writeCategories = (categories) => {
  let domString = '';
  categories.forEach((category) => {
    domString += '<div class="col-3">';
    domString += `<div id='${category.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${category.name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('products', domString);
};

const initCategories = () => {
  categoryData.loadCategories()
    .then((resp) => {
      writeCategories(resp.data.categories);
    })
    .then(resp => typeData.loadTypesForCategories(resp.data.categories))
    .catch(err => console.error(err));
};

export default { initCategories };
