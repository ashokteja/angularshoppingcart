import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminRouting} from './admin.routing';
import { ProductsComponent } from './products/products.component'
 

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AdminRouting

  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
