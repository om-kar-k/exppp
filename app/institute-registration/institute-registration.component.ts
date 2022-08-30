import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstituteService } from '../Services/institute.service';

@Component({
  selector: 'app-institute-registration',
  templateUrl: './institute-registration.component.html',
  styleUrls: ['./institute-registration.component.css']
})
export class InstituteRegistrationComponent implements OnInit {

  instituteregistrationform : FormGroup
  formSubmitted=false
  

  constructor(private formBuilder: FormBuilder, private instituteservice: InstituteService, private router: Router) { }

  // saveInstitute(institute:IInstituteregister)
  // {
  //   this.institutedata=institute;
  //   this.instituteservice.addInstitute(this.institutedata).subscribe((data)=>
  //   {
  //     console.log(data)
  //     console.log(this.institutedata)
  //     alert("Institute Registration Successfull")
  //     this.router.navigate(['/Home'])
  //   })
  // }

  saveInstitute(){
    this.formSubmitted=true
    console.log(this.instituteregistrationform.value)
    this.instituteservice.addInstitute(this.instituteregistrationform.value).subscribe((d: any)=>{
      alert("Registration Successful! Continue to Login Page")
      console.log("service working")
      console.log(d)
      //this.router.navigate(['/Home'])
    })
  }

  ngOnInit(): void {
    this.createform()
  }
  createform() {
    this.instituteregistrationform = this.formBuilder.group({
      instituteCategory: ['',[Validators.required]],
      name: ['',[Validators.required]],
      institutecode: [0,[Validators.required]],
      disecode: [0,[Validators.required]],
      location: ['',[Validators.required]],
      instituteType: ['',[Validators.required]],
      affiliatedState: ['',[Validators.required]],
      affiliatedName: ['',[Validators.required]],
      admissionStartYear: ['',[Validators.required]],
      password: ['',[Validators.required]],
      address: ['',[Validators.required]],
      city: ['',[Validators.required]],
      state: ['',[Validators.required]],
      district: ['',[Validators.required]],
      pincode: [0,[Validators.required]],
      principalName: ['',[Validators.required]],
      principalNumber: ['',[Validators.required]]
    })
  }



}
