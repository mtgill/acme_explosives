import 'bootstrap';
import '../styles/main.scss';
import categories from '../components/categories/categories';
// import products from '../components/products/products';
// import types from '../helpers/data/typeData';
import productData from '../helpers/data/productData';


const init = () => {
  categories.initCategories();
  productData.loadProductsForTypes();
  // products.initProducts();
};

init();
