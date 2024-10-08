import { APIResponse, expect, type Page } from "@playwright/test";
import { HttpClient } from "../../../utils/libs/http-client";
import { schemaMetadataGet } from "../../../utils/schemas/metadata-get";
import Ajv from "ajv";

export class MetadataSteps {
  private page: Page;
  private route: string;
  private httpClient: HttpClient;
  private ajv: Ajv;

  response: APIResponse | undefined;

  constructor(page: Page) {
    this.page = page;
    this.route = `/metadata`;
    this.httpClient = new HttpClient(page);
    this.ajv = new Ajv();
  }

  when_i_get_metadata = async (data: string) => {
    this.response = await this.httpClient.get(
      this.route + "/" + data,
      {},
      null,
      "Get metadata"
    );
  };

  then_response_should_match_metadata_get_schema = async () => {
    const validate = this.ajv.compile(schemaMetadataGet);
    const valid = validate(await this.response?.json());
    expect(
      valid,
      validate?.errors?.map((x: any) => x.message).join("/r/n")
    ).toBeTruthy();
  };
}
