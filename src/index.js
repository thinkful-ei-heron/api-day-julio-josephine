import $ from 'jquery';
import api from './api';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  api.createItem

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
