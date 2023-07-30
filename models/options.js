const pool = require("../db");

const getOptions = async () => {
  const query = "SELECT * FROM option";
  const { rows } = await pool.query(query);
  return rows;
};

const changeDisabled = async (option) => {
  const query1 = `SELECT disabled FROM option WHERE id = ${option.id}`;
  const { rows } = await pool.query(query1);

  // Check if the rows array has any results
  if (rows.length === 0) {
    throw new Error("Option not found"); // Handle the case when the option with the given id is not found
  }

  const { disabled } = rows[0]; // Get the value of 'disabled' field from the first row

  let value;
  if (disabled) {
    value = false;
  } else {
    value = true;
  }

  const query2 = `UPDATE option SET disabled = ${value} WHERE id = ${option.id} RETURNING *`;
  const updatedRow = await pool.query(query2);

  return updatedRow.rows[0];
};

module.exports = {
  getOptions,
  changeDisabled,
};
