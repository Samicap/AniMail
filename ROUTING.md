# Client facing routes (Bookmarks for the user / Views)

## ## User Authentication
/signup
/login
/logout
/delete

## Profiles
/parents
/children
/parents/:id
/children/:id

## Parent Control
/children/:id/controls

## Messages
/children/:id/messages
/children/:id/messages/:id
/children/:id/messages/:id


# Server facing routes (Fetching / Updating information)

## User Authentication
/api/signup (POST)
/api/login (POST)
/api/logout (POST)


## Profiles
/api/profile/parents

/api/profile/parents (POST) - create a new parent profile
/api/profile/children (POST) - create a new child profile
/api/profile/parents/:id (GET) - retrieve a specific parent profile and its associated children
/api/profile/children/:id (GET) - retrieve a specific child profile
/api/profile/parents/:id (PATCH / PUT) - update a specific parent profile
/api/profile/children/:id (PATCH / PUT) - update a specific child profile
/api/profile/parents/:id (DELETE) - delete a specific account


## Parent Control (??)
/api/children/:id/controls (PATCH / PUT) - update the parent control for a specific child
/api/children/:id/controls (GET) - retrieve the parent control setup for a specific child


## Messages
/api/children/:id/messages (GET) - retrieves all the messages of a specific child (like email inbox)
/api/children/:id/messages/:id (GET) - retrieve a specific message of a specific child
/api/children/:id/messages/:id (DELETE) - delete a specific message of a specific child
/api/children/:id/messages (POST) - create a new message for a specific child


