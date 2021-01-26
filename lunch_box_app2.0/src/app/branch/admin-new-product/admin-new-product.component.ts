import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-new-product',
  templateUrl: './admin-new-product.component.html',
  styleUrls: ['./admin-new-product.component.css']
})
export class AdminNewProductComponent implements OnInit {

  newProductForm = new FormGroup({
    amount: new FormControl(''),

  })

  constructor() { }

  ngOnInit() {
  }

}
