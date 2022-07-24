import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should add', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const tempNum = app.number;

    app.add();
    expect(app.number).toBeGreaterThan(tempNum);
  });

  it('should subtract', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const tempNum = app.number;

    if (tempNum > 0) {
      app.sub();

      expect(app.number).toBeLessThan(tempNum);
    } else {
      expect(app.number).toBe(0);
    }
  });

  it('should submit',()=>{
    const fixture = TestBed.createComponent(AppComponent)
  })
});
