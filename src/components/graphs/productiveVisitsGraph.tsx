import ReactApexChart from 'react-apexcharts';

const productiveVisitsGraph = () => {
  const options :any = {
    series: [{
      name: 'Visits',
      type: 'area',
      data: [110, 90, 97, 93, 125, 105, 120, 70, 90, 40, 50, 39],
    }],
    chart: {
      width: '100%',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#ff2366'],
    fill: {
      colors: ['#ff2366', '#211732'],
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.1,
        opacityFrom: 0.5,
        opacityTo: 0.3,
      },
    },

    stroke: {
      curve: 'smooth',
      width: 2,
      lineCap: 'square',
    },
  };
  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="area" width="100%" />
    </div>
  );
};

export default productiveVisitsGraph;
