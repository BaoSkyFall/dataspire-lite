import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {StatisticComponent} from "./statistic/statistic.component";
import {ChartModule} from "../chart/chart.module";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { TableModule } from '../table/table.module';


@NgModule({
  declarations: [DashboardComponent,
    StatisticComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    MatButtonModule,
    TableModule,
    RouterModule
  ],
  exports: [DashboardComponent,
    StatisticComponent
  ]
})
export class DashboardModule {
}
