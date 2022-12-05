import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/module/module';
import { ProductService } from 'src/app/sevices/product.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  products: Iproduct[] = [];
  @Input()
  id_: any;
  itemProduct: any;
  constructor(
    private product: ProductService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(item => {
      const a = this.id_ = item['id']; //lấy ra cái id
      console.log(a);
    })
    this.detailProduct(this.id_); //gán cho thằng method detail 1 chính cái id đã lấy
    
  }
  detailProduct(id: any) {
    this.product.getProduct_detail(id).subscribe(item => { //lấy ra cái thằng item khi click qua cái id
      this.itemProduct = item; ///gán lại cho cái biến là cái con tent đấy
      console.log(this.itemProduct);
    })
  }
}
