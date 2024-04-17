require('dotenv').config();

const { getDeptData, insertDeptData, deleteDeptData } = require("./src/controller/deptController")

const department = async () => {

    const insertRecord = await insertDeptData({ dept_no: 10, d_name: "hr", loc: "Pune" })
    if (insertRecord) {
        console.log("Record inserted successfully--------------")
    } else {
        console.log("Error while inserting record---------------")
    }

    const recordDelete = await deleteDeptData(10)
    if (recordDelete) {
        console.log("Record deleted successfully--------------")
    } else {
        console.log("Error while deleting record-----------------")
    }

    const deptArray = await getDeptData()
    if (deptArray.length > 0) {
        console.log("------------dept--------------")
        for (let item of deptArray) {
            console.log(item.dept_no, item.d_name, item.loc)
        }
    }
}

department()

