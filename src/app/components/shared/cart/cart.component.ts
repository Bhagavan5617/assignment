import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about-us/about.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productData: any;

  constructor(private aboutService: AboutService) {}
  ngOnInit(): void {
    this.productData = this.aboutService.getCartData();
  }
}
