import { CoinDetails} from "@/types/coinDetails"
import Image from 'next/image'
import alt from '@/assets/alt coin.jpg'

export async function CoinPage({ promise }: { promise: Promise<CoinDetails> }) {
    const details = await promise
    
    const content = (
        <div className=" p-8 text-gray-700" key={details.id}>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-4 lg:mb-0 basis-2/3">
              <p className="py-1 px-2 bg-orange-500 text-white rounded-lg inline-block">Rank # {details.market_cap_rank.toLocaleString()}</p>
              <div className="flex items-center">
              <Image src={details.image.small || alt} alt="coin image" width={30} height={30} className="mr-2"></Image>
              <h2 className="py-2 text-2xl text-black font-bold">{details.name}<span className=" px-2 text-base font-light text-neutral-400">{details.symbol}</span></h2>
              </div>
              <p className="py-3 text-xl text-black font-bold">${details.market_data.current_price.usd.toLocaleString()}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="py-1">
                  <li><span className="font-semibold py-2 mr-5">Market Cap:</span> ${details.market_data.market_cap.usd.toLocaleString()}</li>
                  <li><span className="font-semibold py-2 mr-5">Circulating Supply:</span> ${details.market_data.circulating_supply.toLocaleString()}</li>
                  <li><span className="font-semibold py-2 mr-5">Fully Diluted Valuation:</span> ${details.market_data.fully_diluted_valuation.usd.toLocaleString()}</li>
                  <li><span className="font-semibold py-2 mr-5">Market Cap Change (24h):</span> {details.market_data.market_cap_change_percentage_24h.toFixed(1)}%</li>
                </ul>
                <ul className="py-1">
                  <li><span className="font-semibold py-2 mr-5">Maximum Supply:</span> ${details.market_data.max_supply.toLocaleString()}</li>
                  <li><span className="font-semibold py-2 mr-5">Price Change Percentage (24h):</span> {details.market_data.price_change_percentage_24h.toFixed(1)}%</li>
                  <li><span className="font-semibold py-2 mr-5">Total Supply:</span> ${details.market_data.total_supply.toLocaleString()}</li>
                  <li><span className="font-semibold py-2 mr-5">Total Volume:</span> ${details.market_data.total_volume.usd.toLocaleString()}</li>
                </ul>
              </div>
            </div>

            <div className="basis-1/3">
              <h3 className="text-xl font-bold ">Information</h3>
              <ul className="py-3">
                <li className="py-1"><span className="font-semibold mr-5">Liquidity Score:</span> {details.liquidity_score}%</li>
                <li className="py-1"><span className="font-semibold mr-5">Community Score:</span> {details.community_score}%</li>
                <li className="py-1"><span className="font-semibold mr-5"><a href={details.links.homepage[0]} className=" hover:underline" target="_blank" rel="noopener noreferrer">
                  Website: {details.name}.org </a></span> </li>
                <li className="py-1"><span className="font-semibold mr-5"> Public Interest Score:</span> {details.public_interest_score.toFixed(1)}%</li>
              </ul>
            </div>
          </div>
          <div className="py-5 ">
            <h3 className="text-xl font-bold py-3">Description</h3>
            <p className="">{details.description.en}</p>
          </div>
        </div>
      );
      
      return content;
      
}
