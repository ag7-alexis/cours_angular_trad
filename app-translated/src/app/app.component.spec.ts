import { TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InformationsComponent } from './components/informations/informations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatOption } from '@angular/material/core';

describe('AppComponent', () => {
  let translate: TranslateService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        MatToolbarModule,
        MatSelectModule,
        MatCardModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [AppComponent, InformationsComponent],
    }).compileComponents();
    const injector = getTestBed();
    translate = injector.inject(TranslateService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-translated'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-translated');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.mat-toolbar span')?.textContent).toContain(
      'title'
    );
  });

  it('should select fr when use lang fr', () => {
    const fixture = TestBed.createComponent(AppComponent);
    translate.use('fr');
    fixture.detectChanges();
    // trigger select dropdown to access values
    const matSelectComponent: MatSelect = fixture.debugElement.query(
      By.directive(MatSelect)
    ).componentInstance;
    fixture.detectChanges();

    expect(matSelectComponent.value).toEqual('fr');
  });

  it('should select en when use lang en', () => {
    const fixture = TestBed.createComponent(AppComponent);
    translate.use('en');
    fixture.detectChanges();
    const matSelectComponent: MatSelect = fixture.debugElement.query(
      By.directive(MatSelect)
    ).componentInstance;
    fixture.detectChanges();

    expect(matSelectComponent.value).toEqual('en');
  });
});
