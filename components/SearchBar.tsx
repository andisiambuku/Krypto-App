"use client"

import React, { useState } from 'react';
import fetcher from '@/lib/fetcher';

interface CoinSearch {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<CoinSearch[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      if (query.trim() !== '') {
        const apiUrl = `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }
  
        // Check if the response is valid JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const searchData: CoinSearch[] = await response.json();
          setSearchResults(searchData);
        } else {
          throw new Error('Response is not valid JSON');
        }
      }
    } catch (error) {
      console.error('Error during search:', error);
      // Handle errors, e.g., display an error message to the user
    }
  };
  

  return (
    <div className="ml-5 flex w-[30%] items-center justify-between">
      <input
        type="search"
        className="relative m-0 block w-[1px] min-w-0 flex-auto  border border-solid border-[#f59e0b] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
        value={query}
        onChange={handleInputChange}
      />

      <button
        type="button"
        aria-label="Search"
        className="input-group-text flex items-center  px-3 py-2 text-center text-base font-normal text-white bg-[#f59e0b]"
        id="basic-addon2"
        onClick={handleSearchClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="">
          <ul>
            {searchResults.map((result: CoinSearch) => (
              <>
              <li key={result.id}>{result.thumb}</li>
              <li>{result.name}</li>
              <li>{result.api_symbol}</li>
              <li>{result.market_cap_rank}</li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


