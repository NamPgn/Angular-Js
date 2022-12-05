import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { AuthService } from 'src/app/sevices/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any;
  form = new FormGroup({
    userName: new FormControl(),
    pass: new FormControl(),
    role: new FormControl()
  })
  constructor(
    private seviceAuth: AuthService,
    private router: Router
  ) { }

  private handleErr(error: Response | any) {
    if (error.status == 0) { //or whatever condition you like to put
      this.router.navigate(['/error']);
    }
  }

  ngOnInit(): void {

  }
  postUser() {
    if (this.form.valid) {
      this.seviceAuth.loginIn(this.form.value).subscribe(res => {
        if (res != null) { //nếu có dữ liệu
          this.user = res;
          sessionStorage.setItem("token", this.user.token);
          this.router.navigate(["/"])
        }
      })
    }
  }
}
