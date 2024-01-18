import { PieChart, pieArcLabelClasses } from '@mui/x-charts';

const EducationTypePie = ({nomeLabel1, qtdLabel1, nomeLabel2, qtdLabel2}) => {
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: qtdLabel1, label: nomeLabel1 },
              { id: 1, value: qtdLabel2, label: nomeLabel2 },
            ],
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        width={700}
        height={200}

      />
    );
  }

export default EducationTypePie;  