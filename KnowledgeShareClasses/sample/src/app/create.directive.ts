import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCreate]'
})
export class CreateDirective {

  constructor(private eleRef:ElementRef) {
    eleRef.nativeElement.style.backgroundColor = 'gray';
    eleRef.nativeElement.style.color = 'white';
    eleRef.nativeElement.style.display = 'flex';
    eleRef.nativeElement.style.justifyContent = 'center';
  }

}
