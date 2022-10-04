import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipmentPage } from './equipment.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EquipmentPageRoutingModule } from './equipment-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EquipmentPageRoutingModule
  ],
  declarations: [EquipmentPage]
})
export class EquipmentPageModule {}
