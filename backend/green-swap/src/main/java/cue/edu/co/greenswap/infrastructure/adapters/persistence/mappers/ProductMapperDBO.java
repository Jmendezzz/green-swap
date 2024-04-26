package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Product;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ProductEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapperDBO {
    ProductEntity toDBO(Product product);
    Product toDomain(ProductEntity productEntity);
    List<Product> toDomain(List<ProductEntity> productEntities);
}
