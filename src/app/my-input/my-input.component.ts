import { Component, Input, Optional, Self } from "@angular/core";
import { ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

export const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(obj: any) {
  },
  registerOnChange(fn: any) {
  },
  registerOnTouched(fn: any) {
  }
}

@Component({
  standalone: true,
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyInputComponent{
  @Input() invalidMsg: string = '';
  constructor(
    @Self() @Optional() public ngControl: NgControl
  ) {
    this.ngControl && (this.ngControl.valueAccessor = NOOP_VALUE_ACCESSOR);
  }

}
