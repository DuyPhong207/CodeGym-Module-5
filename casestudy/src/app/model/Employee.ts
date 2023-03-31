import {Level} from './Level';
import {Division} from './Division';
import {Position} from './Position';

export interface Employee {
  id: number;
  position: Position;
  level: Level;
  division: Division;
  name: string;
  dateOfBirth: string;
  salary: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;
}
