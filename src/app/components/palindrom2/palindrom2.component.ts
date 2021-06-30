import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-palindrom2',
  templateUrl: './palindrom2.component.html',
  styleUrls: ['./palindrom2.component.scss']
})
export class Palindrom2Component implements OnInit {
  sInputText = new FormControl('', Validators.required);
  isPalindrom: boolean = false;
  constructor() {

  }

  ngOnInit(): void {
  }

  checkPalindrom() {
    this.isPalindrom = this.palindromChecker();
  }

  /**
   * ambil length dari value lalu dibagi dua untuk mempersingkat looping
   * didalam loop melakukan pengecekan jika indexAwal tidak sama dengan indexTerakhir maka itu bukan palindrom
   */
  palindromChecker(): boolean {
    const stringLengthDividedByTwo = Math.floor(this.sInputText.value.length / 2);
    console.log(stringLengthDividedByTwo);
    for (let i = 0; i < stringLengthDividedByTwo; i++) {
      const currentIndexValue = this.sInputText.value[i];
      const currentLastIndexValue = this.sInputText.value[this.sInputText.value.length - i - 1];
      if (currentIndexValue != currentLastIndexValue) {
        return false;
      }
    }
    return true;
  }
}
