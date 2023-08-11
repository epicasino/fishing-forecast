export default function TideCard({ tideData }) {
  return (
    <div className="tideCard bg-slate-500 text-center p-5 grid grid-cols-2 gap-4">
      <h5 className="col-span-2 text-2xl py-5">
        {new Date(tideData.t).toLocaleDateString()} at{' '}
        {new Date(tideData.t).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </h5>
      {tideData.type === 'L' ? (
        <p className="col-span-1 text-xl py-5">Low</p>
      ) : (
        <p className="col-span-1 text-xl py-5">High</p>
      )}
      <p className="col-span-1 text-xl py-5"> Height: {tideData.v}</p>
    </div>
  );
}
