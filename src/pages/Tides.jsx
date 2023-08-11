import Navbar from "../components/navbar/Navbar";
import TideCard from "../components/tides/TideCard";
import useTide from "../hooks/useTide";

export default function Tides() {

  const { tides, loading } = useTide()

  if ( loading ) {
    return (
      <div>Loading...</div>
    )
  }

  // console.log(tides);

  return (
    <>
      <h1 className="text-5xl text-center py-10">Weekly Tides in San Diego</h1>
      <h2 className="text-2xl text-center py-10">
        From {new Date(tides.predictions[0].t).toLocaleDateString()} to{' '}
        {new Date(tides.predictions[23].t).toLocaleDateString()}
      </h2>

      <div className="tideCards grid grid-cols-3 gap-8 m-10">
        {tides.predictions.map((tide) => (
          <TideCard key={tide.t} tideData={tide} />
        ))}
      </div>
    </>
  );
}
