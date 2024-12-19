import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieShopSPA';
}

/**
 *  > Cmd/Ctrl + shift + P : open all settings in vs code
 *  Cmd/ctrl + P: Search Files
 *  Alt + shift + F: formatting
 *  Alt + shift + ArrowDown : copy to line below
 */