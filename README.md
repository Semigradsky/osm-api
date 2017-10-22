OSM API
===

[http://wiki.openstreetmap.org/wiki/API_v0.6](http://wiki.openstreetmap.org/wiki/API_v0.6)

Requests
---

- Miscellaneous
  - [x] Capabilities: GET /api/capabilities
  - [ ] Retrieving map data by bounding box: [ ] GET /api/0.6/map
  - [ ] Retrieving permissions: GET /api/0.6/permissions
- Changesets
  - [ ] Bounding box computation
  - [ ] Create: PUT /api/0.6/changeset/create
  - [ ] Read: GET /api/0.6/changeset/#id?include_discussion=true
  - [ ] Update: PUT /api/0.6/changeset/#id
  - [ ] Close: PUT /api/0.6/changeset/#id/close
  - [ ] Download: GET /api/0.6/changeset/#id/download
  - [ ] Expand Bounding Box: POST /api/0.6/changeset/#id/expand_bbox
  - [ ] Query: GET /api/0.6/changesets
  - [ ] Diff upload: POST /api/0.6/changeset/#id/upload
  - [ ] Changeset summary
- Changeset discussion
  - [ ] Comment: POST /api/0.6/changeset/#id/comment
  - [ ] Subscribe: POST /api/0.6/changeset/#id/subscribe
  - [ ] Unsubscribe: POST /api/0.6/changeset/#id/unsubscribe
- Elements
  - [ ] Create: PUT /api/0.6/[node|way|relation]/create
  - [ ] Read: GET /api/0.6/[node|way|relation]/#id
  - [ ] Update: PUT /api/0.6/[node|way|relation]/#id
  - [ ] Delete: DELETE /api/0.6/[node|way|relation]/#id
  - [ ] History: GET /api/0.6/[node|way|relation]/#id/history
  - [ ] Version: GET /api/0.6/[node|way|relation]/#id/#version
  - [ ] Multi fetch: GET /api/0.6/[nodes|ways|relations]?#parameters
  - [ ] Relations for element: GET /api/0.6/[node|way|relation]/#id/relations
  - [ ] Ways for node: GET /api/0.6/node/#id/ways
  - [ ] Full: GET /api/0.6/[way|relation]/#id/full
  - [ ] Redaction: PUT /api/0.6/[node|way|relation]/#id/#version/redact?redaction=#redaction_id
- GPS traces
  - [ ] Retrieving GPS points
  - [ ] Uploading traces
  - [ ] Downloading trace metadata
- Methods for user data
  - [ ] Details of a user
  - [ ] Details of the logged-in user
  - [ ] Preferences of the logged-in user
- Map Notes API
  - [ ] Retrieving notes data by bounding box: GET /api/0.6/notes
  - [ ] Read: GET /api/0.6/notes/#id
  - [ ] Create a new note: Create: POST /api/0.6/notes
  - [ ] Create a new comment: Create: POST /api/0.6/notes/#id/comment
  - [ ] Close: POST /api/0.6/notes/#id/close
  - [ ] Reopen: POST /api/0.6/notes/#id/reopen
  - [ ] Search for notes on text and comments: GET /api/0.6/notes/search
