import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JobDescriptionFormComponent} from "./components/job-description-form/job-description-form.component";
import {
  DescriptionImprovementFormComponent
} from "./components/description-improvement-form/description-improvement-form.component";
import {RecruitmentComponent} from "./recruitment.component";

const routes: Routes = [
  {
    path: '',
    component: RecruitmentComponent,
    children: [
      {
        path: 'jobDesc',
        component: JobDescriptionFormComponent
      },
      {
        path: 'jobImp',
        component: DescriptionImprovementFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule {
}
