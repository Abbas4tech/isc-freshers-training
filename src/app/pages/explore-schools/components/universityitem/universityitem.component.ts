import { UniversityItem } from 'src/app/services/model/common.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'isc-universityitem',
  templateUrl: './universityitem.component.html',
  styleUrls: ['./universityitem.component.css'],
})
export class UniversityitemComponent implements OnInit {
  constructor(private _router: Router) {}
  @Input() data!: UniversityItem;
  @Input() isViewOnly!: boolean;
  onDetailedView(id: string) {
    this._router.navigate(['explore-schools', id]);
  }

  ngOnInit(): void {}
}
