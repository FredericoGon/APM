import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    let price = +this.route.snapshot.paramMap.get('price');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2019',
      'description': '15 gallon capacity rolling garden cart',
      'price': price,
      'starRating': 4.2,
      'imageUrl': 'assets/images/garden_cart.png'
    }
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
