import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
  form = new FormGroup({ //khởi tạo form froup
    name: new FormControl('') //lấy r acacs trường bàn đầu sẽ để là rỗng
  })
 
  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private product: ProductService,
  ) {}
 
  ngOnInit(): void {
    this.form = this.fb.group({ 
      name:["", Validators.required],
    });;
    var id=this.route.snapshot.params["id"];
    console.log(this.route.snapshot.params["id"]); // lấy ra cái id của thằng cần sửa
    this.product.editProduct(this.route.snapshot.params["id"]).subscribe((item:any) => {
      this.form = new FormGroup({
        name: new FormControl(item['name']) // lấy ra các trường cần sửa trong thằng form 
      })
    })
  }

  editingProduct(){
    this.product.editingProduct(this.route.snapshot.params["id"],this.form.value).subscribe((item)=>{ // truyền vào 2 tham số 1 alf cái id của thằng cần sửa 2 là cái duex liệu mình đầy lên
      //trên server để cập nhật
      this.product.getProduct(); // sửa cong thì in lại sản phẩm thôi
       // điều hướng đến list sản phầm
       this.router.navigateByUrl('/product');
    })
  }
}
