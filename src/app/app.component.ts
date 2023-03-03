import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  num = 0;
  hide:boolean = true;
  
  onPress() {
    
   this.num++;
    alert(this.num);
  }

  onStar(){
    this.hide=false;
  }
}
