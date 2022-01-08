import { DataState } from "../entities/data-state";

export class TrashDto {
  id: number;

  state: DataState;

  objectPath: string;

  hasChildren: boolean;

  creator: string;

  createTime: Date;
}