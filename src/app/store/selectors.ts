import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './reducers';

export const selectProducts = createFeatureSelector<ProductsState>('products');