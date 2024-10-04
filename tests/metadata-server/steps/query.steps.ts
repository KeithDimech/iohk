import { APIResponse, expect, type Page } from "@playwright/test";

import { HttpClient } from "../../../utils/libs/http-client";
import Ajv from "ajv";
import { schemaMetadataQueryPost } from "../../../utils/types/query.type";

export class QuerySteps {
  private page: Page;
  private route: string;
  private httpClient: HttpClient;
  private ajv: any;

  response: APIResponse | undefined;

  constructor(page: Page) {
    this.page = page;
    this.route = `/metadata/query`;
    this.httpClient = new HttpClient(page);
    this.ajv = new Ajv();
  }

  when_i_post_metadata_query = async (data: any) => {
    this.response = await this.httpClient.post(
      this.route,
      {},
      data,
      "POST metadata query"
    );
  };

  then_response_should_match_metadataquery_schema = async () => {
    const validate = this.ajv.compile(schemaMetadataQueryPost);
    const valid = validate(await this.response?.json());
    
    expect(
      valid,
      validate?.errors?.map((x: any) => x.message).join("/r/n")
    ).toBeTruthy();
  };
}
