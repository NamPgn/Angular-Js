import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../module/module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = `http://localhost:8000/product`;

  constructor(private httpClient: HttpClient) { } //xong tạo ra 1 cái inject là http vs thuộc tính của http client

  getProduct(): Observable<Iproduct[]> { //tạo ra phương thúc lấy duex liệu có observable để sử lý bất đông bộ
    return this.httpClient.get<Iproduct[]>(this.API); //trả về duex liệu
  }
  removeItem(_id: any): Observable<Iproduct[]> {
    // console.log(`http://localhost:8000/product/` + _id);
    return this.httpClient.delete<Iproduct[]>(`http://localhost:8000/product/` + _id);
  }
  AddProduct(data: Iproduct): Observable<Iproduct[]> {
    return this.httpClient.post<Iproduct[]>(this.API, data);
  }
  // addProduct():Observable<Iproduct[]>{
  //   return this.httpClient.post<Iproduct[]>()
  // }
  editProduct(id: any): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${this.API}/${id}`);
  }

  editingProduct(id: any, data: any): Observable<Iproduct[]> {
    console.log(`${this.API}/${id}`);
    return this.httpClient.put<Iproduct[]>(`${this.API}/${id}`, data)
  }

  detailProduct(id: any): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${this.API}/${id}`);
  }

  getProduct_detail(id: any): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${this.API}/${id}`);
  }
}
