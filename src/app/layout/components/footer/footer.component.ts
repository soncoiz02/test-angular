import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/services/auth.service';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    standalone: true
})
export class FooterComponent {
  version = environment.VERSION;
  _translate: any;

  constructor(
    public authService: AuthService,
    //public socketService: SocketService,
  ) {
    this._translate = this.authService.getTranslate();
  }
  ngOnInit(): void {
    
    this.connectWebsocket();
  }
  connectWebsocket(isUltra?: any) {
    //this.socketService.connectWebsocket(isUltra);
  }
  startApp(appName: any, isUltra?: any) {
    //this.socketService.startApp(() => this.connectWebsocket(isUltra), appName);
  }
}
