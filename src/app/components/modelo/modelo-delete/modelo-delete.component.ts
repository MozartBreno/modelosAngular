import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Modelo } from '../modelo.model';
import { ModeloService } from '../modelo.service';

@Component({
  selector: 'app-modelo-delete',
  templateUrl: './modelo-delete.component.html',
  styleUrls: ['./modelo-delete.component.css']
})
export class ModeloDeleteComponent implements OnInit {

  modelo: Modelo
  constructor(private modeloService: ModeloService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.modeloService.readById(id).subscribe(modelo => {
      this.modelo = modelo
    })
  }
  deleteModelo(): void{
    this.modeloService.delete(this.modelo.id).subscribe(() => {
      this.modeloService.showMessage('Modelo excluido com sucesso')
      this.router.navigate(['/modelo'])
    })
  }
  cancel(): void{
    this.router.navigate(['/modelo'])
  }
}
