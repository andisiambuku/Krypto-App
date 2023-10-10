'use client'
import { Suspense } from "react";
import { CoinPage } from "../../../components/CoinDetails";
import { useCoinDetails } from "@/hooks/useCoinDetails";


export default function Page({params}: { params: {id:string}}){
    const {data,error,isLoading} = useCoinDetails(params.id)
    return(
        <Suspense fallback={<div>Loading coin details...</div>}>
            {isLoading ? (
                <div>Loading coin details..</div>
            ):error ?(
                <div>Error loading coin details: {error.message}</div>
            ): (
                <CoinPage promise={data}/>
            )} 
            
        </Suspense>
    )
}