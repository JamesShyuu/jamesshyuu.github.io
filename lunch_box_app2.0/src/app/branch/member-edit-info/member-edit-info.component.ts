import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import * as firebase from 'firebase';
import { DataService } from 'src/app/service/dataService.service';
import { ValidationService } from 'src/app/service/validtion.service';
import { ErrorMsgService } from 'src/app/service/error.service';

declare var $: any;

@Component({
  selector: "app-member-edit-info",
  templateUrl: "./member-edit-info.component.html",
  styleUrls: ["./member-edit-info.component.css"]
})
export class MemberEditInfoComponent implements OnInit, AfterViewInit {
  

  editInfoForm = new FormGroup({
    name: new FormControl({ value: '', disabled: true}),
    phone: new FormControl('', [this.valid.requireValidator('phone')]),
    company: new FormControl('', { updateOn: 'blur', validators: [this.valid.requireValidator('company')] }),
    address: new FormControl('', { updateOn: 'blur', validators: [this.valid.requireValidator('address')] }),
    // birthday: new FormControl({ value: '', disabled: true }),
    // gender: new FormControl({ value: '', disabled: true })
  });

  // 錯誤訊息
  errorMessage;


  constructor(private http: HttpService, private data: DataService, private valid: ValidationService) {}

  ngOnInit() {
    // this.http.checkAuthStatue();
    // 取得會員資料
    const memberData = JSON.parse(this.data.getLocalStorage('userInfo'));
    this.editInfoForm.controls.name.setValue(memberData['userName']);
    this.editInfoForm.controls.phone.setValue(memberData['phone']);
    this.editInfoForm.controls.address.setValue(memberData['address']);
    this.editInfoForm.controls.company.setValue(memberData['company']);

    // TODO: 須加身分證存取的機制
    
  }

  ngAfterViewInit() {
  }


  // submit new edit
  submitData() {

    const r = confirm('確定修改？');

    if(r){

      const controls = this.editInfoForm.controls;

      // 驗證電話
      if (controls.phone.errors !== null) {
        this.errorMessage = ErrorMsgService.getErrorMsg(controls.phone.errors.validationResult);
        $('#errorModal').modal('show');
        return;
      }

      // 驗證公司地址
      if (controls.address.errors !== null) {
        this.errorMessage = ErrorMsgService.getErrorMsg(controls.address.errors.validationResult);
        $('#errorModal').modal('show');
        return;
      }

      // 驗證公司
      if (controls.company.errors !== null) {
        this.errorMessage = ErrorMsgService.getErrorMsg(controls.company.errors.validationResult);
        $('#errorModal').modal('show');
        return;
      }

      // TODO: 須加身分證存取的機制
      
      const info = {
        address: this.editInfoForm.controls.address.value,
        // birthday: this.editInfoForm.controls.birthday.value,
        company: this.editInfoForm.controls.company.value,
        // gender: this.editInfoForm.controls.gender.value,
        phone: this.editInfoForm.controls.phone.value,
        userName: this.editInfoForm.controls.name.value,
        email: firebase.auth().currentUser.email
      }

      const jsonData = JSON.stringify(info);
      
      this.http.editMemberInfo(jsonData)
        .subscribe(re=>{
          this.data.setLocalStorage('userInfo', jsonData);
          // alert(re['msg']);
          this.errorMessage = re['msg'];
          $('#errorModal').modal('show');
        },
        (error)=>{
          // alert(error['msg']);
          console.log('error', error);
          this.errorMessage = error['msg'];
          $('#errorModal').modal('show');
        })
        
    }else{
      return;
    }
    
  }


}
