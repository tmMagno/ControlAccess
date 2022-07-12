import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  tDoc: any[] = ['DNI', 'Cedula', 'Pasaporte'];
  tDis: any[] = ['Carnet'];
  constructor() { }

  ngOnInit(): void {
  }

}
