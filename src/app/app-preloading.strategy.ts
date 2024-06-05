import { Route, PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs/Observable';


export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    // return route.data && route.data.preload ? load() : of(null);
    return load();
  }
}