import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  userData: any ={
    id:"",
    firstName:"",
    lastName:"",
    address:"",
    city:"",
    state:"",
    email:"",
    phone:""
  } 

  // userData: any[] = [
    
  // ];

  isPopupVisible: boolean = false;

  constructor(public componentService: ComponentsService, public router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }
  getUserData() {
    return this.componentService.getUserData().subscribe(
      (responce: any) => {
        this.userData = responce       
      }, (error) => {
        console.error('Error fetching user data:', error);
      }
    )
  }
  deleteUser(userId: number): void {
    this.componentService.deleteUser(userId).subscribe(
      (response) => {
        console.log('User deleted successfully:', response);
        this.getUserData();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  updateUser(id: any) {
    this.componentService.updateUser(id).subscribe(
      (response) => {
        console.log('API Response:', response);
        this.isPopupVisible = true; 
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  submit(updatedUserData: any) {
    
    const userId = this.userData.id;
  
    this.componentService.updateUser({ id: userId, data: updatedUserData }).subscribe(
      (response) => {
        console.log('API Response:', response);
       
        this.userData = { ...this.userData, ...response };
      },
      (error) => {
        console.error('Error updating user:', error);
      },
      () => {
        
      }
    );
    this.isPopupVisible = false;
  }
  
 

}
