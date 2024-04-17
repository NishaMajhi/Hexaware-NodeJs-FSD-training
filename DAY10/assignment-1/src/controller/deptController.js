const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getDeptData = async () => {
    try {

        const departments = await prisma.dept.findMany()

        return departments

    } catch (error) {
        console.error("Error while fetching department data:", error.message);
        throw error;
    }
};

const insertDeptData = async (input) => {
    try {
        const { dept_no, d_name, loc } = input

        const insertDeptRecord = await prisma.dept.create({
            data: {
                dept_no,
                d_name,
                loc
            }
        })
        if (insertDeptRecord) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.error("Error while inserting department data:", error.message);
        throw error;
    }
}


const deleteDeptData = async (dept_no) => {
    try {

        const deletDeptRecord = await prisma.dept.delete({
            where: {
                dept_no
            }
        })
        if (deletDeptRecord) {
            return true;
        } else {
            return false
        }

    } catch (error) {
        console.error("Error while deleting department data:", error.message);
        throw error;
    }
}

module.exports = {
    getDeptData,
    insertDeptData,
    deleteDeptData
};