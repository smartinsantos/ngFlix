import { Component, Input } from '@angular/core';

@Component({
  selector: 'nf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() back: Boolean = false;
}
