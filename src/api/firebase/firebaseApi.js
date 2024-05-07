const {
  query,
  where,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
  limit,
} = require("firebase/firestore");
const { store } = require("./index.js");

const setAquariumTemperature = async ({ id, bright, temperature }) => {
  try {
    console.log("\ntemperature: ", temperature);
    console.log("\nbright: ", bright);
    updateDoc(doc(store, "aquariums", `${id}`), {
      temperature: temperature,
      bright: bright,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  setAquariumTemperature,
};
