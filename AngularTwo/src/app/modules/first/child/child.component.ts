import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() item : string = "";
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value : string)
  {
    this.newItemEvent.emit(value);
    console.log(value);
  }
}

