import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  constructor(private _Router: Router) {}
  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(this.users);
  }
  i: number = 0;
  questions = [
    {
      question:
        'What are the ingredients of MINOXIGROW 5% with Minoxidil to enhance & make it better Formula ? (Select all that apply)',
      options: [
        { name: 'Glycerol', ispressed: false },
        { name: 'Alcohol', ispressed: false },
        { name: 'Menthol', ispressed: false },
        { name: 'Bepanthene', ispressed: false },
      ],
      answers: ['Glycerol', 'Menthol'],
    },
    {
      question: 'What is the Formula of MINOXIGROW 5% ?',
      options: [
        { name: 'Foam', ispressed: false },
        { name: 'Lotion', ispressed: false },
      ],
      answers: ['Foam'],
    },
  ];

  isSubmitted: boolean = false;
  score: number = 0;
  isWin: boolean | undefined;
  clickable: boolean = false;
  nextQuestion() {
    if (this.numOfClicks == 0) {
      return;
    } else {
      this.clickable = true;
    }
    if (this.i < this.questions.length - 1) {
      this.i++;
      this.numOfClicks = 0;
    } else {
      if (this.score === 3) {
        this.isWin = true;
      } else {
        this.isWin = false;
      }
    }
  }
  numOfClicks: number = 0;
  chooseOption(option: any) {
    option.ispressed = true;
    this.numOfClicks++;
    if (this.questions[this.i].answers.includes(option.name)) {
      this.score++;
      console.log(this.score);
    } else {
      this.score--;
    }
  }
  resetQuiz() {
    this.i = 0;
    this.score = 0;
    this.isWin = undefined;

    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].options.forEach((option) => {
        option.ispressed = false;
      });
    }
  }
  users: string[] = [];
  userName: string = '';
  phone: string = '';
  user:any={}
  submitName(isWinner:boolean) {
    if (this.userName==='' || this.phone==='') {
      alert('Please enter your name and phone');
      return;
    }
    if (this.isSubmitted) {
      return;
    } else {
      this.user.name=this.userName
      this.user.phone=this.phone
      this.user.isWinner=isWinner
      this.users.push(this.user);
      localStorage.setItem('users', JSON.stringify(this.users));
      this.isSubmitted = true;
    }
  }
  
}
