import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() name1: any;

@Output() customEvent = new EventEmitter()

sendData(){
  this.customEvent.emit("child. hello I'm  from child")
}
}
