import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTwo';
  currentItem : string = "Hello Boii";


  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string)
  {
    this.items.push(newItem);
    console.log(newItem);

    console.log("Updated list ::",this.items);
  }


}
