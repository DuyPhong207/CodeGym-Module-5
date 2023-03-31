import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../../../service/facility/facility.service';
import {Facility} from '../../../model/Facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[];
  constructor(private facilityService: FacilityService) {
    this.facilityService.findAll().subscribe(next => {
      this.facilities = next;
    },
      error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }

}
