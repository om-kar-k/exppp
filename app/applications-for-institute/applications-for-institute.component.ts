import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iapplicatioforinstitute } from '../iapplicatioforinstitute';
import { ScholarshipapplicationService } from '../Services/scholarshipapplication.service';
@Component({
  selector: 'app-applications-for-institute',
  templateUrl: './applications-for-institute.component.html',
  styleUrls: ['./applications-for-institute.component.css']
})
export class ApplicationsForInstituteComponent implements OnInit {


  ///<summary>
  //
  // This component helps us to fetch and show all the scholarship applications for a specific institute.
  // we can get the id of the institute from url using activated route and call the service to fetch all 
  // the records from backend.
  ///<summary>


  application: Iapplicatioforinstitute[] = []
  instituteid: number = 0
  constructor(private scholarshipservice: ScholarshipapplicationService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('id')                                
    console.log(tid)
    this.instituteid = Number(tid);
    console.log("institute id = " + this.instituteid)
    this.scholarshipservice.getapplicationforinstitute(this.instituteid).subscribe(
      (data) => {

        this.application = data
        
      }
    )
    console.log(this.application)
  }

}
