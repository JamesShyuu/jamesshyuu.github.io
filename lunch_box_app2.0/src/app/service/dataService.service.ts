import { Injectable } from "@angular/core";
import { LocalStorage, SessionStorage } from 'angular-web-storage';


@Injectable()
export class DataService {
  @LocalStorage() localStorage: Object;
  @SessionStorage() sessionStorage: Object;

  // 商品列
  productList;

  // 折價卷
  couponList;

  totalReward = 30;

  userId = 'userId';
  password = 'password';
  userInfo = 'userInfo';
  rewardList = 'rewardList';
  orderList = 'orderList';

  // get product list key
  products = 'products';

  // jugde today had order
  isOrder = 'isOrder';
  
  // 判斷是否已登入
  isLogin = '0';

  // 判斷是否是剛註冊會員 (用於儲存會員資料用)
  isFirstTimeSign = false;

  setMemberInfo = {};

  // jude that user complete the member info form
  isFullMemberForm = true;

  // 是否顯示 spainner
  showSpainner = false;

  // 新增訂單記號  如有新增訂單為true 沒有為 false
  iHadNewOrderToday = false; 

  // 系統錯誤 錯誤訊息
  systemErrorMsg = '';

  // 記錄購物車內目前商品總數
  shoppingCartItemsQunt = 0;

  // 付費方式
  paymentList = [{key:'1', value: '貨到付款'}];

  editOrdersList_ProductPrice;
  editOrdersList_productAmount;
  editOrdersList_productName;
  editOrdersList_total;

  // 存放session
  public setSession(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }

  // 取session
  public getSession(key: string) {
    return sessionStorage.getItem(key);
  }

  // 存cookie
  public setLocalStorage(key: string, value: string){
    localStorage.setItem(key, value)
  }
  // 取得cookie 內容
  public getLocalStorage(key: string){
    return localStorage.getItem(key);
  }

  // 刪除cookie
  public removeLocalStorage(key: string){
    localStorage.removeItem(key);
  }

  cityList = [{name: "台北市"}];

  districtList = [{ name: "內湖區"}];

  testDate;



  // adminDataModel = {
  //   userId: "admin123@gmail.com",
  //   password: "1234",
  //   todayOrder: [
  //     { 
  //       memberNo: "AXcd23412", 
  //       name: "李約瀚", 
  //       phone: "0911222333", 
  //       address: "台北市內湖區瑞光路", 
  //       reward: 27,
  //       createTime: "20190402",
  //       orders: [
  //         { no: "1", productName: "1", amount: 10 },
  //         { no: "2", productName: "0", amount: 5 },
  //       ]
  //     }
  //   ],
  //   orderList: [
  //     {
  //       memberNo: "AXcd23412",
  //       name: "林喬伊",
  //       phone: "0922333111",
  //       address: "台北市內湖區瑞光路",
  //       reward: 40,
  //       createTime: "20190315",
  //       orders: [
  //         { productName: "1", amount: 10 },
  //         { productName: "0", amount: 5 },
  //       ]
  //     },
  //     {
  //       memberNo: "AXcd23412",
  //       name: "李約瀚",
  //       phone: "0911222333",
  //       address: "台北市內湖區瑞光路",
  //       reward: 27,
  //       createTime: "20190402",
  //       orders: [
  //         { productName: "1", amount: 6 },
  //         { productName: "0", amount: 5 },
  //       ]
  //     }
  //   ]
  // }

  // test_userData = [
  //   {
  //     id: "j123",
  //     password: "1234",
  //     name: "林約翰",
  //     phone: "0911222333",
  //     email: "loveyou@gmail",
  //     company: "日商熱天",
  //     address: "台北市內湖區瑞光路",
  //     isManager: "0",
  //     today_order: {},
  //     orderInfo: {
  //       "2019/03/15": [
  //         { productName: "1", amount: "10", no: "1", name:"", phone:"", address: ""},
  //         { productName: "0", amount: "5", no: "2", name: "", phone: "", address: ""},
  //       ],
  //       "2019/04/02": [
  //         { productName: "1", amount: "10", no: "1", name: "", phone: "", address: ""},
  //         { productName: "0", amount: "5", no: "2", name: "", phone: "", address: ""},
  //       ]
  //     }
      
  //   },
  //   {
  //     id: "j321",
  //     password: "4321",
  //     name: "張珍妮",
  //     phone: "0911222333",
  //     email: "manager@gmail",
  //     company: "",
  //     address: "",
  //     isManager: "1"
  //   }
  // ];

  signInData = [];

  // product = [
  //   { key: "1", value: "便當", price: "60" },
  //   { key: "2", value: "水果", price: "30" }
  // ];



  // registerAddData(data) {
  //   this.test_userData.push(data);
  //   this.signInData.push(data);
  // }

  
}
