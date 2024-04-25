package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.ProductRepository;
import cue.edu.co.greenswap.domain.enums.Status;
import cue.edu.co.greenswap.domain.models.Product;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ProductEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.searchcriteria.SearchCriteriaProduct;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@AllArgsConstructor
public class ProductRepositoryJpaAdapter implements ProductRepository {

  private EntityManager em;
  @Override
  public Product save(Product product) {
    return null;
  }

  @Override
  public Product findById(Long id) {
    return null;
  }

  @Override
  public List<Product> findAll(Pageable pageable) {
    return null;
  }

  //Todo
  @Override
  public Page<Product> findBySearchCriteria(SearchCriteriaProduct searchCriteriaProduct, Pageable pageable) {
    CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
    CriteriaQuery<ProductEntity> criteriaQuery = criteriaBuilder.createQuery(ProductEntity.class);
    List<Predicate> predicates = new ArrayList<>();

    Root<ProductEntity> root = criteriaQuery.from(ProductEntity.class);

    criteriaBuilder.equal(root.get("status"), Status.PUBLISHED);


    if(searchCriteriaProduct.name() != null){
      Predicate namePredicate = criteriaBuilder.like(
              root.get("name"),
              "%" + searchCriteriaProduct.name() + "%"
      );
    }

    if(searchCriteriaProduct.category() != null){
      Predicate categoryPredicate = criteriaBuilder.equal(
              root.get("category"),
              searchCriteriaProduct.category()
      );
    }

    if(searchCriteriaProduct.minPrice() != null && searchCriteriaProduct.maxPrice() == null){
      Predicate minPricePredicate = criteriaBuilder.lessThanOrEqualTo(
              root.get("price"),
              searchCriteriaProduct.minPrice()
      );
    }
    if(searchCriteriaProduct.maxPrice() != null && searchCriteriaProduct.minPrice() == null){
      Predicate maxPricePredicate = criteriaBuilder.lessThanOrEqualTo(
              root.get("price"),
              searchCriteriaProduct.maxPrice()
      );
    }

    if(searchCriteriaProduct.minPrice() != null && searchCriteriaProduct.maxPrice() != null){
      Predicate betweenPricePredicate = criteriaBuilder.between(
              root.get("price"),
              searchCriteriaProduct.minPrice(),
              searchCriteriaProduct.maxPrice()
      );
    }

    return null;

  }
}
