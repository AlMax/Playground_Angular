import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recruitment',
    loadChildren: () => import("./recruitment/recruitment.module").then(m => m.RecruitmentModule)
  },
  {
    path: '',
    redirectTo: 'recruitment',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'recruitment'
  }
  /*{
    path: '',
    children: [
      {
        path: 'recruitment',
        loadChildren: () => import("./recruitment/recruitment.module").then(m => m.RecruitmentModule)
      },
      {
        path: '',
        redirectTo: 'recruitment'
      }
    ]
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtificialIntelligenceRoutingModule { }
