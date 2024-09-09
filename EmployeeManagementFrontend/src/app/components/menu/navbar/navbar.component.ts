import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  public logout(){
    this.authService.logout();
    this.router.navigate(["login"]);
  }
  public isLoggedIn():Boolean{
    return this.authService.isAuthenticated()
  }

  public isLoggedOut():Boolean{
    if (this.isLoggedIn() == false){
      return true
    }
    return false
  }
}
