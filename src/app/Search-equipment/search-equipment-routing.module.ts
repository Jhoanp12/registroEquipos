import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchEquipmentPage } from './search-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: SearchEquipmentPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchEquipmentRoutingModule {}
