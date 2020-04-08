import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasGeojsonComponent } from './mapas-geojson.component';

describe('MapasGeojsonComponent', () => {
  let component: MapasGeojsonComponent;
  let fixture: ComponentFixture<MapasGeojsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapasGeojsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapasGeojsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
