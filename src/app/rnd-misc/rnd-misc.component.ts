import { Component, Input, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SearchTypeHeadComponent } from '../search-type-head/search-type-head.component';

@Component({
  selector: 'app-rnd-misc',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SearchTypeHeadComponent],
  templateUrl: './rnd-misc.component.html',
  styleUrl: './rnd-misc.component.css',
})
export class RndMiscComponent {
  // Sample code
  @Input()
  enteredSearchValue: string = '';

  public nameForm: FormGroup;
  savedname: string = '';

  // For auto-suggest search Child component
  result: string = '';
  @ViewChild('searchTypeHeadComponent', {static: false}) searchTypeHeadComponent: SearchTypeHeadComponent | undefined;
  

  constructor(private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      name: '',
    });
  }

  saveForm(event: any) {
    if (event) {
      alert(`You entered: ${event.target.value}`);
      console.log('You entered: ', event.target.value);
    } else {
      this.savedname = this.nameForm.get('name')?.value;
      console.log('get the saved name', this.nameForm.get('name'));
    }
  }

  save(event: any) {
    alert(`You entered: ${event.target.value}`);
    console.log('You entered: ', event.target.value);
  }

  getName(savename: string) {
    console.log('it does nothing', savename);
  }

  searchText() {
    console.log('You entered ngModel: ', this.enteredSearchValue);
    alert(`You entered: ${this.enteredSearchValue}`);
  }

  // For auto-suggest search Child component 
  setSearchKeyword($event: any) {
  	this.result = $event.keyword;
  }
}
