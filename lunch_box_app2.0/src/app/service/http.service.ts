import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from "../model/user.model";
import * as firebase from 'firebase/app';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from "./dataService.service";


@Injectable()
export class HttpService {
    allData: object;
    memberInfo: object;
    
    constructor(private db: AngularFirestore, private http: HttpClient, private data: DataService){}



    // check user login or register statue
    checkAuthStatue(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user.uid);
                return user.uid;
            } else {
                console.log('not thing happen!');
                return null;
            }
        })
    }


   

    // test
    loadAllData(){
        this.db.collection('/search-test').valueChanges()
            .subscribe(snaps => {
                this.allData = snaps.map(snap => {
                    console.log(snap);
                    /* return <User>{
                        userInfo: snap['userInfo'],
                        rewardList: snap['rewardList'],
                        orderList: snap['orderList']
                    } */
                    
                })
                
                
            });
        return this.allData;
    }

    // test
    getMemberData(id: string, password: string) {
        this.db.collection('member').valueChanges()
            .subscribe(members => {
                console.log(members);
                this.memberInfo = members.map(member => {
                    if (member['userId'] === id && member['password'] === password) {
                        return  <User>{
                          userInfo: member['userInfo'],
                          rewardList: member['rewardList'],
                          orderList: member['orderList']
                        }
                        
                    }

                })
            })
        return this.memberInfo;
    }



    registerPermisson(form){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers
        };
        return this.http.post('https://us-central1-test-lunch-box1.cloudfunctions.net/signinPermission', form, options);
    }



    getMemberInfo(email){
        return this.http.post('https://us-central1-test-lunch-box1.cloudfunctions.net/getMemberInfo', email);
    }

    editMemberInfo(memberInfo){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers
        };
        return this.http.post('https://us-central1-test-lunch-box1.cloudfunctions.net/editMemberInfo', memberInfo, options);
    }

    // member login
    getUserData(email){
        const json = JSON.stringify({
            email: email
        })
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers
        };
        return this.http.post('https://us-central1-test-lunch-box1.cloudfunctions.net/getUserData', json, options);
            
    }

    getProductAndReward(){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers
        };
        return this.http.get('https://us-central1-test-lunch-box1.cloudfunctions.net/getProductData', options);
    }



    // delete a today order
    deleteOrder(orderNo: string){
        return this.http.post('', orderNo);
    }

    // 會員查詢訂單
    searchOrder(email: string){
        const json = JSON.stringify({
            email: email
        })
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers
        };
        return this.http.post('https://us-central1-test-lunch-box1.cloudfunctions.net/searchTodayOrders_member', json, options);
    }

    // edit your today order
    editOrder(newOrder: object){
        return this.http.post('', newOrder);
    }

    // add a new product
    newProduct(productInfo){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers
        };
        return this.http.post('https://us-central1-test-lunch-box1.cloudfunctions.net/newOrders', productInfo, options)
    }

   

    // 管理者 取得今日顧客訂單
    getTodayOrders_admin(){
        return this.http.get('https://us-central1-test-lunch-box1.cloudfunctions.net/getTodayOrders');
    }

    // 管理者 刪除今日顧客訂單
    deleteTodayOrder_admin(){
        return this.http.get('https://us-central1-test-lunch-box1.cloudfunctions.net/delectTodayOrders_admin');
    }

    // 取得優惠卷
    getCoupon(){
        return this.http.get('https://us-central1-test-lunch-box1.cloudfunctions.net/getCounpons');
    }

    // 新增優惠卷
    setCoupon(newCoupon){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers
        };
        return this.http.post('https://us-central1-test-lunch-box1.cloudfunctions.net/setCoupon', newCoupon, options);
    }

    deleteCoupon(deleteCoupon){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers
        };
        return this.http.post('https://us-central1-test-lunch-box1.cloudfunctions.net/deleteCoupon', deleteCoupon, options);
    }

}
