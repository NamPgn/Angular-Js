import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from '../module/module';
import { ProductService } from '../sevices/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Iproduct[] = [];

  @Input() teams: any;
  constructor(private productSevices: ProductService, private router: Router) { } //tạo ra 1 inject của thằng service để có thể sử dụng được các method và thuộc tính cau thằng services

  ngOnInit(): void {
    this.productSevices.getProduct().subscribe(item => { // in dũ liệu ra màn hình nếu thành công thì in ra thất bại thì lỗi
      this.products = item;
      console.log(item);
    })
  }


  title: string = "Đây là danh sách sản phẩm";


  removeItem(_id: any) { //mehod xóa 
    this.productSevices.removeItem(_id).subscribe(_id => {
      console.log(_id);
      this.products = this.products.filter(item => item._id != _id);
      location.reload();
    })
    // console.log(id);
  }
}
