import { test } from "../base";

test("POST Query", async ({ commonSteps, querySteps }) => {
  const data = {
    subjects: [
      "789ef8ae89617f34c07f7f6a12e4d65146f958c0bc15a97b4ff169f16861707079636f696e",
      "789ef8ae89617f34c07f7f6a12e4d65146f958c0bc15a97b4ff169f1",
    ],
  };
  await querySteps.when_i_post_metadata_query(data);
  await commonSteps.then_i_should_see_response(querySteps.response!);
  await querySteps.then_response_should_match_metadataquery_schema();
});

test("POST Query empty subjects", async ({ commonSteps, querySteps }) => {
  const data = { subjects: [] };
  await querySteps.when_i_post_metadata_query(data);
  await commonSteps.then_i_should_see_response(querySteps.response!);
  await querySteps.then_response_should_match_metadataquery_schema();
});

test("POST Query no subjects", async ({ commonSteps, querySteps }) => {
  const data = {};
  await querySteps.when_i_post_metadata_query(data);
  await commonSteps.then_i_should_see_response(querySteps.response!, 500);
});

test("POST Query with properties", async ({ commonSteps, querySteps }) => {
  const data = {
    subjects: [
      "789ef8ae89617f34c07f7f6a12e4d65146f958c0bc15a97b4ff169f16861707079636f696e",
      "789ef8ae89617f34c07f7f6a12e4d65146f958c0bc15a97b4ff169f1",
      "94d4cdbcffb09ebd4780d94f932a657dc4852530fa8013df66c72d4c676f6f64636f696e",
    ],
    properties: ["name", "description", "url"],
  };
  await querySteps.when_i_post_metadata_query(data);
  await commonSteps.then_i_should_see_response(querySteps.response!);
  await querySteps.then_response_should_match_metadataquery_schema();
});
