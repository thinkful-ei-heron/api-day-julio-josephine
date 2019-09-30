
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/julio';

function getItems(){
  return fetch(`${BASE_URL}/items`)
 // return Promise.resolve('A successful response!');
};

function createItem(name) {
  let newItem = JSON.stringify({name})
  fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: newItem
  });
}

export default {
  getItems,
  createItem
};