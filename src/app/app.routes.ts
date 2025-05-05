import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WinnersListComponent } from './winners-list/winners-list.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    {path:"",component:IndexComponent},
    {path:"winners",component:WinnersListComponent},
];
