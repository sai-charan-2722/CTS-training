import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  data = [{
    id: 1,
    name: "Television",
    price: 400000,
    total: 0,
    selectedQuantity: 0
  },
  {
    id: 2,
    name: "Washing machine",
    price: 35000,
    total: 0,
    selectedQuantity: 0
  }];

  decreaseAmount(index:number){
    let currentQuantity = this.data[index]['selectedQuantity'];
    let price = this.data[index]['price'];

    if(currentQuantity>0){
      this.data[index]['selectedQuantity'] = currentQuantity - 1;
      this.data[index]['total'] = (currentQuantity-1)*price;
    }
  }
  increaseAmount(index:number){
    let currentQuantity = this.data[index]['selectedQuantity'];
    let price = this.data[index]['price'];

    this.data[index]['selectedQuantity'] = currentQuantity + 1;
    this.data[index]['total'] = (currentQuantity+1)*price;
  }
}
