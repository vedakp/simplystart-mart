import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonfunctionService } from './commonfunction.service';
import { API_PATH, consumer_keys_path } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData :any = {};
  isLoggedIn = false;
  constructor(private http:HttpClient,
    private CFS: CommonfunctionService,
    public appComm:CommonfunctionService
    ) { 
      this.appComm.getLocalstorageItem('user').then((res:any)=>{
        if(res){
          res = JSON.parse(res);
          this.isLoggedIn = true;
          this.userData = res;
          this.getUserData(this.userData['email']);
        }
      });
    }

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
        if(res && res[0]){
          this.userData = res[0];
          console.log("User data fetched",this.userData);
          this.userData['user_email'] = this.userData['email'];
          this.userData['name'] = this.userData['username'];
        }
        resolve(res);
      },err=>{
        reject(err);
      })
    })
  }

  getUserDataId(id){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.MY_DATA + "/"+id+"?" + consumer_keys_path;
      this.http.get(url).subscribe((res)=>{
        this.isLoggedIn = true;
        resolve(res);
      },err=>{
        reject(err);
      })
    })
  }

  getMyUserData(token){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.MY_DATA  + "/me?" + consumer_keys_path +"&token="+token;
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
