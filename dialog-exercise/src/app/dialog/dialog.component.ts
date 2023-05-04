import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {

  @Input() title?: string;
  // @Input() open?: boolean;

  isOpen = false;

  closeDialog() {
    console.log('close dialog');
    this.isOpen = false;
  }

  openDialog() {
    console.log('open dialog');
    this.isOpen = true;
  }
}
