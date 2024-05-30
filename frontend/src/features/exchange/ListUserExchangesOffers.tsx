import { ExchangeDTO } from '@/domain/exchange/ExchangeDTO';
import List from '../ui/List';
import useUserExchangesOffers from './useUserExchangesOffers';
import ExchangeOfferItemCard from './ExchangeOfferItemCard';

function ListUserExchangesOffers() {
  const { data, isLoading, pageable, setPageable } = useUserExchangesOffers();

  return (
    <List>
      <List.Items
        data={data?.content}
        isLoading={isLoading}
        direction="col"
        render={(exchange: ExchangeDTO) => (
          <ExchangeOfferItemCard exchange={exchange} />
        )}
      />
      <List.Pagination
        pageable={pageable}
        totalPages={data?.totalPages}
        setPage={(page: number) =>
          setPageable({
            ...pageable,
            page,
          })
        }
      />
    </List>
  );
}

export default ListUserExchangesOffers;
