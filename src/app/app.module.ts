import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMainViewComponent } from './card/card-main-view/card-main-view.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { IconsModule } from './shared/icons/icons.module';
import { CardProductViewComponent } from './card/card-product-view/card-product-view.component';
import { CtaComponent } from './card/cta/cta.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SafePipe } from './shared/pipes/safe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CardMainViewComponent,
    CardHeaderComponent,
    CardProductViewComponent,
    CtaComponent,
    SafePipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
