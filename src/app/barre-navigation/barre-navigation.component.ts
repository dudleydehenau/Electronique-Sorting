import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-barre-navigation',
  standalone: true,
  imports: [
    MatToolbarModule
  ],
  templateUrl: './barre-navigation.component.html',
  styleUrl: './barre-navigation.component.scss'
})
export class BarreNavigationComponent {

}
