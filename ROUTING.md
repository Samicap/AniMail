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

/api/profiles/parents (POST) - create a new parent profile
/api/profiles/children (POST) - create a new child profile
/api/profiles/parents/:id (GET) - retrieve a specific parent profile and its associated children
/api/profiles/children/:id (GET) - retrieve a specific child profile
/api/profiles/parents/:id (PATCH / PUT) - update a specific parent profile
/api/profiles/children/:id (PATCH / PUT) - update a specific child profile
/api/profiles/parents/:id (DELETE) - delete a specific account


## Parent Control (??)

/api/controls/children/:id (PATCH / PUT) - update the parent control for a specific child
/api/controls/children/:id (GET) - retrieve the parent control setup for a specific child


## Messages
/api/messages/children/:id (GET) - retrieves all the messages of a specific child (like email inbox)
/api/messages/:id/children/:id (GET) - retrieve a specific message of a specific child
/api/messages/:id/children/:id (DELETE) - delete a specific message of a specific child
/api/messages/children/:id (POST) - create a new message for a specific child


