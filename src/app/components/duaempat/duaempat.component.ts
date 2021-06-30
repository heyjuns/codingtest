import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export interface TableElement {
  index: number;
  symbol: string;
}
@Component({
  selector: 'app-duaempat',
  templateUrl: './duaempat.component.html',
  styleUrls: ['./duaempat.component.scss']
})
export class DuaempatComponent implements OnInit {
  sInputText = new FormControl(null, [Validators.required, Validators.max(100)]);
  displayedColumns: string[] = ['index', 'symbol'];
  dataSource: TableElement[] = [];
  constructor() {

  }

  ngOnInit(): void {
  }

  printCounter() {
    let tempArray: any[] = [];
    for (let i = 1; i <= this.sInputText.value; i++) {
      if (this.canDividedByTwoAndFour(i)) {
        tempArray.push('duaempat')
      } else if (this.canDividedByTwo(i)) {
        tempArray.push('dua')
      } else if (this.canDividedByFour(i)) {
        tempArray.push('empat');
      } else {
        tempArray.push(i);
      }
    }
    this.dataSource = tempArray.map((symbol, index) => {
      return {
        index,
        symbol,
      }
    })
    console.log(this.dataSource);

  }
  canDividedByTwoAndFour(index: number) {
    return this.canDividedByTwo(index) && this.canDividedByFour(index);
  }
  canDividedByFour(index: number) {
    return index % 4 === 0;
  }
  canDividedByTwo(index: number) {
    return index % 2 === 0;
  }

}
