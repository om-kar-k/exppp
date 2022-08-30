import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  studentregistrationform :FormGroup
  formSubmitted = false
  studentId: number = 0
  // studentdata: IStudent = { name: '', dob: new Date(), gender: '', mobileNumber: '', email: '', instituteCode: 0, aadhaar: '', accountNo: '', bankIFSC: '', bankName: '', password: '' }
  constructor(private formBuilder: FormBuilder, private studentservice: StudentService, private router: Router) { }

  // saveStudent(student: IStudent) {

  //   this.studentdata = student;
  //   this.studentservice.addStudent(this.studentdata).subscribe((d) => {
  //     this.studentId = d
  //     alert("Student Registration successfull. Your Id is " + this.studentId)
  //     this.router.navigate(['/Home'])
  //   })

  // }

  saveStudent(){
    this.formSubmitted=true;
    console.log(this.formSubmitted)
    console.log(this.studentregistrationform.value)
    this.studentservice.addStudent(this.studentregistrationform.value).subscribe((d)=>{
      console.log("service working")
      console.log(d)
      alert("Student Registration is Successful! Continue to Login Page")
      this.router.navigate(['/Home'])
    })
    
  }
  ngOnInit(): void {
    this.createform();
  }
  createform(){
    this.studentregistrationform = this.formBuilder.group({
      name: ['',[Validators.required]],
      dob: [new Date(),[Validators.required]],
      gender: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required]],
      email: ['',[Validators.required]],
      instituteCode: [0,[Validators.required]],
      aadhaar: ['',[Validators.required]], 
      bankName: ['',[Validators.required]], 
      accountNo: ['',[Validators.required]], 
      bankIFSC: ['',[Validators.required]], 
      password: ['',[Validators.required]]
    })
  }
}

