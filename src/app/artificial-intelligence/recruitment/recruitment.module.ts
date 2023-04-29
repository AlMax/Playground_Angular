import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { JobDescriptionFormComponent } from './components/job-description-form/job-description-form.component';
import { DescriptionImprovementFormComponent } from './components/description-improvement-form/description-improvement-form.component';
import {RecruitmentComponent} from "./recruitment.component";


@NgModule({
  declarations: [
    RecruitmentComponent,
    JobDescriptionFormComponent,
    DescriptionImprovementFormComponent
  ],
  imports: [
    CommonModule,
    RecruitmentRoutingModule
  ]
})
export class RecruitmentModule { }
