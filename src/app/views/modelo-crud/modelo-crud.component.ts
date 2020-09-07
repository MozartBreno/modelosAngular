import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelo-crud',
  templateUrl: './modelo-crud.component.html',
  styleUrls: ['./modelo-crud.component.css']
})
export class ModeloCrudComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateToModelCreate(): void{
    this.router.navigate(['/modelo/create'])
  }

}
