import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { DataService } from 'src/app/service/dataService.service';
import { UtilsService } from 'src/app/service/utilsService.service';

declare var $: any;

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.css']
})
export class AdminOrderListComponent implements OnInit {

  // 今日訂單
  todayList = [];
  // 過去訂單
  pastList = [];

  // 是否顯示列表
  // isShowInfo = false;
  // 判斷是否有過去訂單
  hadOrdersToday = false;

  // 判斷是否有今日訂單
  hadPastOrder = false;

  // 便當詳情
  ordersInfo = [];

  // 訂購者資訊
  userInfo = [];

  products

  showSpainner = false;

  // 總價
  totalPrice = 0;

  // 使用回饋
  rewardForthputting = '';

  // 使用優惠卷
  couponForthputting = '';

  constructor(private http: HttpService, private data: DataService, private utils: UtilsService) { }

  ngOnInit() {
    // 判斷是否本機第一次登入 第一次登入向server取今日訂單
    // if (!this.data.getLocalStorage('todayOrders_admin')){
    //   this.http.getTodayOrders_admin().subscribe(data => {
    //     console.log(data);
    //     console.log('success');
    //     this.todayList = data['ar'];
    //     this.data.setLocalStorage('todayOrders_admin', JSON.stringify(data['ar']));
    //   },
    //   error => {
    //     console.log('fails')
    //   });
    // } else {
    //   // 如以登入直接
    //   this.todayList = JSON.parse(this.data.getLocalStorage('todayOrders_admin'));
    // }

    // 登入取今日訂單
    this.showSpainner = true;
    this.http.getTodayOrders_admin().subscribe(data => {
      console.log(data);
      console.log('success');
      // this.todayList = data['ar'];
      this.hadOrdersToday = false;
      this.hadPastOrder = false;
      this.todayList = [];
      this.pastList = [];
      // this.isShowInfo = true;
      for (let x = 0; data['value'].length > x; x++){
        for (let y = 0; data['value'][x]['newOrder'].length > y; y++){
          // 判斷今日與過去
          if (this.utils.getToday() === data['value'][x]['newOrder'][y]['createTime']){
            this.todayList.push(data['value'][x]['newOrder'][y]);
          } else {
            this.pastList.push(data['value'][x]['newOrder'][y]);
          }
          
        }
      }
      // 判斷是否要顯示今日訂單
      if (this.todayList.length != 0) {
        this.hadOrdersToday = true;
      }
      // 判斷是否要顯示過去訂單
      if (this.pastList.length != 0){
        this.hadPastOrder = true;
      }
      this.showSpainner = false;
      // this.data.setLocalStorage('todayOrders_admin', JSON.stringify(data['ar']));
    },
    error => {
      console.log('fails');
      this.showSpainner = false;
    });



    // 取得商品資訊
    if (this.data.getLocalStorage('products')){
      // 如有順利首頁有順利拿取商品資訊 向本機拿取
      this.products = JSON.parse(this.data.getLocalStorage('products'));
      console.log(this.products);
    } else {
      // 如首頁拿取失敗 再向server拿取一次
      this.showSpainner = true;
      this.http.getProductAndReward()
        .subscribe((data) => {
          this.data.setSession('products', JSON.stringify(data['value']));
          this.data.setLocalStorage('products', JSON.stringify(data['value']));
          this.products = data['value'];
          console.log(this.products);
          this.showSpainner = false;
        })
    }
    
  }

  checkOrderInfo(item){
    this.userInfo.splice(0, 1);
    this.ordersInfo = item['orders'];
    this.totalPrice = item.totalPrice;
    this.rewardForthputting = item.rewardForthputting ? '-' + item.rewardForthputting : '';
    this.couponForthputting = item.couponForthputting ? '-' + item.couponForthputting : '';
    this.userInfo.push(item);
    $('#orderInfoModal').modal('show');
  }

  closeModal(){
    $('#orderInfoModal').modal('hide');
  }



}
