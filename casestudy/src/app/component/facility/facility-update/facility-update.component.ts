import { Component, OnInit } from '@angular/core';
import {RentType} from '../../../model/RentType';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../service/facility/facility.service';
import {Facility} from '../../../model/Facility';
import {RentTypeService} from '../../../service/facility/rent-type.service';

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  facility: Facility;
  facilityEdit: Facility;
  editFacilityForm: FormGroup;
  rentTypes: RentType[] = [];

  constructor(private facilityService: FacilityService, private activatedRoute: ActivatedRoute, private router: Router,
              private rentTypeService: RentTypeService) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.facilityService.findById(parseInt(id)).subscribe(next => {
          console.log(next);
          this.facility = next;

          this.rentTypeService.findAll().subscribe(success => {
            console.log(success);
            this.rentTypes = success;
            this.getForm();
          }, error => {
            console.log(error);
          });
        });
      }
    }, error => {
      console.log(error);
    }, () => {
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  ngOnInit(): void {
  }

  editFacility() {
    this.facilityEdit = this.editFacilityForm.value;
    console.log(this.facilityEdit);
    this.facilityService.editFacility(this.facilityEdit).subscribe(next => {
      this.returnList();
    }, error => {
      console.log(error);
    });
  }

  deleteFacilityById() {
    this.facilityService.deleteFacility(this.editFacilityForm.controls.id.value).subscribe();
    this.returnList();
  }
  returnList(): void {
    this.router.navigateByUrl('/facility');
  }

  private getForm() {
    this.editFacilityForm = new FormGroup({
      id: new FormControl(this.facility.id, [Validators.required]),
      name: new FormControl(this.facility.name, [Validators.required, Validators.minLength(3)]),
      area: new FormControl(this.facility.area, [Validators.required]),
      numberOfFloor: new FormControl(this.facility.numberOfFloor, [Validators.required]),
      maxOfPeople: new FormControl(this.facility.maxOfPeople, [Validators.required]),
      cost: new FormControl(this.facility.cost, [Validators.required]),
      rentType: new FormControl(this.facility.rentType, [Validators.required]),
      status: new FormControl(this.facility.status, [Validators.required])
    });
  }
}
