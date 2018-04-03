/**
 * ----------------------------
 * --author: Sandro del Valle--
 * ----------------------------
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CombineFilesComponent } from './combine-files.component/combine-files.component';
import { InvoiceHttpService } from './services/invoice-http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CombineFilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InvoiceHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
