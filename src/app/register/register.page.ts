import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonfunctionService } from '../services/commonfunction.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username = "";
  email = "";
  password = "";

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    public router:Router,
    public appComm:CommonfunctionService,
    public auth:AuthService
  ) { }

  ngOnInit() {
  }

  register(){
    this.appComm.showLoader();
    this.auth.registerCustomer(this.email,this.username,this.password).then((res:any)=>{
      this.appComm.hideLoader();
      console.log('res',res);
      if(res && res.id){
        this.router.navigateByUrl('home');
      }
    },err=>{
      console.log('err',err);
      this.appComm.hideLoader();
      if(err && err.error && err.error.message){
        this.appComm.showToast(err.error.message,true,'top');
      }
    })
  }

}
