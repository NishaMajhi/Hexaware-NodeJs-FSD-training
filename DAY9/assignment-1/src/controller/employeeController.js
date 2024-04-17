const { connection } = require("../database/connectDB");

const getEmpData = async () => {
    try {

        const connect = await connection();

        if (!connect) {
            throw new Error("Failed to establish connection to the database.");
        }

        const [rows] = await connect.query("SELECT * FROM emp");

        await connect.end();

        return rows;

    } catch (error) {
        console.error("Error while fetching employee data:", error.message);
        throw error;
    }
};


const insertEmpData = async (input) => {
    try {
        const { emp_id, emp_name } = input

        const connect = await connection();

        if (!connect) {
            throw new Error("Failed to establish connection to the database.");
        }

        const [rows] = await connect.execute("INSERT INTO emp (emp_id, emp_name) VALUES (?, ?)", [emp_id, emp_name]);

        await connect.end();

    } catch (error) {
        console.error("Error while inserting employee data:", error.message);
        throw error;
    }
}

module.exports = {
    getEmpData,
    insertEmpData
};