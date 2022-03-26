import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';

import tippy, { hideAll } from 'tippy.js';

@Component({
  selector: 'simple-popup',
  templateUrl: './popup-cell-renderer.html',
  styleUrls: ['./popup-cell-renderer.css'],
})
export class PopupCellRenderer implements AfterViewInit {
  private params;
  private isOpen = false;
  private tippyInstance;

  @ViewChild('content') container;

  @ViewChild('trigger') button;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.button.nativeElement);
    this.tippyInstance.disable();
  }

  agInit(params) {
    this.params = params;
  }

  onClickHandler(option) {
    this.togglePopup();
    if (option === 'create') {
      this.params.api.applyTransaction({
        add: [
          {
            id: 'Q', 
            labels: {zh: {lan: 'zh', val: ''}},
            claims: {
              P18: [{
                prop: 'P18',
                label: '图片',
                tp: 'item',
                val:{
                  dt: 'EID',
                  dv: {
                    ml: '',
                    val: 'Q'
                  }
                }
              }],
              P19: [{
                prop: 'P19',
                label: '链接',
                tp: 'item',
                val:{
                  dt: 'EID',
                  dv: {
                    ml: '',
                    val: 'Q'
                  }
                }
              }],
            }
          }
        ],
      });
    }
    if (option === 'delete') {
      this.params.api.applyTransaction({ remove: [this.params.data] });
    }

    if (option === 'save') {
      this.params.api.stopEditing();
    }

    if (option === 'edit') {
      this.params.api.startEditingCell({
        rowIndex: this.params.rowIndex,
        colKey: 'id',
      });
    }
  }

  configureTippyInstance() {
    this.tippyInstance.enable();
    this.tippyInstance.show();

    this.tippyInstance.setProps({
      trigger: 'manual',
      placement: 'right',
      arrow: false,
      interactive: true,
      appendTo: document.body,
      hideOnClick: false,
      onShow: (instance) => {
        hideAll({ exclude: instance });
      },
      onClickOutside: (instance, event) => {
        this.isOpen = false;
        instance.unmount();
      },
    });
  }

  togglePopup() {
    this.isOpen = !this.isOpen;
    
    this.changeDetector.detectChanges();
    if (this.isOpen) {
      this.configureTippyInstance();
      console.log(this.container);

      this.tippyInstance.setContent(this.container.nativeElement);
    } else {
      this.tippyInstance.unmount();
    }
  }
}
