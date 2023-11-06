import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-app-parent1-child1',
  templateUrl: './app-parent1-child1.component.html',
  styleUrls: ['./app-parent1-child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppParent1Child1Component {
  text = "texto inicial"
  textInput = new FormControl("");

  constructor() {
    console.log("[APP-PARENT1-CHILD1] - constructor")
  }

  ngOnInit(): void {
    console.log('[APP-PARENT1-CHILD1] - OnInit');
    // setTimeout(()=>{
    console.log('[APP-PARENT1-CHILD1] - cambiando texto');
      this.text = "texto cambiado desde OnInit"

    // }, 4000)
  }
  ngDoCheck(): void {
    console.log('[APP-PARENT1-CHILD1] - DoCheck');
  }

  changeText() {
    this.text = "texto cambiado desde changeText"
  }
}
