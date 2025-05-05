import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { QuizComponent } from "../quiz/quiz.component";

@Component({
  selector: 'app-index',
  imports: [HomeComponent, AboutComponent, QuizComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
