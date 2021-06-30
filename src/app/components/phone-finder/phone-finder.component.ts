import { Component, Input, OnInit } from '@angular/core';
import { DataSourceService, Phones } from 'src/app/services/data-source.service';

@Component({
  selector: 'app-phone-finder',
  templateUrl: './phone-finder.component.html',
  styleUrls: ['./phone-finder.component.scss']
})
export class PhoneFinderComponent implements OnInit {
  selectedYear: string[] = [];
  selectedBrand: string[] = [];
  searchTerm: string;
  years: any[];
  brands: string[];
  dataSource: Phones[] = [];
  constructor(
    private ds: DataSourceService,
  ) { }

  ngOnInit(): void {
    this.years = [...new Set(this.ds.getAllYearList().sort())];
    this.brands = [...new Set(this.ds.getAllBrandList().sort())];
    this.dataSource = this.getList();
  }
  updateFilter(years: string[], brands: string[]) {
    const isYearsEmpty = !!years.length;
    const isBrandsEmpty = !!brands.length;
    const searchTermLowerCase = !!this.searchTerm ? this.searchTerm.toLowerCase() : '';

    this.dataSource = this.getList();
    this.dataSource = this.dataSource.filter(item => {
      const filterYear = isYearsEmpty ? years.includes((item.release_year).toString()) : true;
      const filterBrand = isBrandsEmpty ? brands.includes(item.brand) : true;
      return filterYear && filterBrand && (item.name.toLowerCase().includes(searchTermLowerCase) || item.name.toLowerCase().includes(searchTermLowerCase))
    })
  }
  getList() {
    return [...this.ds.getPhoneNumberList()];
  }
}
