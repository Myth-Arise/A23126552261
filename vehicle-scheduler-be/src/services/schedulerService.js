const {
  getDepots
} = require("./depotService");

const {
  getVehicles
} = require("./vehicleService");

const maximizeImpact =
  require(
    "../utils/knapsack"
  );

const Log = require(
  "../utils/logger"
);

async function generateMaintenanceSchedule() {

  const depots =
    await getDepots();

  const vehicles =
    await getVehicles();

  const results = [];

  for (
    const depot of depots
  ) {

    const schedule =
      maximizeImpact(
        vehicles,
        depot.MechanicHours
      );

    results.push({
      depotId: depot.ID,
      mechanicHours:
        depot.MechanicHours,
      totalImpact:
        schedule.totalImpact,
      selectedVehicles:
        schedule.selectedVehicles
    });
  }

  await Log(
    "backend",
    "info",
    "service",
    "Maintenance schedule generated successfully"
  );

  return results;
}

module.exports = {
  generateMaintenanceSchedule
};