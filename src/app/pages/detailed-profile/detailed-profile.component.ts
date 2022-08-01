import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UniversityItem } from 'src/app/services/model/common.model';

@Component({
  selector: 'isc-detailed-profile',
  templateUrl: './detailed-profile.component.html',
  styleUrls: ['./detailed-profile.component.css'],
})
export class DetailedProfileComponent implements OnInit {
  university!: UniversityItem | undefined;

  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _commonService: CommonService
  ) {}

  ngOnInit(): void {
    const id = this._activeRoute.snapshot.params['id'];
    this._commonService.getUniversityFromId(id).subscribe(([data]) => {
      this.university = data;
    });
  }
}
