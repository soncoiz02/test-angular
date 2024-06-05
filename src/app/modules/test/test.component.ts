import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  isOnline: boolean;

  constructor(private httpClient: HttpClient) {
    this.isOnline = false;
  }

  public ngOnInit(): void {
    this.updateOnlineStatus();

    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine;
    console.info(`isOnline=[${this.isOnline}]`);
    this.getApi(this.isOnline)
  }

  getApi(status: boolean) {
    if (!status) return
    this.httpClient.get('https://food-api-nine.vercel.app/products').subscribe((res: any) => {
      console.log(res);

    })
  }
}
