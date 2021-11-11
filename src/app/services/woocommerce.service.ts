import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonfunctionService } from './commonfunction.service';
import { API_PATH, consumer_keys_path } from './constants';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

  constructor(private http: HttpClient,
    public appComm:CommonfunctionService,
    public router:Router
    ) { }

  getAllStoreProducts(filter=null,filterValue=null){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.PRODUCTS + '?' + consumer_keys_path;

      if(filter && filterValue){
        url = url + "&filter[" + filter + "]=" + filterValue;
      }
      this.http.get(url,{}).subscribe((res)=>{
        resolve(res);
      },err=>{
        console.log("http error | Products",err);
        reject(err);
      })
    })
  }

  getSearchedProducts(searchTxt){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.PRODUCTS + '?' + consumer_keys_path;

      if(searchTxt){
        url = url + "&search=" + searchTxt;
      }
      this.http.get(url,{}).subscribe((res)=>{
        resolve(res);
      },err=>{
        console.log("http error | Products",err);
        reject(err);
      })
    })
  }

  getSingleProduct(id){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.PRODUCTS + '/' + id + '?' + consumer_keys_path;
      this.http.get(url,{}).subscribe((res)=>{
        resolve(res);
      },err=>{
        console.log("http error | Product",err);
        reject(err);
      })
    })
  }

  getProductVariation(id){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.PRODUCTS + '/' + id + '/variations?' + consumer_keys_path;
      this.http.get(url,{}).subscribe((res)=>{
        resolve(res);
      },err=>{
        console.log("http error | Product",err);
        reject(err);
      })
    })
  }

  getAllCategories(){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.CATEGORIES + '?' + consumer_keys_path;
      this.http.get(url,{}).subscribe((res)=>{
        resolve(res);
      },err=>{
        console.log("http error | Categories",err);
        reject(err);
      })
    })
  }

  getProductsByCategories(id){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.PRODUCTS + '?category=' + id + '&'+ consumer_keys_path;
      this.http.get(url,{}).subscribe((res)=>{
        resolve(res);
      },err=>{
        console.log("http error | Category Products",err);
        reject(err);
      })
    })
  }

  getAllTags(){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.TAGS + '?' + consumer_keys_path;
      this.http.get(url,{}).subscribe((res)=>{
        resolve(res);
      },err=>{
        console.log("http error | Tags",err);
        reject(err);
      })
    })
  }

  getProductsByTags(id){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.PRODUCTS + '?tag=' + id + '&'+ consumer_keys_path;
      this.http.get(url,{}).subscribe((res)=>{
        resolve(res);
      },err=>{
        console.log("http error | Tag Products",err);
        reject(err);
      })
    })
  }

  getSLiderForHomePage(){
    return new Promise((resolve,reject)=>{
      let urlPost = "http://ecom.simplystart.in/wp-json/wp/v2/posts?slug=mobile-slider";
      let header = new HttpHeaders;
      header.append("Content-type","application/json");
      this.http.get(urlPost,{}).subscribe((res:any)=>{
        console.log("res",res);
        if(res && res.length > 0){
          let url = "http://ecom.simplystart.in/wp-json/wp/v2/media?parent="+res[0].id;
    
          //let url = API_PATH.PRODUCTS + '?tag=' + id + '&'+ consumer_keys_path;
          this.http.get(url,{}).subscribe((res)=>{
            resolve(res);
          },err=>{
            console.log("http error | Tag Products",err);
            reject(err);
          })
        }
      },err=>{
        console.log("Error ",err);
      });

    });
  }

  getAppSliderBytags(){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.POST + '?tags=' + 92 + '&'+ consumer_keys_path;
      this.http.get(url,{}).subscribe((res)=>{
        resolve(res);
      },err=>{
        console.log("http error | Tag Products",err);
        reject(err);
      })
    })
  }

  getPaymentGateways(){
    return new Promise((resolve,reject)=>{ 

      let token = '';
      this.appComm.getLocalstorageItem('user').then((res:any)=>{
        console.log("get user");
        if(res && res.length > 0){
          token = JSON.parse(res)['token']
          let url = API_PATH.PAYMENT_GATEWAY + '?' + consumer_keys_path;
          this.appComm.showLoader();
          // this.http.get(url,{headers:{Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZ3JvY2VyaWVzLnNpbXBseXN0YXJ0LmluIiwiaWF0IjoxNjIwMzk5MDg5LCJuYmYiOjE2MjAzOTkwODksImV4cCI6MTYyMTAwMzg4OSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMiJ9fX0.ZCQmBhcXxLkK3NPQAy_HkHO0duugYPN2DB0tStlnRgs'}}).subscribe((res)=>{
          this.http.get(url,{}).subscribe((res)=>{
            this.appComm.hideLoader();
            resolve(res);
          },err=>{
            this.appComm.hideLoader();
            console.log("http error | Tag Products",err);
            reject(err);
          })
        }else{
          this.router.navigateByUrl('/login');
          reject('User not logged-in');
        }
      });
    })
  }

  placeOrder(orderDataObj){
    return new Promise((resolve,reject)=>{
      let url = API_PATH.ORDERS+ '?' + consumer_keys_path;

      this.appComm.getLocalstorageItem('user').then((res:any)=>{
        console.log("get user");
        if(res && res.length > 0){
          var token = JSON.parse(res)['token']
          console.log("Payload object",orderDataObj);
          // this.http.post(url,orderDataObj,{headers:{Authorization: 'Bearer '+token}}).subscribe((res)=>{
          this.http.post(url,orderDataObj,{}).subscribe((res)=>{
            resolve(res);
          },err=>{
            console.log("http error | Tag Products",err);
            reject(err);
          })
        }
      });
    })
  }

  getOrder(){
    return new Promise((resolve,reject)=>{
      
      this.appComm.getLocalstorageItem('user').then((res:any)=>{
        console.log("get user");
        if(res && res.length > 0){
          var token = JSON.parse(res)['token']
          let url = API_PATH.ORDERS+ 'customer='+JSON.parse(res)['store_id']+'&' + consumer_keys_path;
          this.http.get(url,{}).subscribe((res)=>{
          // this.http.post(url,orderDataObj,{}).subscribe((res)=>{
            resolve(res);
          },err=>{
            console.log("http error | Tag Products",err);
            reject(err);
          })
        }
      });
    })
  }
}
