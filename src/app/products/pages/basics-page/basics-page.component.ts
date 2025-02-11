import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'christian';
  public nameUpper: string = 'CHRISTIAN';
  public fullName: string = 'ChriTian MuÑoz';

}
