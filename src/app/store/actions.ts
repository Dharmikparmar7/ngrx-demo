import { createAction, props } from '@ngrx/store';
import { Product } from './reducers';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction('[Products] Load Products Success', props<{ products: Product[] }>());
export const loadProductsFailure = createAction('[Products] Load Products Failure', props<{ error: any }>());

export const addProduct = createAction('[Products] Add Product', props<{ product: Product }>());
export const updateProduct = createAction('[Products] Update Product', props<{ product: Product }>());
export const deleteProduct = createAction('[Products] Delete Product', props<{ productId: number }>());