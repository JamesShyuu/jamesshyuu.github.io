import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/service/validtion.service';
import { DataService } from 'src/app/service/dataService.service';

declare var $: any;

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  static ngOnInit() {
    throw new Error("Method not implemented.");
  }

  // @Input() productName_edit;
  // @Input() productPrice_edit;
  // @Input() totalPrice_edit;
  @Input() ordersList; 
  @Output() getShowSign = new EventEmitter();

  isShow = false;

  editForm = new FormGroup({
    amount: new FormControl('', [this.valid.amountValidator()])
  })

  errMsg: string;
  productPrice_edit;
  totalPrice_edit;
  productName_edit;

  constructor(private valid: ValidationService, private data: DataService) { }

  ngOnInit() {
    this.errMsg = '';
    this.productPrice_edit = this.ordersList['productPrice'];
    this.productName_edit = this.ordersList['productName'];
    this.editForm.controls.amount.setValue(this.ordersList['productAmount']);
    if (this.editForm.controls.amount.value && this.productPrice_edit){
      this.totalPrice_edit = this.editForm.controls.amount.value * this.productPrice_edit;
    }
   

  }


  countPrice(){
    if (this.editForm.controls.amount.errors !== null){
      this.errMsg = this.editForm.controls.amount.errors['validationResult'];
      return;
    }
    this.totalPrice_edit = this.editForm.controls.amount.value * this.productPrice_edit;
  }


  closeOrderModal(){
    $('#editModal').modal('hide');
  }

  setOrderInfo(){
    $('#editModal').modal('hide');
  }

}
