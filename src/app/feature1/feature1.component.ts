import { Component, OnInit, Input } from '@angular/core';

import {StringcalculatorService} from '../stringcalculator.service';

@Component({
  moduleId: module.id,
  selector: 'app-feature1',
  templateUrl: 'feature1.component.html',
  styleUrls: ['feature1.component.css'],
  providers: [StringcalculatorService]
})
export class Feature1Component implements OnInit {

  @Input() numbers: string;
  @Input() addResult: number;

  constructor(private stringCalculatorService: StringcalculatorService) {
    this.numbers = '';
  }

  ngOnInit() {
  }

  doadd() {

    try {
      this.addResult = this.stringCalculatorService.add(this.numbers);
    } catch (error) {
      alert(error);
    }
  }
}
