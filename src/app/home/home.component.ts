import { Component } from '@angular/core';
import { AllListsComponent } from '../all-lists/all-lists.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <section>
      <h2>Welcome to the great list app!</h2>
      <div class="button-container">
        <button [routerLink]="['/all_lists']" class="list-headers-button"
         >Let me see all the great lists that have been created!
        </button>
      </div>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
