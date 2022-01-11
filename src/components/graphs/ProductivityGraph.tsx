/* eslint-disable max-len */
import ReactApexChart from 'react-apexcharts';
import './customTooltipStyle.css';

const ProductivityGraph = () => {
  const options:any = {
    series: [{
      name: 'Estimated',
      type: 'area',
      data: [45, 54, 50, 60, 59, 78, 46, 56],
    },
    {
      name: 'Achieved',
      type: 'area',
      data: [40, 49, 47, 36, 54, 45, 50, 68],
    },
    ],

    chart: {
      width: '100%',
      toolbar: { // Hamburger menu at top
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      zoom: {
        enabled: false,
      },
      parentHeightOffset: 0,
    },

    colors: ['#4791ff', '#02bc77'],

    fill: {
      colors: ['#2E93fA', '#66DA26'],
      opacity: 0.1,
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.1,
        opacityFrom: 0.1,
        opacityTo: 0.2,
        inverseColors: true,
        stops: [0, 100],
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: 'smooth',
      width: 2,
      lineCap: 'square',
    },

    title: {
      text: undefined,
      align: 'left',
    },

    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },

    legend: {
      show: false,
    },

    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshair: {
        show: false,
      },
    },

    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },

      plotOptions: {
        area: {
          fillTo: 'end',
        },
      },
    },

    tooltip: {
      custom({
        series, dataPointIndex,
      }:any) {
        return (
          `<div class="arrow_box px-2 py-1 bg-gradient-to-r from-indigo-500 to-blue-500">
            <span class="block">
              ${options.series[0].name}  :
              <span class="font-bold">
                ${series[0][dataPointIndex]}
              </span>
            </span>
            <span class="block">
            ${options.series[1].name}&nbsp;
            :<span class="font-bold">
                ${series[1][dataPointIndex]}
              </span>
            </span>
          </div>`
        );
      },

    },
  };
  return (
    <div className="">
      <ReactApexChart options={options} series={options.series} type="area" height="117%" width="100%" />
    </div>
  );
};

export default ProductivityGraph;
