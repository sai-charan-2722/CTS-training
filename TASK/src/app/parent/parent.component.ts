import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
    username:string = 'saicharan '
    a=10;b=10;ans=0;
    mult(){
      this.ans=this.a*this.b;
    }
    x=10;
    datafromchild=0;
}
