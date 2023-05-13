import { NgModule } from '@angular/core';
import { PlaygroundComponent } from './playground.component';
import {PlaygroundRoutingModule} from "./playground-routing.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormlyModule} from "@ngx-formly/core";
import {ReactiveFormsModule} from "@angular/forms";
import { UiInputComponent } from './ui-components/ui-input.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    PlaygroundComponent,
    UiInputComponent
  ],
  imports: [
    PlaygroundRoutingModule,
    ReactiveFormsModule,
    CommonModule,

    NzButtonModule,
    NzIconModule,
    NzInputModule,

    FormlyModule.forRoot({
      types: [
        { name: 'customInput', component: UiInputComponent },
      ],
    }),
  ]
})
export class PlaygroundModule { }
