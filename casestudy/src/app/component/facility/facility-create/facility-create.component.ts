import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../../model/CustomerType';
import {RentType} from '../../../model/RentType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../service/facility/facility.service';
import {RentTypeService} from '../../../service/facility/rent-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentTypes: RentType[] = [];
  facilityForm: FormGroup;

  constructor(private facilityService: FacilityService, private rentTypeService: RentTypeService, private router: Router) {
    this.rentTypeService.findAll().subscribe(next => {
      this.rentTypes = next;
    });

    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      area: new FormControl('', [Validators.required]),
      numberOfFloor: new FormControl('', [Validators.required]),
      maxOfPeople: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addFacility() {
    console.log(this.facilityForm);
    if (this.facilityForm.valid) {
      this.facilityService.addFacility(this.facilityForm.value).subscribe(next => {
        this.router.navigateByUrl('/facility');
      }, error => {
        console.log(error);
      });
    }
  }
}
