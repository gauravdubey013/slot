// import { db } from "./firebase.mjs";
// import {
//   get,
//   ref,
// } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// var bookedSlotRef = ref(db, "booked_slot");
// var boodedSlotData;

// get(bookedSlotRef)
//   .then((snapshot) => {
//     boodedSlotData = snapshot.val();
//     console.log(boodedSlotData);
//     // write green slot logic here
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

import { db } from "./firebase.mjs";
import {
  get,
  ref,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

var bookedSlotRef = ref(db, "booked_slot");
var boodedSlotData;

get(bookedSlotRef)
  .then((snapshot) => {
    boodedSlotData = snapshot.val();
    // console.log(boodedSlotData);
    markBookedSlots(boodedSlotData);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function markBookedSlots(boodedSlotData) {
  // Iterate over each slot in the HTML and check if it's booked
  for (let key in boodedSlotData) {
    const slotNumber = boodedSlotData[key].selectSlots;
    const vehicleType = boodedSlotData[key].vehicleType;

    // Check if the slot number exists and the vehicle type is '2-wheeler'
    if (slotNumber && vehicleType === "2-wheeler") {
      const slotId = `two-wheeler-slot-${slotNumber}`;
      const slotElement = document.getElementById(slotId);
      if (slotElement) {
        // Add green background color to the booked slot
        slotElement.style.backgroundColor = "green";
      }
    } else if (slotNumber && vehicleType === "4-wheeler") {
      const slotId = `four-wheeler-slot-${slotNumber}`;
      const slotElement = document.getElementById(slotId);
      if (slotElement) {
        // Add green background color to the booked slot
        slotElement.style.backgroundColor = "green";
      }
    }
  }
}
