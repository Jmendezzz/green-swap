import { ExchangeDTO } from '@/domain/exchange/ExchangeDTO';
import useUserExchangesOffers from './useUserExchangesOffers';
import Table from '../ui/Table';
import ExchangeOffersRow from './ExchangeOffersRow';

function ListUserExchangesOffers() {
  const { data, isLoading, pageable, setPageable } = useUserExchangesOffers();

  return (
    <Table isLoading={isLoading} columns="1fr 1fr 1fr ">
      <Table.Header>
        <div>Tu producto</div>
        <div>Producto Ofertado</div>
        <div>Acciones</div>
      </Table.Header>
      <Table.Body
        data={data?.content}
        render={(exchange: ExchangeDTO) => (
          <ExchangeOffersRow exchange={exchange} />
        )}
      />

      <Table.Pagination
        pageable={pageable}
        setPage={(page) => setPageable({ ...pageable, page })}
      />

    </Table>
  );
}

export default ListUserExchangesOffers;
