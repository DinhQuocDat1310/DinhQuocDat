## Solved: Problem 6 - Backend

## Overall Description

-   Module name: Scoreboard API Module
-   This module serves as the backend functionality to support real-time update of a score board on a website, handles incoming requests from the website frontend to update user scores and authentication and preventing unauthorized score manipulation.

## Functional Requirements

-   **Authentication**: The module must authenticate users before allowing them to update their scores. This can be achieved through the use of JWT (JSON Web Tokens).
-   **Score Update**: The module must allow users to update their scores after they complete a challenge.
-   **Score Display**: The module must provide an API to fetch the top 10 user scores.

## Non-functional Requirements

-   **Performance**: The module must ensure that score updates and retrievals are performed quickly and efficiently.
-   **Security**: The module must protect user information and their scores from attacks and unauthorized access.
-   **Scalability**: The module must be designed to easily scale and handle a large number of users and requests.

## API Endpoints

-   `GET /scores`: Returns the top 10 user scores.

## Flow of Execution

**1. Client Score Board**: The client display default the list top 10 user's scores via API: `GET /scores`.

**2. User Action**: At client, a user triggers an event (e.g., Complete the challenge) to update their score.

**3. Client Dispatch**: When triggers, the client will publishes a message (The message contain current user's score or some additional data needed) and attached JWT to Header.

**4. Server**: Implement the Socket Gateway using Websocket (SocketIO) for subscribing to the published messages from client.

**5. Authorization Check**: Build a Guard or Middleware to extract the JWT from the header and verify the user's authorization.

**6. Score Update**: If the user is authorized, the server updates directly the user's score base extract data from the JWT and message from client.

**7. Score Board Update**: If score updated successful, the server will emit an event message (contain list top 10 user's updated score) to all connected clients to reflect the changes in the score board.

**8. Client Score Board**: The client will listen the event message from the server and show the score real-time.

## Additional Improvement and Comments

**Caching**:

-   Using Redis.
-   Cache the top 10 user's scores: When initially get the top 10 user's scores from the database in step `Flow of Execution: 1. Client Score Board`, cache this sort data into Redis.
-   In step `Flow of Execution: 7. Score Board Update`: Before `the server will emit an event message (contain list top 10 user's updated score)`. We need to check the current user's score is higher than the any previous score in Redis. If higher, we will access database to get new top 10 scores (Re-set top 10 user's scores into Redis). Else, we will return the existing top 10 user's scores from Redis.

**Rate Limiting**: Implement rate limiting to prevent abuse of the API.

**Logging**: Ensure thorough logging of all API requests and responses for debugging and auditing purposes.

**Error Handling**: Provide clear error messages and proper HTTP status codes for different error scenarios.

**Testing**: Comprehensive unit, integration testing and E2E test should be conducted to ensure the reliability, security and highly test coverage of the API and code.

**Documentation**: Continuously update and maintain comprehensive documentation for developers integrating with this API.

## Diagram

-   [Diagram Flow of Execution](./diagram_problem_6.png)
