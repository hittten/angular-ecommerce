import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-app-parent1',
  templateUrl: './app-parent1.component.html',
  styleUrls: ['./app-parent1.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppParent1Component {

  constructor() {
    console.log('[APP-PARENT1] - constructor')
  }

  ngOnInit(): void {
    console.log('[APP-PARENT1] - OnInit');
  }
  ngDoCheck(): void {
    console.log('[APP-PARENT1] - DoCheck');
  }
}
