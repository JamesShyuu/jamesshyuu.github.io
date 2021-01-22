import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/dataService.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { ValidationService } from 'src/app/service/validtion.service';
import * as firebase from 'firebase';
import { ErrorMsgService } from 'src/app/service/error.service';
import { UtilsService } from 'src/app/service/utilsService.service';

declare var $: any;

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit, AfterViewInit {
  registForm = new FormGroup({
    account: new FormControl(""),
    password: new FormControl("", { updateOn: 'blur', validators: [this.valid.passwordValidator()]}),
    password2: new FormControl(""),
    name: new FormControl("", { updateOn: 'blur', validators: [this.valid.requireValidator('name')]}),
    // personalId: new FormControl("", { updateOn: 'blur', validators: [this.valid.personalIdValidator()] }),
    // birthday: new FormControl(""),
    // gender: new FormControl(""),
    phone: new FormControl("", [this.valid.requireValidator('phone')]),
    company: new FormControl("", { updateOn: 'blur', validators: [this.valid.requireValidator('company')] }),
    address: new FormControl("", { updateOn: 'blur', validators: [this.valid.requireValidator('address')] }),
    city: new FormControl({ value: '', disabled: true }),
    district: new FormControl({ value: '', disabled: true })
  });

  cityList;

  districtList;

  // 判斷 是否要顯示 spainner
  showSpainner = false;

  // 錯誤訊息
  errorMessage;

  constructor(private data: DataService, private router: Router, 
    private http: HttpService, private valid: ValidationService, private utils: UtilsService) {}

  ngOnInit() {
    this.cityList = this.data.cityList;
    this.districtList = this.data.districtList;

    this.registForm.controls.city.setValue(this.cityList[0].name);
    this.registForm.controls.district.setValue(this.districtList[0].name);
  }

  ngAfterViewInit() {
  }

  // testError(){
  //   this.testMsg = 'i am modal test';
  //   $('#errorModal').modal('show');
  // }

  // showLog(){
  //   let controls = this.registForm.controls;
  //   console.log(this.registForm);
  //   if (controls.password.errors) {
  //     this.errorMessage = this.valid.customizedValidator(controls.password.errors);
  //     // this.errorMessage = ErrorMsgService.getErrorMsg(controls.password.errors.validationMsg);
  //     $('#errorModal').modal('show');
  //   }
  // }

  // submit user info
  onSubmit() {
    let controls = this.registForm.controls;

   

    // 驗證密碼
    if (controls.password.errors !== null) {
      this.errorMessage = ErrorMsgService.getErrorMsg(controls.password.errors.validationResult);
      // this.errorMessage = this.valid.customizedValidator(controls.password.errors);
      $('#errorModal').modal('show');
      return;
    }


    // 驗證兩組密碼是否一樣
    if (this.registForm.controls.password2.value !== this.registForm.controls.password.value) {
      this.errorMessage = ErrorMsgService.getErrorMsg('invalidRepassword');
      $('#errorModal').modal('show');
      return;
    }

    // 驗證姓名
    if (controls.name.errors !== null) {
      this.errorMessage = ErrorMsgService.getErrorMsg(controls.name.errors.validationResult);
      
      $('#errorModal').modal('show');
      return;
    }


    // 驗證身分證
    // if (controls.personalId.errors !== null) {
    //   this.errorMessage = ErrorMsgService.getErrorMsg(controls.personalId.errors.validationResult);

    //   $('#errorModal').modal('show');
    //   return;
    // }

    // 驗證電話
    if (controls.phone.errors !== null) {
      this.errorMessage = ErrorMsgService.getErrorMsg(controls.phone.errors.validationResult);
      $('#errorModal').modal('show');
      return;
    }

    // 驗證公司地址
    if (controls.address.errors !== null) {
      this.errorMessage = ErrorMsgService.getErrorMsg(controls.address.errors.validationResult);
      // this.errorMessage = this.valid.customizedValidator(controls.password.errors);
      $('#errorModal').modal('show');
      return;
    }

    // 驗證公司
    if (controls.company.errors !== null) {
      this.errorMessage = ErrorMsgService.getErrorMsg(controls.company.errors.validationResult);
      // this.errorMessage = this.valid.customizedValidator(controls.password.errors);
      $('#errorModal').modal('show');
      return;
    }

    this.showSpainner = true;

    const form = {
      email: this.registForm.controls.account.value,
      password: this.registForm.controls.password.value,
      userName: this.registForm.controls.name.value,
      // birthday: this.registForm.controls.birthday.value,
      // gender: this.registForm.controls.gender.value,
      phone: this.registForm.controls.phone.value,
      address: this.registForm.controls.city.value + this.registForm.controls.district.value + this.registForm.controls.address.value,
      company: this.registForm.controls.company.value,
      createTime: this.utils.getToday() //20191126修改
    }

     // FIX: this is hard code use formgroup
    this.http.registerPermisson(JSON.stringify(form))
    .subscribe(data=>{
      // console.log(data);
      if (data['key'] === 's'){
        this.data.setLocalStorage('userInfo', JSON.stringify(data['value']['userInfo']));
        this.data.setLocalStorage('todayOrder', JSON.stringify(data['value']['todayOrder']));
        this.data.setLocalStorage('orderList', JSON.stringify(data['value']['orderList']));
        this.data.setLocalStorage('email', data['value']['email']);
        this.registerSuccess(this.registForm.controls.account.value, this.registForm.controls.password.value);
      } else {
        this.showSpainner = false;
        if (data['value']['code']){
          this.errorMessage = ErrorMsgService.getErrorMsg(data['value']['code']);
        } else {
          this.errorMessage = "加入會員失敗，請檢查網路是否正常";
        }
        
        $('#errorModal').modal('show');
      }
      
    },
    (error)=>{
      // console.log('add member fails');
      this.showSpainner = false;
      this.errorMessage = "加入會員失敗，請檢查網路是否正常";
      $('#errorModal').modal('show');
    })
    

  }


  // execute this function when register success
  registerSuccess(email, password){
    
    this.data.setLocalStorage('isLogin', '1');
    this.data.isLogin = '1';
    // this.data.isFullMemberForm = false;
    // this.data.setSession('isFullMemberForm', '0');

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('login succedd', user);
        this.showSpainner = false;
        alert("感謝你加入");
        this.router.navigate(["member"]);
      }).catch((error) => {
        console.log(error);
        this.showSpainner = false;
        this.errorMessage = "加入會員失敗，請檢查網路是否正常";
        $('#errorModal').modal('show');
      })
    
  }


  

}
