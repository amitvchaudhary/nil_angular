import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {

  @Input() customeClick: string;
  @Output() href = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  customeHREF(){
    this.href.emit('This is Done !');
    }
}
