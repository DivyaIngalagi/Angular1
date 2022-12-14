import { Directive,ElementRef,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appTtClass]'//to apply directive we have selector on any elements
})
export class TtClassDirective implements OnInit {
  //our directive has to take class as an input bcoz it is a class
  @Input() appTtClass:string="";//directive has to take input class name
  //now we have to get the reference of that element
  //to apply that element we need refeence of that eleemtn to get that  we have ElementRef
  //angular inject the parent element when we ask for the instance of the ElementRef
  constructor(private el:ElementRef) { }
  ngOnInit(): void {
    //now we can access the DOM element through the property nativeelement
    this.el.nativeElement.classList.add(this.appTtClass);
    //now we have to use this directive
  }

}
