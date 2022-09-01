import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UniversityItem } from 'src/app/services/model/common.model';
import { Location } from '@angular/common';

@Component({
  selector: 'isc-detailed-profile',
  templateUrl: './detailed-profile.component.html',
  styleUrls: ['./detailed-profile.component.css'],
})
export class DetailedProfileComponent implements OnInit {
  university!: UniversityItem;

  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _commonService: CommonService,
    public _location: Location
  ) {}

  ngOnInit(): void {
    this._activeRoute.data.subscribe(({ detailedData: [data] }) => {
      this.university = data;
    });
  }
}
