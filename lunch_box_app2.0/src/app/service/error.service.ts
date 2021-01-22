import { Injectable } from "@angular/core";

@Injectable()
export class ErrorMsgService {
    
    /**
    * @description 取得驗證錯誤訊息
    * @param validatorKey
    */
    static getErrorMsg(validatorKey: string){
        const config = {
            'required': '為必填',
            'invalidEmail': '信箱格式錯誤',
            'invalidPwLength': '密碼字數至少需6個字',
            'requiredEmail': '請填寫信箱',
            'requiredPassword': '請填寫密碼',
            'invalidRepassword': '請再次確認密碼',
            'requiredPhone': '請填電話號碼',
            'requiredAddress': '請填公司地址',
            'requiredName': '請填姓名',
            'requiredCompany': '請填公司名稱',
            'requiredAmount': '數量不得為零或空白',
            'invalidTotalAmount': '商品總數需超過5份',
            'invalidLastTime': '抱歉！ 今日已截止訂購，請於上午10點前訂購',
            'invalidBeginTime': '抱歉！ 今日還未開放訂購，上午9點開始訂購',
            'invalidNetWork': '網路連線有問題，請再次確認',
            'invalidPersonalId': '身分證格式錯誤',
            'invalidCouponAndReward': '折扣碼與回饋二擇一',

            // server side msg
            'auth/wrong-password': '密碼錯誤或密碼欄位空白',
            'auth/user-not-found': '查無此帳號，請確認帳號是否輸入正確',
            'auth/invalid-email': '信箱格式錯誤',
            'auth/user-disabled': '此信箱有誤或已被停用',
            'auth/email-already-exists': '此帳號已被註冊'


        }
        return config[validatorKey];
    }
}