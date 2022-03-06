import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CreateCenterMatrixComponent } from './components/create-center-matrix/create-center-matrix.component';
import { ListCenterMatrixComponent } from './components/list-center-matrix/list-center-matrix.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CenterMatrixService } from './services/center-matrix.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, CreateCenterMatrixComponent, ListCenterMatrixComponent],
  imports: [HttpClientModule, ReactiveFormsModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [CenterMatrixService],
  bootstrap: [AppComponent],
})
export class AppModule {}
