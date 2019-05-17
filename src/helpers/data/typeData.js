import axios from 'axios';

const loadTypesForCategories = category => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const allTypes = resp.data.types;
      const matchingTypes = allTypes.filter(type => type.category === category);
      resolve(matchingTypes);
    })
    .catch(err => reject(err));
});

export default { loadTypesForCategories };
