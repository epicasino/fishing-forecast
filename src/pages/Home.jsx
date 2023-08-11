import Navbar from "../components/navbar/Navbar";
import SearchBar from "../components/searchBar/SearchBar";

export default function Home() {
  return (
    <>
      <main className="flex items-center flex-col">
        <h1 className="text-6xl mx-10 mt-10 mb-20">Fishing Forecast</h1>
        <SearchBar />
      </main>
    </>
  )
}
