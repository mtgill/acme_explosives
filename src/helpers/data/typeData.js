import axios from 'axios';

const loadTypesForCategories = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const allTypes = resp.data.types;
      const categoriesWithTypes = categories.map((category) => {
        const newCategory = category;
        const matchingTypes = allTypes.filter(type => type.category === category.id);
        newCategory.types = matchingTypes;
        return newCategory;
      });
      resolve(categoriesWithTypes);
    })
    .catch(err => reject(err));
});

export default { loadTypesForCategories };
