import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  // 顯示訊息
  @Input() successMsg;

  constructor() { }

  ngOnInit() {
  }

  closeMoal() {
    $('#successModal').modal('hide');
  }

}
