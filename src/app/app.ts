import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],  // ✅ Import both
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {   // ✅ Match this name with the import in main.ts
  protected title = 'my-portfolio';
}