import Image from 'next/image'
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
        <div className='p-10 flex flex-col overflow-x-auto'>
            <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto"></div>
                <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-200">
                        <tr>
                            <th className="px-6 py-4">Heading</th>
                            <th className="px-6 py-4">Heading</th>
                            <th className="px-6 py-4">Heading</th>
                            <th className="px-6 py-4">Heading</th>
                            <th className="px-6 py-4">Heading</th>
                            <th className="px-6 py-4">Heading</th>
                            <th className="px-6 py-4">Heading</th>
                            <th className="px-6 py-4">Heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coin.map((coin) =>(
                            <tr className="border-b dark:border-neutral-200" key={coin.id}>
                                <td className="whitespace-nowrap px-6 py-4">{coin.id}</td>
                                <td className="whitespace-nowrap px-6 py-4">{coin.symbol}</td>
                                <td className="whitespace-nowrap px-6 py-4"><Image src={coin.image || alt} alt={"coin image"} width={30} height={30}/></td>
                                <td className="whitespace-nowrap px-6 py-4">${coin.current_price}</td>
                                <td className="whitespace-nowrap px-6 py-4">{coin.market_cap_rank}</td>
                                <td className="whitespace-nowrap px-6 py-4">{coin.market_cap}</td>
                                <td className="whitespace-nowrap px-6 py-4">{coin.total_volume}</td>
                                <td className="whitespace-nowrap px-6 py-4">{coin.price_change_percentage_24h}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            </div>

    )
}