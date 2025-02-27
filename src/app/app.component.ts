import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';  // Importando o QuizComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quizStarted: boolean = false;

  startQuiz() {
    this.quizStarted = true;
  }
}
