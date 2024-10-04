import { test as base } from "@playwright/test";
import { CommonSteps } from "./steps/common.steps";
import { QuerySteps } from "./steps/query.steps";
import { PropertySteps } from "./steps/property.steps";
import { MetadataSteps } from "./steps/metadata.steps";

type MyFixtures = {
  commonSteps: CommonSteps;
  querySteps: QuerySteps;
  propertySteps: PropertySteps;
  metadataSteps: MetadataSteps;
};

export const test = base.extend<MyFixtures>({
  commonSteps: async ({ page }, use) => {
    await use(new CommonSteps(page));
  },
  querySteps: async ({ page }, use) => {
    await use(new QuerySteps(page));
  },
  propertySteps: async ({ page }, use) => {
    await use(new PropertySteps(page));
  },
  metadataSteps: async ({ page }, use) => {
    await use(new MetadataSteps(page));
  },
});

export { expect } from "@playwright/test";
