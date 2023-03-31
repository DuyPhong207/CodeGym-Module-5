import {RentType} from './RentType';

export interface Facility {
  id: number;
  name: string;
  area: number;
  numberOfFloor: number;
  maxOfPeople: number;
  cost: number;
  rentType: RentType;
  status: string;
}
