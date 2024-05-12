export interface Pageable{
    page: number;
    size: number;
    sort?:string;
 }

 export interface PageableResult<T>{
    content: Array<T>;
    totalElements: number;
    totalPages: number;
    empty: boolean;
 }