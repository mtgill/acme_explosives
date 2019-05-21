import axios from 'axios';

const loadTypesForCategories = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const { types } = resp.data;
      const categoriesWithTypes = categories.map((category) => {
        const newCategory = category;
        const matchingTypes = types.filter(type => type.category === category.id);
        newCategory.types = matchingTypes;
        return newCategory;
      });
      console.error(categoriesWithTypes);
      resolve(categoriesWithTypes);
    })
    .catch(err => reject(err));
});

export default { loadTypesForCategories };
