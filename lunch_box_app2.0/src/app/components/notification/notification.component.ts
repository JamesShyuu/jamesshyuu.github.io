import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  // 顯示訊息
  @Input() notifyMsg;

  constructor() { }

  ngOnInit() {
  }

  closeMoal() {
    $('#notificationModal').modal('hide');
  }
}
