import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nodal-login',
  templateUrl: './nodal-login.component.html',
  styleUrls: ['./nodal-login.component.css']
})
export class NodalLoginComponent implements OnInit {

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
    if(id=="nodal" && pw=="nodal"){this.formSubmitted=true;}
    else{
      alert("Id or Password is incorrect!")
    }
  }

}
