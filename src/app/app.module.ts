import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMainViewComponent } from './card/card-main-view/card-main-view.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { IconsModule } from './icons/icons.module';
import { CardProductViewComponent } from './card/card-product-view/card-product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardMainViewComponent,
    CardHeaderComponent,
    CardProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
