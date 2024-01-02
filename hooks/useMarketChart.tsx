import useSWR from "swr"
import fetcher from '@/lib/fetcher'

export const useMarketChart = (id:string) => {
    const apiUrl = ''
    const {  isLoading, error, data  } = useSWR(apiUrl, fetcher)

    return{
        isLoading,
        error,
        data,
    }
}

