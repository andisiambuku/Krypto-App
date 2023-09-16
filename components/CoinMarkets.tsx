import Link from 'next/link'
import Image from 'next/image'

interface Coins {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap_rank: number,
    price_change_percentage_24h: number,

}

interface Props {
    coin: CoinMarkets[]
}

export default function Coins({ coin }: Props){
    return(
        <div className='p-10'>
            {coin.map((coin) =>(
                 <Link key={coin.id} href={`#`}>
                    <Image
                                src={coin.image}
                                alt={coin.name}
                                width="50"
                                height="10"
                                className="w-full h-full rounded-full"
                            />
                    <ul>
                        <li>{coin.name}{coin.symbol}</li>
                        <li>Current Price: ${coin.current_price}</li>
                        <li>Market Cap Rank: {coin.market_cap_rank}</li>
                        <li>Percentage change of price in 24 hours: {coin.price_change_percentage_24h}</li>
                    </ul>
                 </Link>
            ))}
           
        </div>
    )
}