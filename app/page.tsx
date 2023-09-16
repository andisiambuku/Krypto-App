"use client"

import Coins from "@/components/CoinMarkets"
import useSWR from 'swr'


async function fetcher (url:string){
  const res = await fetch(url)
  if(!res.ok){
    throw new Error('Network response failed')
  }
  return res.json()
}

export default function Home() {

  const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'

  const { data, error } = useSWR(apiUrl, fetcher)

  if(error){ return ( <div>Error loading data</div>) }

  if(!data){ return ( <div>Loading... </div>) }


  return (
    <div>
      <Coins coin={data} />
    </div>
  )
}
