import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  name = new FormControl('', Validators.required);

  constructor(
    private readonly fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['']
    });

    this.form.valueChanges.subscribe(changes => console.log('form group changes', changes))
  }

  get FormControl(){
    return typeof FormControl;
  }
}
