import { Component } from '@angular/core';
import { Feature1Component } from './feature1';

@Component({
  moduleId: module.id,
  selector: 'acli1-app',
  templateUrl: 'acli1.component.html',
  styleUrls: ['acli1.component.css'],
  directives: [Feature1Component]
})
export class Acli1AppComponent {
  title = 'acli1 works!';
}
