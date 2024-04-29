import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/http/login.service';
import { Observable, interval, take, of, map, from } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private loginService: LoginService, private route: Router) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  

  ngOnInit(): void {
    this.getTest();
    // this.loginForm = new FormGroup({
    //   login: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required)
    // })
  }

        public test = []
  public articles;
  getTest(){
    this.loginService.getTesta().subscribe(
      (articles )=>{
        console.log('result articles  ====>', articles ) 

        let test = articles.filter(
          (el)=>{
            return el.author === "John Doe"
          }
        )
        console.log('result nom  ====>', test) 
      }
    )
    // 
  

  }

  onSubmit(){
    if (this.loginForm.valid) {
      console.log('result login ====>', this.loginForm.value) 
      const {login, password} = this.loginForm.value
      
      this.loginService.login(login, password).subscribe(
        (reponse)=>{
          console.log('result ====>', reponse)
          this.route.navigateByUrl("/cv");
        }
      )
    }else{
      console.log('result login error') 
    }
  }

}
 