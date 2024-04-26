package cue.edu.co.greenswap.application.mappers;

import cue.edu.co.greenswap.domain.dtos.product.CreateProductDTO;
import cue.edu.co.greenswap.domain.dtos.product.ListProductDTO;
import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.domain.models.Product;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapperDTO {
  Product toDomain(CreateProductDTO productDTO);
  ProductDTO toDTO(Product product);
  List<ListProductDTO> toDTO(List<Product> products);

}
