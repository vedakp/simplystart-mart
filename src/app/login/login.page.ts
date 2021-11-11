import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonfunctionService } from '../services/commonfunction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  password = '';

  constructor(
    public router:Router,
    public appComm:CommonfunctionService,
    public auth:AuthService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.username = '';
    this.password = '';
    this.appComm.clearLocalstorage();
  }

  login(){
    this.appComm.showLoader();
    this.auth.loginCustomer(this.username,this.password).then((res:any)=>{
      this.appComm.hideLoader();
      if(res && res.token){
        // this.auth.getMyUserData(res.token).then((user:any)=>{
        //   if(user){
          res.name = res.user_display_name;
          res.email = res.user_email;
          this.auth.userData = res;
          this.auth.isLoggedIn = true;
          this.appComm.setLocalstorageItem('id',JSON.stringify(res.id));
          this.appComm.setLocalstorageItem('user',JSON.stringify(res));
          this.router.navigateByUrl("/home");
        //   }
        // })
      }else if(res && res.message){
        this.appComm.showToast(res.message,true,'top');
      }
    },err=>{
      this.appComm.hideLoader()
      if(err && err.error && err.error.message){
        this.appComm.showToast(err.error.message,true,'top');
      }
    })
  }
}
