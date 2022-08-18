import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

  constructor(

    private router: Router,
    private authService: AuthService

  ) { }

  ngOnInit(){

    window.scroll(0,0);

    if (environment.token == '') {

      alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/login'])

    }

  }

}