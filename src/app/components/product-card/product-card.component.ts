import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  buttonColor: 'teal' | 'blue' | 'black' | 'yellow';
}

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Shoes',
      image: '/images/shoes.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 100.00,
      rating: 4,
       buttonColor: 'teal'
    },
    {
      id: 2,
      name: 'Earphone',
      image: '/images/earphone.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 40.00,
      rating: 3,
       buttonColor: 'blue'
    },
    {
      id: 3,
      name: 'Watch',
      image: '/images/watch.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 70.84,
      rating: 4,
      buttonColor: 'black'
    },
    {
      id: 4,
      name: 'Mobile',
      image: '/images/mobile.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 1000.84,
      rating: 5,
      buttonColor: 'yellow'
    }
  ];

}
