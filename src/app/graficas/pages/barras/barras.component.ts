import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
  
@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // permite que el gráfico se ajuste de manera responsiva al tamaño del contenedor.
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    
    
  };
  //grafico de tipo de barras
  public barChartType: ChartType = 'bar';
  
 
  //tenemos los datos del grafico de barras
  public barChartData: ChartData<'bar'> = {
    labels: [ 'Villa Completa en Punta Cana', 'Hotel Majestic-Barcelona', 'Casa Ecológica en Groenlandia', 'Casa frente al mar en Cancún',
              'Villa en Mazamitla', 'Villa completa en Vallarta'],
    datasets: [
      { data: [ 45, 49, 50, 41, 30, 32], label: 'Número de Reservaciones', backgroundColor: 'green',hoverBackgroundColor:'purple' },
    ]
  };

//generar valor de las columnas de forma aleatoria y llama al método update para actualizar el gráfico
  public randomize(): void {
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 50),
      Math.round(Math.random() * 50),
      Math.round(Math.random() * 50),
      Math.round(Math.random() * 50),
      Math.round(Math.random() * 50),
      Math.round(Math.random() * 50),
      ];

    this.chart?.update();
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
