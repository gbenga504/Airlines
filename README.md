# Airline Reports

This is a client based ReactJs app that shows a near-realtime information of all flights around the world by consuming the OpenSky Api

---

## Running the application

Follow the process below to run the application

- Run: `$ git clone https://github.com/gbenga504/Airlines.git`
- Run: `$ yarn install`
- Run: `$ yarn run start`

The react app should open in port 3000 or any other port available

---

## Features Implemented

- Top 10 cities/locations displayed based on flight traffics
- Pulls new updates after every 3 minutes
- Displays arriving and departing flights based on [x] minutes
- Login Screen for the application using material UI
- Mobile Responsive

---

## Other Details

**Redux Addition**
Also some decisions were taken based the general use of the app. For instance, Redux was added even if this is a small library because I wanted to decouple the query data management from the UI component itself.

**Flights Display [CAVEAT]**
The percentage chances that a flight is departs or arrives based on x minutes from now is quite slim. This therefore affects how the application behaves and might seem like its not working. 

However, the Api's that fetch the data have been tested thoroughly with some hard coded data which works... Any workaround or suggestions on this will be duly appreciated. Thanks.


Necessary comments on how germane features were implemented have been added to the code...
