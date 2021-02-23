import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  openDocumentation(): void {
    let url = 'https://docs.google.com/document/d/14Z46WHXr5gobQ314yqYyXBzjJuZqxjKSclWOfrywwWI/edit?usp=sharing';
    window.open(url, '_blank');
  }

  startGame(): void {
    this.router.navigateByUrl('/game');
  }
}
