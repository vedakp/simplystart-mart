import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { REGEX } from './constants';

@Injectable({
  providedIn: 'root'
})
export class CommonfunctionService {

  constructor(
    public toastController: ToastController
  ) { }

  validateEmail(email) {
    return REGEX.email.test(String(email).toLowerCase());
  }

  async showToast(message, showCancelbutton: boolean, position: "top" | "bottom" | "middle", duration = 5000) {
    let toastObj = {
      message: message,
      position: position,
      duration: duration,
    };

    if (showCancelbutton) {
      toastObj['buttons'] = [{
        text: 'Close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }];
    }
    let toast = await this.toastController.create(toastObj);
    
    toast.present();
  }

  setLocalstorageItem(key,value){
    return new Promise(async (resolve,reject)=>{
      try{
        await localStorage.setItem(key,value);
        resolve(true);
      }catch(err){
        reject(err);
      }
    })
  }

  getLocalstorageItem(key){
    return new Promise(async (resolve,reject)=>{
      try{
        var res = await localStorage.getItem(key);
        resolve(res);
      }catch(err){
        reject(err);
      }
    })
  }

  clearLocalstorage(){
    return new Promise(async (resolve,reject)=>{
      await localStorage.clear();
      resolve(true);
    })
  }
}
