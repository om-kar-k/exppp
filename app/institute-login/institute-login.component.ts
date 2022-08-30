import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInstituteLogin } from '../iinstitute-login';
import { InstituteService } from '../Services/institute.service';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})
export class InstituteLoginComponent implements OnInit {
  loginid:number=0

  logindata:IInstituteLogin={
    Institutecode:0,
    Password:''
  }
  constructor(private instituteservice:InstituteService, private router:Router) { }

  saveLogin(login:IInstituteLogin){
    this.logindata=login
    this.instituteservice.checkInstitute(this.logindata).subscribe((d)=>
    {
      if(d==false){
        alert("Username or password incorrect!")
      }
      else{
      this.loginid=d
      alert("Login Successful! Your ID is " + this.loginid)
      this.router.navigate(['/InstituteHome/',this.loginid])
      }
    })
  }

  ngOnInit(): void {
  }

}
