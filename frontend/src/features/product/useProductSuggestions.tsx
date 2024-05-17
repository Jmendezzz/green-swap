import { getProductsSuggestions } from "@/services/productsService";
import { useMutation } from "react-query";

function useProductSuggestions(){
    const {data,mutate,isLoading} = useMutation({
        mutationFn: (query:string) => getProductsSuggestions(query)
    })

    const suggestions = data?.data;

    return {
        suggestions,
        getProductsSuggestions: mutate,
        isLoading
    }
}
export default useProductSuggestions;