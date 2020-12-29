import HttpClient from "./http-client";

export class ProductsServices {
   http = new HttpClient()
   baseUrl = 'https://fakestoreapi.com/products'

   getProducts(){
      return this.http.get(this.baseUrl).then(v => v.json())
   }
}


