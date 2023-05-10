import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-translated';
  langageControl: FormControl;
  languages: Record<string, string> = { fr: 'french', en: 'english' };

  constructor(private readonly translate: TranslateService) {
    this.langageControl = new FormControl(this.translate.currentLang);
    this.translate.onLangChange
      .pipe(
        tap({
          next: (lang) => {
            this.langageControl.patchValue(lang.lang, { emitEvent: false });
          },
        })
      )
      .subscribe();
    this.langageControl.valueChanges
      .pipe(tap({ next: (lang: string) => this.handleChangeTranslation(lang) }))
      .subscribe();
  }

  handleChangeTranslation(lang: string) {
    if (!(lang in this.languages)) {
      throw new Error('Unknow langage');
    }
    this.translate.use(lang);
  }
}
