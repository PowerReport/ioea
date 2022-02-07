import { DataState } from "../../domain/trash/model/data-state";

export class GetTrashCaseResponse {
  id: number;

  state: DataState;

  objectPath: string;

  hasChildren: boolean;

  creator: string;

  createTime: Date;
}