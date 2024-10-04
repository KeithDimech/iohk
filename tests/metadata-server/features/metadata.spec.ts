import { test } from "../base";

test("GET Metadata", async ({ commonSteps, metadataSteps }) => {
  const id =
    "919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e";
  await metadataSteps.when_i_get_metadata(id);
  await commonSteps.then_i_should_see_response(metadataSteps.response!);
  await metadataSteps.then_response_should_match_metadata_get_schema();
});

test("GET Metadata wrong Id", async ({ commonSteps, metadataSteps }) => {
  const id =
    "00919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e";
  await metadataSteps.when_i_get_metadata(id);
  await commonSteps.then_i_should_see_response(metadataSteps.response!);
  await commonSteps.then_response_should_contain_not_found(
    metadataSteps.response!
  );
});
