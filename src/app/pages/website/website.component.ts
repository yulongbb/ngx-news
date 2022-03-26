import { Component, OnInit } from '@angular/core';
import { GridApi, ColDef, RowValueChangedEvent} from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ItemsData } from '../../@core/data/items'
import { StatementsData } from '../../@core/data/statements'
import { PopupCellRenderer } from './popup-cell-renderer/popup-cell-renderer.component';

@Component({
  selector: 'ngx-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  gridApi: GridApi;

  columnDefs: ColDef[];
  editType;


  rowData: Observable<any[]>;;

  constructor(
    private itemsService: ItemsData,
    private statementsService: StatementsData,
    ) { 
    this.columnDefs = [
      { field: 'id', editable: false},
      { field: 'labels.zh.val', headerName: "名称", editable: true},
      { 
        field: 'claims.P19.0.val.dv.ml',
        headerName: "链接", 
        editable: true , 
        cellRenderer: params => {
          return `<a href="${params.value}">${params.value}</a> `;
        }
      },
      { 
        field: 'claims.P18.0.val.dv.ml', 
        headerName: "图片",
        editable: true , 
        cellRenderer: params => {
          return `<img height="100%" src="${params.value}"> `;
        }
      },
      {
        headerName: '操作',
        colId: 'action',
        cellRendererFramework: PopupCellRenderer,
        pinned: 'right',
        editable: false,
        maxWidth: 150,
      },
  ];
  this.editType = "fullRow";
  }

  ngOnInit(): void {
    this.rowData = this.itemsService.getItemByType('Q4');
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  onCellClicked(params) {
    if (
      params.event.target.dataset.action == 'toggle' &&
      params.column.getColId() == 'action'
    ) {
      const cellRendererInstances = params.api.getCellRendererInstances({
        rowNodes: [params.node],
        columns: [params.column],
      });
      if (cellRendererInstances.length > 0) {
        const instance = cellRendererInstances[0].getFrameworkComponentInstance();
        instance.togglePopup();
      }
    }
  }

  onRowValueChanged(event: RowValueChangedEvent) {
    var data = event.data;
    this.itemsService.addItem({
      id: data.id,
      labels: data.labels,
    }).subscribe((item:any) => {
      // 类型是新闻
      this.statementsService.addStatement(item.id, 'items/Q4', {
        id: 'S', 
        prop: 'P2', 
        label: '归类于', 
        tp: 'item', 
        val: {
          dt: 'EID',
          dv: {
            ml: '网站',
            val: 'Q4'
          }
        }
      }).subscribe(statement => {

        // 添加图片
        this.itemsService.addItem({
          id: data.claims['P18'][0]['val']['dv']['val'],
          labels: {zh: {lan: 'zh', val: data.claims['P18'][0]['val']['dv']['ml']}} 
        }).subscribe((item2:any) => {
          this.statementsService.addStatement(item.id, item2.id, {
            id: 'S', 
            prop: 'P18', 
            label: '图片', 
            tp: 'item', 
            val: {
              dt: 'EID',
              dv: {
                ml: item2.labels.zh.val,
                val: item2['_key']
              }
            }
          }).subscribe(statement => {
            // 添加链接
            this.itemsService.addItem({
              id: data.claims['P19'][0]['val']['dv']['val'],
              labels: {zh: {lan: 'zh', val: data.claims['P19'][0]['val']['dv']['ml']}} 
            }).subscribe((item3:any) => {
              this.statementsService.addStatement(item.id, item3.id, {
                id: 'S', 
                prop: 'P19', 
                label: '链接', 
                tp: 'item', 
                val: {
                  dt: 'EID',
                  dv: {
                    ml: item3.labels.zh.val,
                    val: item3['_key']
                  }
                }
              }).subscribe(statement => {});
            });
          });
        });
      });
    })
  }


}
