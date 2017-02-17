import { Component } from '@angular/core';

@Component({
  selector: 'nf-root',
  styleUrls: ['./app.component.css'],
  template:`
  <div id='nf-root'>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {}
