import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-app-parent1-child2',
  templateUrl: './app-parent1-child2.component.html',
  styleUrls: ['./app-parent1-child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppParent1Child2Component {
  text = "texto inicial"

  constructor() {
    console.log("[APP-PARENT1-CHILD2] - constructor")
  }

  ngOnInit(): void {
    console.log('[APP-PARENT1-CHILD2] - OnInit');
  }
  ngDoCheck(): void {
    console.log('[APP-PARENT1-CHILD2] - DoCheck');
  }
}
