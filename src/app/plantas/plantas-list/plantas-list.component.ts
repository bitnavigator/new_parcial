import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {
  plantas: Array<Planta> = [];

  constructor(private plantasService: PlantasService) { }

  getPlantas(): void {
    this.plantasService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }
  get totalInterior(){
    return this.plantas.filter(item => item.tipo==="Interior").length;
  }

  get totalExterior(){
    return this.plantas.filter(item => item.tipo==="Exterior").length;
  }


  ngOnInit() {
    this.getPlantas();
  }

}
