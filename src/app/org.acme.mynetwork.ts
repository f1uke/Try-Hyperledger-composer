import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.mynetwork{
   export class Commodity extends Asset {
      productName: string;
      description: string;
      quantity: number;
      owner: Trader;
   }
   export class Trader extends Participant {
      tradeId: string;
      firstName: string;
      lastName: string;
      owner: Trader;
   }
   export class Trade extends Transaction {
      commodity: Commodity;
      newOwner: Trader;
   }
   export class TradeNotification extends Event {
      commodity: Commodity;
   }
   export class RemoveHighQuantityCommodities extends Transaction {
   }
   export class RemoveNotification extends Event {
      commodity: Commodity;
   }
// }
