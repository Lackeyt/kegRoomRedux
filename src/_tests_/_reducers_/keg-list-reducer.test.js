import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  const currentState = {
    1: {name: 'keg1',
    brand: 'brand1',
    price: '5',
    alcoholContent: '3',
    pintsRemaining: 124},
    2: {name: 'keg2',
    brand: 'brand2',
    price: '6',
    alcoholContent: '7%',
    pintsRemaining: 124}
  }

  let action;
  const kegData = {
    name: "keg1",
    brand: "brand1",
    price: "5.00",
    alcoholContent: "6%",
    pintsRemaining: 124
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const {name, brand, price, alcoholContent, pintsRemaining} = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsRemaining: pintsRemaining
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action ={
      type: 'DELETE_KEG',
      name: 'keg1'
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'keg2',
    brand: 'brand2',
    price: '6',
    alcoholContent: '7%',
    pintsRemaining: 124}
    });
  });
});