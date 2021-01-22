import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import * as firebase from 'firebase';
import { UtilsService } from 'src/app/service/utilsService.service';
import { ValidationService } from 'src/app/service/validtion.service';
import { ErrorMsgService } from 'src/app/service/error.service';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  memberInfo: Object;

  todayOrdersList = [];

  pastOrdersList = [];

  // 判斷 是否要顯示 spainner
  showSpainner = false;

  // error msg
  errorMessage = '';

  constructor(private data: DataService, private router: Router,
    private http: HttpService, private utils: UtilsService, private valid: ValidationService, private location: Location) { }

  ngOnInit() {
    $('#errorModal').modal('hide');
  }

  login(id: string, password: string) {
    
    this.errorMessage = "";

    if(!id){
      this.errorMessage = ErrorMsgService.getErrorMsg('requiredEmail');
      $('#errorModal').modal('show');
      return;
    }

    if(!password){
      this.errorMessage = ErrorMsgService.getErrorMsg('requiredPassword');
      $('#errorModal').modal('show');
      return;
    }

    // 判斷 是否要顯示 spainner
    this.showSpainner = true;
    
    firebase.auth().signInWithEmailAndPassword(id, password)
    .then((user)=>{
      console.log('login succedd', user);
      this.http.getUserData(id)
        .subscribe(res => {
          console.log('memner Cent', res);
          // 判斷是否為管理者
          if (res['value']['isAdmin']) {
            this.signInSuccess(res['value']['isAdmin']);
          } else {
            // 本機暫存使用者資訊
            this.data.setLocalStorage('userInfo', JSON.stringify(res['value']['userInfo']));

            this.data.setLocalStorage('todayOrder', JSON.stringify(res['value']['todayOrder']));
            // 本機暫存訂單資訊
            this.data.setLocalStorage('orderList', JSON.stringify(res['value']['orderList']));

            //console.log("total reward:",res['value']['totalReward']);
            // 取得回饋
            this.data.setLocalStorage('totalReward', res['value']['totalReward'].toString());

            for (let x = 0; res['value']['orderList'].length > x; x++) {
              // 今日訂單
              if (this.utils.getToday() === res['value']['orderList'][x]['createTime']) {
                this.todayOrdersList.push(res['value']['orderList'][x]);

              } else {
                // 過去訂單
                this.pastOrdersList.push(res['value']['orderList'][x]);
              }
            }
            console.log('login today order', this.todayOrdersList);
            console.log('login past order', this.pastOrdersList);
            this.data.setLocalStorage('pastOrdersList', JSON.stringify(this.pastOrdersList));
            this.data.setLocalStorage('todayOrdersList', JSON.stringify(this.todayOrdersList));

            // 本機暫存信箱 帳號
            this.data.setLocalStorage('email', res['value']['email']);
            this.signInSuccess(res['value']['isAdmin']);
          }
          // 判斷 是否要顯示 spainner
          this.showSpainner = false;

        },
          (error) => {
            console.log('memner Cent error');
            // 判斷 是否要顯示 spainner
            this.showSpainner = false;
          })
      // this.signInSuccess();
    }).catch((error)=>{
      console.log(error);
      this.showSpainner = false;
      this.errorMessage = ErrorMsgService.getErrorMsg(error.code);
      // this.errorMessage = error.message;
      $('#errorModal').modal('show');
    })


    

    

   /*  const user = firebase.auth().currentUser;
    console.log('this is current user data', user); */

    
    // firebase.auth().onAuthStateChanged(user => {
    //   if(user){
    //     console.log('I am login page', user.uid);
       
    //   }else {
    //     console.log('I am login page, not thing happen!')
    //   }
    // })


    /* if (this.memberInfo){
      this.data.setSession(this.data.isLogin, true);
      alert(this.memberInfo['userInfo'].userName + '歡迎登入!!');
    } else {
      return "error";
    } */
    
    
    
    
    // server 端來
    // this.http.login();
  }

  //sign in success
  signInSuccess(isAdmin){
    // 判斷是否是管理者
    if (isAdmin){
      this.data.setLocalStorage('isLogin', '2');
      this.data.isLogin = '2';
      this.router.navigate(['manager']);
    } else {
      this.data.setLocalStorage('isLogin', '1');
      this.data.isLogin = '1';
      if (this.utils.getPreviousUrl() == "/shopping-cart"){
        this.location.back();
      } else {
        this.router.navigate(['']);
      }
      
      //this.router.navigate(['member']);
    }

    
  }



  // 忘記密碼
  forgetPassword(){
    $('#forgetPasswordModal').modal('show');
  }

}
