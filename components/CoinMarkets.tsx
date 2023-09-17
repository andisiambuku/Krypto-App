import Image from 'next/image'
import Link from 'next/link'
import alt from '@/assets/alt coin.jpg'

interface Coins {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap_rank: number,
    market_cap: number,
    total_volume: number,
    price_change_percentage_24h: number,

}

interface Props {
    coin: CoinMarkets[]
}

export default function Coins({ coin }: Props){
    return(
        <div className='p-6 flex flex-col overflow-x-auto'>
            <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto"></div>
                <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-200">
                        <tr>
                            <th className="px-6 py-4">#</th>
                            <th className="px-6 py-4"></th>
                            <th className="px-6 py-4">Coin</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4">Market Cap</th>
                            <th className="px-6 py-4">Total Volume</th>
                            <th className="px-6 py-4">24h </th>
                        </tr>
                    </thead>
                    <tbody>
                        {coin.map((coin) =>(
                            <tr className="border-b dark:border-neutral-200" key={coin.id} >
                                <td className="whitespace-nowrap px-6 py-4">{coin.market_cap_rank}</td>
                                <td className="whitespace-nowrap px-6 py-4"><Image src={coin.image || alt} alt={"coin image"} width={30} height={30}/></td>
                                <Link href={`/coins/${coin.id}`}><td className="whitespace-nowrap px-1 py-4">{coin.name}</td>
                                <td className="whitespace-nowrap text-neutral-500 px-6 py-4">{coin.symbol}</td></Link>
                                <td className="whitespace-nowrap px-6 py-4">$ {coin.current_price.toLocaleString()}</td>
                                <td className="whitespace-nowrap px-6 py-4">$ {coin.market_cap.toLocaleString()}</td>
                                <td className="whitespace-nowrap px-6 py-4">$ {coin.total_volume.toLocaleString()}</td>
                                <td className="whitespace-nowrap px-6 py-4">{(coin.price_change_percentage_24h).toFixed(1)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}