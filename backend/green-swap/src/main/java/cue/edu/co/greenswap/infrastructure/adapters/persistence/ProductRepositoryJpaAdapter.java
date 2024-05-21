package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.ProductRepository;
import cue.edu.co.greenswap.domain.enums.ProductStatus;
import cue.edu.co.greenswap.domain.models.Product;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ProductEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.ProductRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.ProductMapperDBO;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.searchcriteria.SearchCriteriaProduct;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@AllArgsConstructor
public class ProductRepositoryJpaAdapter implements ProductRepository {
  private ProductRepositoryJpa repository;
  private ProductMapperDBO productMapperDBO;
  private EntityManager em;

  private final Integer MAX_SEARCH_SUGGESTIONS = 20;

  @Override
  public Product save(Product product) {
    ProductEntity productEntity = productMapperDBO.toDBO(product);

    ProductEntity productEntitySaved = repository.save(productEntity);

    return productMapperDBO.toDomain(productEntitySaved);
  }

  @Override
  public Optional<Product> findById(Long id) {
    return repository.findById(id).map(productMapperDBO::toDomain);
  }

  @Override
  public List<Product> findAll(Pageable pageable) {
    return repository.findAll(pageable).map(productMapperDBO::toDomain).getContent();
  }

  @Override
  public Page<Product> findBySearchCriteria(SearchCriteriaProduct searchCriteriaProduct, Pageable pageable) {
    CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
    CriteriaQuery<ProductEntity> criteriaQuery = criteriaBuilder.createQuery(ProductEntity.class);

    Root<ProductEntity> root = criteriaQuery.from(ProductEntity.class);

    List<Predicate> predicates = getSearchCriteriaPredicates(searchCriteriaProduct, criteriaBuilder, root);

    criteriaQuery.where(predicates.toArray(new Predicate[0]));

    if (pageable.getSort().isSorted()) {
      List<Order> orders = new ArrayList<>();
      for (Sort.Order order : pageable.getSort()) {
        orders.add(order.isAscending() ? criteriaBuilder.asc(root.get(order.getProperty())) : criteriaBuilder.desc(root.get(order.getProperty())));
      }
      criteriaQuery.orderBy(orders);
    }

    TypedQuery<ProductEntity> typedQuery = em.createQuery(criteriaQuery);
    typedQuery.setFirstResult((pageable.getPageNumber() - 1) * pageable.getPageSize());
    typedQuery.setMaxResults(pageable.getPageSize());

    List<ProductEntity> productEntities = typedQuery.getResultList();

    List<Product> products = productMapperDBO.toDomain(productEntities);

    Long totalProducts = countProductsBySearchCriteria(searchCriteriaProduct);

    return new PageImpl<>(products, pageable, totalProducts); //Todo test
  }

  @Override
  public List<String> findSearchSuggestions(String query) {
    CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
    CriteriaQuery<String> criteriaQuery = criteriaBuilder.createQuery(String.class);

    Root<ProductEntity> root = criteriaQuery.from(ProductEntity.class);

    criteriaQuery.select(root.get("name"));

    Predicate namePredicate = criteriaBuilder.like(
            root.get("name"),
            query + "%"
    );

    criteriaQuery.where(namePredicate);
    criteriaQuery.distinct(true);

    return em.createQuery(criteriaQuery)
            .setMaxResults(MAX_SEARCH_SUGGESTIONS)
            .getResultList();
  }

  private Long countProductsBySearchCriteria(SearchCriteriaProduct searchCriteriaProduct) {
    CriteriaBuilder countCriteriaBuilder = em.getCriteriaBuilder();
    CriteriaQuery<Long> countCriteriaQuery = countCriteriaBuilder.createQuery(Long.class);

    Root<ProductEntity> root = countCriteriaQuery.from(ProductEntity.class);

    countCriteriaQuery.select(countCriteriaBuilder.count(root));

    List<Predicate> predicates = getSearchCriteriaPredicates(searchCriteriaProduct, countCriteriaBuilder, root);

    predicates.add(countCriteriaBuilder.equal(root.get("status"), ProductStatus.PUBLISHED));

    countCriteriaQuery.where(predicates.toArray(new Predicate[0]));

    return em.createQuery(countCriteriaQuery).getSingleResult();
  }

  private List<Predicate> getSearchCriteriaPredicates(SearchCriteriaProduct searchCriteriaProduct, CriteriaBuilder criteriaBuilder, Root<ProductEntity> root) {
    List<Predicate> predicates = new ArrayList<>();

    predicates.add(criteriaBuilder.equal(root.get("status"), ProductStatus.PUBLISHED));

    if (searchCriteriaProduct.name() != null) {
      Predicate namePredicate = criteriaBuilder.like(
              root.get("name"),
              "%" + searchCriteriaProduct.name() + "%"
      );
      predicates.add(namePredicate);
    }

    if (searchCriteriaProduct.category() != null) {
      Predicate categoryPredicate = criteriaBuilder.equal(
              root.get("category"),
              searchCriteriaProduct.category()
      );
      predicates.add(categoryPredicate);
    }
    if(searchCriteriaProduct.quality() != null) {
      Predicate qualityPredicate = criteriaBuilder.equal(
              root.get("quality"),
              searchCriteriaProduct.quality()
      );
      predicates.add(qualityPredicate);
    }

    if (searchCriteriaProduct.minPrice() != null && searchCriteriaProduct.maxPrice() == null) {
      Predicate minPricePredicate = criteriaBuilder.greaterThanOrEqualTo(
              root.get("price"),
              searchCriteriaProduct.minPrice()
      );
      predicates.add(minPricePredicate);
    }
    if (searchCriteriaProduct.maxPrice() != null && searchCriteriaProduct.minPrice() == null) {
      Predicate maxPricePredicate = criteriaBuilder.lessThanOrEqualTo(
              root.get("price"),
              searchCriteriaProduct.maxPrice()
      );
      predicates.add(maxPricePredicate);
    }

    if (searchCriteriaProduct.minPrice() != null && searchCriteriaProduct.maxPrice() != null) {
      Predicate betweenPricePredicate = criteriaBuilder.between(
              root.get("price"),
              searchCriteriaProduct.minPrice(),
              searchCriteriaProduct.maxPrice()
      );
      predicates.add(betweenPricePredicate);
    }

    return predicates;
  }
}
