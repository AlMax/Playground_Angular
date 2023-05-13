import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  loading$ = new BehaviorSubject(true);

  form = new FormGroup({});
  model = {
    email: ''
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'customInput',
      templateOptions: {
        label: 'Qui metti la mail',
        placeholder: 'Inserisci una cazzo di mail',
        required: false,
        loading: this.loading$.asObservable(),
      },
    }
  ];

  ngOnInit() {
    setTimeout(()=>{
      this.loading$.next(false);
      this.model.email = "ciao";
      this.form.patchValue(this.model);
    }, 3000);
  }

  onSubmit(model: any) {
    console.log("submitted!", model);
  }
}
