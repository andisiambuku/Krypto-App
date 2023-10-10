import useSWR from "swr"
import fetcher from '@/lib/fetcher'

const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
export const useData = () =>{
    const { data, error,isLoading } = useSWR(apiUrl, fetcher)

    return{
        data, 
        error,
        isLoading
    }
}

