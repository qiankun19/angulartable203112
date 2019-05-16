import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TableComponent, SearchPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
