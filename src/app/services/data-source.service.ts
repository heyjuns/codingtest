import { Injectable } from '@angular/core';
export interface Phone {
  phones: {
    name: string,
    brand: string,
    release_year: number,
    description: string | null,
    checked: boolean
  }[]
}

export interface Phones {
  name: string,
  brand: string,
  release_year: number,
  description: string | null,
  checked: boolean
}[]
@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  private _phoneNameData: Phone = {
    'phones': [
      {
        'name': 'iPhone 7',
        'brand': 'Apple',
        'release_year': 2016,
        'description': `4.7 in (120 mm),
        4.1 in (100 mm) by 2.3 in (58 mm),
        16: 9 aspect ratio, aluminosilicate glass covered 16,
        777,
        216-color (24-bit), IPS  LCD screen,
        1,
        334 × 750 px screen resolution at 326 ppi,
        1400: 1 contrast ratio,
        625 
    cd⁄m² max brightness, LED backlight and fingerprint-resistant oleophobic  coating`,
        'checked': false,
      },
      {
        'name': 'iPhone 6s',
        'brand': 'Apple',
        'release_year': 2015,
        'description': `4.7 in (120 mm),
        4.1 in (100 mm) by 2.3 in (58 mm),
        16: 9 aspect ratio, aluminosilicate glass covered 16,
        777,
        216-color (24-bit), LCD  screen,
        1,
        334 × 750 px screen resolution at 326 ppi,
        1400: 1 contrast ratio,
        500  cd⁄m² max brightness, LED backlight and fingerprint-resistant oleophobic  coating`,
        'checked': false,
      },
      {
        'name': 'Galaxy S8',
        'brand': 'Samsung',
        'release_year': 2017,
        'description': `Samsung announced the Samsung Galaxy S8 and Samsung Galaxy S8+ smartphones on March 29, 2017. It features an iris scanner, which was  not present on the Galaxy S7 phones.`,
        'checked': false,
      },
      {
        'name': 'Galaxy S7',
        'brand': 'Samsung',
        'release_year': 2016,
        'description': `The Samsung Galaxy S7 series, which consists of the Samsung Galaxy S7 and the Samsung Galaxy S7 edge, was announced on February 21,
    2016. They improve upon the Galaxy S6 by adding an always-on display to  optionally show information while the screen is off`,
        'checked': false,
      },
      {
        'name': 'Mi 6',
        'brand': 'Xiaomi',
        'release_year': 2017,
        'description': null,
        'checked': false,
      },
      {
        'name': 'G6',
        'brand': 'LG',
        'release_year': 2017,
        'description': `148.9 x 71.9 x 7.9 mm (5.86 x 2.83 x 0.31 in),
        163 g (5.75 oz), Corning Gorilla Glass 5 back panel`,
        'checked': false,
      }
    ]
  };
  constructor() { }

  getPhoneByName(name: string) {
    const filteredPhone = this._phoneNameData.phones.find(x => x.name === name);
    return filteredPhone;
  }
  getPhoneNumberList() {
    return this._phoneNameData.phones;
  }
  getAllYearList() {
    return this._phoneNameData.phones.map(x => (x.release_year).toString());
  };
  getAllBrandList() {
    return this._phoneNameData.phones.map(x => x.brand);
  }
}
