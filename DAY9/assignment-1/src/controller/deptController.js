const { connection } = require("../database/connectDB");

const getDeptData = async () => {
    try {

        const connect = await connection();

        if (!connect) {
            throw new Error("Failed to establish connection to the database.");
        }

        const [rows] = await connect.query("SELECT * FROM dept");

        await connect.end();

        return rows;

    } catch (error) {
        console.error("Error while fetching department data:", error.message);
        throw error;
    }
};

const insertDeptData = async (input) => {
    try {
        const { dept_no, d_name, loc } = input

        const connect = await connection();

        if (!connect) {
            throw new Error("Failed to establish connection to the database.");
        }

        const [rows] = await connect.execute("INSERT INTO dept (dept_no, d_name,loc) VALUES (?, ?, ?)", [dept_no, d_name, loc]);

        await connect.end();

    } catch (error) {
        console.error("Error while inserting department data:", error.message);
        throw error;
    }
}


const deleteDeptData = async (dept_no) => {
    try {

        const connect = await connection();

        if (!connect) {
            throw new Error("Failed to establish connection to the database.");
        }

        const [rows] = await connect.execute("DELETE FROM dept WHERE dept_no = ?", [dept_no]);

        await connect.end();

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