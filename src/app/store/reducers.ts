import { createReducer, on } from '@ngrx/store';
import * as productsActions from './actions';

export interface Product {
  id: number;
  name: string;
  description: string;
}

export interface ProductsState {
  products: Product[];
}

export const initialState: ProductsState = {
  products: [],
};

export const productsReducer = createReducer(
  initialState,

  on(productsActions.loadProductsSuccess, (state, { products }) => {
    return { ...state, products: [...state.products, ...products] }
  }),

  on(productsActions.addProduct, (state, { product }) => {
    return { ...state, products: [...state.products, product] }
  }),

  on(productsActions.updateProduct, (state, { product }) => ({
    ...state,
    products: state.products.map((p) => (p.id === product.id ? product : p)),
  })),

  on(productsActions.deleteProduct, (state, { productId }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== productId),
  }))
);