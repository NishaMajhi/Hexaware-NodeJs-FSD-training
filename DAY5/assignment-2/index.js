const { getCustomerRequestQueue } = require("./queueExample")
const { getBrowserHistoryStack } = require("./stackExample")

console.log("------------Queue---------------")
getCustomerRequestQueue()
console.log("---------Stack---------------")
getBrowserHistoryStack()