import { APIRequest, APIResponse, Page } from "playwright/test";

export class HttpClient {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
  };

  private parsResponse = async (response: APIResponse, description: string) => {
    let payload: any;
    try {
      payload = await response?.json();
    } catch (error) {
      payload = await response.text();
    }

    console.log(`POST Response | ${description}`, {
      url: response?.url(),
      headers: response?.headers(),
      payload,
    });
  };

  post = async (route: string, headers: any, data: any, description = "") => {
    const url = `${process.env.MDS_URL}${route}`;
    const response = await this.page.request.post(url, {
      headers: { ...this.defaultHeaders, ...headers },
      data,
    });

    this.parsResponse(response, description);
    return response;
  };

  get = async (route: string, headers: any, params: any, description = "") => {
    const url = `${process.env.MDS_URL}${route}`;
    const response = await this.page.request.get(url, {
      headers: { ...this.defaultHeaders, ...headers },
      params,
    });

    this.parsResponse(response, description);
    return response;
  };
}
