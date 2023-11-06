import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-ecommerce';

  constructor() {
    console.log('[APP] - constructor')
  }

  ngOnInit(): void {
    console.log('[APP] - OnInit');
  }
  ngDoCheck(): void {
    console.log('[APP] - DoCheck');
  }
}
