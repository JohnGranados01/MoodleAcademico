import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  estudiante = false;

  @Output() inNavBar = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onNavBar(){
    this.inNavBar.emit();
  }
}
