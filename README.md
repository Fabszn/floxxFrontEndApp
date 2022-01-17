# Floxx

## Context
This application aims to manage flow of attendees during one conference.
When you are logged, you can access twice screens : 

    - conf.
    - Overflow


First one aims to choose a specifc talk and enter the room filling rate. 

Second one aims to visualise the filling rate of all rooms.

One third screen exists. Its aims is to provide to the attendees same overview as 'Overflow' screen but attendee, by clicking on each room, can see the details of the current talk. (To access to this screen, no log in is requiered.)

# Environments

Floxx is deployed has 3 environments : 

    - Developer : Local machine -> **l ocalhost:8080 **
    - Staging : Personal clever cloud account -> ** floxx-staging.cleverapps.io **
    - Production : Devoxx clever cloud account -> ** floxx.cleverapps.io **

# Releases

    - v0.0.1

# Actions 

Install application : 

  1) do an export : export NODE_ENV=development
  2) npm install
