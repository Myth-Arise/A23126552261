const { getDepots } = require("./depotService");
const { getVehicles } = require("./vehicleService");

const maximizeImpact = require(
  "../utils/knapsack"
);

async function generateMaintenanceSchedule() {
  const depots = await getDepots();

  const vehicles = await getVehicles();

  const results = [];

  for (const depot of depots) {
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

  return results;
}

module.exports = {
  generateMaintenanceSchedule
};