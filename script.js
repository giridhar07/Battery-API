const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);


const battery = () => {
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {

      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateBatteryLevel();
        updateDischargingtimeInfo();
        updateBatteryChargingTime()
      }

      updateAllBatteryDetails();

      //Battery Charging change
      battery.addEventListener("chargingChange", () => {
        updateChargingInfo();
      })

      function updateChargingInfo() {
        const isCharging = battery.charging ? 'Yesss' : 'No'
        batteryCharging.innerHTML = isCharging;
      }

      //Battery charging time
      battery.addEventListener("chargingTimeChange", () => {
        updateBatteryChargingTime()
      })

      function updateBatteryChargingTime() {
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds"
      }

      //Battery Discharging time
      battery.addEventListener("dischargingTimeChange", () => {
        updateDischargingtimeInfo();
      })

      function updateDischargingtimeInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds"
      }

      //Battery level change
      battery.addEventListener("levelChange", () => {
        updateBatteryLevel();
      })

      function updateBatteryLevel() {

        const level = battery.level * 100 + "%"
        if (level < 50 + "%") {
          batteryLevel.innerHTML = level + " Low battery"

        } else {
          batteryLevel.innerHTML = level

        }
      }
    })
  }
}

battery();