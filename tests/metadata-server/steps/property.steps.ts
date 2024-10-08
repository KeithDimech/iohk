import { APIResponse, expect, type Page } from "@playwright/test";
import { HttpClient } from "../../../utils/libs/http-client";
import { schemaMetadataPropertyGet } from "../../../utils/schemas/metadata-property-get";
import Ajv from "ajv";

export class PropertySteps {
  private page: Page;
  private route: string;
  private httpClient: HttpClient;
  private ajv: Ajv;

  response: APIResponse | undefined;

  constructor(page: Page) {
    this.page = page;
    this.route = `/properties/name`;
    this.httpClient = new HttpClient(page);
    this.ajv = new Ajv();
  }

  when_i_get_metadata_property = async (data: string) => {
    this.response = await this.httpClient.get(
      "/metadata/" + data + this.route,
      {},
      null,
      "Get properties name"
    );
  };

  then_response_should_match_metadata_property_get_schema = async () => {
    const validate = this.ajv.compile(schemaMetadataPropertyGet);
    const valid = validate(await this.response?.json());
    expect(
      valid,
      validate?.errors?.map((x: any) => x.message).join("/r/n")
    ).toBeTruthy();
  };
}
