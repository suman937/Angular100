import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product={
    name:'iPhoneX',
    price:789,
    color:'Black',
    discount:8.5,
    inStock: 0
  }

  getDiscountedPrice(){
   return this.product.price -  (this.product.price*this.product.discount /100)
  }
  // name: string = 'iPhone 13';
  // price: number = 999;
  // color: string ='Red';
  // discount: number = 

}
