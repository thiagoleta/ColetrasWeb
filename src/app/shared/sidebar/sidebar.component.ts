import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { faTachometerAlt, faTrashAlt, faArrowLeft, faArrowRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  titulo: string = 'Coletrans';
  toggleIcon: boolean = false;

  @Output() toggle: EventEmitter<void> = new EventEmitter();

  // SEÇÃO DE ÍCONES
  faTachometerAlt: IconDefinition = faTachometerAlt;
  faTrashAlt: IconDefinition = faTrashAlt;
  faArrowLeft: IconDefinition = faArrowLeft;
  faArrowRight: IconDefinition = faArrowRight;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggleIcon = !this.toggleIcon;
    this.toggle.emit();
  }

}
