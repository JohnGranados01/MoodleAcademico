import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { ViewMatterEstudentComponent } from "./components/view-matter-estudent/view-matter-estudent.component";
import { ViewTaskEstudentComponent } from "./components/view-task-estudent/view-task-estudent.component";
import { ViewMatterTeacherComponent } from "./components/view-matter-teacher/view-matter-teacher.component";
import { QualifyTaskTeacherComponent } from "./components/qualify-task-teacher/qualify-task-teacher.component";

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "estudentMatterview", component:ViewMatterEstudentComponent,pathMatch:"full"},
  { path: "estudentTaskview", component:ViewTaskEstudentComponent,pathMatch:"full"},
  { path: "teacherMatterview", component:ViewMatterTeacherComponent,pathMatch:"full"},
  { path: "teacherTaskQualify", component:QualifyTaskTeacherComponent,pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
