import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonfunctionService } from './commonfunction.service';
import { API_PATH, consumer_keys_path } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor(private http:HttpClient,
    private CFS: CommonfunctionService) { }

  registerCustomer(email, username, password){
    return new Promise((resolve,reject)=>{  
      let headers = new HttpHeaders ({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
  
      let credentials =  `username=${username}&email=${email}&password=${password}`;

      let url = API_PATH.REGISTER_CUSTOMER + '?' + consumer_keys_path;
      this.http.post(url,credentials, {headers}).subscribe((successRes)=>{
        resolve(successRes);
      },err=>{
        console.log("Auth Error ",err);
        reject(err);
      })
    })


  }

  loginCustomer(email, password){
    return new Promise((resolve,reject)=>{  
      let headers = new HttpHeaders ({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
  
      let credentials =  `username=${email}&password=${password}`;

      let url = API_PATH.LOGIN_CUSTOMER + '?' + consumer_keys_path;
      this.http.post(url,credentials, {headers}).subscribe((successRes)=>{
        resolve(successRes);
      },err=>{
        console.log("Auth Error ",err);
        reject(err);
      })
    })
  }

  getUserData(email){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.CUSTOMER_DATA + "?email=" + email + "&" + consumer_keys_path;
      this.http.get(url).subscribe((res)=>{
        this.isLoggedIn = true;
        resolve(res);
      },err=>{
        reject(err);
      })
    })
  }

  isUserLoggedIn():Promise<Boolean>{
    return new Promise(async (resolve,reject)=>{
      await this.CFS.getLocalstorageItem("id").then(id=>{
        if(id){
          this.isLoggedIn = true;
        }else {
          this.isLoggedIn =  false;
        }
      },err=>{
        this.isLoggedIn = false;
      })
      resolve(this.isLoggedIn);
    })
  }
}
