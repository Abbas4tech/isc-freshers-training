import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Filter } from 'src/app/services/model/common.model';

@Component({
  selector: 'isc-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  filters!: Filter[];
  constructor(private _commonService: CommonService) {}

  ngOnInit(): void {
    this.filters = this._commonService.getFiltersData();
  }
  onSelect(name: string) {
    console.log(name);
  }
}
