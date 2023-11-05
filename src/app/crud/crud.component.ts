import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as productsActions from '../store/actions';
import { loadProducts } from '../store/actions';
import { Product, ProductsState } from '../store/reducers';
import { selectProducts } from '../store/selectors';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  newProduct: Product = { id: Math.floor(Math.random() * 100), name: '', description: '' };
  editProduct: boolean = false;
  products!: Product[];

  constructor(private store: Store<{ products: Product[] }>) {
    this.store.select(selectProducts).subscribe((productState) => {
      this.products = productState.products
    })
  }

  ngOnInit() {
    this.store.dispatch(loadProducts())
  }

  onAddProduct() {
    if (this.editProduct) {
      this.store.dispatch(productsActions.updateProduct({ product: this.newProduct }));
      this.editProduct = false;
      this.newProduct = { id: Math.floor(Math.random() * 100), name: '', description: '' };
    }
    else {
      if (this.newProduct.name && this.newProduct.description) {
        this.store.dispatch(productsActions.addProduct({ product: this.newProduct }));
        this.newProduct = { id: Math.floor(Math.random() * 100), name: '', description: '' };
      }
    }
  }

  onEditProduct(product: Product) {
    this.editProduct = true;
    this.newProduct = { ...product }
  }

  onDeleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.store.dispatch(productsActions.deleteProduct({ productId }));
    }
  }
}

