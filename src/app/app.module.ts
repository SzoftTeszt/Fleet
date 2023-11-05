import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { DriversComponent } from './page/drivers/drivers.component';
import { FuelingsComponent } from './page/fuelings/fuelings.component';
import { VehiclesComponent } from './page/vehicles/vehicles.component';
import { NavComponent } from './part/nav/nav.component';
import { FilterPipe } from './part/filter.pipe';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';
import { DataCellComponent } from './data-cell/data-cell.component';

const appRouting: Routes =[
  {path:'', component: HomeComponent},
  {path:'drivers', component: DriversComponent},
  {path:'fuelings', component: FuelingsComponent},
  {path:'vehicles', component: VehiclesComponent},
  {path:'**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriversComponent,
    FuelingsComponent,
    VehiclesComponent,
    NavComponent,
    FilterPipe,
    DataTableComponent,
    DataCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouting)
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
