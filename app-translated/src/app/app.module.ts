import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationsComponent } from './components/informations/informations.component';
import { MatCardModule } from '@angular/material/card';

const LANGS = ['fr', 'en'];

@NgModule({
  declarations: [AppComponent, InformationsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [TranslateService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

function initializeApp(translate: TranslateService) {
  return () => {
    const langCandidate = translate.getBrowserLang();
    if (langCandidate && LANGS.includes(langCandidate)) {
      return translate.use(langCandidate);
    }
    return translate.use(translate.defaultLang);
  };
}
