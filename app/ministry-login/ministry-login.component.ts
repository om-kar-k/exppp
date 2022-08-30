import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css']
})
export class MinistryLoginComponent implements OnInit {

  nodalloginForm={} as FormGroup
  formSubmitted=false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createloginForm();
  }

  createloginForm(){
    this.nodalloginForm=this.formBuilder.group({
      ID:['',Validators.required],
      Password:['',Validators.required]
    })
  }

  onFormSubmit(){

    let id:string=this.nodalloginForm.value.ID
    let pw:string=this.nodalloginForm.value.Password
    if(id=="ministry" && pw=="ministry"){this.formSubmitted=true;}
    else{
      alert("Id or Password is incorrect!")
    }
  }


}
