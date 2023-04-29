import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'playground',
    children: [
      {
        path: 'ai',
        loadChildren: () => import("./artificial-intelligence/artificial-intelligence.module").then(m => m.ArtificialIntelligenceModule)
      },
      {
        path: '',
        redirectTo: 'ai',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'playground',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
