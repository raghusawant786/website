"use strict";(globalThis.webpackChunkmy_website=globalThis.webpackChunkmy_website||[]).push([[396],{7289(e,n,t){t.d(n,{G:()=>i});const i=[{id:"fundamentals",title:"API & REST Fundamentals",icon:"\ud83d\udce1",content:"\n## What is an API?\n\nAPI (Application Programming Interface) is a contract between two software systems defining how they communicate.\n\n**Restaurant Analogy:** You (client) place an order \u2192 Waiter (API) carries it to the kitchen (server) \u2192 Waiter returns with the food (response).\n\n**Types relevant to SDET:** REST \xb7 SOAP (legacy) \xb7 GraphQL \xb7 gRPC\n\n## 6 REST Architectural Constraints\n\n1. **Uniform Interface** \u2014 Client & server agree on resource format (JSON/XML) and URI patterns.\n2. **Stateless** \u2014 Each request is fully self-contained; server stores NO session.\n3. **Cacheable** \u2014 Responses must declare cacheability to reduce server load.\n4. **Client-Server** \u2014 UI and data storage are decoupled; evolve independently.\n5. **Layered System** \u2014 Client unaware of load balancers, gateways in between.\n6. **Code on Demand** (optional) \u2014 Server can send executable code to client.\n\n**Senior Tip:** Statelessness enables horizontal scaling (add more servers). Cacheability enables CDNs.\n\n## REST vs SOAP\n\n| Feature | REST | SOAP |\n|---------|------|------|\n| Protocol | HTTP | HTTP, SMTP, TCP |\n| Format | JSON / XML / YAML | XML only |\n| Speed | Faster (lightweight) | Slower (XML overhead) |\n| Contract | OpenAPI / Swagger | WSDL (strict schema) |\n| Security | HTTPS + OAuth 2.0 | WS-Security (built-in) |\n| Error handling | HTTP status codes | SOAP Fault element |\n| Best for | Modern web / mobile APIs | Enterprise / banking / legacy |\n\n## Idempotency\n\nIdempotent \u2014 calling the same operation N times produces identical result to calling it once.\n\n**Idempotent methods:** GET \xb7 PUT \xb7 DELETE \xb7 HEAD \xb7 OPTIONS\n\n**NOT idempotent:** POST (creates new resource each call) \xb7 PATCH (may differ)\n\n**Safe methods** (read-only, zero side-effects): GET \xb7 HEAD \xb7 OPTIONS\n\n**Senior Tip:** Idempotency matters for retry logic in distributed systems. Design automated retries only for idempotent methods.\n    "},{id:"http-methods",title:"HTTP Methods Deep Dive",icon:"\ud83d\udd04",content:'\n## GET\nRetrieve resource. Safe + Idempotent + Cacheable. Params go in URL query string. No request body.\n\n```\nGET /api/users?page=1&size=10 HTTP/1.1\nHost: api.example.com\nAccept: application/json\nAuthorization: Bearer eyJhbGci...\n```\n\n## POST\nCreate a new resource. NOT idempotent. Payload in body. Server determines the new resource URI.\n\n```\nPOST /api/users HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\nAuthorization: Bearer eyJhbGci...\n\n{\n  "name": "Alice",\n  "email": "alice@test.com",\n  "role": "ADMIN"\n}\n```\n\n## PUT\nReplace the ENTIRE resource. Idempotent. Client specifies URI. ALL fields must be sent.\n\n```\nPUT /api/users/5 HTTP/1.1\nContent-Type: application/json\n\n{\n  "id": 5,\n  "name": "Alice Updated",\n  "email": "alice.new@test.com",\n  "age": 31,\n  "role": "ADMIN"\n}\n```\n\n**Note:** If any field is omitted \u2192 that field becomes null/default\n\n## PATCH\nPartial update \u2014 send ONLY the fields that changed. More efficient than PUT for large objects.\n\n```\nPATCH /api/users/5 HTTP/1.1\nContent-Type: application/json\n\n{\n  "email": "patched@test.com"\n}\n```\n\n## DELETE\nRemove a resource. Idempotent (deleting same resource twice = same result). Usually returns 204.\n\n```\nDELETE /api/users/5 HTTP/1.1\nAuthorization: Bearer eyJhbGci...\n\n// Response: 204 No Content (resource deleted)\n// Second call: 404 Not Found (already gone \u2014 still idempotent result)\n```\n\n## OPTIONS\nReturn HTTP methods supported by the endpoint. Used for CORS preflight checks.\n\n```\nOPTIONS /api/users HTTP/1.1\nHost: api.example.com\n\n// Response Headers:\nAllow: GET, POST, PUT, DELETE, OPTIONS\nAccess-Control-Allow-Origin: https://myapp.com\n```\n\n## HEAD\nLike GET but returns ONLY headers \u2014 no response body. Check resource existence / get metadata.\n\n```\nHEAD /api/users/5 HTTP/1.1\nHost: api.example.com\n\n// Response (headers only, no body):\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 248\nLast-Modified: Mon, 01 Apr 2024 10:00:00 GMT\n```\n\n**Senior Tip:** PUT vs PATCH is a very common 9+ year question. PUT = replace whole resource (client sends ALL fields). PATCH = send only what changed (efficient for large objects).\n    '},{id:"status-codes",title:"HTTP Status Codes",icon:"\ud83d\udcca",content:"\n## 2xx SUCCESS\n\n| Code | Meaning |\n|------|---------|\n| **200** | OK \u2014 Standard success. GET/PUT returns body. Most common success code. |\n| **201** | Created \u2014 New resource created (POST/PUT). Location header has new resource URI. |\n| **202** | Accepted \u2014 Request accepted but processing not done yet (async/queue operations). |\n| **204** | No Content \u2014 Success but NO response body. Standard for DELETE, and PUT with no return. |\n\n## 3xx REDIRECTION\n\n| Code | Meaning |\n|------|---------|\n| **301** | Moved Permanently \u2014 Resource has a new permanent URI. All future requests use new URI. |\n| **302** | Found \u2014 Temporary redirect. Keep using original URI for future requests. |\n| **304** | Not Modified \u2014 Cached version still valid. No data transferred \u2014 saves bandwidth. |\n| **307** | Temporary Redirect \u2014 Like 302 but HTTP method must NOT change (POST stays POST). |\n\n## 4xx CLIENT ERRORS\n\n| Code | Meaning |\n|------|---------|\n| **400** | Bad Request \u2014 Malformed syntax, invalid params, or deceptive routing. Fix your request. |\n| **401** | Unauthorized \u2014 NOT authenticated. No valid credentials. Send correct auth token. |\n| **403** | Forbidden \u2014 Authenticated but NOT authorized. User lacks required permission. |\n| **404** | Not Found \u2014 Resource doesn't exist at this URI. Check the path. |\n| **405** | Method Not Allowed \u2014 HTTP method not supported here. Response includes Allow header. |\n| **406** | Not Acceptable \u2014 Server can't produce client's requested media type (Accept header). |\n| **409** | Conflict \u2014 Duplicate resource, version conflict, or state conflict. |\n| **412** | Precondition Failed \u2014 Conditional request header (If-Match) failed. |\n| **415** | Unsupported Media Type \u2014 Server rejects the Content-Type sent by client. |\n| **422** | Unprocessable Entity \u2014 Request syntax OK but semantic validation failed. |\n| **429** | Too Many Requests \u2014 Rate limit exceeded. Check Retry-After response header. |\n\n## 5xx SERVER ERRORS\n\n| Code | Meaning |\n|------|---------|\n| **500** | Internal Server Error \u2014 Generic server fault. Not client's fault. Safe to retry. |\n| **501** | Not Implemented \u2014 Server doesn't support the requested functionality. |\n| **502** | Bad Gateway \u2014 Upstream server returned invalid response (proxy issue). |\n| **503** | Service Unavailable \u2014 Server down or overloaded. Temporary. Retry after delay. |\n| **504** | Gateway Timeout \u2014 Upstream server timed out. Network or service is slow. |\n\n## 401 vs 403\n\n**401 Unauthorized** \u2192 Client is NOT authenticated. 'Who are you?' Credentials missing or wrong. \n\nFix: send correct token / login first.\n\n**403 Forbidden** \u2192 Client IS authenticated but lacks permission. 'I know who you are, but you can't do this.' \n\nFix: grant the user the required role.\n\n**Senior Tip:** Knowing 401 vs 403 saves debugging time. Always check: Is the user logged in? (401) vs Is the user's role correct? (403)\n    "},{id:"authentication",title:"Authentication & Security",icon:"\ud83d\udd10",content:'\n## Basic Auth\n\nBase64-encoded username:password in Authorization header. NOT encrypted \u2014 always use over HTTPS only.\n\n```\n// Request header (sent with every request):\nAuthorization: Basic am9objpzZWNyZXQ=\n\n// Decode: Base64("john:secret") \u2192 am9objpzZWNyZXQ=\n\n// In REST Assured:\ngiven()\n  .auth().basic("john", "secret")\n  .when()\n  .get("/secured-endpoint");\n```\n\n## Bearer Token / JWT\n\nToken sent in Authorization header. Stateless \u2014 server validates signature, no DB lookup needed.\n\n```\n// Request header:\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\n  .eyJ1c2VySWQiOiI1IiwicoleCI6MTcwMDAwMH0\n  .SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n\n// JWT Structure: header.payload.signature\n\n// Payload (Base64 decoded) contains:\n{\n  "userId": "5",\n  "roles": ["ADMIN", "USER"],\n  "exp": 1700000000,\n  "iss": "auth.myapp.com"\n}\n\n// In REST Assured:\ngiven()\n  .header("Authorization", "Bearer " + jwtToken)\n  .when()\n  .get("/users");\n```\n\n## OAuth 2.0 \u2014 Client Credentials Flow\n\nIndustry-standard delegated authorization. Get access token from Auth server, use for API calls.\n\n```\n// Step 1: Get token from Auth server\nString token =\n  given()\n    .formParam("grant_type", "client_credentials")\n    .formParam("client_id", "myClientId")\n    .formParam("client_secret", "mySecret")\n    .formParam("scope", "read:users write:orders")\n    .when()\n    .post("https://auth.example.com/oauth/token")\n    .then()\n    .statusCode(200)\n    .extract()\n    .path("access_token");\n\n// Step 2: Use token in API calls\ngiven()\n  .header("Authorization", "Bearer " + token)\n  .when()\n  .get("https://api.example.com/users");\n```\n\n## API Key Auth\n\nSimple secret key in header or query param. Easy to implement but less secure \u2014 rotate keys regularly.\n\n```\n// Preferred: API key in header (not visible in server logs)\ngiven()\n  .header("X-API-Key", "your-secret-api-key-here")\n  .when()\n  .get("/data");\n\n// Less secure: API key in query param (appears in logs/URL)\ngiven()\n  .queryParam("api_key", "your-secret-api-key-here")\n  .when()\n  .get("/data");\n```\n\n## OAuth 1.0 vs OAuth 2.0\n\n| Aspect | OAuth 1.0 | OAuth 2.0 |\n|--------|-----------|----------|\n| Security | Cryptographic signatures | Bearer tokens + HTTPS mandatory |\n| Complexity | Complex \u2014 signature required per call | Simple \u2014 send token as header |\n| Token Types | Request token + Access token | Access token + Refresh token |\n| Flexibility | Web apps primarily | Web, mobile, server-to-server |\n| Grant Types | Single authorization flow | Auth Code, Client Creds, Implicit\u2026 |\n| Used today | Legacy / niche systems | Modern standard \u2014 use this \u2713 |\n    '},{id:"rest-assured-core",title:"REST Assured Core",icon:"\u2699\ufe0f",content:'\n## Maven Dependency\n\n```xml\n\x3c!-- REST Assured core --\x3e\n<dependency>\n  <groupId>io.rest-assured</groupId>\n  <artifactId>rest-assured</artifactId>\n  <version>5.4.0</version>\n  <scope>test</scope>\n</dependency>\n\n\x3c!-- JSON Schema Validator --\x3e\n<dependency>\n  <groupId>io.rest-assured</groupId>\n  <artifactId>json-schema-validator</artifactId>\n  <version>5.4.0</version>\n  <scope>test</scope>\n</dependency>\n\n\x3c!-- Jackson for POJO serialization/deserialization --\x3e\n<dependency>\n  <groupId>com.fasterxml.jackson.core</groupId>\n  <artifactId>jackson-databind</artifactId>\n  <version>2.15.2</version>\n</dependency>\n```\n\n## The given() / when() / then() Pattern\n\n```java\nimport static io.restassured.RestAssured.*;\nimport static org.hamcrest.Matchers.*;\n\ngiven() // \u2460 REQUEST SPEC \u2014 set up request\n  .baseUri("https://api.example.com")\n  .header("Content-Type", "application/json")\n  .header("Authorization", "Bearer " + token)\n  .header("Accept", "application/json")\n  .queryParam("page", 1)\n  .queryParam("size", 10)\n  .log().all() // log full request to console\n.when() // \u2461 ACTION \u2014 HTTP method + path\n  .get("/users")\n.then() // \u2462 RESPONSE VALIDATION\n  .log().all() // log full response\n  .statusCode(200)\n  .contentType("application/json")\n  .header("X-Rate-Limit-Remaining", notNullValue())\n  .body("data.size()", greaterThan(0))\n  .body("data[0].name", notNullValue())\n  .body("data[0].email", containsString("@"))\n  .body("total", greaterThan(0))\n  .time(lessThan(3000L)); // must respond within 3 seconds\n```\n\n**Senior Tip:** given() = request setup, when() = HTTP action, then() = validation. This BDD-style DSL makes tests self-documenting.\n\n## All HTTP Methods\n\n```java\n// GET\ngiven()\n  .header("Authorization", "Bearer " + token)\n  .queryParam("status", "active")\n.when()\n  .get("/api/users")\n.then()\n  .statusCode(200)\n  .body("data", hasSize(greaterThan(0)));\n\n// POST (create resource)\ngiven()\n  .header("Authorization", "Bearer " + token)\n  .contentType("application/json")\n  .body("{ "name": "Alice", "email": "alice@test.com" }")\n.when()\n  .post("/api/users")\n.then()\n  .statusCode(201)\n  .body("id", notNullValue())\n  .body("name", equalTo("Alice"));\n\n// PUT (full replacement)\ngiven()\n  .header("Authorization", "Bearer " + token)\n  .contentType("application/json")\n  .body("{ "name": "Alice", "email": "new@t.com", "age": 30 }")\n.when()\n  .put("/api/users/5")\n.then()\n  .statusCode(200);\n\n// PATCH (partial update)\ngiven()\n  .header("Authorization", "Bearer " + token)\n  .contentType("application/json")\n  .body("{ "email": "patched@test.com" }")\n.when()\n  .patch("/api/users/5")\n.then()\n  .statusCode(200)\n  .body("email", equalTo("patched@test.com"));\n\n// DELETE\ngiven()\n  .header("Authorization", "Bearer " + token)\n.when()\n  .delete("/api/users/5")\n.then()\n  .statusCode(204);\n```\n    '},{id:"advanced-techniques",title:"Advanced Techniques",icon:"\ud83d\ude80",content:'\n## RequestSpecification \u2014 Reusable Base Setup\n\n```java\nimport io.restassured.builder.RequestSpecBuilder;\nimport io.restassured.builder.ResponseSpecBuilder;\nimport io.restassured.specification.RequestSpecification;\nimport io.restassured.specification.ResponseSpecification;\nimport io.restassured.filter.log.LogDetail;\n\npublic class BaseApiTest {\n  protected static RequestSpecification requestSpec;\n  protected static ResponseSpecification responseSpec;\n\n  @BeforeClass\n  public static void setup() {\n    // \u25a0\u25a0\u25a0 Request spec (shared by all tests) \u25a0\u25a0\u25a0\n    requestSpec = new RequestSpecBuilder()\n      .setBaseUri("https://api.example.com")\n      .setBasePath("/v2")\n      .addHeader("Authorization", "Bearer " + TokenManager.getToken())\n      .addHeader("Content-Type", "application/json")\n      .addHeader("Accept", "application/json")\n      .addHeader("x-api-version", "2024-01")\n      .setRelaxedHTTPSValidation() // ignore SSL in test env\n      .log(LogDetail.ALL)\n      .build();\n\n    // \u25a0\u25a0\u25a0 Response spec (common assertions) \u25a0\u25a0\u25a0\n    responseSpec = new ResponseSpecBuilder()\n      .expectStatusCode(200)\n      .expectContentType("application/json")\n      .expectResponseTime(lessThan(3000L))\n      .build();\n  }\n\n  @Test\n  public void getUsers() {\n    // Reuse specs \u2014 no boilerplate in every test\n    given(requestSpec)\n      .queryParam("page", 1)\n    .when()\n      .get("/users")\n    .then()\n      .spec(responseSpec) // apply shared response spec\n      .body("data.size()", greaterThan(0));\n  }\n}\n```\n\n## Response Extraction & JsonPath\n\n```java\n// Extract full Response object\nResponse response =\n  given(requestSpec)\n  .when()\n    .get("/users")\n  .then()\n    .statusCode(200)\n    .extract()\n    .response();\n\n// JsonPath extraction\nString firstName = response.jsonPath().getString("data[0].name");\nint totalCount = response.jsonPath().getInt("total");\nboolean isActive = response.jsonPath().getBoolean("data[0].active");\nList<String> emails = response.jsonPath().getList("data.email");\n\n// Extract nested map\nMap<String, Object> user = response.jsonPath().getMap("data[2]");\nSystem.out.println(user.get("name")); // prints: Alice\n\n// Extract as POJO (Deserialization via Jackson)\nUser userObj = given(requestSpec)\n  .when()\n    .get("/users/1")\n  .then()\n    .statusCode(200)\n    .extract()\n    .as(User.class);\nSystem.out.println(userObj.getName()); // type-safe access\n\n// Extract and chain into next request (E2E pattern)\nString createdId =\n  given(requestSpec)\n    .body("{ "name": "Bob" }")\n  .when()\n    .post("/users")\n  .then()\n    .statusCode(201)\n    .extract()\n    .path("id")\n    .toString();\n\n// Now use the extracted ID in subsequent request\ngiven(requestSpec)\n  .when()\n    .get("/users/" + createdId)\n  .then()\n    .statusCode(200)\n    .body("name", equalTo("Bob"));\n```\n\n## JSON Schema Validation\n\n```java\n// Schema file: src/test/resources/schemas/user-response.json\n/*\n{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "required": ["id", "name", "email", "status"],\n  "properties": {\n    "id": { "type": "integer", "minimum": 1 },\n    "name": { "type": "string", "minLength": 1 },\n    "email": { "type": "string", "format": "email" },\n    "status": { "type": "string", "enum": ["ACTIVE", "INACTIVE", "PENDING"] },\n    "age": { "type": "integer", "minimum": 0, "maximum": 150 }\n  },\n  "additionalProperties": false\n}\n*/\n\n// Test using JSON Schema Validator\nimport static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;\n\ngiven(requestSpec)\n  .when()\n    .get("/users/1")\n  .then()\n    .statusCode(200)\n    .body(matchesJsonSchemaInClasspath("schemas/user-response.json"));\n\n// Schema validates:\n// \u2713 All required fields are present\n// \u2713 Field types match (string, integer, boolean)\n// \u2713 Enum values are valid\n// \u2713 No unexpected extra fields (additionalProperties: false)\n// \u2713 Format constraints (email, date-time)\n```\n\n**Senior Tip:** JSON Schema validation is a must-have at 9+ years. It automatically catches breaking API changes \u2014 a field removed, type changed, or new required field added.\n\n## Timeout Configuration\n\n```java\nimport io.restassured.config.HttpClientConfig;\nimport io.restassured.config.RestAssuredConfig;\nimport org.apache.http.params.CoreConnectionPNames;\n\n// Global timeout (apply to all requests)\nRestAssuredConfig config = RestAssured.config()\n  .httpClient(\n    HttpClientConfig.httpClientConfig()\n      .setParam(CoreConnectionPNames.CONNECTION_TIMEOUT, 5000) // 5s connect\n      .setParam(CoreConnectionPNames.SO_TIMEOUT, 10000) // 10s read\n  );\nRestAssured.config = config;\n\n// Per-request timeout (override global)\ngiven()\n  .config(\n    RestAssured.config().httpClient(\n      HttpClientConfig.httpClientConfig()\n        .setParam(CoreConnectionPNames.SO_TIMEOUT, 30000) // 30s for slow endpoint\n    )\n  )\n  .when()\n    .get("/slow-report-endpoint")\n  .then()\n    .statusCode(200);\n\n// Assert response time in test\ngiven()\n  .when()\n    .get("/users")\n  .then()\n    .statusCode(200)\n    .time(lessThan(2000L)); // enforce 2-second SLA\n```\n\n## Logging\n\n```java\n// Log everything \u2014 request + response (best for debugging)\ngiven()\n  .log().all()\n.when()\n  .get("/users")\n.then()\n  .log().all()\n  .statusCode(200);\n\n// Log ONLY on failure (production-friendly \u2014 less noise)\ngiven()\n.when()\n  .get("/users")\n.then()\n  .log().ifValidationFails()\n  .statusCode(200);\n\n// Log specific parts\ngiven()\n  .log().headers() // only request headers\n  .log().params() // only query/form params\n  .log().body() // only request body\n.when()\n  .post("/users");\n\n.then()\n  .log().status() // only status line\n  .log().headers() // only response headers\n  .log().body() // only response body\n  .statusCode(200);\n```\n    '},{id:"best-practices",title:"Best Practices & Senior Tips",icon:"\u2b50",content:'\n## API Automation Framework Design\n\n**Components to implement:**\n- BaseApiTest \u2014 RequestSpecification, token refresh, baseURI per environment\n- API Client layer \u2014 UserApiClient, OrderApiClient (one class per service)\n- POJO/DTO layer \u2014 Java objects with Lombok for request/response\n- Schema layer \u2014 JSON schemas in /resources/schemas/ for contract validation\n- TestNG/JUnit \u2014 parallel execution, groups (smoke/regression), retry listener\n- Allure reporting \u2014 request/response attached to each test step\n- CI/CD \u2014 Jenkins/GitHub Actions pipeline runs on PR and nightly\n- Config layer \u2014 property files per environment (DEV / QA / STAGE / PROD)\n\n**Senior Tip:** Be specific about WHY you made each decision \u2014 why RequestSpecBuilder, how you handle token expiry, why TestNG over JUnit.\n\n## Handling Token Expiry\n\nTokenManager utility class:\n- Token cached in static variable with parsed expiry (exp claim from JWT)\n- Before each request: check if token expires within next 60 seconds\n- If about to expire: silently re-authenticate and update cached token\n- Thread-safe for parallel execution: use synchronized block or AtomicReference\n- Used via: TokenManager.getValidToken() \u2014 caller never worries about expiry\n\n## Handling Flaky Tests\n\nRoot causes and fixes:\n- **Async operations** \u2014 API returns 202, then processes in background.\n  Fix: use Awaitility to poll until status = COMPLETED\n- **Shared test data** \u2014 tests interfere with each other.\n  Fix: each test creates and owns its own data, deletes in @AfterMethod\n- **Eventual consistency** \u2014 microservice data sync delay.\n  Fix: retry assertion with backoff using Awaitility\n- **Rate limiting** \u2014 too many test calls trigger 429.\n  Fix: add delay between requests, use separate test API key\n- **Retry strategy** \u2014 TestNG RetryAnalyzer (max 2 retries) + Slack alert on retry\n\n**Awaitility example:**\n```java\nAwaitility.await()\n  .atMost(10, SECONDS)\n  .pollInterval(1, SECONDS)\n  .until(() -> getOrderStatus(id).equals("SHIPPED"));\n```\n\n## CI/CD Pipeline Integration\n\nTypical pipeline setup:\n- **On PR** \u2014 Smoke tests only (20-30 critical tests, < 5 min)\n- **On merge to main** \u2014 Full regression (parallel, 4 threads, ~30 min)\n- **Nightly** \u2014 Full suite + performance SLA checks against STAGE\n- **Reporting** \u2014 Allure report published; Slack webhook on failure\n- **Gate** \u2014 Build fails if failure rate > 5%; retry flaky tests once\n\nMaven command:\n```\nmvn test -Denv=qa -Dgroups=smoke -Dthreads=4\n```\n\n## Negative/Boundary Testing\n\nScenarios to always cover:\n- Missing required fields \u2192 expect 400 Bad Request\n- Invalid data types (string where int expected) \u2192 expect 400\n- Field length exceeds maximum \u2192 expect 400 or 422\n- Expired or tampered JWT token \u2192 expect 401\n- Valid token but wrong role \u2192 expect 403\n- Non-existent resource ID \u2192 expect 404\n- Wrong HTTP method on endpoint \u2192 expect 405\n- Wrong Content-Type header \u2192 expect 415\n- Rate limit exhaustion (send N+1 requests) \u2192 expect 429\n- SQL injection / XSS in params \u2192 expect 400, no execution\n- Empty body on POST \u2192 expect 400 with clear error message\n\n**Senior Tip:** Negative testing finds the most critical bugs. Always assert error response body \u2014 good APIs return actionable messages, not just codes.\n\n## Contract Testing (Pact)\n\nContract testing approach:\n- Consumer writes a Pact (JSON contract) defining what it expects from the provider\n- Provider runs Pact verification against its actual implementation\n- Contract stored in Pact Broker \u2014 visible to both teams\n- No need to spin up both services together\n\n**Key benefit:** Catches breaking changes before integration tests. Enables independent service deployment in microservices architecture.\n\n**Senior Tip:** Pact testing is a major differentiator at senior SDET level. If not used, study the concept \u2014 interviewers increasingly ask about it.\n\n## Top 7 Mistakes in API Automation\n\n1. **No JSON schema validation** \u2014 misses structure changes\n2. **Tests depend on each other** \u2014 ordering dependency = fragile suite\n3. **No token refresh logic** \u2014 long suites fail mid-run\n4. **Hardcoded test data in code** \u2014 not maintainable\n5. **No negative test cases** \u2014 misses critical error-path bugs\n6. **No performance SLA checks** \u2014 performance regressions go unnoticed\n7. **Logging disabled in CI** \u2014 impossible to debug failures\n\n**Senior differentiators (9+ years):**\n- Contract testing with Pact\n- API gateway testing\n- Microservices E2E testing strategy\n- Performance SLA enforcement in CI/CD\n- GraphQL testing\n- Mentoring juniors on framework design\n- Shift-left API testing integrated with dev workflow\n    '},{id:"quick-reference",title:"Quick Reference Cheat Sheet",icon:"\ud83d\udccb",content:'\n## Hamcrest Matchers\n\n```java\n// Equality\n.body("name", equalTo("Alice"))\n.body("age", equalTo(30))\n.body("active", equalTo(true))\n.body("deletedAt", equalTo(null))\n\n// Null / Not Null\n.body("id", notNullValue())\n.body("deletedAt", nullValue())\n\n// String matching\n.body("message", containsString("success"))\n.body("url", startsWith("https://"))\n.body("filename", endsWith(".pdf"))\n.body("name", not(emptyOrNullString()))\n\n// Numeric comparisons\n.body("count", greaterThan(0))\n.body("score", lessThan(100))\n.body("price", greaterThanOrEqualTo(0.0f))\n.body("discount", lessThanOrEqualTo(50.0f))\n.body("total", closeTo(99.99, 0.01)) // float tolerance\n\n// Collections\n.body("roles", hasItem("ADMIN")) // list contains item\n.body("tags", hasItems("java", "api")) // list contains all\n.body("data", hasSize(10)) // exact size\n.body("data", hasSize(greaterThan(0))) // size constraint\n.body("data.name", everyItem(notNullValue())) // every item matches\n.body("data.age", everyItem(greaterThan(18)))\n\n// Status code\n.statusCode(200)\n.statusCode(anyOf(is(200), is(201))) // accept multiple codes\n.statusCode(not(500))\n\n// Headers\n.header("Content-Type", containsString("application/json"))\n.header("Cache-Control", "no-cache, no-store")\n.header("X-Rate-Limit-Remaining", notNullValue())\n\n// Response time\n.time(lessThan(2000L)) // under 2 seconds\n.time(greaterThan(100L)) // sanity: not suspiciously fast\n```\n\n## Key Interview One-Liners\n\n- **PUT vs POST** \u2192 PUT = replace at known URI (idempotent); POST = create, server chooses new URI (not idempotent)\n- **PUT vs PATCH** \u2192 PUT = replace ALL fields; PATCH = update ONLY the specified fields\n- **401 vs 403** \u2192 401 = not authenticated; 403 = authenticated but forbidden\n- **given/when/then** \u2192 given = request setup; when = HTTP method; then = response validation\n- **Header vs Headers** \u2192 Header = single name-value pair; Headers = collection of Header objects\n- **Serialization** \u2192 Java Object \u2192 JSON (sending data in request body)\n- **Deserialization** \u2192 JSON \u2192 Java Object (processing response body)\n- **JsonPath** \u2192 Path expression to extract values from JSON (like XPath for JSON: data[0].name, total)\n- **Schema validation** \u2192 validates structure & types, not just values\n- **Idempotent** \u2192 same result regardless of how many times called (GET, PUT, DELETE are idempotent; POST is not)\n- **Stateless REST** \u2192 each HTTP request is independent; server stores NO session between calls\n- **relaxedHTTPSValidation()** \u2192 disables SSL cert check; USE ONLY in test env, NEVER production\n\n## Common HTTP Status Codes\n\n| Code | Meaning |\n|------|---------|\n| 200 | OK \u2014 success with body |\n| 201 | Created \u2014 POST/PUT created resource |\n| 204 | No Content \u2014 success, no body (DELETE/PUT) |\n| 301 | Moved Permanently \u2014 update your bookmarks |\n| 304 | Not Modified \u2014 use your cached copy |\n| 400 | Bad Request \u2014 fix your request |\n| 401 | Unauthorized \u2014 authenticate first |\n| 403 | Forbidden \u2014 logged in but not allowed |\n| 404 | Not Found \u2014 resource doesn\'t exist |\n| 405 | Method Not Allowed \u2014 wrong HTTP verb |\n| 409 | Conflict \u2014 duplicate / version mismatch |\n| 415 | Unsupported Media Type \u2014 wrong Content-Type |\n| 422 | Unprocessable Entity \u2014 validation failed |\n| 429 | Too Many Requests \u2014 rate limited |\n| 500 | Internal Server Error \u2014 server bug |\n| 502 | Bad Gateway \u2014 upstream returned garbage |\n| 503 | Service Unavailable \u2014 server down/overloaded |\n| 504 | Gateway Timeout \u2014 upstream timed out |\n    '}]},7297(e,n,t){t.r(n),t.d(n,{default:()=>F});var i=t(6540),r=t(2397);const a="container_q6GP",s="heroSection_CDbZ",o="mainTitle_tCiz",l="tagline_fA0E",c="layoutContainer_wOvn",u="sidebar_nhY0",p="mainTopicsNav_IGYP",d="mainTopic_jrmy",m="mainTopicActive_kJUM",g="topicIcon_ldr4",h="subtopicSection_JhFg",b="collapsibleHeader_OAsc",S="expandArrow_wZjZ",y="subtopicHeaderText_gEFX",v="subtopicNav_UiSY",w="subtopic_M3un",f="subtopicActive_Y8NN",x="contentArea_WzBP",C="contentArticle_at35",T="sectionHeader_vG3T",A="sectionIcon_XBnN",P="sectionTitle_JObl",I="contentBody_PktM",E="programExamples_uUgc",j="programExample_GadO",L={restassured:{title:"REST Assured",icon:"\ud83d\ude80",subtopics:[{id:"fundamentals",label:"API & REST Fundamentals"},{id:"http-methods",label:"HTTP Methods Deep Dive"},{id:"status-codes",label:"HTTP Status Codes"},{id:"authentication",label:"Authentication & Security"},{id:"rest-assured-core",label:"REST Assured Core"},{id:"advanced-techniques",label:"Advanced Techniques"},{id:"best-practices",label:"Best Practices & Senior Tips"},{id:"quick-reference",label:"Quick Reference Cheat Sheet"}]},java:{title:"Java & OOP Programs",icon:"\u2615",subtopics:[{id:"numbers",label:"Numbers (20 Programs)"},{id:"strings",label:"Strings (21 Programs)"},{id:"arrays-collections",label:"Arrays & Collections (13 Programs)"},{id:"oop-core",label:"OOP Core Concepts (6 Concepts)"},{id:"design-patterns",label:"Design Patterns (5 Patterns)"},{id:"solid-exceptions",label:"SOLID & Exception Handling (10 Programs)"},{id:"multithreading-java8",label:"Multithreading, Java 8 & Advanced (5+ Topics)"}]},cucumber:{title:"Cucumber BDD & Serenity",icon:"\ud83e\udd52",subtopics:[{id:"bdd-fundamentals",label:"BDD Fundamentals"},{id:"cucumber-core",label:"Cucumber Core Concepts"},{id:"step-definitions-hooks-tags",label:"Step Definitions, Hooks & Tags"},{id:"advanced-cucumber",label:"Advanced Cucumber"},{id:"cucumber-selenium",label:"Cucumber + Selenium"},{id:"runner-reports",label:"Runner, Options & Reports"},{id:"maven-commands",label:"Maven Commands"},{id:"serenity-introduction",label:"Serenity BDD Introduction"},{id:"serenity-cucumber-integration",label:"Serenity + Cucumber Integration"},{id:"serenity-config-qa",label:"Serenity Config & Interview Q&A"}]},playwright:{title:"Playwright JS",icon:"\ud83c\udfad",subtopics:[{id:"installation-setup",label:"Installation & Project Setup"},{id:"cli-commands",label:"Playwright CLI Commands"},{id:"config-structure",label:"Project Structure & Config"},{id:"locators-selectors",label:"Locators & Selectors"},{id:"user-actions",label:"User Actions"},{id:"assertions",label:"Assertions"},{id:"waits-timeouts",label:"Waits & Timeouts"},{id:"screenshots-videos-traces",label:"Screenshots, Videos & Traces"},{id:"hooks-fixtures",label:"Hooks, Tags & Fixtures"},{id:"page-object-model",label:"Page Object Model"},{id:"dialogs-frames-shadow",label:"Dialogs, Frames & Shadow DOM"},{id:"file-upload-download",label:"File Upload & Download"},{id:"api-testing",label:"API Testing"},{id:"network-mocking",label:"Network Interception & Mocking"},{id:"multi-tab-browser",label:"Multi-Tab & Multi-Browser"},{id:"authentication-storage",label:"Authentication & Storage State"},{id:"data-driven-tests",label:"Parameterization & Data-Driven Tests"},{id:"reporters-allure",label:"Reporters & Allure"},{id:"cicd",label:"CI/CD - GitHub Actions"},{id:"best-practices",label:"Expert Tips & Best Practices"}]}},k=Object.keys(L);var R=t(7289);const B=[{id:"numbers",title:"Numbers (20 Programs)",icon:"\ud83d\udd22",examples:[{title:"Odd or Even Number",code:String.raw`
public class OddEvenNumber {
    public static void main(String[] args) {
        int number = 10;

        if (number % 2 == 0) {
            System.out.println(number + " is even");
        } else {
            System.out.println(number + " is odd");
        }
    }
}`},{title:"Prime Number Check",code:String.raw`
public class PrimeNumberCheck {
    public static void main(String[] args) {
        int number = 29;
        boolean isPrime = number > 1;

        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        System.out.println(number + " is prime: " + isPrime);
    }
}`},{title:"Fibonacci Series",code:String.raw`
public class FibonacciSeries {
    public static void main(String[] args) {
        int terms = 10;
        int first = 0;
        int second = 1;

        for (int i = 0; i < terms; i++) {
            System.out.print(first + " ");
            int next = first + second;
            first = second;
            second = next;
        }
    }
}`},{title:"Factorial",code:String.raw`
public class Factorial {
    public static void main(String[] args) {
        int number = 5;
        long factorial = 1;

        for (int i = 2; i <= number; i++) {
            factorial *= i;
        }

        System.out.println("Factorial: " + factorial);
    }
}`},{title:"Reverse a Number",code:String.raw`
public class ReverseNumber {
    public static void main(String[] args) {
        int number = 12345;
        int reverse = 0;

        while (number != 0) {
            reverse = reverse * 10 + number % 10;
            number /= 10;
        }

        System.out.println("Reverse: " + reverse);
    }
}`},{title:"Armstrong Number Check",code:String.raw`
public class ArmstrongNumber {
    public static void main(String[] args) {
        int number = 153;
        int original = number;
        int digits = String.valueOf(number).length();
        int sum = 0;

        while (number != 0) {
            int digit = number % 10;
            sum += Math.pow(digit, digits);
            number /= 10;
        }

        System.out.println(original + " is Armstrong: " + (sum == original));
    }
}`},{title:"Palindrome Number",code:String.raw`
public class PalindromeNumber {
    public static void main(String[] args) {
        int number = 121;
        int original = number;
        int reverse = 0;

        while (number != 0) {
            reverse = reverse * 10 + number % 10;
            number /= 10;
        }

        System.out.println(original + " is palindrome: " + (original == reverse));
    }
}`},{title:"Sum of Digits",code:String.raw`
public class SumOfDigits {
    public static void main(String[] args) {
        int number = 12345;
        int sum = 0;

        while (number != 0) {
            sum += number % 10;
            number /= 10;
        }

        System.out.println("Sum: " + sum);
    }
}`},{title:"Count Digits",code:String.raw`
public class CountDigits {
    public static void main(String[] args) {
        int number = 12345;
        int count = 0;

        do {
            count++;
            number /= 10;
        } while (number != 0);

        System.out.println("Digits: " + count);
    }
}`},{title:"Swap Two Numbers",code:String.raw`
public class SwapTwoNumbers {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        a = a + b;
        b = a - b;
        a = a - b;

        System.out.println("a = " + a + ", b = " + b);
    }
}`},{title:"GCD of Two Numbers",code:String.raw`
public class GcdOfTwoNumbers {
    public static void main(String[] args) {
        int a = 24;
        int b = 36;

        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }

        System.out.println("GCD: " + a);
    }
}`},{title:"Prime Numbers in Range",code:String.raw`
public class PrimeNumbersInRange {
    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        for (int number = 1; number <= 50; number++) {
            if (isPrime(number)) {
                System.out.print(number + " ");
            }
        }
    }
}`},{title:"Decimal to Binary",code:String.raw`
public class DecimalToBinary {
    public static void main(String[] args) {
        int number = 10;
        String binary = Integer.toBinaryString(number);
        System.out.println("Binary: " + binary);
    }
}`},{title:"Perfect Number",code:String.raw`
public class PerfectNumber {
    public static void main(String[] args) {
        int number = 28;
        int sum = 0;

        for (int i = 1; i <= number / 2; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }

        System.out.println(number + " is perfect: " + (sum == number));
    }
}`},{title:"Leap Year Check",code:String.raw`
public class LeapYearCheck {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeapYear = (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
        System.out.println(year + " is leap year: " + isLeapYear);
    }
}`},{title:"Sum of First N Natural Numbers",code:String.raw`
public class SumOfNaturalNumbers {
    public static void main(String[] args) {
        int n = 10;
        int sum = n * (n + 1) / 2;
        System.out.println("Sum: " + sum);
    }
}`},{title:"Simple Calculator",code:String.raw`
public class SimpleCalculator {
    public static void main(String[] args) {
        double first = 20;
        double second = 10;
        char operator = '+';
        double result;

        switch (operator) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                result = first / second;
                break;
            default:
                throw new IllegalArgumentException("Invalid operator");
        }

        System.out.println("Result: " + result);
    }
}`},{title:"Pascal's Triangle",code:String.raw`
public class PascalsTriangle {
    public static void main(String[] args) {
        int rows = 5;

        for (int i = 0; i < rows; i++) {
            int value = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(value + " ");
                value = value * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }
}`},{title:"Missing Number in Array",code:String.raw`
public class MissingNumberInArray {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 4, 5};
        int n = 5;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;

        for (int number : numbers) {
            actualSum += number;
        }

        System.out.println("Missing number: " + (expectedSum - actualSum));
    }
}`}],content:'\n## Numbers Category\n\nA comprehensive collection of number-based algorithms covering basic concepts like odd/even checks, prime numbers, Fibonacci sequences, factorial calculations, and number manipulations.\n\n**Programs Covered:**\n- Odd or Even Number\n- Prime Number Check\n- Fibonacci Series (iterative & recursive)\n- Factorial (loop & recursive)\n- Reverse a Number\n- Armstrong Number Check\n- Palindrome Number\n- Sum of Digits\n- Count Digits\n- Swap Two Numbers (No 3rd Variable)\n- GCD of Two Numbers\n- Prime Numbers in Range\n- Decimal to Binary\n- Perfect Number\n- Leap Year Check\n- Sum of First N Natural Numbers\n- Simple Calculator\n- Pascal\'s Triangle\n- Missing Number in Array\n\n### Java Code Examples\n\n```java\nimport java.util.Arrays;\n\npublic class NumberPrograms {\n    public static boolean isEven(int number) {\n        return number % 2 == 0;\n    }\n\n    public static boolean isPrime(int number) {\n        if (number <= 1) {\n            return false;\n        }\n        if (number == 2) {\n            return true;\n        }\n        if (number % 2 == 0) {\n            return false;\n        }\n        for (int i = 3; i * i <= number; i += 2) {\n            if (number % i == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    public static void printFibonacciIterative(int terms) {\n        int first = 0;\n        int second = 1;\n        for (int i = 0; i < terms; i++) {\n            System.out.print(first + " ");\n            int next = first + second;\n            first = second;\n            second = next;\n        }\n    }\n\n    public static int fibonacciRecursive(int n) {\n        if (n <= 1) {\n            return n;\n        }\n        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);\n    }\n\n    public static long factorialLoop(int number) {\n        long result = 1;\n        for (int i = 2; i <= number; i++) {\n            result *= i;\n        }\n        return result;\n    }\n\n    public static long factorialRecursive(int number) {\n        if (number <= 1) {\n            return 1;\n        }\n        return number * factorialRecursive(number - 1);\n    }\n\n    public static int reverseNumber(int number) {\n        int reverse = 0;\n        while (number != 0) {\n            reverse = reverse * 10 + number % 10;\n            number /= 10;\n        }\n        return reverse;\n    }\n\n    public static boolean isArmstrong(int number) {\n        int original = number;\n        int digits = countDigits(number);\n        int sum = 0;\n        while (number != 0) {\n            int digit = number % 10;\n            sum += Math.pow(digit, digits);\n            number /= 10;\n        }\n        return sum == original;\n    }\n\n    public static boolean isPalindrome(int number) {\n        return number == reverseNumber(number);\n    }\n\n    public static int sumOfDigits(int number) {\n        int sum = 0;\n        while (number != 0) {\n            sum += Math.abs(number % 10);\n            number /= 10;\n        }\n        return sum;\n    }\n\n    public static int countDigits(int number) {\n        if (number == 0) {\n            return 1;\n        }\n        return String.valueOf(Math.abs(number)).length();\n    }\n\n    public static void swapWithoutTemp(int a, int b) {\n        a = a + b;\n        b = a - b;\n        a = a - b;\n        System.out.println("a = " + a + ", b = " + b);\n    }\n\n    public static int gcd(int a, int b) {\n        while (b != 0) {\n            int temp = b;\n            b = a % b;\n            a = temp;\n        }\n        return Math.abs(a);\n    }\n\n    public static void printPrimesInRange(int start, int end) {\n        for (int number = start; number <= end; number++) {\n            if (isPrime(number)) {\n                System.out.print(number + " ");\n            }\n        }\n    }\n\n    public static String decimalToBinary(int number) {\n        return Integer.toBinaryString(number);\n    }\n\n    public static boolean isPerfectNumber(int number) {\n        if (number <= 1) {\n            return false;\n        }\n        int sum = 1;\n        for (int i = 2; i * i <= number; i++) {\n            if (number % i == 0) {\n                sum += i;\n                if (i != number / i) {\n                    sum += number / i;\n                }\n            }\n        }\n        return sum == number;\n    }\n\n    public static boolean isLeapYear(int year) {\n        return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);\n    }\n\n    public static int sumOfNaturalNumbers(int n) {\n        return n * (n + 1) / 2;\n    }\n\n    public static double calculate(double first, double second, char operator) {\n        switch (operator) {\n            case \'+\':\n                return first + second;\n            case \'-\':\n                return first - second;\n            case \'*\':\n                return first * second;\n            case \'/\':\n                if (second == 0) {\n                    throw new ArithmeticException("Cannot divide by zero");\n                }\n                return first / second;\n            default:\n                throw new IllegalArgumentException("Unsupported operator: " + operator);\n        }\n    }\n\n    public static void printPascalsTriangle(int rows) {\n        for (int i = 0; i < rows; i++) {\n            int value = 1;\n            for (int j = 0; j <= i; j++) {\n                System.out.print(value + " ");\n                value = value * (i - j) / (j + 1);\n            }\n            System.out.println();\n        }\n    }\n\n    public static int findMissingNumber(int[] numbers, int n) {\n        int expectedSum = n * (n + 1) / 2;\n        int actualSum = Arrays.stream(numbers).sum();\n        return expectedSum - actualSum;\n    }\n\n    public static void main(String[] args) {\n        System.out.println("Is 10 even? " + isEven(10));\n        System.out.println("Is 29 prime? " + isPrime(29));\n        System.out.println("Factorial of 5: " + factorialLoop(5));\n        System.out.println("Reverse of 12345: " + reverseNumber(12345));\n        System.out.println("GCD of 24 and 36: " + gcd(24, 36));\n        printPascalsTriangle(5);\n    }\n}\n```\n\n**Key Concepts:**\n- Loop structures (for, while)\n- Mathematical operations (modulo, division)\n- Recursion basics\n- Bit manipulation\n- Number theory fundamentals\n\n**Senior Focus:**\n- Time complexity analysis (O(\u221an) for prime check)\n- Edge case handling\n- Optimization techniques\n    '},{id:"strings",title:"Strings (21 Programs)",icon:"\ud83d\udcdd",examples:[{title:"Reverse a String",code:String.raw`
public class ReverseString {
    public static void main(String[] args) {
        String input = "automation";
        String reversed = new StringBuilder(input).reverse().toString();
        System.out.println("Reversed string: " + reversed);
    }
}`},{title:"Reverse Each Word",code:String.raw`
public class ReverseEachWord {
    public static void main(String[] args) {
        String sentence = "Java coding practice";
        StringBuilder result = new StringBuilder();

        for (String word : sentence.split("\\s+")) {
            result.append(new StringBuilder(word).reverse()).append(" ");
        }

        System.out.println(result.toString().trim());
    }
}`},{title:"Palindrome String",code:String.raw`
public class PalindromeString {
    public static void main(String[] args) {
        String input = "madam";
        String reversed = new StringBuilder(input).reverse().toString();

        if (input.equalsIgnoreCase(reversed)) {
            System.out.println(input + " is a palindrome");
        } else {
            System.out.println(input + " is not a palindrome");
        }
    }
}`},{title:"Anagram Check",code:String.raw`
import java.util.Arrays;

public class AnagramCheck {
    public static void main(String[] args) {
        String first = "listen";
        String second = "silent";

        char[] firstArray = first.toLowerCase().toCharArray();
        char[] secondArray = second.toLowerCase().toCharArray();
        Arrays.sort(firstArray);
        Arrays.sort(secondArray);

        System.out.println(Arrays.equals(firstArray, secondArray));
    }
}`},{title:"Count Vowels and Consonants",code:String.raw`
public class CountVowelsConsonants {
    public static void main(String[] args) {
        String input = "Automation Testing".toLowerCase();
        int vowels = 0;
        int consonants = 0;

        for (char ch : input.toCharArray()) {
            if (ch >= 'a' && ch <= 'z') {
                if ("aeiou".indexOf(ch) >= 0) {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }

        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
    }
}`},{title:"Find Duplicate Characters",code:String.raw`
import java.util.LinkedHashMap;
import java.util.Map;

public class DuplicateCharacters {
    public static void main(String[] args) {
        String input = "programming";
        Map<Character, Integer> countMap = new LinkedHashMap<>();

        for (char ch : input.toCharArray()) {
            countMap.put(ch, countMap.getOrDefault(ch, 0) + 1);
        }

        countMap.forEach((ch, count) -> {
            if (count > 1) {
                System.out.println(ch + " = " + count);
            }
        });
    }
}`},{title:"Count Word Occurrences",code:String.raw`
import java.util.LinkedHashMap;
import java.util.Map;

public class CountWordOccurrences {
    public static void main(String[] args) {
        String sentence = "java is simple java is powerful";
        Map<String, Integer> wordCount = new LinkedHashMap<>();

        for (String word : sentence.split("\\s+")) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }

        System.out.println(wordCount);
    }
}`},{title:"Count Words",code:String.raw`
public class CountWords {
    public static void main(String[] args) {
        String sentence = "Java coding interview programs";
        String[] words = sentence.trim().split("\\s+");
        System.out.println("Word count: " + words.length);
    }
}`},{title:"All Permutations of a String",code:String.raw`
public class StringPermutations {
    public static void printPermutations(String text, String answer) {
        if (text.isEmpty()) {
            System.out.println(answer);
            return;
        }

        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);
            String remaining = text.substring(0, i) + text.substring(i + 1);
            printPermutations(remaining, answer + ch);
        }
    }

    public static void main(String[] args) {
        printPermutations("abc", "");
    }
}`},{title:"Print Unique Characters",code:String.raw`
import java.util.LinkedHashSet;
import java.util.Set;

public class UniqueCharacters {
    public static void main(String[] args) {
        String input = "automation";
        Set<Character> unique = new LinkedHashSet<>();

        for (char ch : input.toCharArray()) {
            unique.add(ch);
        }

        System.out.println(unique);
    }
}`},{title:"Remove Spaces",code:String.raw`
public class RemoveSpaces {
    public static void main(String[] args) {
        String input = "Java coding practice";
        String output = input.replaceAll("\\s+", "");
        System.out.println(output);
    }
}`},{title:"Character Compression",code:String.raw`
public class CharacterCompression {
    public static void main(String[] args) {
        String input = "aaabbcccc";
        StringBuilder result = new StringBuilder();
        int count = 1;

        for (int i = 1; i <= input.length(); i++) {
            if (i < input.length() && input.charAt(i) == input.charAt(i - 1)) {
                count++;
            } else {
                result.append(input.charAt(i - 1)).append(count);
                count = 1;
            }
        }

        System.out.println(result);
    }
}`},{title:"Separate Upper and Lowercase",code:String.raw`
public class SeparateUpperLower {
    public static void main(String[] args) {
        String input = "JaVaProGram";
        StringBuilder upper = new StringBuilder();
        StringBuilder lower = new StringBuilder();

        for (char ch : input.toCharArray()) {
            if (Character.isUpperCase(ch)) {
                upper.append(ch);
            } else if (Character.isLowerCase(ch)) {
                lower.append(ch);
            }
        }

        System.out.println("Uppercase: " + upper);
        System.out.println("Lowercase: " + lower);
    }
}`},{title:"Separate Alpha and Numeric",code:String.raw`
public class SeparateAlphaNumeric {
    public static void main(String[] args) {
        String input = "abc123xyz45";
        StringBuilder alphabets = new StringBuilder();
        StringBuilder numbers = new StringBuilder();

        for (char ch : input.toCharArray()) {
            if (Character.isLetter(ch)) {
                alphabets.append(ch);
            } else if (Character.isDigit(ch)) {
                numbers.append(ch);
            }
        }

        System.out.println("Alphabets: " + alphabets);
        System.out.println("Numbers: " + numbers);
    }
}`},{title:"Longest Substring Without Repeating",code:String.raw`
import java.util.HashMap;
import java.util.Map;

public class LongestSubstringWithoutRepeating {
    public static void main(String[] args) {
        String input = "abcabcbb";
        Map<Character, Integer> lastSeen = new HashMap<>();
        int start = 0;
        int maxLength = 0;

        for (int end = 0; end < input.length(); end++) {
            char ch = input.charAt(end);
            if (lastSeen.containsKey(ch) && lastSeen.get(ch) >= start) {
                start = lastSeen.get(ch) + 1;
            }
            lastSeen.put(ch, end);
            maxLength = Math.max(maxLength, end - start + 1);
        }

        System.out.println("Longest length: " + maxLength);
    }
}`},{title:"Remove Special Characters",code:String.raw`
public class RemoveSpecialCharacters {
    public static void main(String[] args) {
        String input = "Java@123#Code!";
        String output = input.replaceAll("[^a-zA-Z0-9]", "");
        System.out.println(output);
    }
}`},{title:"First Non-Repeated Character",code:String.raw`
import java.util.LinkedHashMap;
import java.util.Map;

public class FirstNonRepeatedCharacter {
    public static void main(String[] args) {
        String input = "swiss";
        Map<Character, Integer> countMap = new LinkedHashMap<>();

        for (char ch : input.toCharArray()) {
            countMap.put(ch, countMap.getOrDefault(ch, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : countMap.entrySet()) {
            if (entry.getValue() == 1) {
                System.out.println(entry.getKey());
                break;
            }
        }
    }
}`},{title:"Max Occurring Character",code:String.raw`
import java.util.HashMap;
import java.util.Map;

public class MaxOccurringCharacter {
    public static void main(String[] args) {
        String input = "automation";
        Map<Character, Integer> countMap = new HashMap<>();
        char maxChar = input.charAt(0);
        int maxCount = 0;

        for (char ch : input.toCharArray()) {
            int count = countMap.getOrDefault(ch, 0) + 1;
            countMap.put(ch, count);
            if (count > maxCount) {
                maxCount = count;
                maxChar = ch;
            }
        }

        System.out.println(maxChar + " = " + maxCount);
    }
}`},{title:"Double Each Character",code:String.raw`
public class DoubleEachCharacter {
    public static void main(String[] args) {
        String input = "java";
        StringBuilder result = new StringBuilder();

        for (char ch : input.toCharArray()) {
            result.append(ch).append(ch);
        }

        System.out.println(result);
    }
}`},{title:"Swap Two Strings",code:String.raw`
public class SwapTwoStrings {
    public static void main(String[] args) {
        String first = "Hello";
        String second = "World";

        first = first + second;
        second = first.substring(0, first.length() - second.length());
        first = first.substring(second.length());

        System.out.println("First: " + first);
        System.out.println("Second: " + second);
    }
}`},{title:"Print Even Indexed Characters",code:String.raw`
public class EvenIndexedCharacters {
    public static void main(String[] args) {
        String input = "automation";

        for (int i = 0; i < input.length(); i += 2) {
            System.out.print(input.charAt(i));
        }
    }
}`},{title:"Simple Login",code:String.raw`
public class SimpleLogin {
    public static void main(String[] args) {
        String username = "admin";
        String password = "admin123";

        if ("admin".equals(username) && "admin123".equals(password)) {
            System.out.println("Login successful");
        } else {
            System.out.println("Invalid credentials");
        }
    }
}`}],content:'\n## Strings Category\n\nString manipulation algorithms covering reversal, anagram checking, character counting, compression, and pattern matching techniques.\n\n**Programs Covered:**\n- Reverse a String\n- Reverse Each Word\n- Palindrome String\n- Anagram Check\n- Count Vowels and Consonants\n- Find Duplicate Characters\n- Count Word Occurrences\n- Count Words\n- All Permutations of a String\n- Print Unique Characters\n- Remove Spaces\n- Character Compression\n- Separate Upper and Lowercase\n- Separate Alpha and Numeric\n- Longest Substring Without Repeating\n- Remove Special Characters\n- First Non-Repeated Character\n- Max Occurring Character\n- Double Each Character\n- Swap Two Strings\n- Print Even Indexed Characters\n- String Length, isEmpty, contains\n- Count Char Occurrences\n- Reverse Words Keeping Digits\n- Lambda \u2013 Filter Even Numbers\n- Simple Login\n\n### Java Code Examples\n\n```java\nimport java.util.Arrays;\nimport java.util.HashMap;\nimport java.util.LinkedHashMap;\nimport java.util.Map;\nimport java.util.function.Predicate;\nimport java.util.stream.Collectors;\n\npublic class StringPrograms {\n    public static String reverse(String text) {\n        return new StringBuilder(text).reverse().toString();\n    }\n\n    public static String reverseEachWord(String sentence) {\n        return Arrays.stream(sentence.split("\\\\s+"))\n                .map(StringPrograms::reverse)\n                .collect(Collectors.joining(" "));\n    }\n\n    public static boolean isPalindrome(String text) {\n        String cleaned = text.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();\n        return cleaned.equals(reverse(cleaned));\n    }\n\n    public static boolean isAnagram(String first, String second) {\n        char[] firstArray = first.replaceAll("\\\\s+", "").toLowerCase().toCharArray();\n        char[] secondArray = second.replaceAll("\\\\s+", "").toLowerCase().toCharArray();\n        Arrays.sort(firstArray);\n        Arrays.sort(secondArray);\n        return Arrays.equals(firstArray, secondArray);\n    }\n\n    public static Map<Character, Integer> characterFrequency(String text) {\n        Map<Character, Integer> frequency = new LinkedHashMap<>();\n        for (char ch : text.toCharArray()) {\n            frequency.put(ch, frequency.getOrDefault(ch, 0) + 1);\n        }\n        return frequency;\n    }\n\n    public static long countVowels(String text) {\n        return text.toLowerCase()\n                .chars()\n                .filter(ch -> "aeiou".indexOf(ch) >= 0)\n                .count();\n    }\n\n    public static String removeSpaces(String text) {\n        return text.replaceAll("\\\\s+", "");\n    }\n\n    public static String compress(String text) {\n        if (text == null || text.isEmpty()) {\n            return text;\n        }\n        StringBuilder result = new StringBuilder();\n        int count = 1;\n        for (int i = 1; i <= text.length(); i++) {\n            if (i < text.length() && text.charAt(i) == text.charAt(i - 1)) {\n                count++;\n            } else {\n                result.append(text.charAt(i - 1)).append(count);\n                count = 1;\n            }\n        }\n        return result.toString();\n    }\n\n    public static int longestSubstringWithoutRepeating(String text) {\n        Map<Character, Integer> lastSeen = new HashMap<>();\n        int start = 0;\n        int maxLength = 0;\n\n        for (int end = 0; end < text.length(); end++) {\n            char ch = text.charAt(end);\n            if (lastSeen.containsKey(ch) && lastSeen.get(ch) >= start) {\n                start = lastSeen.get(ch) + 1;\n            }\n            lastSeen.put(ch, end);\n            maxLength = Math.max(maxLength, end - start + 1);\n        }\n        return maxLength;\n    }\n\n    public static Character firstNonRepeatedCharacter(String text) {\n        Map<Character, Integer> frequency = characterFrequency(text);\n        for (Map.Entry<Character, Integer> entry : frequency.entrySet()) {\n            if (entry.getValue() == 1) {\n                return entry.getKey();\n            }\n        }\n        return null;\n    }\n\n    public static boolean login(String username, String password) {\n        Predicate<String> notBlank = value -> value != null && !value.trim().isEmpty();\n        return notBlank.test(username)\n                && notBlank.test(password)\n                && username.equals("admin")\n                && password.equals("admin123");\n    }\n\n    public static void main(String[] args) {\n        String text = "madam";\n        System.out.println("Reverse: " + reverse(text));\n        System.out.println("Palindrome: " + isPalindrome(text));\n        System.out.println("Anagram: " + isAnagram("listen", "silent"));\n        System.out.println("Frequency: " + characterFrequency("automation"));\n        System.out.println("Compression: " + compress("aaabbcccc"));\n    }\n}\n```\n\n**Key Concepts:**\n- String methods (substring, toCharArray, etc.)\n- HashMap for character frequency\n- StringBuilder for efficiency\n- Regular expressions\n- Two-pointer technique\n\n**Senior Focus:**\n- Sliding window algorithm\n- Character encoding/decoding\n- Performance optimization (StringBuilder vs String concatenation)\n    '},{id:"arrays-collections",title:"Arrays & Collections (13 Programs)",icon:"\ud83d\udcda",examples:[{title:"Sort Array - Built-in",code:String.raw`
import java.util.Arrays;

public class BuiltInArraySort {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 3};
        Arrays.sort(numbers);
        System.out.println(Arrays.toString(numbers));
    }
}`},{title:"Selection Sort",code:String.raw`
import java.util.Arrays;

public class SelectionSort {
    public static void main(String[] args) {
        int[] numbers = {64, 25, 12, 22, 11};

        for (int i = 0; i < numbers.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[j] < numbers[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = numbers[minIndex];
            numbers[minIndex] = numbers[i];
            numbers[i] = temp;
        }

        System.out.println(Arrays.toString(numbers));
    }
}`},{title:"Bubble Sort",code:String.raw`
import java.util.Arrays;

public class BubbleSort {
    public static void main(String[] args) {
        int[] numbers = {5, 1, 4, 2, 8};

        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = 0; j < numbers.length - i - 1; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }

        System.out.println(Arrays.toString(numbers));
    }
}`},{title:"Largest and Smallest",code:String.raw`
public class LargestSmallest {
    public static void main(String[] args) {
        int[] numbers = {10, 4, 25, 7, 1};
        int largest = numbers[0];
        int smallest = numbers[0];

        for (int number : numbers) {
            largest = Math.max(largest, number);
            smallest = Math.min(smallest, number);
        }

        System.out.println("Largest: " + largest);
        System.out.println("Smallest: " + smallest);
    }
}`},{title:"Second Largest Element",code:String.raw`
public class SecondLargestElement {
    public static void main(String[] args) {
        int[] numbers = {10, 5, 20, 8, 20};
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int number : numbers) {
            if (number > largest) {
                secondLargest = largest;
                largest = number;
            } else if (number > secondLargest && number != largest) {
                secondLargest = number;
            }
        }

        System.out.println("Second largest: " + secondLargest);
    }
}`},{title:"Remove Duplicates",code:String.raw`
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;

public class RemoveDuplicates {
    public static void main(String[] args) {
        Integer[] numbers = {1, 2, 2, 3, 4, 4, 5};
        Set<Integer> uniqueNumbers = new LinkedHashSet<>(Arrays.asList(numbers));
        System.out.println(uniqueNumbers);
    }
}`},{title:"Find Common Elements",code:String.raw`
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class CommonElements {
    public static void main(String[] args) {
        Set<Integer> first = new HashSet<>(Arrays.asList(1, 2, 3, 4));
        Set<Integer> second = new HashSet<>(Arrays.asList(3, 4, 5, 6));

        first.retainAll(second);
        System.out.println("Common elements: " + first);
    }
}`},{title:"Merge Two Arrays",code:String.raw`
import java.util.Arrays;

public class MergeTwoArrays {
    public static void main(String[] args) {
        int[] first = {1, 2, 3};
        int[] second = {4, 5, 6};
        int[] merged = Arrays.copyOf(first, first.length + second.length);

        System.arraycopy(second, 0, merged, first.length, second.length);
        System.out.println(Arrays.toString(merged));
    }
}`},{title:"Linear Search",code:String.raw`
public class LinearSearch {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40};
        int target = 30;
        int index = -1;

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                index = i;
                break;
            }
        }

        System.out.println("Index: " + index);
    }
}`},{title:"Sum Integers from Mixed Array",code:String.raw`
public class SumIntegersFromMixedArray {
    public static void main(String[] args) {
        Object[] values = {10, "Java", 20, true, 30};
        int sum = 0;

        for (Object value : values) {
            if (value instanceof Integer) {
                sum += (Integer) value;
            }
        }

        System.out.println("Sum: " + sum);
    }
}`},{title:"Count Odd and Even",code:String.raw`
public class CountOddEven {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6};
        int odd = 0;
        int even = 0;

        for (int number : numbers) {
            if (number % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }

        System.out.println("Odd: " + odd);
        System.out.println("Even: " + even);
    }
}`},{title:"Non-Repeated Elements",code:String.raw`
import java.util.LinkedHashMap;
import java.util.Map;

public class NonRepeatedElements {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 2, 3, 4, 4, 5};
        Map<Integer, Integer> countMap = new LinkedHashMap<>();

        for (int number : numbers) {
            countMap.put(number, countMap.getOrDefault(number, 0) + 1);
        }

        countMap.forEach((number, count) -> {
            if (count == 1) {
                System.out.println(number);
            }
        });
    }
}`},{title:"First and Last of ArrayList",code:String.raw`
import java.util.ArrayList;
import java.util.Arrays;

public class FirstLastArrayList {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>(Arrays.asList("Amit", "Ravi", "Neha"));
        System.out.println("First: " + names.get(0));
        System.out.println("Last: " + names.get(names.size() - 1));
    }
}`},{title:"Find Minimum and Maximum",code:String.raw`
import java.util.Arrays;

public class MinMaxUsingStreams {
    public static void main(String[] args) {
        int[] numbers = {9, 4, 7, 1, 12};
        int min = Arrays.stream(numbers).min().orElseThrow();
        int max = Arrays.stream(numbers).max().orElseThrow();

        System.out.println("Min: " + min);
        System.out.println("Max: " + max);
    }
}`},{title:"Comparable vs Comparator",code:String.raw`
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

class Student implements Comparable<Student> {
    String name;
    int marks;

    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    public int compareTo(Student other) {
        return Integer.compare(this.marks, other.marks);
    }

    public String toString() {
        return name + " - " + marks;
    }
}

public class ComparableComparatorDemo {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
                new Student("Ravi", 75),
                new Student("Amit", 90),
                new Student("Neha", 82)
        );

        students.sort(null);
        System.out.println("By marks: " + students);

        students.sort(Comparator.comparing(student -> student.name));
        System.out.println("By name: " + students);
    }
}`}],content:'\n## Arrays & Collections Category\n\nArray and collection operations including sorting, searching, duplicate removal, and element manipulation.\n\n**Programs Covered:**\n- Sort Array \u2013 Built-in\n- Selection Sort (No Built-in)\n- Bubble Sort\n- Largest and Smallest\n- Second Largest Element\n- Remove Duplicates\n- Find Common Elements\n- Merge Two Arrays\n- Linear Search\n- Sum Integers from Mixed Array\n- Count Odd and Even\n- Non-Repeated Elements\n- First and Last of ArrayList\n- Find Minimum and Maximum\n- Comparable vs Comparator\n\n### Java Code Examples\n\n```java\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.Comparator;\nimport java.util.LinkedHashSet;\nimport java.util.List;\nimport java.util.Set;\nimport java.util.stream.Collectors;\n\npublic class ArrayCollectionPrograms {\n    public static void selectionSort(int[] numbers) {\n        for (int i = 0; i < numbers.length - 1; i++) {\n            int minIndex = i;\n            for (int j = i + 1; j < numbers.length; j++) {\n                if (numbers[j] < numbers[minIndex]) {\n                    minIndex = j;\n                }\n            }\n            int temp = numbers[minIndex];\n            numbers[minIndex] = numbers[i];\n            numbers[i] = temp;\n        }\n    }\n\n    public static void bubbleSort(int[] numbers) {\n        for (int i = 0; i < numbers.length - 1; i++) {\n            for (int j = 0; j < numbers.length - i - 1; j++) {\n                if (numbers[j] > numbers[j + 1]) {\n                    int temp = numbers[j];\n                    numbers[j] = numbers[j + 1];\n                    numbers[j + 1] = temp;\n                }\n            }\n        }\n    }\n\n    public static int secondLargest(int[] numbers) {\n        int largest = Integer.MIN_VALUE;\n        int secondLargest = Integer.MIN_VALUE;\n        for (int number : numbers) {\n            if (number > largest) {\n                secondLargest = largest;\n                largest = number;\n            } else if (number > secondLargest && number != largest) {\n                secondLargest = number;\n            }\n        }\n        return secondLargest;\n    }\n\n    public static int linearSearch(int[] numbers, int target) {\n        for (int i = 0; i < numbers.length; i++) {\n            if (numbers[i] == target) {\n                return i;\n            }\n        }\n        return -1;\n    }\n\n    public static List<Integer> removeDuplicates(List<Integer> numbers) {\n        return new ArrayList<>(new LinkedHashSet<>(numbers));\n    }\n\n    public static Set<Integer> commonElements(List<Integer> first, List<Integer> second) {\n        Set<Integer> lookup = new LinkedHashSet<>(first);\n        lookup.retainAll(second);\n        return lookup;\n    }\n\n    public static int[] mergeArrays(int[] first, int[] second) {\n        int[] merged = Arrays.copyOf(first, first.length + second.length);\n        System.arraycopy(second, 0, merged, first.length, second.length);\n        return merged;\n    }\n\n    public static int sumIntegersFromMixedArray(Object[] values) {\n        return Arrays.stream(values)\n                .filter(Integer.class::isInstance)\n                .map(Integer.class::cast)\n                .mapToInt(Integer::intValue)\n                .sum();\n    }\n\n    public static List<Integer> nonRepeatedElements(List<Integer> numbers) {\n        return numbers.stream()\n                .filter(number -> numbers.indexOf(number) == numbers.lastIndexOf(number))\n                .collect(Collectors.toList());\n    }\n\n    public static void sortEmployeesByName(List<Employee> employees) {\n        employees.sort(Comparator.comparing(Employee::getName));\n    }\n\n    static class Employee implements Comparable<Employee> {\n        private final String name;\n        private final int salary;\n\n        Employee(String name, int salary) {\n            this.name = name;\n            this.salary = salary;\n        }\n\n        String getName() {\n            return name;\n        }\n\n        @Override\n        public int compareTo(Employee other) {\n            return Integer.compare(this.salary, other.salary);\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] numbers = {5, 1, 4, 2, 8};\n        bubbleSort(numbers);\n        System.out.println(Arrays.toString(numbers));\n        System.out.println("Second largest: " + secondLargest(numbers));\n        System.out.println(removeDuplicates(Arrays.asList(1, 2, 2, 3, 3, 4)));\n    }\n}\n```\n\n**Key Concepts:**\n- Sorting algorithms (bubble, selection)\n- Collections framework (List, Set, Map)\n- Search algorithms (linear, binary)\n- Time complexity (O(n log n), O(n\xb2))\n- HashSet for uniqueness\n\n**Senior Focus:**\n- Custom comparators\n- Stream API for filtering\n- Performance benchmarking\n    '},{id:"oop-core",title:"OOP Core Concepts (6 Programs)",icon:"\ud83c\udfdb\ufe0f",examples:[{title:"Encapsulation",code:String.raw`
class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        balance += amount;
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.deposit(5000);
        System.out.println("Balance: " + account.getBalance());
    }
}`},{title:"Inheritance",code:String.raw`
class Vehicle {
    void start() {
        System.out.println("Vehicle started");
    }
}

class Car extends Vehicle {
    void playMusic() {
        System.out.println("Music started");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();
        car.playMusic();
    }
}`},{title:"Polymorphism",code:String.raw`
class Payment {
    void pay(double amount) {
        System.out.println("Paying " + amount);
    }
}

class CardPayment extends Payment {
    @Override
    void pay(double amount) {
        System.out.println("Paid by card: " + amount);
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Payment payment = new CardPayment();
        payment.pay(1200);
    }
}`},{title:"Abstraction",code:String.raw`
abstract class Report {
    abstract void generate();

    void printHeader() {
        System.out.println("Report Header");
    }
}

class PdfReport extends Report {
    void generate() {
        System.out.println("Generating PDF report");
    }
}

public class AbstractionDemo {
    public static void main(String[] args) {
        Report report = new PdfReport();
        report.printHeader();
        report.generate();
    }
}`},{title:"Immutable Class",code:String.raw`
final class EmployeeId {
    private final String value;

    public EmployeeId(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

public class ImmutableClassDemo {
    public static void main(String[] args) {
        EmployeeId employeeId = new EmployeeId("EMP-101");
        System.out.println(employeeId.getValue());
    }
}`},{title:"String Pool & StringBuilder vs StringBuffer",code:String.raw`
public class StringPoolDemo {
    public static void main(String[] args) {
        String first = "Java";
        String second = "Java";
        String third = new String("Java");

        System.out.println(first == second);
        System.out.println(first == third);

        StringBuilder builder = new StringBuilder("Fast");
        builder.append(" mutable string");
        System.out.println(builder);

        StringBuffer buffer = new StringBuffer("Thread-safe");
        buffer.append(" mutable string");
        System.out.println(buffer);
    }
}`},{title:"Generics",code:String.raw`
class Box<T> {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class GenericsDemo {
    public static void main(String[] args) {
        Box<String> stringBox = new Box<>();
        stringBox.setValue("Java");
        System.out.println(stringBox.getValue());
    }
}`}],content:'\n## OOP Core Concepts\n\nObject-oriented programming fundamentals including encapsulation, inheritance, polymorphism, and abstraction.\n\n**Programs Covered:**\n- Encapsulation (getters/setters, data hiding)\n- Inheritance (single & multi-level)\n- Polymorphism (method overriding & overloading)\n- Abstraction (abstract classes & interfaces)\n- Immutable Class (final, private fields)\n- String Pool & StringBuilder vs StringBuffer\n- Generics (generic classes & methods)\n\n### Java Code Examples\n\n```java\ninterface Payable {\n    double calculatePay();\n}\n\nabstract class Employee implements Payable {\n    private final int id;\n    private final String name;\n\n    protected Employee(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    public int getId() {\n        return id;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public abstract String getRole();\n}\n\nclass FullTimeEmployee extends Employee {\n    private final double monthlySalary;\n\n    FullTimeEmployee(int id, String name, double monthlySalary) {\n        super(id, name);\n        this.monthlySalary = monthlySalary;\n    }\n\n    @Override\n    public double calculatePay() {\n        return monthlySalary;\n    }\n\n    @Override\n    public String getRole() {\n        return "Full Time Employee";\n    }\n}\n\nfinal class ImmutableAddress {\n    private final String city;\n    private final String country;\n\n    ImmutableAddress(String city, String country) {\n        this.city = city;\n        this.country = country;\n    }\n\n    public String getCity() {\n        return city;\n    }\n\n    public String getCountry() {\n        return country;\n    }\n}\n\nclass Box<T> {\n    private T value;\n\n    public void setValue(T value) {\n        this.value = value;\n    }\n\n    public T getValue() {\n        return value;\n    }\n}\n\npublic class OopCoreDemo {\n    public static void printEmployee(Employee employee) {\n        System.out.println(employee.getName() + " - " + employee.getRole());\n        System.out.println("Pay: " + employee.calculatePay());\n    }\n\n    public static void main(String[] args) {\n        Employee employee = new FullTimeEmployee(101, "Raghu", 75000);\n        printEmployee(employee);\n\n        ImmutableAddress address = new ImmutableAddress("Pune", "India");\n        System.out.println(address.getCity());\n\n        Box<String> box = new Box<>();\n        box.setValue("Generic value");\n        System.out.println(box.getValue());\n    }\n}\n```\n\n**Key Concepts:**\n- Access modifiers (public, private, protected)\n- super keyword\n- Method overriding vs overloading\n- Abstract methods & concrete classes\n- Interface contracts\n- Generic type parameters\n\n**Senior Focus:**\n- Type erasure in generics\n- POJO design patterns\n- Immutability design\n- Thread-safety implications\n    '},{id:"design-patterns",title:"Design Patterns (5 Programs)",icon:"\ud83c\udfa8",examples:[{title:"Singleton Pattern",code:String.raw`
class DriverManagerSingleton {
    private static final DriverManagerSingleton INSTANCE = new DriverManagerSingleton();

    private DriverManagerSingleton() {
    }

    public static DriverManagerSingleton getInstance() {
        return INSTANCE;
    }
}

public class SingletonDemo {
    public static void main(String[] args) {
        DriverManagerSingleton first = DriverManagerSingleton.getInstance();
        DriverManagerSingleton second = DriverManagerSingleton.getInstance();
        System.out.println(first == second);
    }
}`},{title:"Factory Pattern",code:String.raw`
interface Browser {
    void open();
}

class ChromeBrowser implements Browser {
    public void open() {
        System.out.println("Chrome opened");
    }
}

class FirefoxBrowser implements Browser {
    public void open() {
        System.out.println("Firefox opened");
    }
}

class BrowserFactory {
    static Browser createBrowser(String browserName) {
        if ("chrome".equalsIgnoreCase(browserName)) {
            return new ChromeBrowser();
        }
        if ("firefox".equalsIgnoreCase(browserName)) {
            return new FirefoxBrowser();
        }
        throw new IllegalArgumentException("Invalid browser");
    }
}

public class FactoryDemo {
    public static void main(String[] args) {
        Browser browser = BrowserFactory.createBrowser("chrome");
        browser.open();
    }
}`},{title:"Builder Pattern",code:String.raw`
class ApiRequest {
    private final String method;
    private final String endpoint;
    private final String body;

    private ApiRequest(Builder builder) {
        this.method = builder.method;
        this.endpoint = builder.endpoint;
        this.body = builder.body;
    }

    static class Builder {
        private String method;
        private String endpoint;
        private String body;

        Builder method(String method) {
            this.method = method;
            return this;
        }

        Builder endpoint(String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        Builder body(String body) {
            this.body = body;
            return this;
        }

        ApiRequest build() {
            return new ApiRequest(this);
        }
    }
}

public class BuilderDemo {
    public static void main(String[] args) {
        ApiRequest request = new ApiRequest.Builder()
                .method("POST")
                .endpoint("/users")
                .body("{name: 'Raghu'}")
                .build();

        System.out.println(request);
    }
}`},{title:"Page Object Model",code:String.raw`
class LoginPage {
    void enterUsername(String username) {
        System.out.println("Entered username: " + username);
    }

    void enterPassword(String password) {
        System.out.println("Entered password");
    }

    void clickLogin() {
        System.out.println("Clicked login button");
    }
}

public class PageObjectModelDemo {
    public static void main(String[] args) {
        LoginPage loginPage = new LoginPage();
        loginPage.enterUsername("admin");
        loginPage.enterPassword("admin123");
        loginPage.clickLogin();
    }
}`},{title:"Strategy Pattern",code:String.raw`
interface ReportStrategy {
    void generate(String message);
}

class ConsoleReport implements ReportStrategy {
    public void generate(String message) {
        System.out.println("Console: " + message);
    }
}

class HtmlReport implements ReportStrategy {
    public void generate(String message) {
        System.out.println("<html>" + message + "</html>");
    }
}

public class StrategyDemo {
    public static void main(String[] args) {
        ReportStrategy strategy = new ConsoleReport();
        strategy.generate("Test passed");
    }
}`},{title:"Observer Pattern",code:String.raw`
import java.util.ArrayList;
import java.util.List;

interface TestListener {
    void onTestFinish(String testName);
}

class TestRunner {
    private final List<TestListener> listeners = new ArrayList<>();

    void addListener(TestListener listener) {
        listeners.add(listener);
    }

    void finishTest(String testName) {
        for (TestListener listener : listeners) {
            listener.onTestFinish(testName);
        }
    }
}

public class ObserverDemo {
    public static void main(String[] args) {
        TestRunner runner = new TestRunner();
        runner.addListener(testName -> System.out.println("Finished: " + testName));
        runner.finishTest("LoginTest");
    }
}`}],content:'\n## Design Patterns\n\nIndustry-standard design patterns for scalable and maintainable code.\n\n**Programs Covered:**\n- **Singleton Pattern:** Ensures only one instance exists (WebDriver, DB connections)\n- **Factory Pattern:** Creates objects without exposing creation logic (BrowserFactory)\n- **Builder Pattern:** Constructs complex objects step by step (TestData, API requests)\n- **Page Object Model (POM):** Encapsulates page elements & actions for test automation\n- **Strategy Pattern:** Swaps algorithms at runtime (different sorting/reporting strategies)\n- **Observer Pattern:** One-to-many dependency (event listeners, test reporting)\n\n### Java Code Examples\n\n```java\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass DriverManagerSingleton {\n    private static final DriverManagerSingleton INSTANCE = new DriverManagerSingleton();\n\n    private DriverManagerSingleton() {\n    }\n\n    public static DriverManagerSingleton getInstance() {\n        return INSTANCE;\n    }\n}\n\ninterface Browser {\n    void open();\n}\n\nclass ChromeBrowser implements Browser {\n    public void open() {\n        System.out.println("Opening Chrome");\n    }\n}\n\nclass FirefoxBrowser implements Browser {\n    public void open() {\n        System.out.println("Opening Firefox");\n    }\n}\n\nclass BrowserFactory {\n    public static Browser createBrowser(String browserName) {\n        if ("chrome".equalsIgnoreCase(browserName)) {\n            return new ChromeBrowser();\n        }\n        if ("firefox".equalsIgnoreCase(browserName)) {\n            return new FirefoxBrowser();\n        }\n        throw new IllegalArgumentException("Unsupported browser: " + browserName);\n    }\n}\n\nclass ApiRequest {\n    private final String method;\n    private final String endpoint;\n    private final String body;\n\n    private ApiRequest(Builder builder) {\n        this.method = builder.method;\n        this.endpoint = builder.endpoint;\n        this.body = builder.body;\n    }\n\n    static class Builder {\n        private String method;\n        private String endpoint;\n        private String body;\n\n        Builder method(String method) {\n            this.method = method;\n            return this;\n        }\n\n        Builder endpoint(String endpoint) {\n            this.endpoint = endpoint;\n            return this;\n        }\n\n        Builder body(String body) {\n            this.body = body;\n            return this;\n        }\n\n        ApiRequest build() {\n            return new ApiRequest(this);\n        }\n    }\n}\n\ninterface ReportStrategy {\n    void generate(String message);\n}\n\nclass ConsoleReportStrategy implements ReportStrategy {\n    public void generate(String message) {\n        System.out.println("Console report: " + message);\n    }\n}\n\ninterface TestListener {\n    void onTestFinished(String testName);\n}\n\nclass TestRunner {\n    private final List<TestListener> listeners = new ArrayList<>();\n\n    void addListener(TestListener listener) {\n        listeners.add(listener);\n    }\n\n    void finishTest(String testName) {\n        listeners.forEach(listener -> listener.onTestFinished(testName));\n    }\n}\n\npublic class DesignPatternDemo {\n    public static void main(String[] args) {\n        Browser browser = BrowserFactory.createBrowser("chrome");\n        browser.open();\n\n        ApiRequest request = new ApiRequest.Builder()\n                .method("POST")\n                .endpoint("/users")\n                .body("{name: \'Raghu\'}")\n                .build();\n\n        ReportStrategy report = new ConsoleReportStrategy();\n        report.generate("Login test passed");\n\n        TestRunner runner = new TestRunner();\n        runner.addListener(testName -> System.out.println("Finished: " + testName));\n        runner.finishTest("LoginTest");\n    }\n}\n```\n\n**Key Concepts:**\n- Creational patterns (Singleton, Factory, Builder)\n- Behavioral patterns (Strategy, Observer)\n- Structural patterns (POM, Decorator)\n- Design pattern trade-offs\n\n**Senior Focus:**\n- When to use which pattern\n- Anti-patterns to avoid\n- Pattern composition\n- SDET-specific patterns (Page Object Model, Factory for WebDriver)\n    '},{id:"solid-exceptions",title:"SOLID & Exception Handling (10 Programs)",icon:"\u2699\ufe0f",examples:[{title:"Single Responsibility Principle",code:String.raw`
class Invoice {
    double amount;

    Invoice(double amount) {
        this.amount = amount;
    }
}

class InvoicePrinter {
    void print(Invoice invoice) {
        System.out.println("Invoice amount: " + invoice.amount);
    }
}

public class SrpDemo {
    public static void main(String[] args) {
        Invoice invoice = new Invoice(2500);
        new InvoicePrinter().print(invoice);
    }
}`},{title:"Open/Closed Principle",code:String.raw`
interface Discount {
    double apply(double amount);
}

class FestivalDiscount implements Discount {
    public double apply(double amount) {
        return amount * 0.90;
    }
}

public class OcpDemo {
    public static void main(String[] args) {
        Discount discount = new FestivalDiscount();
        System.out.println(discount.apply(1000));
    }
}`},{title:"Interface Segregation Principle",code:String.raw`
interface Printable {
    void print();
}

interface Scannable {
    void scan();
}

class BasicPrinter implements Printable {
    public void print() {
        System.out.println("Printing document");
    }
}

public class IspDemo {
    public static void main(String[] args) {
        Printable printer = new BasicPrinter();
        printer.print();
    }
}`},{title:"Liskov Substitution Principle",code:String.raw`
class Bird {
    void eat() {
        System.out.println("Bird is eating");
    }
}

class Sparrow extends Bird {
    void fly() {
        System.out.println("Sparrow is flying");
    }
}

public class LspDemo {
    public static void main(String[] args) {
        Bird bird = new Sparrow();
        bird.eat();
    }
}`},{title:"Dependency Inversion Principle",code:String.raw`
interface MessageSender {
    void send(String message);
}

class EmailSender implements MessageSender {
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

class NotificationService {
    private final MessageSender sender;

    NotificationService(MessageSender sender) {
        this.sender = sender;
    }

    void notifyUser(String message) {
        sender.send(message);
    }
}

public class DipDemo {
    public static void main(String[] args) {
        NotificationService service = new NotificationService(new EmailSender());
        service.notifyUser("Build completed");
    }
}`},{title:"Custom Checked Exception",code:String.raw`
class InvalidFileException extends Exception {
    InvalidFileException(String message) {
        super(message);
    }
}

public class CustomCheckedExceptionDemo {
    static void validateFile(String fileName) throws InvalidFileException {
        if (!fileName.endsWith(".txt")) {
            throw new InvalidFileException("Only .txt files are allowed");
        }
    }

    public static void main(String[] args) {
        try {
            validateFile("report.pdf");
        } catch (InvalidFileException exception) {
            System.out.println(exception.getMessage());
        }
    }
}`},{title:"Custom Unchecked Exception",code:String.raw`
class InvalidAgeException extends RuntimeException {
    InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomUncheckedExceptionDemo {
    static void validateAge(int age) {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above");
        }
    }

    public static void main(String[] args) {
        validateAge(20);
        System.out.println("Age is valid");
    }
}`},{title:"Exception Handling",code:String.raw`
public class ExceptionHandlingDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException exception) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Execution completed");
        }
    }
}`},{title:"throw vs throws",code:String.raw`
public class ThrowThrowsDemo {
    static void checkNumber(int number) throws IllegalArgumentException {
        if (number < 0) {
            throw new IllegalArgumentException("Number cannot be negative");
        }
    }

    public static void main(String[] args) {
        checkNumber(10);
        System.out.println("Valid number");
    }
}`},{title:"try-with-resources",code:String.raw`
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesDemo {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
            System.out.println(reader.readLine());
        } catch (IOException exception) {
            System.out.println("File read failed: " + exception.getMessage());
        }
    }
}`}],content:'\n## SOLID Principles & Exception Handling\n\nSOLID principles for maintainable code and robust exception handling strategies.\n\n**Programs Covered:**\n- **Single Responsibility Principle (SRP):** Each class has ONE job\n- **Open/Closed Principle (OCP):** Open for extension, closed for modification\n- **Interface Segregation Principle (ISP):** Fat interfaces split into focused ones\n- **Liskov Substitution Principle (LSP):** Subtypes are substitutable\n- **Dependency Inversion Principle (DIP):** Depend on abstractions, not concretions\n- **Custom Exceptions:** Checked & unchecked exception hierarchy\n- **Exception Handling:** try-catch-finally-throw patterns\n- **try-with-resources:** AutoCloseable for automatic resource management\n\n### Java Code Examples\n\n```java\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\ninterface NotificationSender {\n    void send(String message);\n}\n\nclass EmailSender implements NotificationSender {\n    public void send(String message) {\n        System.out.println("Email sent: " + message);\n    }\n}\n\nclass SmsSender implements NotificationSender {\n    public void send(String message) {\n        System.out.println("SMS sent: " + message);\n    }\n}\n\nclass NotificationService {\n    private final NotificationSender sender;\n\n    NotificationService(NotificationSender sender) {\n        this.sender = sender;\n    }\n\n    public void notifyUser(String message) {\n        sender.send(message);\n    }\n}\n\nclass InvalidAgeException extends RuntimeException {\n    InvalidAgeException(String message) {\n        super(message);\n    }\n}\n\nclass UserValidator {\n    public void validateAge(int age) {\n        if (age < 18) {\n            throw new InvalidAgeException("Age must be 18 or above");\n        }\n    }\n}\n\npublic class SolidExceptionDemo {\n    public static String readFirstLine(String filePath) throws IOException {\n        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {\n            return reader.readLine();\n        }\n    }\n\n    public static void main(String[] args) {\n        NotificationService service = new NotificationService(new EmailSender());\n        service.notifyUser("Build completed");\n\n        try {\n            new UserValidator().validateAge(16);\n        } catch (InvalidAgeException exception) {\n            System.out.println("Validation failed: " + exception.getMessage());\n        } finally {\n            System.out.println("Validation finished");\n        }\n    }\n}\n```\n\n**Key Concepts:**\n- Exception hierarchy (Throwable \u2192 Exception \u2192 checked/unchecked)\n- throw vs throws\n- finally block semantics\n- Resource cleanup patterns\n- Exception handling best practices\n\n**Senior Focus:**\n- Custom exception design\n- Exception propagation strategy\n- Logging vs throwing\n- Testing exception scenarios\n    '},{id:"multithreading-java8",title:"Multithreading, Java 8 & Advanced (5+ Topics)",icon:"\u26a1",examples:[{title:"Thread Class",code:String.raw`
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class ThreadClassDemo {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}`},{title:"Runnable Interface",code:String.raw`
public class RunnableDemo {
    public static void main(String[] args) {
        Runnable task = () -> System.out.println("Runnable is running");
        Thread thread = new Thread(task);
        thread.start();
    }
}`},{title:"Synchronized Keyword",code:String.raw`
class Counter {
    private int count;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizedDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        Thread first = new Thread(counter::increment);
        Thread second = new Thread(counter::increment);

        first.start();
        second.start();
        first.join();
        second.join();

        System.out.println(counter.getCount());
    }
}`},{title:"HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap",code:String.raw`
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;
import java.util.concurrent.ConcurrentHashMap;

public class MapTypesDemo {
    public static void main(String[] args) {
        Map<String, Integer> hashMap = new HashMap<>();
        Map<String, Integer> linkedHashMap = new LinkedHashMap<>();
        Map<String, Integer> treeMap = new TreeMap<>();
        Map<String, Integer> concurrentHashMap = new ConcurrentHashMap<>();

        hashMap.put("b", 2);
        linkedHashMap.put("a", 1);
        treeMap.put("c", 3);
        concurrentHashMap.put("safe", 100);

        System.out.println(hashMap);
        System.out.println(linkedHashMap);
        System.out.println(treeMap);
        System.out.println(concurrentHashMap);
    }
}`},{title:"ExecutorService and Future",code:String.raw`
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ExecutorServiceDemo {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        Future<String> result = executor.submit(() -> "Task completed");

        System.out.println(result.get());
        executor.shutdown();
    }
}`},{title:"Streams API",code:String.raw`
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamsApiDemo {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        List<Integer> evenNumbers = numbers.stream()
                .filter(number -> number % 2 == 0)
                .collect(Collectors.toList());

        System.out.println(evenNumbers);
    }
}`},{title:"Lambda Expressions",code:String.raw`
import java.util.Arrays;
import java.util.List;

public class LambdaDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Amit", "Neha");
        names.forEach(name -> System.out.println(name.toUpperCase()));
    }
}`},{title:"Optional",code:String.raw`
import java.util.Optional;

public class OptionalDemo {
    public static void main(String[] args) {
        String value = null;
        String result = Optional.ofNullable(value)
                .orElse("Default value");

        System.out.println(result);
    }
}`},{title:"Functional Interfaces",code:String.raw`
import java.util.function.Function;
import java.util.function.Predicate;

public class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        Predicate<Integer> isEven = number -> number % 2 == 0;
        Function<String, Integer> length = text -> text.length();

        System.out.println(isEven.test(10));
        System.out.println(length.apply("Java"));
    }
}`},{title:"Default and Static Interface Methods",code:String.raw`
interface TestReporter {
    default void printReport() {
        System.out.println("Default report");
    }

    static void printVersion() {
        System.out.println("Reporter v1");
    }
}

class HtmlReporter implements TestReporter {
}

public class InterfaceMethodDemo {
    public static void main(String[] args) {
        new HtmlReporter().printReport();
        TestReporter.printVersion();
    }
}`},{title:"Method References",code:String.raw`
import java.util.Arrays;
import java.util.List;

public class MethodReferenceDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Ravi", "Amit", "Neha");
        names.forEach(System.out::println);
    }
}`},{title:"List vs Set vs Queue",code:String.raw`
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Queue;
import java.util.Set;

public class CollectionTypesDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        Set<String> set = new HashSet<>();
        Queue<String> queue = new ArrayDeque<>();

        list.add("A");
        list.add("A");
        set.add("A");
        set.add("A");
        queue.add("A");

        System.out.println(list);
        System.out.println(set);
        System.out.println(queue.poll());
    }
}`},{title:"hashCode and equals Contract",code:String.raw`
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

class Employee {
    private final int id;

    Employee(int id) {
        this.id = id;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Employee)) {
            return false;
        }
        Employee other = (Employee) obj;
        return id == other.id;
    }

    public int hashCode() {
        return Objects.hash(id);
    }
}

public class EqualsHashCodeDemo {
    public static void main(String[] args) {
        Set<Employee> employees = new HashSet<>();
        employees.add(new Employee(101));
        employees.add(new Employee(101));
        System.out.println(employees.size());
    }
}`}],content:'\n## Multithreading, Java 8, & Advanced Topics\n\nModern Java features including multithreading, streams, lambdas, and concurrency utilities.\n\n**Programs Covered:**\n\n### Multithreading:\n- Thread & Runnable (3 ways to create threads)\n- Synchronized keyword (prevent race conditions)\n- Collections (HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap)\n- Thread pool with ExecutorService & Future\n\n### Java 8 Features:\n- **Streams API:** filter, map, reduce, collect operations\n- **Lambda Expressions:** functional programming syntax\n- **Optional:** null-safe value handling\n- **Functional Interfaces:** Predicate, Function, BiFunction, Consumer, Supplier\n- **Default & Static Interface Methods:** interface evolution\n- **Method References:** :: operator for concise code\n\n### Advanced Collections:\n- List vs Set vs Queue distinction\n- HashMap internal working & bucket resizing\n- hashCode() & equals() contract\n- ConcurrentHashMap for thread-safety\n\n### Java Code Examples\n\n```java\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Optional;\nimport java.util.concurrent.Callable;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.Future;\nimport java.util.function.Predicate;\nimport java.util.stream.Collectors;\n\nclass Counter {\n    private int value;\n\n    public synchronized void increment() {\n        value++;\n    }\n\n    public int getValue() {\n        return value;\n    }\n}\n\npublic class Java8AdvancedDemo {\n    public static void runnableExample() {\n        Thread thread = new Thread(() -> System.out.println("Running in thread"));\n        thread.start();\n    }\n\n    public static List<Integer> filterEvenNumbers(List<Integer> numbers) {\n        Predicate<Integer> isEven = number -> number % 2 == 0;\n        return numbers.stream()\n                .filter(isEven)\n                .collect(Collectors.toList());\n    }\n\n    public static int sumUsingStreams(List<Integer> numbers) {\n        return numbers.stream()\n                .mapToInt(Integer::intValue)\n                .sum();\n    }\n\n    public static String optionalExample(String value) {\n        return Optional.ofNullable(value)\n                .map(String::trim)\n                .filter(text -> !text.isEmpty())\n                .orElse("default");\n    }\n\n    public static void executorServiceExample() throws Exception {\n        ExecutorService executorService = Executors.newFixedThreadPool(2);\n        Callable<String> task = () -> "Task completed";\n        Future<String> result = executorService.submit(task);\n        System.out.println(result.get());\n        executorService.shutdown();\n    }\n\n    public static void concurrentMapExample() {\n        Map<String, Integer> scores = new ConcurrentHashMap<>();\n        scores.put("login", 1);\n        scores.merge("login", 1, Integer::sum);\n        System.out.println(scores);\n    }\n\n    public static void main(String[] args) throws Exception {\n        runnableExample();\n        System.out.println(filterEvenNumbers(Arrays.asList(1, 2, 3, 4, 5, 6)));\n        System.out.println(sumUsingStreams(Arrays.asList(10, 20, 30)));\n        System.out.println(optionalExample(null));\n        executorServiceExample();\n        concurrentMapExample();\n    }\n}\n```\n\n**Key Concepts:**\n- Thread lifecycle & synchronization\n- Locks & atomic operations\n- Functional programming paradigms\n- Stream pipeline optimization\n- Lazy evaluation\n\n**Senior Focus:**\n- Deadlock prevention\n- Performance tuning for concurrent systems\n- Reactive streams concepts\n- CompletableFuture for async operations\n    '}],D=[{id:"bdd-fundamentals",title:"BDD Fundamentals",icon:"\ud83e\udd1d",content:"\n## BDD - Behavior-Driven Development\n\nBehavior-Driven Development is an Agile practice where the team describes expected application behavior before implementation. It helps business, development, and QA agree on examples using plain language.\n\n**Key Principles:**\n- Write scenarios in business-readable language.\n- Use the 3 Amigos: Business Analyst, Developer, and QA.\n- Focus on behavior and business value, not implementation details.\n- Treat scenarios as living documentation.\n- Follow the red, green, refactor cycle.\n\n## BDD vs TDD vs ATDD\n\n| Aspect | TDD | BDD | ATDD |\n|--------|-----|-----|------|\n| Written by | Developers | Whole team | Testers + BA |\n| Language | Unit test code | Gherkin | Acceptance criteria |\n| Focus | Code correctness | Business behavior | User acceptance |\n| Tools | JUnit, TestNG | Cucumber, Serenity | FitNesse, Robot |\n\n## BDD Workflow\n\n- Discuss the story with BA, Dev, and QA.\n- Convert acceptance criteria into Gherkin scenarios.\n- Automate step definitions.\n- Run tests and see them fail first.\n- Implement code until tests pass.\n- Refactor while keeping behavior green.\n\n**Interview Focus:** The 3 Amigos meeting discovers missing examples and edge cases before coding starts.\n    "},{id:"cucumber-core",title:"Cucumber Core Concepts",icon:"\ud83e\udd52",content:'\n## What is Cucumber?\n\nCucumber is a BDD automation framework that reads executable specifications written in Gherkin and maps them to automation code through step definitions.\n\n**Core Components:**\n- Feature files contain Gherkin scenarios.\n- Step definitions connect plain English steps to Java methods.\n- Hooks handle setup and teardown.\n- Tags filter scenarios for selective execution.\n- Runner classes configure features, glue, plugins, and reports.\n\n## Gherkin Keywords\n\n| Keyword | Purpose |\n|---------|---------|\n| Feature | Describes the feature under test |\n| Background | Common steps before each scenario |\n| Scenario | Single test case |\n| Scenario Outline | Template for multiple test data rows |\n| Given | Preconditions |\n| When | User action or trigger |\n| Then | Expected result |\n| And / But | Additional steps |\n| Examples | Data for Scenario Outline |\n| @Tag | Scenario filtering |\n\n## Feature File Example\n\n```gherkin\nFeature: User Authentication\n  As a registered user\n  I want to log in\n  So that I can access my account\n\n  Background:\n    Given the browser is open\n    And the user navigates to "https://example.com/login"\n\n  @SmokeTest @Regression\n  Scenario: Successful login with valid credentials\n    Given the user is on the login page\n    When the user enters username "admin" and password "admin123"\n    And the user clicks the Login button\n    Then the user should be redirected to the dashboard\n    And a welcome message "Hello, Admin" should be displayed\n```\n    '},{id:"step-definitions-hooks-tags",title:"Step Definitions, Hooks & Tags",icon:"\ud83d\udd17",content:'\n## Step Definitions\n\nStep definitions are Java methods mapped to Gherkin steps with Cucumber annotations.\n\n```java\nimport io.cucumber.java.en.Given;\nimport io.cucumber.java.en.Then;\nimport io.cucumber.java.en.When;\nimport org.junit.Assert;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.chrome.ChromeDriver;\n\npublic class LoginSteps {\n    private WebDriver driver;\n\n    @Given("the browser is open")\n    public void theBrowserIsOpen() {\n        driver = new ChromeDriver();\n        driver.manage().window().maximize();\n    }\n\n    @Given("the user navigates to {string}")\n    public void navigateTo(String url) {\n        driver.get(url);\n    }\n\n    @When("the user enters username {string} and password {string}")\n    public void enterCredentials(String username, String password) {\n        driver.findElement(By.id("username")).sendKeys(username);\n        driver.findElement(By.id("password")).sendKeys(password);\n    }\n\n    @When("the user clicks the Login button")\n    public void clickLogin() {\n        driver.findElement(By.id("loginBtn")).click();\n    }\n\n    @Then("a welcome message {string} should be displayed")\n    public void verifyWelcomeMessage(String expectedMessage) {\n        String actualMessage = driver.findElement(By.id("welcomeMsg")).getText();\n        Assert.assertEquals(expectedMessage, actualMessage);\n    }\n}\n```\n\n## Hooks\n\n```java\nimport io.cucumber.java.After;\nimport io.cucumber.java.Before;\nimport io.cucumber.java.Scenario;\nimport org.openqa.selenium.OutputType;\nimport org.openqa.selenium.TakesScreenshot;\n\npublic class Hooks {\n    @Before(order = 1)\n    public void launchBrowser() {\n        DriverManager.initDriver("chrome");\n    }\n\n    @Before(value = "@SmokeTest", order = 2)\n    public void clearCookies() {\n        DriverManager.getDriver().manage().deleteAllCookies();\n    }\n\n    @After\n    public void takeScreenshotOnFailure(Scenario scenario) {\n        if (scenario.isFailed()) {\n            byte[] screenshot = ((TakesScreenshot) DriverManager.getDriver())\n                    .getScreenshotAs(OutputType.BYTES);\n            scenario.attach(screenshot, "image/png", "Failure Screenshot");\n        }\n        DriverManager.quitDriver();\n    }\n}\n```\n\n## Tag Expressions\n\n| Expression | Meaning |\n|------------|---------|\n| @SmokeTest | Run smoke scenarios |\n| @SmokeTest and @Login | Must have both tags |\n| @SmokeTest or @Regression | Has either tag |\n| not @WIP | Exclude work in progress |\n| (@SmokeTest or @Regression) and not @WIP | Combined filtering |\n\n**Interview Focus:** Lower order runs first for @Before hooks and last for @After hooks.\n    '},{id:"advanced-cucumber",title:"Advanced Cucumber",icon:"\ud83e\udde9",content:'\n## Scenario Outline\n\nScenario Outline runs the same scenario multiple times with different values from an Examples table.\n\n```gherkin\nFeature: User Login\n\n  Scenario Outline: Login with different credentials\n    Given the user is on the login page\n    When the user enters username "<username>" and password "<password>"\n    Then the login result should be "<result>"\n\n    Examples:\n      | username | password | result             |\n      | admin    | admin123 | Login Successful   |\n      | user1    | pass123  | Login Successful   |\n      | admin    | wrong    | Invalid credentials |\n```\n\n## DataTables\n\nUse DataTables when a single step needs multiple rows of structured data.\n\n```gherkin\nScenario: Register multiple users\n  When the admin creates the following users:\n    | firstName | email            | role   |\n    | John      | john@example.com | Admin  |\n    | Jane      | jane@example.com | Viewer |\n  Then all users should appear in the user list\n```\n\n```java\nimport io.cucumber.datatable.DataTable;\nimport io.cucumber.java.en.When;\nimport java.util.List;\nimport java.util.Map;\n\npublic class UserSteps {\n    @When("the admin creates the following users:")\n    public void createUsers(DataTable dataTable) {\n        List<Map<String, String>> users = dataTable.asMaps(String.class, String.class);\n\n        for (Map<String, String> user : users) {\n            String firstName = user.get("firstName");\n            String email = user.get("email");\n            String role = user.get("role");\n            userService.createUser(firstName, email, role);\n        }\n    }\n}\n```\n\n## Background vs Hooks\n\n| Topic | Background | @Before Hook |\n|-------|------------|--------------|\n| Location | Feature file | Java class |\n| Visibility | Visible in reports | Technical setup |\n| Best for | Business setup | Browser, cookies, data cleanup |\n| Execution | After @Before | Before Background |\n    '},{id:"cucumber-selenium",title:"Cucumber + Selenium",icon:"\ud83c\udf10",content:'\n## Recommended Project Structure\n\n```text\nsrc/test/java\n  runners/TestRunner.java\n  stepDefinitions/LoginSteps.java\n  hooks/Hooks.java\n  pages/LoginPage.java\n  utils/DriverManager.java\nsrc/test/resources\n  features/login.feature\n```\n\n## Thread-Safe DriverManager\n\n```java\nimport io.github.bonigarcia.wdm.WebDriverManager;\nimport java.time.Duration;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.chrome.ChromeDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\n\npublic final class DriverManager {\n    private static final ThreadLocal<WebDriver> DRIVER = new ThreadLocal<>();\n\n    private DriverManager() {\n    }\n\n    public static WebDriver getDriver() {\n        return DRIVER.get();\n    }\n\n    public static void initDriver(String browser) {\n        WebDriver driver;\n\n        switch (browser.toLowerCase()) {\n            case "chrome":\n                WebDriverManager.chromedriver().setup();\n                driver = new ChromeDriver();\n                break;\n            case "firefox":\n                WebDriverManager.firefoxdriver().setup();\n                driver = new FirefoxDriver();\n                break;\n            default:\n                throw new IllegalArgumentException("Unsupported browser: " + browser);\n        }\n\n        driver.manage().window().maximize();\n        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));\n        DRIVER.set(driver);\n    }\n\n    public static void quitDriver() {\n        WebDriver driver = DRIVER.get();\n        if (driver != null) {\n            driver.quit();\n            DRIVER.remove();\n        }\n    }\n}\n```\n\n## Page Object Model\n\n```java\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.support.FindBy;\nimport org.openqa.selenium.support.PageFactory;\n\npublic class LoginPage {\n    @FindBy(id = "username")\n    private WebElement usernameField;\n\n    @FindBy(id = "password")\n    private WebElement passwordField;\n\n    @FindBy(id = "loginBtn")\n    private WebElement loginButton;\n\n    @FindBy(id = "welcomeMsg")\n    private WebElement welcomeMessage;\n\n    public LoginPage(WebDriver driver) {\n        PageFactory.initElements(driver, this);\n    }\n\n    public void login(String username, String password) {\n        usernameField.clear();\n        usernameField.sendKeys(username);\n        passwordField.clear();\n        passwordField.sendKeys(password);\n        loginButton.click();\n    }\n\n    public String getWelcomeMessage() {\n        return welcomeMessage.getText();\n    }\n}\n```\n    '},{id:"runner-reports",title:"Runner, Options & Reports",icon:"\ud83d\udcca",content:'\n## TestRunner with CucumberOptions\n\n```java\nimport io.cucumber.junit.Cucumber;\nimport io.cucumber.junit.CucumberOptions;\nimport org.junit.runner.RunWith;\n\n@RunWith(Cucumber.class)\n@CucumberOptions(\n        features = "src/test/resources/features",\n        glue = {"stepDefinitions", "hooks"},\n        plugin = {\n                "pretty",\n                "html:target/cucumber-reports/report.html",\n                "json:target/cucumber-reports/report.json",\n                "junit:target/cucumber-reports/report.xml",\n                "rerun:target/failedTests.txt"\n        },\n        tags = "@SmokeTest and not @WIP",\n        dryRun = false,\n        monochrome = true,\n        publish = false\n)\npublic class TestRunner {\n}\n```\n\n## Important CucumberOptions\n\n| Option | Purpose |\n|--------|---------|\n| features | Path to feature files |\n| glue | Packages containing step definitions and hooks |\n| tags | Filter scenarios |\n| plugin | Configure reports |\n| dryRun | Validate step mappings without running browser steps |\n| monochrome | Cleaner console output |\n| publish | Publish report to Cucumber service |\n\n## Report Plugins\n\n- pretty: readable console output.\n- html: local HTML report.\n- json: machine-readable output for report integrations.\n- junit: XML output for Jenkins and CI.\n- rerun: stores failed scenario paths for re-execution.\n- timeline: visual timeline for parallel execution.\n\n**Interview Focus:** `dryRun = true` is used to verify undefined or missing step definitions without executing the test flow.\n    '},{id:"maven-commands",title:"Maven Commands",icon:"\u2328\ufe0f",content:'\n## Common Commands\n\n```bash\nmvn test\nmvn clean test\nmvn test -Dcucumber.filter.tags="@SmokeTest"\nmvn test -Dcucumber.filter.tags="@Smoke and @Login"\nmvn test -Dcucumber.filter.tags="@Smoke or @Regression"\nmvn test -Dcucumber.filter.tags="not @WIP"\nmvn test -Dcucumber.features="src/test/resources/features/Login.feature"\nmvn test -Dcucumber.plugin="html:target/report.html"\nmvn test -Dcucumber.plugin="json:target/report.json"\nmvn clean install -DskipTests\nmvn test -Dparallel=classes -DthreadCount=4\nmvn test -Dcucumber.features="@target/failedTests.txt"\n```\n\n## Surefire Parallel Execution\n\n```xml\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>3.0.0</version>\n    <configuration>\n        <parallel>classes</parallel>\n        <threadCount>4</threadCount>\n        <perCoreThreadCount>true</perCoreThreadCount>\n    </configuration>\n</plugin>\n```\n\n**Senior Tip:** For parallel browser runs, use ThreadLocal WebDriver and avoid shared mutable state in step definition classes.\n    '},{id:"serenity-introduction",title:"Serenity BDD Introduction",icon:"\ud83d\udcdd",content:"\n## What is Serenity BDD?\n\nSerenity BDD enhances Cucumber and JUnit tests with rich living documentation, automatic screenshots, managed WebDriver, step instrumentation, and detailed reports.\n\n## Serenity vs Plain Cucumber\n\n| Feature | Plain Cucumber | Serenity BDD |\n|---------|----------------|--------------|\n| Reports | Basic HTML/JSON | Rich narrative HTML |\n| Screenshots | Manual hooks | Automatic by setting |\n| Living docs | Limited | Full feature coverage |\n| Step reuse | Manual | @Step methods |\n| WebDriver | Manual management | @Managed support |\n| Page objects | Standard POM | PageObject + WebElementFacade |\n\n## Key Serenity Concepts\n\n- @Steps injects and instruments a Steps class.\n- @Step records a reusable business action in the report.\n- PageObject provides built-in driver, waits, and helper methods.\n- @Managed lets Serenity create and clean up WebDriver.\n- CucumberWithSerenity runs Cucumber with Serenity reporting.\n- Serenity reports show steps, screenshots, requirements, and coverage.\n\n**Interview Focus:** Serenity does not replace Cucumber. It wraps and enhances Cucumber with reporting, WebDriver management, and living documentation.\n    "},{id:"serenity-cucumber-integration",title:"Serenity + Cucumber Integration",icon:"\ud83e\uddea",content:'\n## Maven Dependencies\n\n```xml\n<dependency>\n    <groupId>net.serenity-bdd</groupId>\n    <artifactId>serenity-core</artifactId>\n    <version>3.6.12</version>\n</dependency>\n<dependency>\n    <groupId>net.serenity-bdd</groupId>\n    <artifactId>serenity-cucumber</artifactId>\n    <version>3.6.12</version>\n</dependency>\n<dependency>\n    <groupId>junit</groupId>\n    <artifactId>junit</artifactId>\n    <version>4.13.2</version>\n    <scope>test</scope>\n</dependency>\n```\n\n## Serenity Runner\n\n```java\nimport io.cucumber.junit.CucumberOptions;\nimport net.serenitybdd.cucumber.CucumberWithSerenity;\nimport org.junit.runner.RunWith;\n\n@RunWith(CucumberWithSerenity.class)\n@CucumberOptions(\n        features = "src/test/resources/features",\n        glue = {"stepDefinitions"},\n        plugin = {"pretty"},\n        tags = "@SmokeTest"\n)\npublic class CucumberTestSuite {\n}\n```\n\n## Serenity Steps Class\n\n```java\nimport net.thucydides.core.annotations.Step;\n\npublic class LoginActions {\n    LoginPage loginPage;\n\n    @Step("Open the login page")\n    public void openLoginPage() {\n        loginPage.open();\n    }\n\n    @Step("Enter username {0} and password {1}")\n    public void enterCredentials(String username, String password) {\n        loginPage.enterUsername(username);\n        loginPage.enterPassword(password);\n    }\n\n    @Step("Verify welcome message is {0}")\n    public void verifyWelcomeMessage(String expectedMessage) {\n        loginPage.welcomeMessage().shouldContainText(expectedMessage);\n    }\n}\n```\n\n## Step Definition Using @Steps\n\n```java\nimport io.cucumber.java.en.Given;\nimport io.cucumber.java.en.Then;\nimport io.cucumber.java.en.When;\nimport net.thucydides.core.annotations.Steps;\n\npublic class LoginStepDefinitions {\n    @Steps\n    LoginActions loginActions;\n\n    @Given("the user is on the login page")\n    public void userIsOnLoginPage() {\n        loginActions.openLoginPage();\n    }\n\n    @When("the user logs in with {string} and {string}")\n    public void login(String username, String password) {\n        loginActions.enterCredentials(username, password);\n    }\n\n    @Then("the welcome message {string} should be displayed")\n    public void verifyWelcomeMessage(String message) {\n        loginActions.verifyWelcomeMessage(message);\n    }\n}\n```\n    '},{id:"serenity-config-qa",title:"Serenity Config & Interview Q&A",icon:"\u2705",content:'\n## serenity.properties\n\n```properties\nwebdriver.driver=chrome\nwebdriver.base.url=https://example.com\nserenity.take.screenshots=AFTER_EACH_STEP\nserenity.project.name=My BDD Project\nserenity.report.encoding=UTF-8\nhome.page=https://example.com\n```\n\n## Screenshot Options\n\n| Option | Meaning |\n|--------|---------|\n| FOR_EACH_ACTION | Screenshot after every WebDriver action |\n| BEFORE_AND_AFTER_EACH_STEP | Before and after each Serenity step |\n| AFTER_EACH_STEP | Balanced option for reporting |\n| FOR_FAILURES | Screenshots only on failure |\n| DISABLED | No screenshots |\n\n## Running Serenity Reports\n\n```bash\nmvn clean verify\nmvn clean verify -Dcucumber.filter.tags="@SmokeTest"\nmvn serenity:aggregate\n```\n\nReports are generated at `target/site/serenity/index.html`.\n\n## Most Asked Questions\n\n| Question | Short Answer |\n|----------|--------------|\n| What is @Steps? | Injects and instruments a Serenity Steps class |\n| What is @Step? | Records a method as a reportable business step |\n| Where are reports generated? | target/site/serenity/index.html |\n| Why Serenity over Cucumber? | Better reports, screenshots, managed driver, living documentation |\n| Background vs @Before? | Background is business-visible; @Before is technical setup |\n| Scenario Outline vs DataTable? | Outline repeats scenario; DataTable passes rows into one step |\n| Missing step definition? | Cucumber marks it undefined and suggests a snippet |\n| Parallel execution? | Use Maven parallel settings and thread-safe driver management |\n    '}],M=[{id:"installation-setup",title:"Installation & Project Setup",icon:"\u2699\ufe0f",content:"\n## Prerequisites\n\n- Node.js LTS\n- VS Code with Playwright Test extension\n- npm or yarn\n\n## Install Playwright\n\n```bash\nnpm init playwright@latest\nnpm install -D @playwright/test\nnpx playwright install\nnpx playwright install chromium\nnpx playwright install --with-deps\n```\n\n## First Test\n\n```javascript\nconst { test, expect } = require('@playwright/test');\n\ntest('has title', async ({ page }) => {\n    await page.goto('https://playwright.dev/');\n    await expect(page).toHaveTitle(/Playwright/);\n});\n\ntest('get started link opens installation page', async ({ page }) => {\n    await page.goto('https://playwright.dev/');\n    await page.getByRole('link', { name: 'Get started' }).click();\n    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();\n});\n```\n    "},{id:"cli-commands",title:"Playwright CLI Commands",icon:"\u2328\ufe0f",content:'\n## Most Used Commands\n\n```bash\nnpx playwright test\nnpx playwright test tests/login.spec.js\nnpx playwright test --headed\nnpx playwright test --browser=firefox\nnpx playwright test --browser=all\nnpx playwright test -g "login test"\nnpx playwright test --project=chromium\nnpx playwright test --workers=4\nnpx playwright test --retries=2\nnpx playwright test --reporter=html\nnpx playwright show-report\nnpx playwright codegen https://site.com\nnpx playwright codegen --device="iPhone 13"\nnpx playwright debug tests/login.spec.js\nnpx playwright test --ui\nnpx playwright test --trace on\nnpx playwright show-trace trace.zip\nnpx playwright test --timeout=60000\nnpx playwright test --update-snapshots\nPWDEBUG=1 npx playwright test\nPWDEBUG=console npx playwright test\n```\n\n**Interview Focus:** `--ui`, `debug`, traces, headed mode, retries, workers, and grep are common real-project commands.\n    '},{id:"config-structure",title:"Project Structure & Config",icon:"\ud83d\uddc2\ufe0f",content:"\n## Recommended Structure\n\n```text\nmy-project/\n  tests/\n    login.spec.js\n    dashboard.spec.js\n  pages/\n    LoginPage.js\n  test-data/\n    users.json\n  playwright.config.js\n  package.json\n```\n\n## playwright.config.js\n\n```javascript\nconst { defineConfig, devices } = require('@playwright/test');\n\nmodule.exports = defineConfig({\n    testDir: './tests',\n    fullyParallel: true,\n    forbidOnly: Boolean(process.env.CI),\n    retries: process.env.CI ? 2 : 0,\n    workers: process.env.CI ? 1 : undefined,\n    timeout: 30_000,\n    expect: {\n        timeout: 5000,\n    },\n    reporter: [\n        ['html', { outputFolder: 'playwright-report' }],\n        ['list'],\n    ],\n    use: {\n        baseURL: 'https://myapp.com',\n        headless: true,\n        viewport: { width: 1280, height: 720 },\n        ignoreHTTPSErrors: true,\n        screenshot: 'only-on-failure',\n        video: 'retain-on-failure',\n        trace: 'retain-on-failure',\n        actionTimeout: 10_000,\n        navigationTimeout: 15_000,\n    },\n    projects: [\n        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },\n        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },\n        { name: 'webkit', use: { ...devices['Desktop Safari'] } },\n        { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },\n        { name: 'Mobile Safari', use: { ...devices['iPhone 13'] } },\n    ],\n});\n```\n    "},{id:"locators-selectors",title:"Locators & Selectors",icon:"\ud83c\udfaf",content:"\n## Locator Priority\n\nPlaywright recommends user-facing locators first because they are closer to how users and assistive technology interact with the app.\n\n```javascript\npage.getByRole('button', { name: 'Submit' });\npage.getByRole('textbox', { name: 'Email' });\npage.getByRole('link', { name: 'Home' });\npage.getByRole('heading', { name: 'Dashboard', level: 1 });\npage.getByLabel('Email Address');\npage.getByPlaceholder('Enter email');\npage.getByText('Welcome back!');\npage.getByAltText('Profile picture');\npage.getByTitle('Close dialog');\npage.getByTestId('submit-btn');\n```\n\n## CSS and XPath\n\n```javascript\npage.locator('#username');\npage.locator('.btn-primary');\npage.locator('input[type=\"email\"]');\npage.locator('form > div > input');\npage.locator('li:nth-child(2)');\npage.locator('input:visible');\npage.locator('[data-cy=\"login-btn\"]');\n\npage.locator('//button[text()=\"Login\"]');\npage.locator('//input[@name=\"username\"]');\npage.locator('xpath=//div[@class=\"error\"]');\n```\n\n## Chaining and Filtering\n\n```javascript\npage.locator('li').filter({ hasText: 'Laptop' });\npage.locator('tr').filter({ has: page.locator('td.active') });\npage.locator('li.product').nth(2);\npage.locator('li.product').first();\npage.locator('li.product').last();\n\nconst count = await page.locator('li').count();\nconst items = await page.locator('li').all();\n\nfor (const item of items) {\n    console.log(await item.textContent());\n}\n```\n    "},{id:"user-actions",title:"User Actions",icon:"\ud83d\uddb1\ufe0f",content:"\n## Navigation, Clicks, and Input\n\n```javascript\nawait page.goto('https://example.com');\nawait page.goto('/dashboard');\nawait page.goBack();\nawait page.goForward();\nawait page.reload();\n\nawait page.getByRole('button').click();\nawait page.getByRole('button').dblclick();\nawait page.locator('#menu').click({ button: 'right' });\nawait page.locator('#item').click({ modifiers: ['Shift'] });\nawait page.locator('#btn').hover();\nawait page.locator('#btn').focus();\n\nawait page.getByLabel('Email').fill('user@example.com');\nawait page.getByLabel('Email').clear();\nawait page.getByLabel('Search').type('laptop', { delay: 100 });\nawait page.getByLabel('Pin').pressSequentially('1234');\n```\n\n## Keyboard, Selects, Checkbox, Drag and Scroll\n\n```javascript\nawait page.keyboard.press('Enter');\nawait page.keyboard.press('Tab');\nawait page.keyboard.press('Control+A');\nawait page.keyboard.type('Hello World');\n\nawait page.getByLabel('Country').selectOption('India');\nawait page.getByLabel('Country').selectOption({ label: 'India' });\nawait page.getByLabel('Country').selectOption({ index: 2 });\nawait page.locator('#multi').selectOption(['red', 'blue']);\n\nawait page.getByLabel('Terms').check();\nawait page.getByLabel('Terms').uncheck();\nawait page.locator('#source').dragTo(page.locator('#target'));\nawait page.locator('#element').scrollIntoViewIfNeeded();\nawait page.mouse.wheel(0, 500);\n```\n    "},{id:"assertions",title:"Assertions",icon:"\u2705",content:"\n## Auto-Retry Assertions\n\nAlways prefer async `await expect` assertions. They auto-retry until timeout.\n\n```javascript\nconst { expect } = require('@playwright/test');\n\nawait expect(page).toHaveTitle('My App');\nawait expect(page).toHaveTitle(/Dashboard/);\nawait expect(page).toHaveURL(/\\/dashboard/);\n\nawait expect(locator).toBeVisible();\nawait expect(locator).toBeHidden();\nawait expect(locator).toBeEnabled();\nawait expect(locator).toBeDisabled();\nawait expect(locator).toBeChecked();\nawait expect(locator).not.toBeChecked();\nawait expect(locator).toBeEditable();\nawait expect(locator).toBeFocused();\n\nawait expect(locator).toHaveText('Welcome!');\nawait expect(locator).toHaveText(/Welcome/);\nawait expect(locator).toContainText('Error');\nawait expect(locator).toHaveValue('john@mail.com');\nawait expect(locator).toHaveAttribute('href', '/home');\nawait expect(locator).toHaveClass(/active/);\nawait expect(page.locator('li')).toHaveCount(5);\n```\n\n## Soft Assertions and Polling\n\n```javascript\nawait expect.soft(page).toHaveTitle('App');\nawait expect.soft(locator).toBeVisible();\n\nawait expect(locator, 'Button should be enabled').toBeEnabled();\n\nawait expect.poll(async () => {\n    return page.locator('li').count();\n}, {\n    timeout: 10000,\n}).toBe(10);\n```\n    "},{id:"waits-timeouts",title:"Waits & Timeouts",icon:"\u23f1\ufe0f",content:"\n## Prefer Auto-Waiting\n\nPlaywright actions auto-wait for elements to be actionable. Avoid hard waits in real tests.\n\n```javascript\nawait page.getByRole('button').click();\n\nawait page.locator('#loading').waitFor({ state: 'hidden' });\nawait page.locator('#result').waitFor({ state: 'visible' });\nawait page.locator('#item').waitFor({ state: 'attached' });\nawait page.locator('#item').waitFor({ state: 'detached' });\n\nawait page.waitForURL('**/dashboard');\nawait page.waitForURL(/profile/);\n```\n\n## Network and Custom Waits\n\n```javascript\nconst [response] = await Promise.all([\n    page.waitForResponse('**/api/users'),\n    page.getByRole('button', { name: 'Load' }).click(),\n]);\n\nconsole.log(await response.json());\n\nawait page.waitForLoadState('domcontentloaded');\nawait page.waitForLoadState('load');\nawait page.waitForFunction(() => window.isAppReady === true);\n\ntest.setTimeout(60_000);\nawait page.locator('#slow').click({ timeout: 20000 });\n```\n\n**Interview Focus:** `page.waitForTimeout()` is useful for debugging, but it should not be used as a production test wait.\n    "},{id:"screenshots-videos-traces",title:"Screenshots, Videos & Traces",icon:"\ud83d\udcf8",content:"\n## Screenshots and Visual Checks\n\n```javascript\nawait page.screenshot({\n    path: 'screenshots/full.png',\n    fullPage: true,\n});\n\nawait page.locator('.chart').screenshot({\n    path: 'chart.png',\n});\n\nconst buffer = await page.screenshot();\ntest.info().attach('screenshot', {\n    body: buffer,\n    contentType: 'image/png',\n});\n\nawait expect(page).toHaveScreenshot('home-page.png');\nawait expect(page.locator('.hero')).toHaveScreenshot('hero.png', {\n    maxDiffPixels: 100,\n    threshold: 0.2,\n});\n```\n\n## Videos and Traces\n\n```javascript\n// playwright.config.js\nuse: {\n    video: 'retain-on-failure',\n    trace: 'on-first-retry',\n}\n\nconst videoPath = await page.video().path();\n\nawait context.tracing.start({\n    screenshots: true,\n    snapshots: true,\n});\n\nawait context.tracing.stop({\n    path: 'trace.zip',\n});\n```\n\n```bash\nnpx playwright show-trace trace.zip\n```\n    "},{id:"hooks-fixtures",title:"Hooks, Tags & Fixtures",icon:"\ud83e\uddf0",content:"\n## Hooks and Annotations\n\n```javascript\nconst { test, expect } = require('@playwright/test');\n\ntest.beforeAll(async () => {\n    console.log('Starting test suite');\n});\n\ntest.beforeEach(async ({ page }) => {\n    await page.goto('/login');\n    await page.getByLabel('Email').fill('user@test.com');\n    await page.getByLabel('Password').fill('password123');\n    await page.getByRole('button', { name: 'Login' }).click();\n});\n\ntest.afterEach(async ({ page }) => {\n    await page.screenshot({ path: 'after-each.png' });\n});\n\ntest('normal test', async ({ page }) => {\n    await expect(page).toHaveURL(/dashboard/);\n});\n\ntest.skip('skip this test', async () => {});\ntest.fixme('broken test - fix later', async () => {});\ntest.slow('give 3x timeout', async () => {});\n```\n\n## Custom Fixture\n\n```javascript\nconst { test: base } = require('@playwright/test');\nconst { LoginPage } = require('./pages/LoginPage');\n\nexports.test = base.extend({\n    loginPage: async ({ page }, use) => {\n        await use(new LoginPage(page));\n    },\n\n    loggedInPage: async ({ page }, use) => {\n        await page.goto('/login');\n        await page.getByLabel('Email').fill('admin@test.com');\n        await page.getByLabel('Password').fill('admin123');\n        await page.getByRole('button', { name: 'Login' }).click();\n        await page.waitForURL('**/dashboard');\n        await use(page);\n        await page.goto('/logout');\n    },\n});\n```\n    "},{id:"page-object-model",title:"Page Object Model",icon:"\ud83c\udfd7\ufe0f",content:"\n## LoginPage.js\n\n```javascript\nclass LoginPage {\n    constructor(page) {\n        this.page = page;\n        this.emailInput = page.getByLabel('Email');\n        this.passwordInput = page.getByLabel('Password');\n        this.loginButton = page.getByRole('button', { name: 'Login' });\n        this.errorMessage = page.locator('.error-message');\n    }\n\n    async goto() {\n        await this.page.goto('/login');\n    }\n\n    async login(email, password) {\n        await this.emailInput.fill(email);\n        await this.passwordInput.fill(password);\n        await this.loginButton.click();\n    }\n\n    async loginAndExpectDashboard(email, password) {\n        await this.login(email, password);\n        await this.page.waitForURL('**/dashboard');\n    }\n\n    async getErrorMessage() {\n        return this.errorMessage.textContent();\n    }\n}\n\nmodule.exports = { LoginPage };\n```\n\n## Using POM in Tests\n\n```javascript\nconst { test, expect } = require('@playwright/test');\nconst { LoginPage } = require('../pages/LoginPage');\n\ntest.describe('Login Tests', () => {\n    let loginPage;\n\n    test.beforeEach(async ({ page }) => {\n        loginPage = new LoginPage(page);\n        await loginPage.goto();\n    });\n\n    test('valid login redirects to dashboard', async ({ page }) => {\n        await loginPage.loginAndExpectDashboard('user@test.com', 'pass123');\n        await expect(page).toHaveURL(/dashboard/);\n    });\n\n    test('invalid login shows error', async () => {\n        await loginPage.login('wrong@email.com', 'wrong');\n        await expect(loginPage.errorMessage).toContainText('Invalid credentials');\n    });\n});\n```\n    "},{id:"dialogs-frames-shadow",title:"Dialogs, Frames & Shadow DOM",icon:"\ud83e\ude9f",content:"\n## Dialogs\n\n```javascript\npage.on('dialog', dialog => dialog.accept());\nawait page.getByRole('button', { name: 'Delete' }).click();\n\npage.on('dialog', dialog => dialog.dismiss());\n\npage.once('dialog', async dialog => {\n    expect(dialog.message()).toBe('Are you sure?');\n    await dialog.accept();\n});\n\npage.on('dialog', async dialog => {\n    console.log('Message:', dialog.message());\n    await dialog.accept('My Input Value');\n});\n```\n\n## iFrames\n\n```javascript\nconst frame = page.frameLocator('#payment-iframe');\n\nawait frame.getByLabel('Card Number').fill('4111111111111111');\nawait frame.getByRole('button', { name: 'Pay' }).click();\n\nconst innerFrame = page.frameLocator('#outer').frameLocator('#inner');\nawait innerFrame.getByLabel('CVV').fill('123');\n\nconst myFrame = page.frame({ name: 'myframe' });\nawait myFrame.click('#submit');\n```\n\n## Shadow DOM\n\n```javascript\nawait page.locator('my-component').getByRole('button').click();\nawait page.locator('#host >> .inner-button').click();\n```\n    "},{id:"file-upload-download",title:"File Upload & Download",icon:"\ud83d\udcce",content:"\n## File Upload\n\n```javascript\nawait page.getByLabel('Upload').setInputFiles('tests/files/doc.pdf');\n\nawait page.getByLabel('Upload').setInputFiles([\n    'tests/files/doc1.pdf',\n    'tests/files/doc2.pdf',\n]);\n\nawait page.getByLabel('Upload').setInputFiles([]);\n\nconst fileChooserPromise = page.waitForEvent('filechooser');\nawait page.getByRole('button', { name: 'Choose File' }).click();\nconst fileChooser = await fileChooserPromise;\nawait fileChooser.setFiles('tests/files/image.jpg');\n```\n\n## File Download\n\n```javascript\nconst downloadPromise = page.waitForEvent('download');\nawait page.getByRole('button', { name: 'Export CSV' }).click();\nconst download = await downloadPromise;\n\nconsole.log('File name:', download.suggestedFilename());\n\nawait download.saveAs('./downloads/' + download.suggestedFilename());\n\nconst stream = await download.createReadStream();\n```\n    "},{id:"api-testing",title:"API Testing",icon:"\ud83d\udd0c",content:"\n## API Tests with request Fixture\n\n```javascript\nconst { test, expect } = require('@playwright/test');\n\ntest('GET users returns 200', async ({ request }) => {\n    const response = await request.get('https://reqres.in/api/users?page=1');\n\n    expect(response.status()).toBe(200);\n    const body = await response.json();\n    expect(body.data).toHaveLength(6);\n});\n\ntest('POST creates a user', async ({ request }) => {\n    const response = await request.post('https://reqres.in/api/users', {\n        data: {\n            name: 'John',\n            job: 'Developer',\n        },\n    });\n\n    expect(response.status()).toBe(201);\n    expect((await response.json()).name).toBe('John');\n});\n\ntest('DELETE user', async ({ request }) => {\n    const response = await request.delete('https://reqres.in/api/users/2');\n    expect(response.status()).toBe(204);\n});\n```\n\n## Reusable API Context\n\n```javascript\ntest('API context with base URL', async ({ playwright }) => {\n    const apiContext = await playwright.request.newContext({\n        baseURL: 'https://api.example.com',\n        extraHTTPHeaders: {\n            Accept: 'application/json',\n        },\n    });\n\n    const response = await apiContext.get('/products');\n    expect(response.ok()).toBeTruthy();\n    await apiContext.dispose();\n});\n```\n    "},{id:"network-mocking",title:"Network Interception & Mocking",icon:"\ud83d\udedc",content:"\n## Intercept, Mock, and Inspect Requests\n\n```javascript\nawait page.route('**/*.{png,jpg,gif}', route => route.abort());\nawait page.route('**/ads/**', route => route.abort());\n\nawait page.route('**/api/users', route => {\n    route.fulfill({\n        status: 200,\n        contentType: 'application/json',\n        body: JSON.stringify([\n            { id: 1, name: 'Alice', role: 'Admin' },\n            { id: 2, name: 'Bob', role: 'User' },\n        ]),\n    });\n});\n\nawait page.goto('/users');\n```\n\n## Modify, Log, and Wait\n\n```javascript\nawait page.route('**/api/data', route => {\n    route.continue({\n        headers: {\n            ...route.request().headers(),\n            'X-Custom-Header': 'playwright',\n        },\n    });\n});\n\npage.on('request', request => {\n    console.log('>>', request.method(), request.url());\n});\n\npage.on('response', response => {\n    console.log('<<', response.status(), response.url());\n});\n\nconst [request] = await Promise.all([\n    page.waitForRequest('**/api/login'),\n    page.getByRole('button', { name: 'Login' }).click(),\n]);\n\nconsole.log('Request payload:', request.postDataJSON());\n\nawait page.unroute('**/api/users');\n```\n    "},{id:"multi-tab-browser",title:"Multi-Tab & Multi-Browser",icon:"\ud83e\udded",content:"\n## Multi-Tab Testing\n\n```javascript\nconst newPage = await context.newPage();\nawait newPage.goto('https://example.com');\n\nconst [newTab] = await Promise.all([\n    context.waitForEvent('page'),\n    page.getByRole('link', { name: 'Open in new tab' }).click(),\n]);\n\nawait newTab.waitForLoadState();\nawait expect(newTab).toHaveURL(/terms/);\nawait newTab.close();\n\nconst pages = context.pages();\nawait pages[0].bringToFront();\nawait pages[1].bringToFront();\n```\n\n## Multiple Browser Contexts\n\n```javascript\ntest('two users in same test', async ({ browser }) => {\n    const adminContext = await browser.newContext();\n    const userContext = await browser.newContext();\n\n    const adminPage = await adminContext.newPage();\n    const userPage = await userContext.newPage();\n\n    await adminPage.goto('/admin');\n    await userPage.goto('/portal');\n\n    await adminPage.getByRole('button', { name: 'Send Message' }).click();\n    await expect(userPage.locator('.inbox')).toContainText('1 new message');\n\n    await adminContext.close();\n    await userContext.close();\n});\n```\n    "},{id:"authentication-storage",title:"Authentication & Storage State",icon:"\ud83d\udd10",content:"\n## Save Login State\n\n```javascript\nconst { test: setup } = require('@playwright/test');\n\nsetup('authenticate', async ({ page }) => {\n    await page.goto('/login');\n    await page.getByLabel('Email').fill('admin@test.com');\n    await page.getByLabel('Password').fill('Password@123');\n    await page.getByRole('button', { name: 'Login' }).click();\n    await page.waitForURL('**/dashboard');\n\n    await page.context().storageState({\n        path: '.auth/admin.json',\n    });\n});\n```\n\n## Reuse Storage State\n\n```javascript\nprojects: [\n    {\n        name: 'setup',\n        testMatch: '**/auth.setup.js',\n    },\n    {\n        name: 'chromium',\n        dependencies: ['setup'],\n        use: {\n            storageState: '.auth/admin.json',\n        },\n    },\n]\n\ntest.use({ storageState: '.auth/user.json' });\n```\n\n## Cookies\n\n```javascript\nawait context.addCookies([{\n    name: 'session',\n    value: 'abc123',\n    domain: 'example.com',\n    path: '/',\n}]);\n\nconst cookies = await context.cookies();\nawait context.clearCookies();\n```\n    "},{id:"data-driven-tests",title:"Parameterization & Data-Driven Tests",icon:"\ud83d\udcda",content:"\n## Inline Data\n\n```javascript\nconst credentials = [\n    { email: 'admin@test.com', password: 'Admin@123', role: 'Admin' },\n    { email: 'user@test.com', password: 'User@123', role: 'User' },\n    { email: 'viewer@test.com', password: 'View@123', role: 'Viewer' },\n];\n\nfor (const credential of credentials) {\n    test('Login as ' + credential.role, async ({ page }) => {\n        await page.goto('/login');\n        await page.getByLabel('Email').fill(credential.email);\n        await page.getByLabel('Password').fill(credential.password);\n        await page.getByRole('button', { name: 'Login' }).click();\n        await expect(page.getByText('Welcome, ' + credential.role)).toBeVisible();\n    });\n}\n```\n\n## From JSON and Test Case Matrix\n\n```javascript\nconst users = require('../test-data/users.json');\n\nfor (const user of users) {\n    test('Test user ' + user.id, async ({ page }) => {\n        await page.goto('/users/' + user.id);\n        await expect(page.getByText(user.name)).toBeVisible();\n    });\n}\n\nconst testCases = [\n    ['empty email', '', 'pass123', 'Email is required'],\n    ['empty password', 'user@test.com', '', 'Password is required'],\n    ['invalid combo', 'x@x.com', 'wrong', 'Invalid credentials'],\n];\n\ntestCases.forEach(([name, email, password, error]) => {\n    test('Login validation: ' + name, async ({ page }) => {\n        await page.goto('/login');\n        await page.getByLabel('Email').fill(email);\n        await page.getByLabel('Password').fill(password);\n        await page.getByRole('button', { name: 'Login' }).click();\n        await expect(page.locator('.error')).toContainText(error);\n    });\n});\n```\n    "},{id:"reporters-allure",title:"Reporters & Allure",icon:"\ud83d\udcc8",content:"\n## Built-In Reporters\n\n```bash\nnpx playwright test --reporter=html\nnpx playwright test --reporter=list\nnpx playwright test --reporter=dot\nnpx playwright test --reporter=line\nnpx playwright test --reporter=json\nnpx playwright test --reporter=junit\n```\n\n## Allure Setup\n\n```bash\nnpm install -D allure-playwright\nnpm install -g allure-commandline\nnpx playwright test\nallure generate allure-results -o allure-report --clean\nallure open allure-report\n```\n\n```javascript\n// playwright.config.js\nmodule.exports = defineConfig({\n    reporter: [['allure-playwright']],\n});\n\ntest('User login', async ({ page }) => {\n    test.info().annotations.push(\n        { type: 'story', description: 'User Authentication' },\n        { type: 'severity', description: 'critical' },\n    );\n\n    await test.info().attach('after-login', {\n        body: await page.screenshot(),\n        contentType: 'image/png',\n    });\n});\n```\n    "},{id:"cicd",title:"CI/CD - GitHub Actions",icon:"\ud83d\ude80",content:"\n## GitHub Actions Workflow\n\n```yaml\nname: Playwright Tests\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: npm\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Install Playwright Browsers\n        run: npx playwright install --with-deps\n\n      - name: Run Tests\n        run: npx playwright test\n        env:\n          BASE_URL: secret-base-url\n          API_TOKEN: secret-api-token\n\n      - name: Upload HTML Report\n        uses: actions/upload-artifact@v4\n        if: always()\n        with:\n          name: playwright-report\n          path: playwright-report/\n          retention-days: 30\n```\n\n**Senior Tip:** Upload the report with `if: always()` so debugging artifacts are available even when tests fail.\n    "},{id:"best-practices",title:"Expert Tips & Best Practices",icon:"\u2b50",content:"\n## Best Practices\n\n- Prefer `page.getByRole()` because it is resilient and accessibility-friendly.\n- Avoid `page.waitForTimeout()` in test logic.\n- Use `test.describe()` to group related tests.\n- Keep tests isolated with BrowserContext.\n- Store secrets in environment variables or CI secrets.\n- Use `trace: 'retain-on-failure'` for practical debugging.\n- Use storage state to avoid repeated UI login.\n- Tag tests using title patterns like `@smoke` and run them with grep.\n- Seed test data through API when possible.\n- Use `fullyParallel: true` only when tests are independent.\n- Use `test.describe.serial()` for flows that must run in order.\n\n## Interview Cheat Sheet\n\n| Topic | Best Answer |\n|-------|-------------|\n| Locator strategy | Role, label, placeholder, text, test id, CSS/XPath last |\n| Wait strategy | Auto-waiting and assertion waits |\n| Debugging | UI mode, inspector, trace viewer, screenshots, videos |\n| Auth | Save and reuse storage state |\n| API + UI | Use APIRequestContext for setup and backend checks |\n| Parallelism | Keep tests independent and avoid shared state |\n| CI | Install browsers, run tests, upload reports |\n    "}];var N=t(4848);const O={restassured:R.G,java:B,cucumber:D,playwright:M};function F(){const[e,n]=(0,i.useState)("restassured"),[t,R]=(0,i.useState)("fundamentals"),[B,D]=(0,i.useState)({restassured:!0}),M=L[e],F=O[e],q=F?.find(e=>e.id===t),H=e=>{const n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,e=>n[e])};return(0,N.jsx)(r.A,{title:"Interview Preparation",description:"Comprehensive interview preparation guides for REST Assured, Java, TestNG, and more.",children:(0,N.jsxs)("div",{className:a,children:[(0,N.jsxs)("div",{className:s,children:[(0,N.jsx)("h2",{className:o,children:"\ud83d\udcda Interview Preparation"}),(0,N.jsx)("p",{className:l,children:"Comprehensive guides for API testing, frameworks, and best practices"})]}),(0,N.jsxs)("div",{className:c,children:[(0,N.jsxs)("aside",{className:u,children:[(0,N.jsx)("nav",{className:p,children:k.map(t=>(0,N.jsxs)("button",{className:`${d} ${e===t?m:""}`,onClick:()=>(e=>{n(e),R(L[e].subtopics[0].id)})(t),children:[(0,N.jsx)("span",{className:g,children:L[t].icon}),(0,N.jsx)("span",{children:L[t].title})]},t))}),M&&(0,N.jsxs)("div",{className:h,children:[(0,N.jsxs)("button",{className:b,onClick:()=>{return n=e,void D(e=>({...e,[n]:!e[n]}));var n},children:[(0,N.jsx)("span",{className:S,children:B[e]?"\u25bc":"\u25b6"}),(0,N.jsx)("span",{className:y,children:M.title})]}),B[e]&&(0,N.jsx)("nav",{className:v,children:M.subtopics.map(e=>(0,N.jsx)("button",{className:`${w} ${t===e.id?f:""}`,onClick:()=>(e=>{R(e);const n=document.querySelector(`.${x}`);n&&(n.scrollTop=0)})(e.id),children:e.label},e.id))})]})]}),(0,N.jsx)("main",{className:x,children:q&&(0,N.jsxs)("article",{className:C,children:[(0,N.jsxs)("div",{className:T,children:[(0,N.jsx)("span",{className:A,children:q.icon}),(0,N.jsx)("h2",{className:P,children:q.title})]}),(0,N.jsx)("div",{className:I,dangerouslySetInnerHTML:{__html:((e,n={})=>{let t=e;n.hideCombinedJavaExamples&&(t=t.replace(/\n### Java Code Examples\n\n```[\s\S]*?```\n?/g,"\n"),t=t.replace(/\n\*\*Programs Covered:\*\*[\s\S]*?(?=\n\*\*Key Concepts:\*\*)/g,"\n")),t=t.replace(/```(\w+)?\n?([\s\S]*?)```/g,(e,n,t)=>`<pre><code${n?` class="language-${n}"`:""}>${H(t.trim())}</code></pre>`),t=t.replace(/`([^`]+)`/g,(e,n)=>`<code>${H(n)}</code>`);t=t.replace(/\|(.+)\n\|[-|\s]+\n((?:\|.+\n?)*)/g,e=>{const n=e.trim().split("\n"),t=n[0].split("|").map(e=>e.trim()).filter(e=>e),i=n.slice(2).map(e=>e.split("|").map(e=>e.trim()).filter(e=>e));let r="<table><thead><tr>";return t.forEach(e=>{r+=`<th>${H(e)}</th>`}),r+="</tr></thead><tbody>",i.forEach(e=>{e.length>0&&(r+="<tr>",e.forEach(e=>{r+=`<td>${e}</td>`}),r+="</tr>")}),r+="</tbody></table>",r}),t=t.replace(/^## (.*?)$/gm,"<h3>$1</h3>").replace(/^### (.*?)$/gm,"<h4>$1</h4>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/^\- (.*?)$/gm,"<li>$1</li>").replace(/((?:<li>.*?<\/li>\n?)+)/g,"<ul>$1</ul>");return t.split(/(<h3>|<h4>|<table>|<pre>|<ul>)/).map((e,n)=>e.match(/^<h[34]>/)||e.match(/^<table>/)||e.match(/^<pre>/)||e.match(/^<ul>/)||!e.trim()?e:`<p>${e}</p>`).join("")})(q.content,{hideCombinedJavaExamples:Boolean(q.examples)})}}),((e=[])=>e.length?(0,N.jsxs)("section",{className:E,children:[(0,N.jsx)("h3",{children:"Programs Covered"}),e.map(e=>(0,N.jsxs)("article",{className:j,children:[(0,N.jsx)("h4",{children:e.title}),(0,N.jsx)("pre",{children:(0,N.jsx)("code",{className:"language-java",children:e.code.trim()})})]},e.title))]}):null)(q.examples)]})})]})]})})}}}]);