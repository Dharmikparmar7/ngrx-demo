import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects';
@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({products : productsReducer}),
    EffectsModule.forRoot(ProductsEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
