import { getUserProductsService} from "@/services/userService";
import { useQuery } from "react-query";

function useUserProducts() {
    const {status,data} = useQuery(
        {
            queryKey: 'userProducts',
            queryFn: () => getUserProductsService()
        }
    )

    return {
        isLoading: status === 'loading',
        products: data?.data
    }
}
export default useUserProducts;