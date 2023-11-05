import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
@Input() adatok:any;
@Input() oszlopok:any;

@Output() create: EventEmitter<any> = new EventEmitter();
@Output() update: EventEmitter<any> = new EventEmitter();
@Output() delete: EventEmitter<any> = new EventEmitter();
onCreate(sor:any)
{
  this.create.emit(sor);
  this.ujSor={};
}
onUpdate(sor:any)
{
  this.update.emit(sor);
}
onDelete(sor:any)
{
  this.delete.emit(sor);
}

ujSor:any={};

}
