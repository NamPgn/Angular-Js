import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/sevices/product.service';
import { Iproduct } from 'src/app/module/module';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  products: Iproduct[] = [];
  constructor(
    private productSevices: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    console.log(data);
    this.productSevices.AddProduct(data).subscribe(item => {
      // console.log(data);
      console.log("item", item);
      this.products = item
      // this.productSevices.getProduct();
      this.router.navigateByUrl(`/product`);
    })
  }
}
