export const restAssuredSections = [
  {
    id: 'fundamentals',
    title: 'API & REST Fundamentals',
    icon: '📡',
    content: `
## What is an API?

API (Application Programming Interface) is a contract between two software systems defining how they communicate.

**Restaurant Analogy:** You (client) place an order → Waiter (API) carries it to the kitchen (server) → Waiter returns with the food (response).

**Types relevant to SDET:** REST · SOAP (legacy) · GraphQL · gRPC

## 6 REST Architectural Constraints

1. **Uniform Interface** — Client & server agree on resource format (JSON/XML) and URI patterns.
2. **Stateless** — Each request is fully self-contained; server stores NO session.
3. **Cacheable** — Responses must declare cacheability to reduce server load.
4. **Client-Server** — UI and data storage are decoupled; evolve independently.
5. **Layered System** — Client unaware of load balancers, gateways in between.
6. **Code on Demand** (optional) — Server can send executable code to client.

**Senior Tip:** Statelessness enables horizontal scaling (add more servers). Cacheability enables CDNs.

## REST vs SOAP

| Feature | REST | SOAP |
|---------|------|------|
| Protocol | HTTP | HTTP, SMTP, TCP |
| Format | JSON / XML / YAML | XML only |
| Speed | Faster (lightweight) | Slower (XML overhead) |
| Contract | OpenAPI / Swagger | WSDL (strict schema) |
| Security | HTTPS + OAuth 2.0 | WS-Security (built-in) |
| Error handling | HTTP status codes | SOAP Fault element |
| Best for | Modern web / mobile APIs | Enterprise / banking / legacy |

## Idempotency

Idempotent — calling the same operation N times produces identical result to calling it once.

**Idempotent methods:** GET · PUT · DELETE · HEAD · OPTIONS

**NOT idempotent:** POST (creates new resource each call) · PATCH (may differ)

**Safe methods** (read-only, zero side-effects): GET · HEAD · OPTIONS

**Senior Tip:** Idempotency matters for retry logic in distributed systems. Design automated retries only for idempotent methods.
    `
  },
  {
    id: 'http-methods',
    title: 'HTTP Methods Deep Dive',
    icon: '🔄',
    content: `
## GET
Retrieve resource. Safe + Idempotent + Cacheable. Params go in URL query string. No request body.

\`\`\`
GET /api/users?page=1&size=10 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer eyJhbGci...
\`\`\`

## POST
Create a new resource. NOT idempotent. Payload in body. Server determines the new resource URI.

\`\`\`
POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer eyJhbGci...

{
  "name": "Alice",
  "email": "alice@test.com",
  "role": "ADMIN"
}
\`\`\`

## PUT
Replace the ENTIRE resource. Idempotent. Client specifies URI. ALL fields must be sent.

\`\`\`
PUT /api/users/5 HTTP/1.1
Content-Type: application/json

{
  "id": 5,
  "name": "Alice Updated",
  "email": "alice.new@test.com",
  "age": 31,
  "role": "ADMIN"
}
\`\`\`

**Note:** If any field is omitted → that field becomes null/default

## PATCH
Partial update — send ONLY the fields that changed. More efficient than PUT for large objects.

\`\`\`
PATCH /api/users/5 HTTP/1.1
Content-Type: application/json

{
  "email": "patched@test.com"
}
\`\`\`

## DELETE
Remove a resource. Idempotent (deleting same resource twice = same result). Usually returns 204.

\`\`\`
DELETE /api/users/5 HTTP/1.1
Authorization: Bearer eyJhbGci...

// Response: 204 No Content (resource deleted)
// Second call: 404 Not Found (already gone — still idempotent result)
\`\`\`

## OPTIONS
Return HTTP methods supported by the endpoint. Used for CORS preflight checks.

\`\`\`
OPTIONS /api/users HTTP/1.1
Host: api.example.com

// Response Headers:
Allow: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Origin: https://myapp.com
\`\`\`

## HEAD
Like GET but returns ONLY headers — no response body. Check resource existence / get metadata.

\`\`\`
HEAD /api/users/5 HTTP/1.1
Host: api.example.com

// Response (headers only, no body):
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 248
Last-Modified: Mon, 01 Apr 2024 10:00:00 GMT
\`\`\`

**Senior Tip:** PUT vs PATCH is a very common 9+ year question. PUT = replace whole resource (client sends ALL fields). PATCH = send only what changed (efficient for large objects).
    `
  },
  {
    id: 'status-codes',
    title: 'HTTP Status Codes',
    icon: '📊',
    content: `
## 2xx SUCCESS

| Code | Meaning |
|------|---------|
| **200** | OK — Standard success. GET/PUT returns body. Most common success code. |
| **201** | Created — New resource created (POST/PUT). Location header has new resource URI. |
| **202** | Accepted — Request accepted but processing not done yet (async/queue operations). |
| **204** | No Content — Success but NO response body. Standard for DELETE, and PUT with no return. |

## 3xx REDIRECTION

| Code | Meaning |
|------|---------|
| **301** | Moved Permanently — Resource has a new permanent URI. All future requests use new URI. |
| **302** | Found — Temporary redirect. Keep using original URI for future requests. |
| **304** | Not Modified — Cached version still valid. No data transferred — saves bandwidth. |
| **307** | Temporary Redirect — Like 302 but HTTP method must NOT change (POST stays POST). |

## 4xx CLIENT ERRORS

| Code | Meaning |
|------|---------|
| **400** | Bad Request — Malformed syntax, invalid params, or deceptive routing. Fix your request. |
| **401** | Unauthorized — NOT authenticated. No valid credentials. Send correct auth token. |
| **403** | Forbidden — Authenticated but NOT authorized. User lacks required permission. |
| **404** | Not Found — Resource doesn't exist at this URI. Check the path. |
| **405** | Method Not Allowed — HTTP method not supported here. Response includes Allow header. |
| **406** | Not Acceptable — Server can't produce client's requested media type (Accept header). |
| **409** | Conflict — Duplicate resource, version conflict, or state conflict. |
| **412** | Precondition Failed — Conditional request header (If-Match) failed. |
| **415** | Unsupported Media Type — Server rejects the Content-Type sent by client. |
| **422** | Unprocessable Entity — Request syntax OK but semantic validation failed. |
| **429** | Too Many Requests — Rate limit exceeded. Check Retry-After response header. |

## 5xx SERVER ERRORS

| Code | Meaning |
|------|---------|
| **500** | Internal Server Error — Generic server fault. Not client's fault. Safe to retry. |
| **501** | Not Implemented — Server doesn't support the requested functionality. |
| **502** | Bad Gateway — Upstream server returned invalid response (proxy issue). |
| **503** | Service Unavailable — Server down or overloaded. Temporary. Retry after delay. |
| **504** | Gateway Timeout — Upstream server timed out. Network or service is slow. |

## 401 vs 403

**401 Unauthorized** → Client is NOT authenticated. 'Who are you?' Credentials missing or wrong. 

Fix: send correct token / login first.

**403 Forbidden** → Client IS authenticated but lacks permission. 'I know who you are, but you can't do this.' 

Fix: grant the user the required role.

**Senior Tip:** Knowing 401 vs 403 saves debugging time. Always check: Is the user logged in? (401) vs Is the user's role correct? (403)
    `
  },
  {
    id: 'authentication',
    title: 'Authentication & Security',
    icon: '🔐',
    content: `
## Basic Auth

Base64-encoded username:password in Authorization header. NOT encrypted — always use over HTTPS only.

\`\`\`
// Request header (sent with every request):
Authorization: Basic am9objpzZWNyZXQ=

// Decode: Base64("john:secret") → am9objpzZWNyZXQ=

// In REST Assured:
given()
  .auth().basic("john", "secret")
  .when()
  .get("/secured-endpoint");
\`\`\`

## Bearer Token / JWT

Token sent in Authorization header. Stateless — server validates signature, no DB lookup needed.

\`\`\`
// Request header:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  .eyJ1c2VySWQiOiI1IiwicoleCI6MTcwMDAwMH0
  .SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

// JWT Structure: header.payload.signature

// Payload (Base64 decoded) contains:
{
  "userId": "5",
  "roles": ["ADMIN", "USER"],
  "exp": 1700000000,
  "iss": "auth.myapp.com"
}

// In REST Assured:
given()
  .header("Authorization", "Bearer " + jwtToken)
  .when()
  .get("/users");
\`\`\`

## OAuth 2.0 — Client Credentials Flow

Industry-standard delegated authorization. Get access token from Auth server, use for API calls.

\`\`\`
// Step 1: Get token from Auth server
String token =
  given()
    .formParam("grant_type", "client_credentials")
    .formParam("client_id", "myClientId")
    .formParam("client_secret", "mySecret")
    .formParam("scope", "read:users write:orders")
    .when()
    .post("https://auth.example.com/oauth/token")
    .then()
    .statusCode(200)
    .extract()
    .path("access_token");

// Step 2: Use token in API calls
given()
  .header("Authorization", "Bearer " + token)
  .when()
  .get("https://api.example.com/users");
\`\`\`

## API Key Auth

Simple secret key in header or query param. Easy to implement but less secure — rotate keys regularly.

\`\`\`
// Preferred: API key in header (not visible in server logs)
given()
  .header("X-API-Key", "your-secret-api-key-here")
  .when()
  .get("/data");

// Less secure: API key in query param (appears in logs/URL)
given()
  .queryParam("api_key", "your-secret-api-key-here")
  .when()
  .get("/data");
\`\`\`

## OAuth 1.0 vs OAuth 2.0

| Aspect | OAuth 1.0 | OAuth 2.0 |
|--------|-----------|----------|
| Security | Cryptographic signatures | Bearer tokens + HTTPS mandatory |
| Complexity | Complex — signature required per call | Simple — send token as header |
| Token Types | Request token + Access token | Access token + Refresh token |
| Flexibility | Web apps primarily | Web, mobile, server-to-server |
| Grant Types | Single authorization flow | Auth Code, Client Creds, Implicit… |
| Used today | Legacy / niche systems | Modern standard — use this ✓ |
    `
  },
  {
    id: 'rest-assured-core',
    title: 'REST Assured Core',
    icon: '⚙️',
    content: `
## Maven Dependency

\`\`\`xml
<!-- REST Assured core -->
<dependency>
  <groupId>io.rest-assured</groupId>
  <artifactId>rest-assured</artifactId>
  <version>5.4.0</version>
  <scope>test</scope>
</dependency>

<!-- JSON Schema Validator -->
<dependency>
  <groupId>io.rest-assured</groupId>
  <artifactId>json-schema-validator</artifactId>
  <version>5.4.0</version>
  <scope>test</scope>
</dependency>

<!-- Jackson for POJO serialization/deserialization -->
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-databind</artifactId>
  <version>2.15.2</version>
</dependency>
\`\`\`

## The given() / when() / then() Pattern

\`\`\`java
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

given() // ① REQUEST SPEC — set up request
  .baseUri("https://api.example.com")
  .header("Content-Type", "application/json")
  .header("Authorization", "Bearer " + token)
  .header("Accept", "application/json")
  .queryParam("page", 1)
  .queryParam("size", 10)
  .log().all() // log full request to console
.when() // ② ACTION — HTTP method + path
  .get("/users")
.then() // ③ RESPONSE VALIDATION
  .log().all() // log full response
  .statusCode(200)
  .contentType("application/json")
  .header("X-Rate-Limit-Remaining", notNullValue())
  .body("data.size()", greaterThan(0))
  .body("data[0].name", notNullValue())
  .body("data[0].email", containsString("@"))
  .body("total", greaterThan(0))
  .time(lessThan(3000L)); // must respond within 3 seconds
\`\`\`

**Senior Tip:** given() = request setup, when() = HTTP action, then() = validation. This BDD-style DSL makes tests self-documenting.

## All HTTP Methods

\`\`\`java
// GET
given()
  .header("Authorization", "Bearer " + token)
  .queryParam("status", "active")
.when()
  .get("/api/users")
.then()
  .statusCode(200)
  .body("data", hasSize(greaterThan(0)));

// POST (create resource)
given()
  .header("Authorization", "Bearer " + token)
  .contentType("application/json")
  .body("{ "name": "Alice", "email": "alice@test.com" }")
.when()
  .post("/api/users")
.then()
  .statusCode(201)
  .body("id", notNullValue())
  .body("name", equalTo("Alice"));

// PUT (full replacement)
given()
  .header("Authorization", "Bearer " + token)
  .contentType("application/json")
  .body("{ "name": "Alice", "email": "new@t.com", "age": 30 }")
.when()
  .put("/api/users/5")
.then()
  .statusCode(200);

// PATCH (partial update)
given()
  .header("Authorization", "Bearer " + token)
  .contentType("application/json")
  .body("{ "email": "patched@test.com" }")
.when()
  .patch("/api/users/5")
.then()
  .statusCode(200)
  .body("email", equalTo("patched@test.com"));

// DELETE
given()
  .header("Authorization", "Bearer " + token)
.when()
  .delete("/api/users/5")
.then()
  .statusCode(204);
\`\`\`
    `
  },
  {
    id: 'advanced-techniques',
    title: 'Advanced Techniques',
    icon: '🚀',
    content: `
## RequestSpecification — Reusable Base Setup

\`\`\`java
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import io.restassured.filter.log.LogDetail;

public class BaseApiTest {
  protected static RequestSpecification requestSpec;
  protected static ResponseSpecification responseSpec;

  @BeforeClass
  public static void setup() {
    // ■■■ Request spec (shared by all tests) ■■■
    requestSpec = new RequestSpecBuilder()
      .setBaseUri("https://api.example.com")
      .setBasePath("/v2")
      .addHeader("Authorization", "Bearer " + TokenManager.getToken())
      .addHeader("Content-Type", "application/json")
      .addHeader("Accept", "application/json")
      .addHeader("x-api-version", "2024-01")
      .setRelaxedHTTPSValidation() // ignore SSL in test env
      .log(LogDetail.ALL)
      .build();

    // ■■■ Response spec (common assertions) ■■■
    responseSpec = new ResponseSpecBuilder()
      .expectStatusCode(200)
      .expectContentType("application/json")
      .expectResponseTime(lessThan(3000L))
      .build();
  }

  @Test
  public void getUsers() {
    // Reuse specs — no boilerplate in every test
    given(requestSpec)
      .queryParam("page", 1)
    .when()
      .get("/users")
    .then()
      .spec(responseSpec) // apply shared response spec
      .body("data.size()", greaterThan(0));
  }
}
\`\`\`

## Response Extraction & JsonPath

\`\`\`java
// Extract full Response object
Response response =
  given(requestSpec)
  .when()
    .get("/users")
  .then()
    .statusCode(200)
    .extract()
    .response();

// JsonPath extraction
String firstName = response.jsonPath().getString("data[0].name");
int totalCount = response.jsonPath().getInt("total");
boolean isActive = response.jsonPath().getBoolean("data[0].active");
List<String> emails = response.jsonPath().getList("data.email");

// Extract nested map
Map<String, Object> user = response.jsonPath().getMap("data[2]");
System.out.println(user.get("name")); // prints: Alice

// Extract as POJO (Deserialization via Jackson)
User userObj = given(requestSpec)
  .when()
    .get("/users/1")
  .then()
    .statusCode(200)
    .extract()
    .as(User.class);
System.out.println(userObj.getName()); // type-safe access

// Extract and chain into next request (E2E pattern)
String createdId =
  given(requestSpec)
    .body("{ "name": "Bob" }")
  .when()
    .post("/users")
  .then()
    .statusCode(201)
    .extract()
    .path("id")
    .toString();

// Now use the extracted ID in subsequent request
given(requestSpec)
  .when()
    .get("/users/" + createdId)
  .then()
    .statusCode(200)
    .body("name", equalTo("Bob"));
\`\`\`

## JSON Schema Validation

\`\`\`java
// Schema file: src/test/resources/schemas/user-response.json
/*
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["id", "name", "email", "status"],
  "properties": {
    "id": { "type": "integer", "minimum": 1 },
    "name": { "type": "string", "minLength": 1 },
    "email": { "type": "string", "format": "email" },
    "status": { "type": "string", "enum": ["ACTIVE", "INACTIVE", "PENDING"] },
    "age": { "type": "integer", "minimum": 0, "maximum": 150 }
  },
  "additionalProperties": false
}
*/

// Test using JSON Schema Validator
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

given(requestSpec)
  .when()
    .get("/users/1")
  .then()
    .statusCode(200)
    .body(matchesJsonSchemaInClasspath("schemas/user-response.json"));

// Schema validates:
// ✓ All required fields are present
// ✓ Field types match (string, integer, boolean)
// ✓ Enum values are valid
// ✓ No unexpected extra fields (additionalProperties: false)
// ✓ Format constraints (email, date-time)
\`\`\`

**Senior Tip:** JSON Schema validation is a must-have at 9+ years. It automatically catches breaking API changes — a field removed, type changed, or new required field added.

## Timeout Configuration

\`\`\`java
import io.restassured.config.HttpClientConfig;
import io.restassured.config.RestAssuredConfig;
import org.apache.http.params.CoreConnectionPNames;

// Global timeout (apply to all requests)
RestAssuredConfig config = RestAssured.config()
  .httpClient(
    HttpClientConfig.httpClientConfig()
      .setParam(CoreConnectionPNames.CONNECTION_TIMEOUT, 5000) // 5s connect
      .setParam(CoreConnectionPNames.SO_TIMEOUT, 10000) // 10s read
  );
RestAssured.config = config;

// Per-request timeout (override global)
given()
  .config(
    RestAssured.config().httpClient(
      HttpClientConfig.httpClientConfig()
        .setParam(CoreConnectionPNames.SO_TIMEOUT, 30000) // 30s for slow endpoint
    )
  )
  .when()
    .get("/slow-report-endpoint")
  .then()
    .statusCode(200);

// Assert response time in test
given()
  .when()
    .get("/users")
  .then()
    .statusCode(200)
    .time(lessThan(2000L)); // enforce 2-second SLA
\`\`\`

## Logging

\`\`\`java
// Log everything — request + response (best for debugging)
given()
  .log().all()
.when()
  .get("/users")
.then()
  .log().all()
  .statusCode(200);

// Log ONLY on failure (production-friendly — less noise)
given()
.when()
  .get("/users")
.then()
  .log().ifValidationFails()
  .statusCode(200);

// Log specific parts
given()
  .log().headers() // only request headers
  .log().params() // only query/form params
  .log().body() // only request body
.when()
  .post("/users");

.then()
  .log().status() // only status line
  .log().headers() // only response headers
  .log().body() // only response body
  .statusCode(200);
\`\`\`
    `
  },
  {
    id: 'best-practices',
    title: 'Best Practices & Senior Tips',
    icon: '⭐',
    content: `
## API Automation Framework Design

**Components to implement:**
- BaseApiTest — RequestSpecification, token refresh, baseURI per environment
- API Client layer — UserApiClient, OrderApiClient (one class per service)
- POJO/DTO layer — Java objects with Lombok for request/response
- Schema layer — JSON schemas in /resources/schemas/ for contract validation
- TestNG/JUnit — parallel execution, groups (smoke/regression), retry listener
- Allure reporting — request/response attached to each test step
- CI/CD — Jenkins/GitHub Actions pipeline runs on PR and nightly
- Config layer — property files per environment (DEV / QA / STAGE / PROD)

**Senior Tip:** Be specific about WHY you made each decision — why RequestSpecBuilder, how you handle token expiry, why TestNG over JUnit.

## Handling Token Expiry

TokenManager utility class:
- Token cached in static variable with parsed expiry (exp claim from JWT)
- Before each request: check if token expires within next 60 seconds
- If about to expire: silently re-authenticate and update cached token
- Thread-safe for parallel execution: use synchronized block or AtomicReference
- Used via: TokenManager.getValidToken() — caller never worries about expiry

## Handling Flaky Tests

Root causes and fixes:
- **Async operations** — API returns 202, then processes in background.
  Fix: use Awaitility to poll until status = COMPLETED
- **Shared test data** — tests interfere with each other.
  Fix: each test creates and owns its own data, deletes in @AfterMethod
- **Eventual consistency** — microservice data sync delay.
  Fix: retry assertion with backoff using Awaitility
- **Rate limiting** — too many test calls trigger 429.
  Fix: add delay between requests, use separate test API key
- **Retry strategy** — TestNG RetryAnalyzer (max 2 retries) + Slack alert on retry

**Awaitility example:**
\`\`\`java
Awaitility.await()
  .atMost(10, SECONDS)
  .pollInterval(1, SECONDS)
  .until(() -> getOrderStatus(id).equals("SHIPPED"));
\`\`\`

## CI/CD Pipeline Integration

Typical pipeline setup:
- **On PR** — Smoke tests only (20-30 critical tests, < 5 min)
- **On merge to main** — Full regression (parallel, 4 threads, ~30 min)
- **Nightly** — Full suite + performance SLA checks against STAGE
- **Reporting** — Allure report published; Slack webhook on failure
- **Gate** — Build fails if failure rate > 5%; retry flaky tests once

Maven command:
\`\`\`
mvn test -Denv=qa -Dgroups=smoke -Dthreads=4
\`\`\`

## Negative/Boundary Testing

Scenarios to always cover:
- Missing required fields → expect 400 Bad Request
- Invalid data types (string where int expected) → expect 400
- Field length exceeds maximum → expect 400 or 422
- Expired or tampered JWT token → expect 401
- Valid token but wrong role → expect 403
- Non-existent resource ID → expect 404
- Wrong HTTP method on endpoint → expect 405
- Wrong Content-Type header → expect 415
- Rate limit exhaustion (send N+1 requests) → expect 429
- SQL injection / XSS in params → expect 400, no execution
- Empty body on POST → expect 400 with clear error message

**Senior Tip:** Negative testing finds the most critical bugs. Always assert error response body — good APIs return actionable messages, not just codes.

## Contract Testing (Pact)

Contract testing approach:
- Consumer writes a Pact (JSON contract) defining what it expects from the provider
- Provider runs Pact verification against its actual implementation
- Contract stored in Pact Broker — visible to both teams
- No need to spin up both services together

**Key benefit:** Catches breaking changes before integration tests. Enables independent service deployment in microservices architecture.

**Senior Tip:** Pact testing is a major differentiator at senior SDET level. If not used, study the concept — interviewers increasingly ask about it.

## Top 7 Mistakes in API Automation

1. **No JSON schema validation** — misses structure changes
2. **Tests depend on each other** — ordering dependency = fragile suite
3. **No token refresh logic** — long suites fail mid-run
4. **Hardcoded test data in code** — not maintainable
5. **No negative test cases** — misses critical error-path bugs
6. **No performance SLA checks** — performance regressions go unnoticed
7. **Logging disabled in CI** — impossible to debug failures

**Senior differentiators (9+ years):**
- Contract testing with Pact
- API gateway testing
- Microservices E2E testing strategy
- Performance SLA enforcement in CI/CD
- GraphQL testing
- Mentoring juniors on framework design
- Shift-left API testing integrated with dev workflow
    `
  },
  {
    id: 'quick-reference',
    title: 'Quick Reference Cheat Sheet',
    icon: '📋',
    content: `
## Hamcrest Matchers

\`\`\`java
// Equality
.body("name", equalTo("Alice"))
.body("age", equalTo(30))
.body("active", equalTo(true))
.body("deletedAt", equalTo(null))

// Null / Not Null
.body("id", notNullValue())
.body("deletedAt", nullValue())

// String matching
.body("message", containsString("success"))
.body("url", startsWith("https://"))
.body("filename", endsWith(".pdf"))
.body("name", not(emptyOrNullString()))

// Numeric comparisons
.body("count", greaterThan(0))
.body("score", lessThan(100))
.body("price", greaterThanOrEqualTo(0.0f))
.body("discount", lessThanOrEqualTo(50.0f))
.body("total", closeTo(99.99, 0.01)) // float tolerance

// Collections
.body("roles", hasItem("ADMIN")) // list contains item
.body("tags", hasItems("java", "api")) // list contains all
.body("data", hasSize(10)) // exact size
.body("data", hasSize(greaterThan(0))) // size constraint
.body("data.name", everyItem(notNullValue())) // every item matches
.body("data.age", everyItem(greaterThan(18)))

// Status code
.statusCode(200)
.statusCode(anyOf(is(200), is(201))) // accept multiple codes
.statusCode(not(500))

// Headers
.header("Content-Type", containsString("application/json"))
.header("Cache-Control", "no-cache, no-store")
.header("X-Rate-Limit-Remaining", notNullValue())

// Response time
.time(lessThan(2000L)) // under 2 seconds
.time(greaterThan(100L)) // sanity: not suspiciously fast
\`\`\`

## Key Interview One-Liners

- **PUT vs POST** → PUT = replace at known URI (idempotent); POST = create, server chooses new URI (not idempotent)
- **PUT vs PATCH** → PUT = replace ALL fields; PATCH = update ONLY the specified fields
- **401 vs 403** → 401 = not authenticated; 403 = authenticated but forbidden
- **given/when/then** → given = request setup; when = HTTP method; then = response validation
- **Header vs Headers** → Header = single name-value pair; Headers = collection of Header objects
- **Serialization** → Java Object → JSON (sending data in request body)
- **Deserialization** → JSON → Java Object (processing response body)
- **JsonPath** → Path expression to extract values from JSON (like XPath for JSON: data[0].name, total)
- **Schema validation** → validates structure & types, not just values
- **Idempotent** → same result regardless of how many times called (GET, PUT, DELETE are idempotent; POST is not)
- **Stateless REST** → each HTTP request is independent; server stores NO session between calls
- **relaxedHTTPSValidation()** → disables SSL cert check; USE ONLY in test env, NEVER production

## Common HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK — success with body |
| 201 | Created — POST/PUT created resource |
| 204 | No Content — success, no body (DELETE/PUT) |
| 301 | Moved Permanently — update your bookmarks |
| 304 | Not Modified — use your cached copy |
| 400 | Bad Request — fix your request |
| 401 | Unauthorized — authenticate first |
| 403 | Forbidden — logged in but not allowed |
| 404 | Not Found — resource doesn't exist |
| 405 | Method Not Allowed — wrong HTTP verb |
| 409 | Conflict — duplicate / version mismatch |
| 415 | Unsupported Media Type — wrong Content-Type |
| 422 | Unprocessable Entity — validation failed |
| 429 | Too Many Requests — rate limited |
| 500 | Internal Server Error — server bug |
| 502 | Bad Gateway — upstream returned garbage |
| 503 | Service Unavailable — server down/overloaded |
| 504 | Gateway Timeout — upstream timed out |
    `
  },
];
