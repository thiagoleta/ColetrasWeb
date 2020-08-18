import { Component, OnInit } from '@angular/core';
import { IconDefinition, faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSearch: IconDefinition = faSearch;
  faBell: IconDefinition = faBell;
  faEnvelope: IconDefinition = faEnvelope;

  showNotificacoes: boolean = false;
  showMensagem: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mostrarNotificacoes() {
    this.showMensagem = false;
    this.showNotificacoes = !this.showNotificacoes;
  }

  mostrarMensagens() {
    this.showNotificacoes = false;
    this.showMensagem = !this.showMensagem;
  }

}
