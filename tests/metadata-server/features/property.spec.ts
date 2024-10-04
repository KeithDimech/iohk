import { test } from "../base";

test("GET Property", async ({ commonSteps, propertySteps }) => {
  const id =
    "919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e";
  await propertySteps.when_i_get_metadata_property(id);
  await commonSteps.then_i_should_see_response(propertySteps.response!);
  await propertySteps.then_response_should_match_metadata_property_get_schema();
});

test("GET Property wrong Id", async ({ commonSteps, propertySteps }) => {
  const id =
    "00919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e";
  await propertySteps.when_i_get_metadata_property(id);
  await commonSteps.then_i_should_see_response(propertySteps.response!);
  await commonSteps.then_response_should_contain_not_found(
    propertySteps.response!
  );
});
