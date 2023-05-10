import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsComponent } from './informations.component';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

describe('InformationsComponent', () => {
  let component: InformationsComponent;
  let fixture: ComponentFixture<InformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationsComponent],
      imports: [MatCardModule, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render information_title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain(
      'information_title'
    );
  });

  it('should render information_subtitle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-subtitle')?.textContent).toContain(
      'information_subtitle'
    );
  });

  it('should render information_description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-content p')?.textContent).toContain(
      'information_description'
    );
  });

  it('should set picture alt', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')?.getAttribute('alt')).toContain(
      'information_picturealt'
    );
  });
});
