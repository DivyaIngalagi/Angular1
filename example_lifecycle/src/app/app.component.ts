import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example_lifecycle';
  data="hello i'm parent";
  updateData(){
    this.data="hi..."
  }
  ngAfterViewInit(): void {
    this.data="hii";
    // console.log(this.data);
    console.log("parent ngAfterViewInit");
  }
}
