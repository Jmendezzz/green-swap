export enum Category {
  TECHNOLOGY = 'Tecnologia',
  CLOTHING = 'Ropa',
  BOOKS = 'Libros',
}

export function getCategoryValue(key: Category): string {
  return Category[key];
}

export function getCategoryKeys(): Category[] {
  return Object.keys(Category) as Category[];
}
