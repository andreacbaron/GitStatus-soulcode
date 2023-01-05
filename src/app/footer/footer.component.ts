// nome-do-componente.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class footer implements OnInit {

  anoAtual: number;
  nomeEmpresa: string;

  constructor() {
    this.anoAtual = new Date().getFullYear();
    this.nomeEmpresa = 'GitStats';
  }

  ngOnInit() {
  }

}
