/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantasListComponent } from './plantas-list.component';
import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';
import { faker } from '@faker-js/faker';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantasListComponent ],
      providers: [PlantasService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      let plantaObj = new Planta();
      plantaObj.id = faker.datatype.number();
      plantaObj.nombre_comun = faker.lorem.word(7);
      plantaObj.nombre_cientifico = faker.lorem.sentence(3);
      plantaObj.tipo = "Interior";
      plantaObj.altura_maxima = faker.datatype.number();
      plantaObj.clima = faker.lorem.word(7);
      plantaObj.sustrato_siembra = faker.lorem.word(10);
      component.plantas.push(plantaObj);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create: plantas-list', () => {
    expect(component).toBeTruthy();
  });

  it('should has: table ', () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('should have an dd element ', () => {
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toEqual(component.plantas[0].nombre_comun)
  });

  it('should has 2 <h6> elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(debug.queryAll(By.css('h6'))).toHaveSize(2)
  });

});
