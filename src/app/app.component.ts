import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './auth.service';
import { fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping';
  @ViewChild('input',{static: false}) input: ElementRef;

  constructor(public _authService : AuthService){}

  onActivate(event){
    console.log("------------------- : ",event);
    // alert(event);
  }

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement,'keyup')
        .pipe(
            map(event=>event),
            filter(Boolean),
            debounceTime(1000),
            distinctUntilChanged(),
            tap((text) => {
              console.log("------ value : ",this.input.nativeElement.value);
            })
        )
        .subscribe();
    }
}
