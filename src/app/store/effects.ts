import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ProductService } from './service';
import * as productsActions from './actions';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productService: ProductService) { }

  getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productsActions.loadProducts),
      exhaustMap(() => this.productService.getProducts().pipe(
        map(products => productsActions.loadProductsSuccess({ products: products })),
        catchError(() => of({ type: '[Products] Load Products Failure', prop: { products: null } })
        )
      )
      )
    )
  }
  );
}
