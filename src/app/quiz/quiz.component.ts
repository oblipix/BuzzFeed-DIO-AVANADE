import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  question: string = 'Qual é a sua cor favorita?';
  options: string[] = ['Azul', 'Verde', 'Vermelho', 'Amarelo'];

  selectedOption: string = '';

  submitAnswer() {
    alert('Você escolheu: ' + this.selectedOption);
  }
}
