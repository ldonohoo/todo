import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllListsComponent } from './all-lists/all-lists.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

export const routes: Routes = [  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home on empty path
    { path: 'home', component: HomeComponent },
    { path: 'all_lists', component: AllListsComponent },
    { path: 'one_list/:id', component: ListDetailComponent },
    { path: '**', redirectTo: 'home' } // Wildcard route for a 404 page
  ];


  // to add routing:
  //    1. update this file with definition of routes
  //    2. make sure provideRouter is declared in providers and
  //         is passed the routes defined in #1
  //        (providers are declared in bootstrapApplication in 
  //          main.ts but in this case stuck in app.config.ts)
  //    3. make sure router outlet is defined and replace changable
  //        page element component with <router-outlet>