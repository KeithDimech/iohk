import { expect, APIResponse, type Page } from "@playwright/test";

export class CommonSteps {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  then_i_should_see_response = async (response: APIResponse, status = 200) => {
    expect(response.status()).toBe(status);
  };

  then_response_should_contain_not_found = async (response: APIResponse) => {
    expect(((await response?.text()) || "").toLowerCase()).toContain(
      "not found"
    );
  };
}
