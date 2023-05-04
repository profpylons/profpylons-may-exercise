import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent {
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();

  onSubmit() {
    console.log('child submit');
    this.formSubmitted.emit();
  }
}
