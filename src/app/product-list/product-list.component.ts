import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
   //name='John Doe';
  addToCart: number= 0;
  product={
    name:'iPhoneX',
    price:789,
    color:'Black',
    discount:8.5,
    inStock: 10,
    pImage:'/assets/images/iphone.png'
  }

  getDiscountedPrice(){
   return this.product.price -  (this.product.price*this.product.discount /100)
  }

  decrementCartValue(){
    if(this.addToCart>0){
      this.addToCart--;
    }
   

  }
  incrementCartValue(){
    if(this.addToCart<this.product.inStock){
    this.addToCart++
    }

  }

  onNameChange(event: any){
    //this.name= event.target.value;
    //console.log(event.target.value);
  }
  // name: string = 'iPhone 13';
  // price: number = 999;
  // color: string ='Red';
  // discount: number = 

}
