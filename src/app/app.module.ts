import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ReadPersonsComponent } from './components/read-persons/read-persons.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { EditComponent } from './components/edit/edit.component';
import { DataFilterPipe } from './services/data.filter.pipe';

// import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ReadPersonsComponent,
    CreateComponent,
    ErrorComponent,
    EditComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    DataTableModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
