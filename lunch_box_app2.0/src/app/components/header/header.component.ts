import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin;

  //shoppingCartItemsQunt;

  constructor(private data: DataService, private router: Router, private http: HttpService) { 
    
  }

  ngOnInit() {


    // judge user is sign out?
    if (this.data.getLocalStorage('isLogin') === '1') {
      this.data.isLogin = '1';
    } else if (this.data.getLocalStorage('isLogin') === '2') {
      this.data.isLogin = '2';
    } else {
      this.data.isLogin = '0';
    }

    if (this.data.getLocalStorage('orders')){
      const cartItems = JSON.parse(this.data.getLocalStorage('orders'));
      this.data.shoppingCartItemsQunt = cartItems.length;
    }

  }


  signout(){
    firebase.auth().signOut();
    this.data.isLogin = '0';
    // 刪除 登入記號
    this.data.removeLocalStorage('isLogin');
    // 刪除 暫存會員資料
    this.data.removeLocalStorage('userInfo');
    // 刪除 暫存訂單資料
    this.data.removeLocalStorage('todayOrder');
    // 刪除 暫存今日訂單資料
    this.data.removeLocalStorage('orderList');
    // 刪除 暫存eamil
    this.data.removeLocalStorage('email');
    // 刪除 暫存判定今日是否下訂單記號
    // this.data.removeLocalStorage('orders');
    // 刪除 暫存過去訂單
    this.data.removeLocalStorage('pastOrdersList');
    // 刪除 暫存今日訂單
    this.data.removeLocalStorage('todayOrdersList');
     // 刪除 總回饋
    this.data.removeLocalStorage('totalReward');
    // 刪除 產品資訊
    this.data.removeLocalStorage(this.data.products);
    this.router.navigate([""]);
  }

}
