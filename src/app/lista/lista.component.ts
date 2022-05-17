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
    },
    {
      nombre:'Hugo',
      curso:'Go',
      nota: 10
    },
    {
      nombre:'Nanci',
      curso:'Python',
      nota: 3
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
