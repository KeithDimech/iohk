export const schemaMetadataPropertyGet = {
  type: "object",
  properties: {
    sequenceNumber: {
      type: "integer",
    },
    value: {
      type: "string",
    },
    signatures: {
      type: "array",
      items: {},
    },
  },
  required: ["sequenceNumber", "value", "signatures"],
};
