import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './reducers';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3' }
  ];

  constructor() {
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
