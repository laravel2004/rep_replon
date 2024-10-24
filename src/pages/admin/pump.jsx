import withLayout from "@/layouts/withLayout";
import DefaultCard from "@/components/DefaultCard";
import PumpStatus from "@/components/PumpStatus";
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import('@/components/BarChart'), { ssr: false });

const Pump = () => {

    const options = {
        colors: ['#228B22'],
        chart: {
            id: 'basic-bar',
            zoom : {
                enabled: false,
            }
        },
        xaxis: {
            categories: ['32', '34', '36', '38', '40', '42']
        }
    }

    const series = [
        {
            name: "temp-humidity",
            data: [30, 32, 34, 36, 38, 40]
        }
    ]

  return (
    <div className="grid w-full grid-cols-1 justify-center">
        <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
            <h3 className="text-2xl text-green-700 text-center font-semibold text-gray-800 mb-4">Status Pompa 12 Greenhouse</h3>
            <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
                <PumpStatus pumpStatus="ON" title="Greenhouse 1"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 2"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 3"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 4"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 5"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 6"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 7"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 8"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 9"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 10"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 11"/>
                <PumpStatus pumpStatus="ON" title="Greenhouse 12"/>
            </div>
        </div>

        <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
            <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">Grafik Status Pompa</h3>
            <BarChart options={options} series={series} width={"100%"}  />
        </div>
    </div>
  );
}
export default withLayout(Pump, 'admin');