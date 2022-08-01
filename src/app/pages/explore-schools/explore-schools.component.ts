import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Universities } from 'src/app/services/model/common.model';

@Component({
  selector: 'isc-explore-school',
  templateUrl: './explore-school.component.html',
  styleUrls: ['./explore-schools.component.css'],
})
export class ExploreSchoolComponent implements OnInit {
  universityData!: Universities;

  constructor(private _commonService: CommonService, private _router: Router) {}

  ngOnInit(): void {
    this._commonService.getUniversityData().subscribe((data) => {
      this.universityData = data;
    });
  }
}
