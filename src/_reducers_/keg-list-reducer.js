export default (state = {}, action) => {
  const{name, brand, price, alcoholContent, pintsRemaining}
  switch(action.type){
    case 'ADD_KEG':
    return Object.assing({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsRemaining: pintsRemaining
      }
    });
  default:
    return state;
  }
};