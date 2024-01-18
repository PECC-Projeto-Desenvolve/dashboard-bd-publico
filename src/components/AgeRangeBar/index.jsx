import { BarChart } from "@mui/x-charts";

const AgeRangeBar = ({agesData}) => {
    const ages = agesData.map((age) => (age.name));
  return (
    <BarChart 
    series={ages}
    layout="vertical"
    width={600} 
    height={300} 
    />
        
  );
}

export default AgeRangeBar;