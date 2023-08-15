import React from "react";

function Table() {
  const headerCellStyle = { backgroundColor: "#CFD4ED" };
  const data = [
    {
      id: 1,
      email: "John",
      CarId: 25,
      start_rent_at: 10,
      finish_rent_at: 10,
      total_price: 20,
    },
    {
      id: 2,
      email: "Alice",
      CarId: 30,
      start_rent_at: 10,
      finish_rent_at: 10,
      total_price: 20,
    },
    {
      id: 3,
      email: "Bob",
      CarId: 28,
      start_rent_at: 10,
      finish_rent_at: 10,
      total_price: 20,
    },
  ];

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={headerCellStyle}>
              No
            </th>
            <th scope="col" style={headerCellStyle}>
              User Email
            </th>
            <th scope="col" style={headerCellStyle}>
              Car
            </th>
            <th scope="col" style={headerCellStyle}>
              Start Rent
            </th>
            <th scope="col" style={headerCellStyle}>
              Finish Rent
            </th>
            <th scope="col" style={headerCellStyle}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.email}</td>
              <td>{item.CarId}</td>
              <td>{item.start_rent_at}</td>
              <td>{item.finish_rent_at}</td>
              <td>{item.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
