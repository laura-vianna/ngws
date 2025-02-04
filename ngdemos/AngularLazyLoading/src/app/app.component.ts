import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>My App</h1>
  <nav>
    <a routerLink="eager">Eager</a>
    <a routerLink="lazy">Lazy</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
