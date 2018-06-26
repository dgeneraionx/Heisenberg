import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTourOfHeroesComponent } from './angular-tour-of-heroes.component';

describe('AngularTourOfHeroesComponent', () => {
  let component: AngularTourOfHeroesComponent;
  let fixture: ComponentFixture<AngularTourOfHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTourOfHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTourOfHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
