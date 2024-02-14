import { NgModule } from '@angular/core';
import { CommonModule } from'@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ChildComponent } from './home/child/child.component';
import { PaginationComponent } from './register/pagination/pagination.component';
import { LayoutComponent } from './layout/layout.component';
import { CartComponent } from './cart/cart.component';
import { SidebarComponent } from '../side-nav/sidebar/sidebar.component';


@NgModule({
  declarations: [
 FooterComponent,
 HomeComponent,
 ContactUsComponent,
 AboutUsComponent,
 ServicesComponent,
 RegisterComponent,
 LoginComponent,
 HeaderComponent,
 ChildComponent,
 PaginationComponent,
 LayoutComponent,
 CartComponent,
 SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule   
  ],
})
export class SharedModule {}

