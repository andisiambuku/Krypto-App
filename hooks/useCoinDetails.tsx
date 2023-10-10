import useSWR from "swr"
import fetcher from '@/lib/fetcher'

const apiUrl = `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
export const useCoinDetails = (id: string) =>{
    const {  isLoading, error, data  } = useSWR(apiUrl, fetcher)

    return{
        isLoading,
        error,
        data,
    }
}
