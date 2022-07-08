import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'isc-backdrop',
  template: `<div (click)="onClickBackdrop()" class="backdrop"></div>`,
  styles: [
    `
      .backdrop {
        position: fixed;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.25);
        z-index: 10;
      }
    `,
  ],
})
export class BackdropComponent implements OnInit {
  @Output() backdropPressed: EventEmitter<void> = new EventEmitter();

  constructor() {}

  onClickBackdrop() {
    this.backdropPressed.emit();
  }

  ngOnInit(): void {}
}
