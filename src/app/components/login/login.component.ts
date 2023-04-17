import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor( private fb:FormBuilder,private auth:AuthServiceService,private tostr:ToastrService,private route:Router){
 this.loginForm=this.fb.group({
  username: ['', Validators.required],
  password: ['', [Validators.required]],
 })
  }

onSubmit(){
  const { username, password } = this.loginForm.value;
  this.auth.login(username,password).subscribe({
    next:(res)=>{this.tostr.success("Login Successfully")
    console.log(res)
    this.route.navigate(['/home',res])
  },
    error:(err)=>this.tostr.error(err.error.message)
  })
}

}
