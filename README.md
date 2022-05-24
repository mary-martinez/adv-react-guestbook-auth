##Learning Objectives
1) Use private routes to enforce auth  -- function called from App in place of Route
1) Retain URL if redirected by auth failure  -- useHistory
1) Redirect to an auth page if no user detected  -- Redirect if !auth based on context
1) Use useContext to manage global application state  -- authentication, maybe more\

#Plan
1) Build auth page [/login]
1) Build home page [/]
1) UseContext for auth info
1) Attach auth to supabase
1) Header component with email from context
1) Make home page input & connect to supabase
1) Make home page list display, connected to supabase + edit + delete [EntryList]
1) Private routes component & Redirect if not auth
1) Add secrets + connect to netlify
1) TESTING (including behavior testing for [EntryList])