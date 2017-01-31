import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SignUpComponent } from "./auth/sign-up.component";
import { SignInComponent } from "./auth/sign-in.component";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "./auth.guard";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: 'list', loadChildren: 'app/products/products.module#ProductsModule'},
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]},
  { path: 'signUp', component: SignUpComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);

