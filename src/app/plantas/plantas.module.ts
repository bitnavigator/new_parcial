import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './plantas.component';
import { PlantasListComponent } from './plantas-list/plantas-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantasComponent, PlantasListComponent],
  declarations: [PlantasComponent, PlantasListComponent]
})
export class PlantasModule { }
