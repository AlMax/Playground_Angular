import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from "@ngx-formly/core";

@Component({
  selector: 'formly-field-custom',
  template: `
    <div>
      <label>{{ props.label }}. Sta caricando: {{ loading }}</label>
      <br>
      <span *ngIf="loading" nz-icon [nzType]="'sync'" [nzSpin]="true"></span>
      <input nz-input [disabled]="loading" [formControl]="formControl" [formlyAttributes]="field" type="text">
    </div>
  `,
})
export class UiInputComponent extends FieldType<FieldTypeConfig> {
  loading: boolean = true;

  ngOnInit() {
    this.props['loading'].subscribe((value: boolean) => {
      console.log('loading value', value);
      this.loading = value;
    });
  }
}
