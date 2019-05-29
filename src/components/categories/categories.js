import categoryData from '../../helpers/data/categoryData';
import typeData from '../../helpers/data/typeData';

const initCategories = () => {
  categoryData.loadCategories()
    .then(resp => typeData.loadTypesForCategories(resp.data.categories))
    .catch(err => console.error(err));
};

export default { initCategories };
