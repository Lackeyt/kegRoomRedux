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
  case 'DELETE_KEG':
    const newState = {...state};
    delete newState[id];
    return newState;
  default:
    return state;
  }
};