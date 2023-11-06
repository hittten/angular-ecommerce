import { Component } from '@angular/core';

@Component({
  selector: 'app-app-parent2-child1',
  templateUrl: './app-parent2-child1.component.html',
  styleUrls: ['./app-parent2-child1.component.scss']
})
export class AppParent2Child1Component {

  constructor() {
    console.log("[APP-PARENT2-CHILD1] - constructor")
  }

  ngOnInit(): void {
    console.log('[APP-PARENT2-CHILD1] - OnInit');
  }
  ngDoCheck(): void {
    console.log('[APP-PARENT2-CHILD1] - DoCheck');
  }
}
