import { Component, OnInit } from '@angular/core';
import { MinistryService } from '../Services/ministry.service';

@Component({
  selector: 'app-ministry',
  templateUrl: './ministry.component.html',
  styleUrls: ['./ministry.component.css']
})
export class MinistryComponent implements OnInit {

  studentdata:any[]=[]
  institutedata:any[]=[]
  constructor(private ministryservice: MinistryService) { }

  ngOnInit(): void {
    this.ministryservice.getStudents().subscribe((data:any)=>{
      this.studentdata=data
  })
  console.log(this.studentdata)

  this.ministryservice.getInstitutes().subscribe((data:any)=>{
    this.institutedata=data
})
console.log(this.institutedata)
  }

}
