import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isc-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent implements OnInit {
  constructor(private _navigate: Location) {}

  onClick() {
    this._navigate.back();
  }

  ngOnInit(): void {}
}
