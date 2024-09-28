import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-rnd-misc',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './rnd-misc.component.html',
  styleUrl: './rnd-misc.component.css',
})
export class RndMiscComponent {
  // Sample code
  @Input()
  enteredSearchValue: string = '';

  public nameForm: FormGroup;
  savedname: string = '';

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
}
