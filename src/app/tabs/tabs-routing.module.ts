import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'equipment',
        loadChildren: () => import('../equipment/equipment.module').then(m => m.EquipmentPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../Register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'search-equipment',
        loadChildren: () => import('../Search-equipment/search-equipment.module').then(m => m.SearchEquipmentPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../Profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/equipment',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/equipment',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
