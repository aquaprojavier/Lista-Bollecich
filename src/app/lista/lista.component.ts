import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  fecha = new Date;

  estudiantes =[
    {
      nombre:'Javier',
      curso:'Java',
      nota: 8
    },
    {
      nombre:'Nestor',
      curso:'Javascript',
      nota: 4
    },
    {
      nombre:'Cecilia',
      curso:'Python',
      nota: 7
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
