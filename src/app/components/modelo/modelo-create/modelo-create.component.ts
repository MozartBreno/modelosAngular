import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../../modelo/modelo.service';
import { Router} from '@angular/router';
import { Modelo } from '../modelo.model';

@Component({
  selector: 'app-modelo-create',
  templateUrl: './modelo-create.component.html',
  styleUrls: ['./modelo-create.component.css']
})
export class ModeloCreateComponent implements OnInit {

  modelo: Modelo = {
    nome: '',
    descricao: '',
    parametrizacao: '',
    parametros: ''
  }

  constructor(private modeloService : ModeloService, private router : Router) { }

  ngOnInit(): void {
  }

  createModelo():void {
    this.modeloService.create(this.modelo).subscribe(() => {
      this.modeloService.showMessage("inserido com sucesso");
      this.router.navigate(['/modelo'])
    })
  }
  cancel():void {
    this.router.navigate(['/modelo'])
  }

}
