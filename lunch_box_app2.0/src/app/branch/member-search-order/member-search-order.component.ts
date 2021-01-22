import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService.service';
import { UtilsService } from 'src/app/service/utilsService.service';
import { HttpService } from 'src/app/service/http.service';

declare var $: any;

@Component({
  selector: "app-member-search-order",
  templateUrl: "./member-search-order.component.html",
  styleUrls: ["./member-search-order.component.css"]
})
export class MemberSearchOrderComponent implements OnInit, AfterViewInit {
  // 訂單總資訊
  orderList = [];

  // 今日訂單
  todayOrders = [];
  // 過去訂單
  pastOrders = [];

  // 便當詳情
  ordersInfo = [];

  productList = [];

  errorMessage = '';

  showSpainner = false;

  // 總價
  totalPrice = 0;

  // 使用回饋
  rewardForthputting = '';

  // 使用優惠卷
  couponForthputting = '';

  constructor(private data: DataService, private utils: UtilsService, private http: HttpService) {}

  ngOnInit() {

    // 詳情 modal 預設關閉
    $('#searchOrderModal').modal('hide');

    $('#errorModal').modal('hide');

    // 取得商品資訊
    if (this.data.getLocalStorage('products')){
      this.productList = JSON.parse(this.data.getLocalStorage('products'));
    } else {
      // 如沒有資訊重取一次
      this.showSpainner = true;
      this.http.getProductAndReward()
        .subscribe((data) => {
          this.productList = data['value'];
          this.data.setSession('products', JSON.stringify(data['value']));
          this.data.setLocalStorage('products', JSON.stringify(data['value']));
          this.showSpainner = false;
        }, 
        (error)=>{
          this.showSpainner = false;
        })
    }
    

    // 取訂單資訊
    // 先判斷 本機是否有存資料 
    if (this.data.getLocalStorage('orderList')){
      // 判斷今日是否有新增訂單
      if (!this.data.iHadNewOrderToday){
        this.orderList = JSON.parse(this.data.getLocalStorage('orderList'));
        
        // 分類過去訂單與今日訂單
        if (this.data.getLocalStorage('pastOrdersList')) {
          this.pastOrders = JSON.parse(this.data.getLocalStorage('pastOrdersList'));
        } else {
          this.getUserOrders();
        }
        // 今日訂單
        if (this.data.getLocalStorage('todayOrdersList')) {
          this.todayOrders = JSON.parse(this.data.getLocalStorage('todayOrdersList'));
        } else {
          this.getUserOrders();
        }

      } else {
        // 如沒有新訂單資訊 重新 取一次
        if (this.data.getLocalStorage('email')) {
          this.getUserOrders();
        } else {
          this.errorMessage = '系統問題，請重新登入';
          $('#errorModal').modal('show');
        }
      }
      

    } else {
      // 如沒有訂單資訊 重新接取一次
      if (this.data.getLocalStorage('email')) {
        this.showSpainner = true;
        this.http.searchOrder(this.data.getLocalStorage('email'))
          .subscribe(data => {
            console.log(data);
            if (data['value']) {
              this.todayOrders = data['value']['todayList'];
              this.pastOrders = data['value']['pastList'];
              this.data.setLocalStorage('todayOrdersList', JSON.stringify(this.todayOrders));
              this.data.setLocalStorage('pastOrdersList', JSON.stringify(this.pastOrders));
              this.data.iHadNewOrderToday = false;
            } else {
              this.errorMessage = data['msg'];
              $('#errorModal').modal('show');
            }
            this.showSpainner = false;
          },
          (error)=>{
            this.errorMessage = error['msg'];
            this.showSpainner = false;
          })
      } else {
        this.errorMessage = '系統問題，請重新登入';
        $('#errorModal').modal('show');
      }
    }
    
  }

  ngAfterViewInit() {}

  checkOrderInfo(item){
    $('#searchOrderModal').modal('show');

    this.ordersInfo = item.orders;
    this.totalPrice = item.totalPrice;
    this.rewardForthputting = item.rewardForthputting ? '-' + item.rewardForthputting : '';
    this.couponForthputting = item.couponForthputting ? '-' + item.couponForthputting : '';
  }

  closeModal(){
    $('#searchOrderModal').modal('hide');
  }

  // 取得使用者訂單資訊
  getUserOrders(){
    this.showSpainner = true;
    this.http.searchOrder(this.data.getLocalStorage('email'))
      .subscribe(data => {
        // console.log(data);
        
        if (data['value']) {
          this.todayOrders = data['value']['todayList'];
          this.pastOrders = data['value']['pastList'];
          this.data.setLocalStorage('todayOrdersList', JSON.stringify(this.todayOrders));
          this.data.setLocalStorage('pastOrdersList', JSON.stringify(this.pastOrders));
          this.data.iHadNewOrderToday = false;
        } else {
          this.errorMessage = data['msg'];
          $('#errorModal').modal('show');
        }
        this.showSpainner = false;
      },
      (error) => {
        this.errorMessage = error['msg'];
        this.showSpainner = false;
      })
  }

}
