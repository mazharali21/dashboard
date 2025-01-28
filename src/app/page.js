import PiChart from "./components/piecharts";
import DeploymentReports from "./components/table";

export default function Home() {
  return (
    <div className="max-w-[1280px] h-auto overflow-x-hidden mx-auto">
      <PiChart/>
      <DeploymentReports/>
    </div>
  );
}
