import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoennLeaders } from './hoenn-leaders';

describe('HoennLeaders', () => {
  let component: HoennLeaders;
  let fixture: ComponentFixture<HoennLeaders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennLeaders],
    }).compileComponents();

    fixture = TestBed.createComponent(HoennLeaders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
