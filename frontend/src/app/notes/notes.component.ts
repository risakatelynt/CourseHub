import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None
})
export class NotesComponent {
  username = 'Risa';
  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = false;
  }
}
