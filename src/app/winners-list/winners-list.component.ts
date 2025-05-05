import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-winners-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './winners-list.component.html',
  styleUrl: './winners-list.component.css'
})
export class WinnersListComponent implements OnInit {
  winners: any[] = [];
  allUsers: any[] = [];

  ngOnInit(): void {
    this.allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    this.winners = this.allUsers.filter(user => user.isWinner);
  }

  copyArrayWithNewLines() {
    const result = this.winners
      .map(winner => winner.name)  // ناخد الاسم فقط
      .join('\n');                 // كل اسم في سطر
  
    navigator.clipboard.writeText(result)
      .then(() => {
        alert('تم نسخ الأسماء إلى الحافظة!');
      })
      .catch(err => {
        alert('فشل النسخ: ' + err);
      });
  }
  
  copyArrayWithNewLinesForAllUsers() {
    const result = this.allUsers.map(user => `${user.name}  ${user.phone}`)
      .join('\n');

    navigator.clipboard.writeText(result)
      .then(() => {
        alert('تم نسخ كل المستخدمين إلى الحافظة !');
      })
      .catch(err => {
        alert('فشل النسخ: ' + err);
      });
  }
}

