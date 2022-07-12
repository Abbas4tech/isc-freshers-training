import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { University } from 'src/app/services/model/common.model';

@Component({
  selector: 'isc-explore-school',
  templateUrl: './explore-school.component.html',
})
export class ExploreSchoolComponent implements OnInit {
  universityData!: University[];

  constructor(private _commonService: CommonService, private _router: Router) {}

  onDetailedView(id: number) {
    this._router.navigate(['explore-schools', id]);
  }

  ngOnInit(): void {
    this.universityData = this._commonService.getUniversityData();
  }
}
