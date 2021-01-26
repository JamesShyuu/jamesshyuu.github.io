import { Injectable } from "@angular/core";
import { AsyncValidatorFn, AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";
import { ErrorMsgService } from "./error.service";

declare var $: any;

@Injectable()
export class ValidationService{
    // 正則中文
    regChinese = /\u4E00-\u9FFF/;
    // 正則數字
    regNumberic = /[^1-9]/i;
    // 正則英文
    regEnglish = /A-Za-z/;
    // 正則email
    regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;


    // reactive form 正則驗證
    forbiddenValidator(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const forbidden = nameRe.test(control.value);
            return forbidden ? { 'forbidden': { value: control.value } } : null;
        };
    }

    /**
    * @description 檢查 e-amil
    * @param value
    */
    emailValidator(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const reg = new RegExp('^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$');
            if (!control.value){
                return { validationResult: 'requiredEmail' };
            }
            if (!reg.test(control.value)) {
                return { validationResult: 'invalidEmail' };
            } else {
                return null;
            }
        }
       
   }

    
    /**
     * @description 檢查 密碼 格式
     * @param value
     */
    passwordValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value){
                return { validationResult: 'requiredPassword' };
            }
            if (control.value.length < 6) {
                return { validationResult: 'invalidPwLength'};
            } else {
                return null;
            }
        }

    }

    /**
    * @description 檢查 身分證
    * @param value
    */
    personalIdValidator(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const check_pair = new Array(10, 11, 12, 13, 14, 15, 16, 17, 34, 18, 19,
                20, 21, 22, 35, 23, 24, 25, 26, 27, 28, 29, 32, 30, 31, 33);

            const pidCharArray = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                'U', 'V', 'W', 'X', 'Y', 'Z');

            const pidIDInt = new Array(1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2,
                11, 20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30);

            // 驗證身分證格式
            if (!this.gsIsAlpha(control.value) || control.value.length !== 10 ||
                check_pair[control.value.charCodeAt(0) - 'A'.charCodeAt(0)] < 0 ||
                (control.value.charAt(1) !== '1' && control.value.charAt(1) !== '2')) {
                return { validationResult: 'invalidPersonalId' };
                // error = 1;
            } else {
                for (let i = 2; i < 10; i++) {
                    if (!this.gsIsDigit(control.value.charAt(i))) {
                        return { validationResult: 'invalidPersonalId' };
                    }
                }

                const s = control.value.split('');
                let num = 0;

                if (control.value.match(/[A-Z]{1}[1-2]{1}[0-9]{8}/)) {
                    num += pidIDInt[pidCharArray.indexOf(s[0])];

                    for (let i = 1, j = 8; i < 9; i++ , j--) {
                        num += parseInt(s[i], 10) * j;
                    }

                    num = (10 - (num % 10)) % 10;

                    if (num === parseInt(s[9], 10)) {
                        return null;
                    } else {
                        return { validationResult: 'invalidPersonalId' };
                    }
                }
                return { validationResult: 'invalidPersonalId' };
            }
        }
    }

    /**
    * @description 欄位必填 姓名 電話 公司名稱 公司地址
    * @param key
    */
    requireValidator(key): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value){
                switch (key) {
                    case 'phone':
                        return { validationResult: 'requiredPhone' };
                    
                    case 'address':
                        return { validationResult: 'requiredAddress'};

                    case 'name':
                        return { validationResult: 'requiredName' };
                    
                    case 'company':
                        return { validationResult: 'requiredCompany' };

                }
            } else {
                return null;
            }
            
        } 
    }

    /**
    * @description 數量必填
    * 
    */
    amountValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            
            if (control.value == "0" || !control.value) {
                return { validationResult: 'requiredAmount' };
            } else {
                return null;
            }
        }

    }

    /**
     * @description 驗證
     * @param value
     * @return tota
     */
    customizedValidator(validation: ValidationErrors, customized?: string){
        const key = Object.keys(validation);
        const errorMsg = ErrorMsgService.getErrorMsg(key[0]);
        if (key[0] === 'required') {
            return customized + errorMsg;
        } else {
            return errorMsg;
        }

    }

    checkEmail(email){
        const reg = new RegExp('^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$');
        if (!reg.test(email)){
            return false;
        } else {
            return true;
        }
    }

    checkNumber(value){
        const reg = /^[0-9\s]*$/;
        if (!reg.test(value)){
            return false;
        } else {
            return true;
        }
    }


    private gsIsAlpha(c: string) {
        const reg = new RegExp(/[A-Za-z]/);
        return (!(c.charAt(0).search(/[A-Za-z]/)));
    }

    private gsIsDigit(c) {
        const reg = new RegExp(/[0-9]/);
        return (!(c.charAt(0).search(reg)));
    }



}