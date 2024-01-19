import { PieChart } from '@mui/x-charts';

const AgeRangePie = ({qtdLabel1, qtdLabel2, qtdLabel3, qtdLabel4}) => {
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: qtdLabel1, label: "15-18 anos" },
              { id: 1, value: qtdLabel2, label: "19-25 anos" },
              { id: 2, value: qtdLabel3, label: "26-35 anos" },
              { id: 3, value: qtdLabel4, label: "36+ anos" },

            ],
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
        width={700}
      />
    );
  }

export default AgeRangePie;  