export const schemaMetadataGet = {
  type: "object",
  properties: {
    subjects: {
      type: "string",
    },
    url: {
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
    },
    name: {
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
    },
    ticker: {
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
    },
    decimals: {
      type: "object",
      properties: {
        sequenceNumber: {
          type: "integer",
        },
        value: {
          type: "integer",
        },
        signatures: {
          type: "array",
          items: {},
        },
      },
      required: ["sequenceNumber", "value", "signatures"],
    },
    policy: {
      type: "string",
    },
    logo: {
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
    },
    description: {
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
    },
  },
  required: [
    "subject",
    "url",
    "name",
    "ticker",
    "decimals",
    "policy",
    "logo",
    "description",
  ],
};
