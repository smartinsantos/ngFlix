import { Component, Input } from '@angular/core';

@Component({
  selector: 'nf-showcard',
  templateUrl: './showcard.component.html',
  styleUrls: ['./showcard.component.css']
})
export class ShowcardComponent {
  @Input() movie: Object = {}
  constructor() {}
}
