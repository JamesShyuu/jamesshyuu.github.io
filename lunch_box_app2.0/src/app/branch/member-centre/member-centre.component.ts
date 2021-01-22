import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService.service';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { ErrorMsgService } from 'src/app/service/error.service';

declare var $: any;

@Component({
  selector: "app-member-centre",
  templateUrl: "./member-centre.component.html",
  styleUrls: ["./member-centre.component.css"]
})
export class MemberCentreComponent implements OnInit {
  memberInfoGroup = new FormGroup({
    name: new FormControl(""),
    birthday: new FormControl(""),
    gender: new FormControl(""),
    phone: new FormControl(""),
    company: new FormControl(""),
    address: new FormControl("")
  })

  contentOption: string;
  userName: string;
  isFullForm;

  // 判斷是否顯示loading畫面
  showSpainner = false;

  // 錯誤訊息內容
  errorMessage = '';

  constructor(private data: DataService, private http: HttpService, private router: Router) {}

  ngOnInit() {
    $('#errorModal').modal('hide');
    this.contentOption = "0";
    this.userName = JSON.parse(this.data.getLocalStorage('userInfo'))['userName'];

    if (!this.data.getLocalStorage('products')) {
      this.showSpainner = true;
      this.http.getProductAndReward()
        .subscribe((data) => {
          console.log('product list:', data);
          this.data.setSession('products', JSON.stringify(data['value']));
          this.data.setLocalStorage('products', JSON.stringify(data['value']));
          this.showSpainner = false;
        },
        (error)=>{
          this.showSpainner = false;
          this.errorMessage = ErrorMsgService.getErrorMsg('invalidNetWork');
          $('#errorModal').modal('show');
        })
    } else {
      this.showSpainner = false;
    }

    // jugde that user is first time login
    /* this.http.isFullMemberForm(firebase.auth().currentUser.email)
      .subscribe(data=>{
        console.log('this is Full Form', data);
        
        if (data === false && this.http.checkAuthStatue !== null) {
          $('#userInfoForm').modal('show');

        }
      }) */

      // check member is still login
    // console.log('check auth', this.http.checkAuthStatue());


    // first time signin get user data
    // if(!this.data.getLocalStorage('email')){
    //   this.http.getUserData(firebase.auth().currentUser.email)
    //     .subscribe(res=>{
    //       console.log('memner Cent', res);
    //       this.data.setLocalStorage('userInfo', JSON.stringify(res['value']['userInfo']));
    //       this.data.setLocalStorage('todayOrder', JSON.stringify(res['value']['todayOrder']));
    //       this.data.setLocalStorage('orderList', JSON.stringify(res['value']['orderList']));
    //       this.data.setLocalStorage('email', res['value']['email']);
    //     },
    //     (error)=>{
    //       console.log('memner Cent error');
    //     })
    // }


    // user options tool
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  }

  pageSwitch(option: string) {
    this.contentOption = option;
  }

  // submitMemberInfo(){
  //   if (!this.memberInfoGroup.controls.name.value){
  //     alert("請填寫姓名");
  //     return;
  //   }
  //   if (!this.memberInfoGroup.controls.birthday.value){
  //     alert("請填寫生日");
  //     return;
  //   }
  //   if (!this.memberInfoGroup.controls.gender.value) {
  //     alert("請填寫性別");
  //     return;
  //   }
  //   if (!this.memberInfoGroup.controls.phone.value) {
  //     alert("請填寫手機");
  //     return;
  //   }
  //   if (!this.memberInfoGroup.controls.company.value) {
  //     alert("請填寫公司名稱");
  //     return;
  //   }
  //   if (!this.memberInfoGroup.controls.address.value) {
  //     alert("請填寫地址");
  //     return;
  //   }


  //   const setMemberInfo = {
  //     email: firebase.auth().currentUser.email,
  //     userName: this.memberInfoGroup.controls.name.value,
  //     birthday: this.memberInfoGroup.controls.birthday.value,
  //     gender: this.memberInfoGroup.controls.gender.value,
  //     phone: this.memberInfoGroup.controls.phone.value,
  //     address: this.memberInfoGroup.controls.address.value,
  //     company: this.memberInfoGroup.controls.company.value,
  //   }

  //   console.log('setMemberInfo', setMemberInfo);
  //   console.log(JSON.stringify(setMemberInfo));

  //   this.http.register(JSON.stringify(setMemberInfo))
  //     .subscribe((info)=>{
  //       console.log('謝謝填寫', info);
  //       this.data.isFullMemberForm = true;
  //       this.data.setSession('isFullMemberForm', '1');
  //       alert('謝謝填寫');
  //       $('#userInfoForm').modal('hide');
  //     },
  //     (error)=>{
  //       // alert('抱歉！系統問題請重新填寫');
  //       console.log('抱歉！系統問題請重新填寫', error);
  //       this.data.isFullMemberForm = true;
  //       this.data.setSession('isFullMemberForm', '1');
  //       alert('謝謝填寫');
  //       $('#userInfoForm').modal('hide');
  //     })

    
  // }

  // closeModal(){
  //   $('#userInfoForm').modal('hide');
  //     this.router.navigate([""]);
  // }

}
