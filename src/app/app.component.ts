import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { QuizComponent } from "./quiz/quiz.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
