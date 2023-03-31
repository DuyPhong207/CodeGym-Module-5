import { Component, OnInit } from '@angular/core';
import {Contract} from '../../../model/Contract';
import {ContractService} from '../../../service/contract/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[];

  constructor(private contractService: ContractService) {
    this.contractService.findAll().subscribe(next => {
      this.contracts = next;
    });
  }
  ngOnInit(): void {
  }

}
