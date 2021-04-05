import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH, consumer_keys_path } from './constants';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

  constructor(private http: HttpClient) { }

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
}
