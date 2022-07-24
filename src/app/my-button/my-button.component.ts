import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnChanges{
  @Input() control : FormControl;
  @Output() controlChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('child changes input', changes);
    this.control.valueChanges.subscribe(
      changes => this.controlChange.emit(changes)
    )
  }
}
