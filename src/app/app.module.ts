import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UsersService } from "./users/users.service";
import { ViewMatterTeacherComponent } from './components/view-matter-teacher/view-matter-teacher.component';
import { ViewTaskEstudentComponent } from './components/view-task-estudent/view-task-estudent.component';
import { QualifyTaskTeacherComponent } from './components/qualify-task-teacher/qualify-task-teacher.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ViewMatterTeacherComponent,
    ViewTaskEstudentComponent,
    QualifyTaskTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
