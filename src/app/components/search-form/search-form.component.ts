import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Option } from '../../types/Option';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  countries: Option[] = [
    { viewValue: 'USA', value: 'us' },
    { viewValue: 'France', value: 'fr' },
    { viewValue: 'Russia', value: 'ru' },
    { viewValue: 'Italy', value: 'it' },
    { viewValue: 'United Kingdom', value: 'gb' },
    { viewValue: 'Portugal', value: 'pt' },
    { viewValue: 'Colombia', value: 'co' },
    { viewValue: 'Germany', value: 'de' },
  ];

  categories: Option[] = [
    { viewValue: 'Business', value: 'business' },
    { viewValue: 'Entertainment', value: 'entertainment' },
    { viewValue: 'General', value: 'general' },
    { viewValue: 'Health', value: 'health' },
    { viewValue: 'Sciences', value: 'sciences' },
    { viewValue: 'Sports', value: 'sports' },
    { viewValue: 'Technology', value: 'technology' },
  ];
  selectedCountry: string = 'pt';
  selectedCategory: string = 'general';

  @Output() searchParams = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  search(e: Event) {
    e.preventDefault();

    const PARAMS = {
      country: this.selectedCountry,
      category: this.selectedCategory,
    };

    this.searchParams.emit(PARAMS);
  }
}
