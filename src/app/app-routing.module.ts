import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ai',
        loadChildren: () => import("./artificial-intelligence/artificial-intelligence.module").then(m => m.ArtificialIntelligenceModule)
      },
      {
        path: 'playground',
        loadChildren: () => import("./playground/playground.module").then(m => m.PlaygroundModule)
      },
      {
        path: '',
        redirectTo: 'playground',
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
