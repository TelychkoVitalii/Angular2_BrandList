import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "./auth.guard";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";
import { SignUpComponent } from "./auth/signUp/sign-up.component";
import { SignInComponent } from "./auth/signIn/sign-in.component";

const routes: Routes = [
  { path: 'list', loadChildren: 'app/products/products.module#ProductsModule'}, // dfine children roots
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]}, // protected root
  { path: 'signUp', component: SignUpComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);

