import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Option } from '../../types/Option';

@Component({
  selector: 'app-general-search-form',
  templateUrl: './general-search-form.component.html',
  styleUrls: ['./general-search-form.component.css'],
})
export class GeneralSearchFormComponent {
  query: string = '';
  selectedLanguage: string = 'es';
  languages: Option[] = [
    { viewValue: 'Spanish', value: 'es' },
    { viewValue: 'Italian', value: 'it' },
    { viewValue: 'English', value: 'en' },
    { viewValue: 'German', value: 'de' },
    { viewValue: 'French', value: 'fr' },
  ];

  @Output() searchGeneral = new EventEmitter();

  constructor(private _snackBar: MatSnackBar) {}
  search(e: Event) {
    const PARAMS = {
      query: this.query,
      language: this.selectedLanguage,
    };
    e.preventDefault();
    if (this.query.trim() === '') {
      this._snackBar.open('Please type something', '', { duration: 3500 });
      return;
    }
    this.searchGeneral.emit(PARAMS);
  }
}
