import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  
{

  email: string ="";
  password : string="";
  

  constructor( private router: Router,private http: HttpClient) { 
  }

 Login()
 {
  console.log(this.email);
  console.log(this.password);
 

 let bodyData = {
   email : this.email,
   password : this.password,
 };
     
   this.http.post("http://localhost:8081/boot/login", bodyData).subscribe( (resultData: any)=>{
     console.log(resultData); 

    if (resultData.message == "Email not exists")
      {
          alert("Email not exist");
      }
      
        else if(resultData.message == "login Success")
          {
            this.router.navigateByUrl('/home');
          }
        else
        {
         alert("Incorrect Email and password not Match");
            }
  
 });
}

}


