export const schemaMetadataQueryPost = {
  type: "object",
  properties: {
    subjects: {
      type: "array",
      items: {},
    },
  },
  required: ["subjects"],
};
