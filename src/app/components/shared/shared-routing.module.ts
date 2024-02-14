import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SideNavigationComponent } from '../side-nav/side-navigation/side-navigation.component';
import { BillsComponent } from '../side-nav/bills/bills.component';
import { ElementsComponent } from '../side-nav/elements/elements.component';
import { SidebarComponent } from '../side-nav/sidebar/sidebar.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cart', component: CartComponent },
      {
        path: 'sidebar',
        component: SidebarComponent,
        children: [
          {
            path: 'sidenavigation',
            component: SideNavigationComponent,
          },
          {
            path: 'bills',
            component: BillsComponent,
          },
          {
            path: 'elements',
            component: ElementsComponent,
          },
        ],
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
