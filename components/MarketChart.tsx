"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

interface LineProps {
  id: string;
}

const MarketChart: React.FC<LineProps> = ({ id }) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&precision=2&interval=daily`
        );
        const data = await response.json();
        console.log("chartData:", data);
        setChartData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (!chartData || !chartData.prices) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-12 w-12"></div>
      </div>
    );
  }
  const { prices } = chartData;

  const data = {
    labels: prices.map((entry: any) => new Date(entry[0]).toLocaleDateString()),
    datasets: [
      {
        label: "Price (USD)",
        data: prices.map((entry: any) => entry[1].toFixed(2)),
        borderColor: "orange",
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};
export default MarketChart;
