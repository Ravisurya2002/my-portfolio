import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,          // ✅ Required
  imports: [],               // ✅ Empty is fine for now
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']  // ✅ Plural
})
export class ProjectsComponent {}
