import { ApiProperty } from "@nestjs/swagger";
import { GetCaseResponse } from "./get.case";

export class TreeviewCaseResponse extends GetCaseResponse {
  @ApiProperty({
    description: '子级目录或文件',
    type: TreeviewCaseResponse,
    isArray: true,
  })
  children: TreeviewCaseResponse[];
}