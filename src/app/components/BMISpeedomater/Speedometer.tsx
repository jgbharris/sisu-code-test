import ReactSpeedometer from "react-d3-speedometer";

type BMISpeedometerProps = {
  bmi: number;
};

const BMISpeedometer = ({ bmi }: BMISpeedometerProps) => {
  return (
    <ReactSpeedometer
      maxValue={40}
      minValue={10}
      value={bmi}
      currentValueText="BMI"
      segments={4}
      needleColor="steelblue"
      startColor="green"
      endColor="red"
      textColor="black"
      segmentColors={["#bfd200", "#8ac007", "#f7cc2d", "#f45b00"]}
    />
  );
};

export default BMISpeedometer;
