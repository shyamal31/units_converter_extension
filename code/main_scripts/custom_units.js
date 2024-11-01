// const getUnitByType = () => {
//   chrome.storage.sync.get(["unitByType"]).then((result) => {
//     return result;
//   });
// }
// /**
//  * @async
//  * @function setStoreVal
//  * @returns results of conversions
//  */
// const setStoreVal = async () => {
//   console.log("wertyuiuyfg");
//   const r = await chrome.storage.sync.set({ "key112": [{"key112": "value1112"}, {asd:23}] });
//   console.log(r);
// }

// const getStoredVal = async () => {
//   const r = await chrome.storage.sync.get(["key112"]);
//   console.log(r);
// }

// chrome.storage.sync.set({ key: value }).then(() => {
//   console.log("Value is set");
// });

// chrome.storage.sync.get(["key"]).then((result) => {
//   console.log("Value currently is " + result.key);
// });

const addCustomUnit = async (unitObject) => {
  const storedUnits = await getStoredUnits() ? await getStoredUnits() : []
  storedUnits.push(unitObject)
  console.log(storedUnits)
  return chrome.storage.sync.set({ customUnits: storedUnits })
}

const deleteCustomUnit = async (unitObject) => {
  const storedUnits = await getStoredUnits()
  const newStoredUnits = storedUnits.filter((u) => {
    return u.unit !== unitObject.unit
  })
  return chrome.storage.sync.set({ customUnits: newStoredUnits })
}

const getStoredUnits = async () => {
  return chrome.storage.sync.get(['customUnits']).then(result => {
    return result.customUnits ? result.customUnits : []
  })
}

const getAllUnits = async () => {
  const storedUnits = await getStoredUnits()
  console.log(storedUnits)
  if (!storedUnits || storedUnits.length === 0) {
    return UNITS
  }
  return UNITS.concat(storedUnits)
}

module.exports = { addCustomUnit, getStoredUnits, getAllUnits }
