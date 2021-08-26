import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  @Input()
  texto?: string; 

  @Input()
  textoBtn?: string; 

  @Output()
  decir=new EventEmitter <string> ()
  gritar(palabra:string) {
    this.decir.emit(palabra)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
