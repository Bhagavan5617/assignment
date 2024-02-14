import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  UserData: any = [];
  constructor(private componenservice: ComponentsService, public router: ActivatedRoute, public router1:Router) { }  
  ngOnInit(): void {
    const userId = this.router.snapshot.queryParams['id'];

    if (userId) {
      this.componenservice.getUserById(userId).subscribe(
        (userData) => {
          this.UserData = userData;
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    }
  }
  submit(formData: any): void {  
    this.componenservice.addNewUser(formData).subscribe(
      (response) => {
        this.router1.navigateByUrl("/services");
      },
      (error) => {
        console.error('Error adding new user:', error);
      }
    );
  }
}
