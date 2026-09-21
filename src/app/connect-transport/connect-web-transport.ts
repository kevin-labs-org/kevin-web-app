import { Service } from '@angular/core';
import { createConnectTransport } from '@connectrpc/connect-web';

@Service()
export class ConnectWebTransport {
  private connectTransport = createConnectTransport({
    baseUrl: 'https://connectrpc.com',
  });

  get transport() {
    return this.connectTransport;
  }
}
