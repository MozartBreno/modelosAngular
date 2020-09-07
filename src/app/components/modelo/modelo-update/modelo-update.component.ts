import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../modelo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Modelo } from '../modelo.model';

@Component({
  selector: 'app-modelo-update',
  templateUrl: './modelo-update.component.html',
  styleUrls: ['./modelo-update.component.css']
})
export class ModeloUpdateComponent implements OnInit {

  modelo: Modelo

  constructor(private modeloService: ModeloService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.modeloService.readById(id).subscribe(modelo => {
      this.modelo = modelo
    })
  }
  updateModelo(): void {
    this.modeloService.update(this.modelo).subscribe(() => {
      this.modeloService.showMessage('Modelo atualizado com sucesso')
      this.router.navigate(['/modelo'])
    })
  }
  cancel(): void {
    this.router.navigate(['/modelo'])
  }
}
