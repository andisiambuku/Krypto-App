import { CoinDetails } from "@/types/coinDetails";
import Image from "next/image";
import alt from "@/assets/alt coin.jpg";
import MarketChart from "./MarketChart";

export async function CoinPage({ promise }: { promise: Promise<CoinDetails> }) {
  const details = await promise;

  const content = (
    <div className="p-5 text-gray-700" key={details.id}>
      <div className="flex flex-col justify-center">
        <p className="py-1 px-2 w-24 bg-orange-500 text-white rounded-lg inline-block">
          Rank #{details.market_cap_rank.toLocaleString()}
        </p>
        <div className="flex items-center flex-wrap">
          <Image
            src={details.symbol || alt}
            alt="coin image"
            width={30}
            height={30}
            className="mr-2"
          />
          <h2 className="py-2 text-2xl text-black font-bold">
            {details.name}
            <span className="px-2 text-base font-light text-neutral-400">
              {details.symbol}
            </span>
          </h2>
        </div>
        <p className="py-3 text-xl text-black font-bold">
          ${details.market_data.current_price.usd.toLocaleString()}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ul className="py-1">
            <li>
              <span className="font-semibold py-2 mr-2">Market Cap:</span> $
              {details.market_data.market_cap.usd.toLocaleString()}
            </li>
            <li>
              <span className="font-semibold py-2 mr-2">
                Circulating Supply:
              </span>{" "}
              ${details.market_data.circulating_supply.toLocaleString()}
            </li>
            <li>
              <span className="font-semibold py-2 mr-2">
                Fully Diluted Valuation:
              </span>{" "}
              $
              {details.market_data.fully_diluted_valuation.usd.toLocaleString()}
            </li>
            <li>
              <span className="font-semibold py-2 mr-2">
                Market Cap Change (24h):
              </span>{" "}
              {details.market_data.market_cap_change_percentage_24h.toFixed(1)}%
            </li>
          </ul>
          <ul className="py-1">
            <li>
              <span className="font-semibold py-2 mr-2">Maximum Supply:</span> $
              {details.market_data.max_supply?.toLocaleString() || "N/A"}
            </li>
            <li>
              <span className="font-semibold py-2 mr-2">
                Price Change % (24h):
              </span>{" "}
              {details.market_data.price_change_percentage_24h.toFixed(1)}%
            </li>
            <li>
              <span className="font-semibold py-2 mr-2">Total Supply:</span> $
              {details.market_data.total_supply.toLocaleString()}
            </li>
            <li>
              <span className="font-semibold py-2 mr-2">Total Volume:</span> $
              {details.market_data.total_volume.usd.toLocaleString()}
            </li>
          </ul>
        </div>
        <div className="py-3">
          <h3 className="text-xl font-bold ">Information</h3>
          <ul>
            
            <li className="py-1">
              <span className=" mr-2">
                <a
                  href={details.links.homepage[0]}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website: {details.name}.org
                </a>
              </span>{" "}
            </li>
          </ul>
        </div>
        <div className="py-5">
         <MarketChart id={details.id}/>
        </div>
      </div>
    </div>
  );

  return content;
}
