import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IgxFinancialChartComponent, SeriesHighlightingMode } from 'igniteui-angular-charts';
import { FinancialDataService } from '../services/financial-data.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FinancialDataService],
  selector: 'app-financial-chart-overview',
  styleUrls: ['./financial-chart-overview.component.scss'],
  templateUrl: './financial-chart-overview.component.html',
})
export class FinancialChartOverviewComponent implements AfterViewInit {
  @ViewChild('chart', { read: IgxFinancialChartComponent }) chart : IgxFinancialChartComponent;
  public stocksData: any;
  public calloutsData: any[];

  constructor(private dataService: FinancialDataService) {
    this.stocksData = [
      this.dataService.getAmzn().map(c => {
          return {close: c.close, open:c.open, time:c.time, low: c.low , high:c.high}
      }),
      this.dataService.getGoog().map(c => {
        return {close: c.close, open:c.open, time:c.time, low: c.low , high:c.high}
    }),
      this.dataService.getMsft().map(c => {
        return {close: c.close, open:c.open, time:c.time, low: c.low , high:c.high}
    }),
      this.dataService.getTsla().map(c => {
        return {close: c.close, open:c.open , time:c.time , low: c.low , high:c.high}
    }),
    ];
  }

  ngAfterViewInit(){
      console.log(this.chart)
      this.chart.highlightingMode = SeriesHighlightingMode.FadeOthersSpecific;
  }
}
