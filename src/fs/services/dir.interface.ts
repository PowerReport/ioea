import { ItemDto } from '../dto/item.dto';

export const DIR_SERVICE = 'DIR_SERVICE';

export interface IDirService {
  post(): Promise<ItemDto>;
}
