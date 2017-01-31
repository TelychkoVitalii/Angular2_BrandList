import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="startDescription text-center">
      <h1>Welcome to World Online Store!</h1>
      <p>Here you can choose any top brand you want. <br>Enjoy by using our store!</p>
    </div>
  `,
  styles: [`
    .startDescription {
      margin-top: 40px;
      padding: 50px 50px;
      border: 1px solid black;
      border-radius: 5px;
      font-family: Inconsolata;
    }
    
    .startDescription h1 {
      font-size: 40px;
    }
    
    .startDescription p {
      font-size: 24px;
    }
  `]
})
export class HomeComponent {}
