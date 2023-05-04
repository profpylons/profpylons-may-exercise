import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<p>Hello bananas</p>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('basicDialog') basicDialog?: DialogComponent;
  @ViewChild('dialogWithChild') dialogWithChild?: DialogComponent;

  title = 'dialog-exercise';

  openBasicDialog() {
    console.log('open basic dialog')
    this.basicDialog?.openDialog();
   }

  openDialogWithChild() {
    console.log('open dialog with child')
    this.dialogWithChild?.openDialog();
  }

  closeChildCallback() {
    console.log('child called callback')
    this.dialogWithChild?.closeDialog();
  }
}
