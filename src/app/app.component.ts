import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    // standalone: true,
    // imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'angular-offline';
}
