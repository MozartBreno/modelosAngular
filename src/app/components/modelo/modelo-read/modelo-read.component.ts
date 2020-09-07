import { ModeloService } from './../modelo.service';
import { Modelo } from './../modelo.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ModeloDataSource} from './modelo-read-datasource';

@Component({
  selector: 'app-modelo-read',
  templateUrl: './modelo-read.component.html',
  styleUrls: ['./modelo-read.component.css']
})
export class ModeloReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Modelo>;
  dataSource: ModeloDataSource;

  displayedColumns = ['id', 'nome','descricao','parametrizacao','parametros','action'];


  constructor(private modeloService : ModeloService) { }

  ngOnInit(): void {
      this.modeloService.read().subscribe(modelos =>{
      debugger;
      this.dataSource = new ModeloDataSource(modelos);
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    })
  }
}
