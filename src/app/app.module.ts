import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ClickOutsideModule } from 'ng-click-outside'

import { AppComponent } from './app.component';
import { ItemsComponent } from './main-view/items/items.component';
import { AddItemComponent } from './main-view/add-item/add-item.component';
import { MainViewComponent } from './main-view/main-view.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddItemComponent,
    MainViewComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
