import { Component, DoCheck, Input, OnChanges,AfterViewInit,AfterViewChecked, OnDestroy, OnInit,AfterContentInit, AfterContentChecked,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  constructor() {  console.log("hello constructor");console.log(this.data); }
  ngAfterContentChecked(): void {
    console.log("hello ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("hello ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("hello ngdocheck");
  }
  ngOnDestroy(): void {
    console.log("hello ngdestroy");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    //this.data="bye";
    console.log(this.data);
    console.log("hello nochanges");
  }

  ngOnInit(): void {
    console.log("hello ngonit");
    // this.data="hii";
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    // this.data="hii";
    // console.log(this.data);
    console.log("hello ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("hello ngAfterViewChecked");
  }
  @Input() data="";

}
