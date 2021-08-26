import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  escuchar (palabra:string) {alert(palabra)}

  public boton?:string

  eventoClick(name:string)
  {
    this.boton= name
  }

  constructor() { }

  ngOnInit(): void {
  }

}
