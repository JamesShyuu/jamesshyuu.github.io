import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/service/validtion.service';
import { ErrorMsgService } from 'src/app/service/error.service';

declare var $: any;

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private valid: ValidationService) { }

  emailForm = new FormGroup({
    email: new FormControl("")
  })

  errorMsg = '';

  ngOnInit() {
  }

  // 清除欄位內容
  deleteErrorMsg(){
    this.errorMsg = '';
  }

  // 送出重設密碼信件
  forgetPassword() {
    
    const auth = firebase.auth();

    auth.sendPasswordResetEmail(this.emailForm.controls.email.value).then(success => {
      alert('修改信件已寄出');
      this.emailForm.controls.email.setValue('');
      this.errorMsg = '';
      $('#forgetPasswordModal').modal('hide');
    }).catch(error => {
      if (error['code']) {
        this.errorMsg = ErrorMsgService.getErrorMsg(error['code']);
      } else {
        this.errorMsg = ErrorMsgService.getErrorMsg("invalidNetWork");
      }
    });
  }

  // 關閉 modal
  closeMoal(){
    $('#forgetPasswordModal').modal('hide');
  }

}
