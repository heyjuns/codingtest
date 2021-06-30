import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-palindrom1',
  templateUrl: './palindrom1.component.html',
  styleUrls: ['./palindrom1.component.scss']
})
export class Palindrom1Component implements OnInit {
  sInputText = new FormControl('', Validators.required);
  isPalindrom: boolean = false;
  constructor() {

  }

  ngOnInit(): void {
  }

  checkPalindrom() {
    const reversedText = this.reverseText();
    this.isPalindrom = this.sInputText.value === reversedText;
    console.log(this.isPalindrom);
  }

  reverseText() {
    let reversedText = '';
    for (let i = this.sInputText.value.length; i > 0; i--) {
      reversedText += this.sInputText.value[i - 1];
    }
    return reversedText;
  }
}
