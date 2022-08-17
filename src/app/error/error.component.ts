import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(

    private router: Router,

  ) { }

  ngOnInit(): void {

    if (environment.token == '') {

      alert("Sua sessão expirou, faça o login novamente!");
      this.router.navigate(['/login'])

    }

  }

}
