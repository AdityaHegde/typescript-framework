const PORT_BY_TEST_SUITE: Record<string, number> = {
  "AuthenticationTest": 8000,
  "MongooseStoreTest": 8001,
  "QueryTest": 8002,
  "RelationsTest": 8003,
  "UserWithSingleRole ResourceRestrictionTest": 8004,
  "UserWithMultiRole ResourceRestrictionTest": 8004,
  "UserWithSingleRolesTest": 8005,
  "UserWithMultiRolesTest": 8005,
  "ValidationTest": 8006,

  "AdminUserTest": 8080,
}

export function getPortByTestSuite(testSuite: string) {
  if (!(testSuite in PORT_BY_TEST_SUITE)) {
    throw new Error(`${testSuite} has no defined port. Check PORT_BY_TEST_SUITE.`);
  }
  return PORT_BY_TEST_SUITE[testSuite];
}
