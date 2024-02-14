import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AboutService } from '../about-us/about.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public themes: string[] = [ 'app-blue','app-light', 'app-dark', 'app-green'];
  public themeSubject = new BehaviorSubject<string>(this.themes[0]);
  public theme$ = this.themeSubject.asObservable();
  public data: any;
  selectedTheme: string = ' ';
constructor( private aboutService: AboutService){

}
  ngOnInit(): void {
    this.theme$.subscribe((theme) => {
      this.selectedTheme = theme;
    });
    
    this.data= this.aboutService.getCartData();
  }

  changeTheme(newTheme: string): void {
    this.themeSubject.next(newTheme);
  }
  add(product:any){
    this.aboutService.addToCart(product)
    console.log(this.aboutService.getCartData());
  }
}
