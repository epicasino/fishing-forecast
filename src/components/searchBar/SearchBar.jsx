import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    const formattedQuery = query.trim().split(' ').join('%20');
    // console.log(formattedQuery);
    navigate('/weather', { state: { query: formattedQuery } });
  };

  return (
    <form className="grid grid-cols-5 h-12 w-6/12" onSubmit={handleSearch}>
      <input
        type="text"
        className="col-span-4 rounded-l text-black px-5"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      ></input>
      <button
        type="submit"
        className="col-span-1 bg-green-500 hover:bg-green-700 rounded-r"
      >
        Submit
      </button>
    </form>
  );
}
