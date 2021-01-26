import { Component, OnInit, Input, Output } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  
  // 顯示訊息
  @Input() errorMsg;


  constructor() { }

  ngOnInit() {
    
    
  }

  closeMoal(){
    $('#errorModal').modal('hide');
  }

}
