## Vehicle Scheduler Backend
# Vehicle Maintenance Scheduler Microservice

## Overview

This microservice schedules vehicle maintenance tasks for logistics depots by maximizing operational impact within the available mechanic-hour budget.

The service fetches depot and vehicle maintenance data from the provided evaluation APIs and uses a Dynamic Programming (0/1 Knapsack) approach to determine the optimal set of maintenance tasks.

---

## Features

* Fetches depot information from protected API
* Fetches vehicle maintenance tasks from protected API
* Calculates optimal maintenance schedule
* Maximizes total operational impact
* Integrates  Logging Middleware
* Exposes REST APIs for depots, vehicles, and schedules

---

## Tech Stack

* Node.js
* Express.js
* Axios
* Dotenv

---

## Project Structure

```text
src/
├── app.js
├── routes/
│   └── schedulerRoutes.js
├── controllers/
│   └── schedulerController.js
├── services/
│   ├── depotService.js
│   ├── vehicleService.js
│   └── schedulerService.js
├── utils/
│   └── knapsack.js
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=3001
BASE_URL=...
TOKEN=<ACCESS_TOKEN>
```

---

## Installation

```bash
npm install
```

---

## Run Application

```bash
node src/app.js
```

or

```bash
npm run dev
```

---

## API Endpoints

### Get Depots

```http
GET /depots
```

Returns available depots and mechanic-hour budgets.

---

### Get Vehicles

```http
GET /vehicles
```

Returns vehicle maintenance tasks.

---

### Generate Schedule

```http
GET /schedule
```

Returns the optimal maintenance schedule for each depot.

---

## Optimization Logic

The scheduling problem is solved using the 0/1 Knapsack Dynamic Programming algorithm.

### Mapping

* MechanicHours → Capacity
* Duration → Weight
* Impact → Value

Goal:

* Total Duration ≤ MechanicHours
* Total Impact is maximized

---

## Logging

The microservice integrates with the  Logging Middleware.

Logs are generated for:

* Depot API requests
* Vehicle API requests
* Schedule generation
* Error handling

---

## Assumptions

* Depot and Vehicle APIs are available and authenticated using Bearer Token.
* No database storage is required as per evaluation instructions.
* Vehicle tasks are independent and can be selected at most once.

