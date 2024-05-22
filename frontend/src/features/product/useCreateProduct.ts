import { ROUTES } from "@/constants/routes";
import { CreateProductDTO } from "@/domain/product/CreateProductDTO";
import { createProductService } from "@/services/productsService";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

function useCreateProduct(){
    const navigate = useNavigate();
    const {mutate:createProduct, status,data} = useMutation(
        {
            mutationFn: (product: CreateProductDTO) => {
                return createProductService(product);
            },
            onSuccess: ({data}) => {
                toast.success('Producto creado correctamente');
                navigate(`${ROUTES.products}/${data.id}`);

            },
            onError: () => {
                toast.error('Error al crear el producto');
            }
        }
    );

    return {
        createProduct,
        isLoading: status === 'loading',
        product: data?.data
    }
}
export default useCreateProduct;