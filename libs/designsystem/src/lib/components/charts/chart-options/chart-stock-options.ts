import { ChartTypeRegistry, Point, TooltipItem, TooltipLabelStyle } from 'chart.js';
import { Context } from 'chartjs-plugin-datalabels/types/context';
import { Align, Color } from 'chartjs-plugin-datalabels/types/options';
import { ColorHelper, DesignTokenHelper } from '../../../helpers';
import { BaseChartOptions } from './chart-base-options';
const { getThemeColorHexString, getThemeColorRgbString } = ColorHelper;
const { fontSize } = DesignTokenHelper;

export class StockChartOptions extends BaseChartOptions {
  constructor() {
    super('line');
  }

  public getBasicConfig(): unknown {
    return {
      type: 'line',
      options: {
        responsive: true,
        animation: {
          duration: 0,
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 30,
            bottom: 0,
          },
        },
        backgroundColor: getThemeColorRgbString('semi-light', 0.5),
        scales: {
          x: {
            grid: {
              lineWidth: 0,
            },
            ticks: {
              maxRotation: 0,
              autoSkipPadding: 120,
              font: {
                size: parseInt(fontSize('xs')),
              },
            },
          },
          y: {
            position: 'right',
            display: true,
            grid: {
              drawBorder: false,
            },
            ticks: {
              display: true,
              font: {
                size: parseInt(fontSize('xs')),
              },
            },
          },
        },
        elements: {
          line: {
            tension: 0, // Smooth curve (0 = no smoothing)
            borderWidth: 2,
          },
          point: {
            hitRadius: 20,
            radius: 0,
            hoverRadius: 0,
            hoverBorderWidth: 0,
          },
        },
        normalized: true,
        plugins: {
          tooltip: {
            padding: 10,

            enabled: true,
            mode: 'index',
            intersect: false,
            backgroundColor: getThemeColorHexString('semi-light'),
            titleColor: getThemeColorHexString('semi-light-contrast'),
            bodyColor: getThemeColorHexString('semi-light-contrast'),
            caretSize: 0,
            bodySpacing: 5,
            titleSpacing: 5,
            borderColor: 'transparent',
            callbacks: {
              labelColor: (tooltipItem: TooltipItem<keyof ChartTypeRegistry>) => {
                return {
                  backgroundColor: tooltipItem.dataset.borderColor,
                  borderColor: getThemeColorHexString('semi-light'),
                  borderWidth: 2, // This value must be exactly 2. If it is less, a white "border" will appear, if greater than, a shadow around the box will be shown.
                  // An issue has been created, requesting a test to check this value doesn´t change: https://github.com/kirbydesign/designsystem/issues/2578
                } as TooltipLabelStyle;
              },
            },
          },
          datalabels: {
            backgroundColor: (context: Context) => context.dataset.borderColor as Color,
            color: getThemeColorHexString('white'),
            borderRadius: 3,
            font: {
              lineHeight: 1,
              size: parseInt(fontSize('xs')),
            },
            padding: {
              top: 6,
              left: 5,
              right: 5,
              bottom: 5,
            },
            offset: 5,
            align: (context: Context): Align =>
              (this.getChartPointFromContext(context) as any)?.datalabel.position,
            display: (context: Context): boolean =>
              !!(this.getChartPointFromContext(context) as any)?.datalabel,
            formatter: (value: any): string => value.datalabel.value,
          },
        },
      },
    };
  }

  /**
   * A filter to read a chartpoint from a Chart.js point context (used for chartdata points). Context is provided by Chart.js.
   */
  private getChartPointFromContext = (context: Context): Point => {
    return context.dataset.data[context.dataIndex] as Point;
  };
}
