import { getProductByIdService } from "@/services/productsService";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export function useProduct(){
    const {productId} = useParams();
    
    const {data, isLoading} = useQuery({
        queryKey: ['product', productId],
        queryFn: () => getProductByIdService(Number(productId)),
        retry:false
    })

    const product = data?.data;

    return {product, isLoading}
}