import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesComponents } from './advantages-components';

describe('AdvantagesComponents', () => {
  let component: AdvantagesComponents;
  let fixture: ComponentFixture<AdvantagesComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvantagesComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvantagesComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
