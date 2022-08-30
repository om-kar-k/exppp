import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../istudent';
import { IStudentStatus } from '../istudent-status';
import { StudentService } from '../Services/student.service';


@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  studentdata:IStudent={name:'',dob:new Date(),gender:'',mobileNumber:'',email:'',instituteCode:0,aadhaar:'',accountNo:'',bankIFSC:'',bankName:'',password:''}
  studentid:number=0
  applied:boolean=false;
  statusdata:IStudentStatus={
    approvalId:0,
    applicationId:0,
    approvedByInstitute:0,
    approvedByNodalOfficer:0,
    approvedByMinistry:0,
  }
  constructor(private studentservice:StudentService,private activatedroute:ActivatedRoute, private router: Router) {
    
   }

  ngOnInit(): void {
    const tid=this.activatedroute.snapshot.paramMap.get('id')
    //console.log(tid);
    this.studentid=Number(tid);
    //console.log(this.studentid);
    this.studentservice.getStudent(this.studentid).subscribe((data:IStudent)=>{this.studentdata=data} )
    this.studentservice.checkstatus(this.studentid).subscribe((data:any)=>{
      //console.log(data)
      this.statusdata=data} )
    
    
    

  }
  check(){
    this.studentservice.checkSchApplication(this.studentid).subscribe((d)=>{
      console.log(d);
        if(d==false){
            //this.applied=true;
            //[routerLink]="['/ScholarshipApplication/', studentid]"
            this.router.navigate(['/ScholarshipApplication/',this.studentid])
        }
        else{
          alert("You already applied!")
          this.applied=true;
        }
      })

      
  }
  

}
