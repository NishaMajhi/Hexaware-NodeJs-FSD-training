require('dotenv').config();

const { getDeptData, insertDeptData, deleteDeptData } = require("./src/controller/deptController")
const { getEmpData, insertEmpData } = require("./src/controller/employeeController")

const department = async () => {

    await insertDeptData({ dept_no: 40, d_name: "software developer", loc: "Pune" })

    await deleteDeptData(10)

    const deptArray = await getDeptData()
    if (deptArray.length > 0) {
        console.log("------------dept--------------")
        for (let item of deptArray) {
            console.log(item.dept_no, item.d_name, item.loc)
        }
    }
}

department()

const employee = async () => {

    await insertEmpData({ emp_id: 2, emp_name: "Nisha" })

    const empArray = await getEmpData()
    if (empArray.length > 0) {
        console.log("------------emp--------------")
        for (let item of empArray) {
            console.log(item.emp_id, item.emp_name)
        }
    }
}

employee()