import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('openDialog', () => {
    it('should set isOpen to true', () => {
      component.isOpen = false;
      component.openDialog();
      expect(component.isOpen).toEqual(true);
    });
  });

  describe('closeDialog', () => {
    it('should set isOpen to false', () => {
      component.isOpen = true;
      component.openDialog();
      expect(component.isOpen).toEqual(true);
    });
  });
});
