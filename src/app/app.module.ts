import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { ServicesComponent } from './sections/services/services.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ClientComponent } from './sections/client/client.component';
import { AboutComponent } from './sections/about/about.component';
import { CoreConstructionComponent } from './sections/core-construction/core-construction.component';
import { SpecializedTechnicalComponent } from './sections/specialized-technical/specialized-technical.component';
import { FinishesCoatingsComponent } from './sections/finishes-coatings/finishes-coatings.component';
import { TestimonyMessageComponent } from './sections/testimony-message/testimony-message.component';

import { AppConfigService } from './core/services/app-config.service';

export function initializeApp(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    ClientComponent,
    AboutComponent,
    CoreConstructionComponent,
    SpecializedTechnicalComponent,
    FinishesCoatingsComponent,
    TestimonyMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }