import { Routes } from '@angular/router';
import { GamesComponent } from './games.component';

// include sub components
import { ListComponent } from './list/list.component';

export const GamesRoutes: Routes = [{
  path: '',
  component: GamesComponent,
  children: [
    {path: 'games', component: ListComponent}
  ]
}]
