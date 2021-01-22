import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  // 顯示訊息
  @Input() confirmMsg;
  @Output() confirmEvent = new EventEmitter<boolean>();

  confirmAns = false;

  constructor() { }

  ngOnInit() {
  }

  toConfirm(confirm){
    if (confirm) {
      this.confirmAns = true;
    } else {
      this.confirmAns = false;
    }
    this.confirmEvent.emit(this.confirmAns);
  }

  closeMoal() {
    $('#confirmModal').modal('hide');
  }

}
