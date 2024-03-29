import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    @Input() y=0; 
    @Output() an=new EventEmitter();
    send() {
    this.an.emit(100)
    }
}
