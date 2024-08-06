import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <h1><a [routerLink]="['/']">GL</a>GreatList</h1>
    </header>
  `,
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
