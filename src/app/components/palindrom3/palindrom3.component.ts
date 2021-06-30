import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-palindrom3',
  templateUrl: './palindrom3.component.html',
  styleUrls: ['./palindrom3.component.scss']
})
export class Palindrom3Component implements OnInit {
  sInputText = new FormControl('', Validators.required);
  isPalindrom: boolean = false;
  constructor() {

  }

  ngOnInit(): void {
  }

  checkPalindrom() {
    this.isPalindrom = this.palindromChecker(this.sInputText.value, 0);
  }


  palindromChecker(value: string, index: number): boolean {
    const stringLengthDividedByTwo = Math.floor(value.length / 2);
    if (index < stringLengthDividedByTwo) {
      const currentIndexValue = this.sInputText.value[index];
      const currentLastIndexValue = this.sInputText.value[this.sInputText.value.length - index - 1];
      if (currentIndexValue != currentLastIndexValue) {
        return false;
      } else {
        this.palindromChecker(value, index + 1);
      }
    } else {
      return true;
    }
    return true;
  }
}
