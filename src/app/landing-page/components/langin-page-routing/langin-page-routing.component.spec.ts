import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { windowCount } from 'rxjs';
import { LanginPageRoutingComponent } from './langin-page-routing.component';

function findEl<T>(fixture: ComponentFixture<T>, testID: string): DebugElement {
  return fixture.debugElement.query(By.css(`[data-testid=${testID}]`));
}

function clickEl<T>(
  fixture: ComponentFixture<T>,
  testID: string,
  event: Function | null = null
): void {
  const element = findEl(fixture, testID);

  element.triggerEventHandler('click', event);
}

function expectText<T>(
  fixture: ComponentFixture<T>,
  testID: string,
  text: string
) {
  const element = findEl(fixture, testID);

  expect(element.nativeElement.textContent).toBe(text);
}

describe('LanginPageRoutingComponent', () => {
  let fixture: ComponentFixture<LanginPageRoutingComponent>;
  let component: LanginPageRoutingComponent;


  beforeAll(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanginPageRoutingComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LanginPageRoutingComponent);
  });

  beforeEach(async () => {
    fixture.detectChanges();
  });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should say yes', () => {
    expectText(fixture, 'paragraph', 'yes');
  });

  it('should add', () => {
    component = fixture.componentInstance;
    clickEl(fixture, 'counter-btn');
    fixture.detectChanges();
    expectText(fixture, 'counter-btn', `${component.count}`);
  });
});
