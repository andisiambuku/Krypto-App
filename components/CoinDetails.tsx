import { CoinDetails} from "@/types/coinDetails"
import Image from 'next/image'
import alt from '@/assets/alt coin.jpg'

export async function CoinPage({ promise }: { promise: Promise<CoinDetails> }) {
    const details = await promise
    
    const content = (
        <div className="p-2 text-gray-700" key={details.id}>
            <div>
              <h2>{details.name}<span>{details.symbol}</span></h2>
              <Image src={details.image.small || alt} alt="coin image" width={30} height={30}></Image>
              <ul>
                <li>Rank #{details.market_cap_rank}</li>
                <li>Market Cap{details.market_data.market_cap.usd}</li>
                <li>Current Price{details.market_data.current_price.usd}</li>
                <li>{details.market_data.circulating_supply}</li>
                <li>{details.market_data.fully_diluted_valuation.usd}</li>
                <li>{details.market_data.market_cap_change_percentage_24h}</li>
                <li>{details.market_data.max_supply}</li>
                <li>{details.market_data.price_change_percentage_24h}</li>
                <li>{details.market_data.roi}</li>
                <li>{details.market_data.total_supply}</li>
                <li>{details.market_data.total_volume.usd}</li>
                <li>{details.liquidity_score}</li>
                <li>{details.description.en}</li>
                <li>{details.community_score}</li>
                <li>{details.links.homepage[0]}</li>
                <li>{details.public_interest_score}</li>
              </ul>
            </div>
        </div>
      );
      
      return content;
      
}
