import { Typography } from "@mui/material";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { ChartItemsType } from "../../types/chartItemType";
import { TooltipBox } from "./ReleasedChart.style";

type Params = {
  active?: boolean;
  payload?: [{ payload: { animes: string[]; count: number; year: number } }];
  label?: string;
};

const CoustomTooltip = ({ active, payload, label }: Params) => {
  if (active) {
    return (
      <TooltipBox className="tooltip">
        <Typography>{label}</Typography>
        {payload
          ? payload[0].payload.animes.map((item: string) => {
              return <Typography key={item}>{item}</Typography>;
            })
          : null}
      </TooltipBox>
    );
  }
  return null;
};

const ReleasedCharte = ({ data }: { data: ChartItemsType[] }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
            <stop offset="30%" stopColor="#817dce" stopOpacity={0.8} />
            <stop offset="70%" stopColor="#2abdae" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" />
        <YAxis dataKey="count" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={<CoustomTooltip />} />
        <Area
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ReleasedCharte;
