import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';  // Importando o QuizComponent
import { FormsModule } from '@angular/forms';  // Importando FormsModule

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Adicionando FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
