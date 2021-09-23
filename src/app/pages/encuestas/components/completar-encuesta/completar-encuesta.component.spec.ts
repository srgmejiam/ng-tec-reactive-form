import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarEncuestaComponent } from './completar-encuesta.component';

describe('CompletarEncuestaComponent', () => {
  let component: CompletarEncuestaComponent;
  let fixture: ComponentFixture<CompletarEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletarEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
