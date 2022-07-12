import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { University } from 'src/app/services/model/common.model';

@Component({
  selector: 'isc-universityitem',
  templateUrl: './universityitem.component.html',
  styleUrls: ['./universityitem.component.css'],
})
export class UniversityitemComponent implements OnInit {
  constructor(private _router: Router) {}
  @Input()data!: University
  onDetailedView(id: number) {
    this._router.navigate(['explore-schools', id]);
  }

  ngOnInit(): void {}
}
