import { ExchangeDTO } from "@/domain/exchange/ExchangeDTO";
import useUserExchangesRequested from "./useUserExchangesRequested";
import Table from "../ui/Table";
import ExchangeRequestedRow from "./ExchangeRequestedRow";

function ListUserExchangesRequested() {
    const { data, isLoading } = useUserExchangesRequested();

    return (
      <Table isLoading={isLoading} columns="1fr 1fr 1fr ">
        <Table.Header>
          <div>Producto Ofrecido</div>
          <div>Producto Solicitado</div>
          <div>Estado</div>
        </Table.Header>
        <Table.Body
          data={data?.content}
          render={(exchange: ExchangeDTO) => (
            <ExchangeRequestedRow exchange={exchange} />
          )}
        />

      </Table>
    );
}

export default ListUserExchangesRequested