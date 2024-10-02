import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResortComponent } from './components/resort/resort.component';
import {HeaderComponentComponent} from './components/header-component/header-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResortComponent, HeaderComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-finance-tracker';
}
