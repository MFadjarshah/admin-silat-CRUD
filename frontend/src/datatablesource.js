export const memberColumns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "firstName", headerName: "First name", width: 140 },
  { field: "lastName", headerName: "Last name", width: 140 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 50,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 240,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "address", headerName: "Address", width: 240 },
];

//temporary data
// export const memberRows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35, address: "VK1 1-1" },
//   {
//     id: 2,
//     lastName: "Lannister",
//     firstName: "Cersei",
//     age: 42,
//     address: "VK2 1-2",
//   },
//   {
//     id: 3,
//     lastName: "Lannister",
//     firstName: "Jaime",
//     age: 45,
//     address: "VK3 2-1",
//   },
//   {
//     id: 4,
//     lastName: "Stark",
//     firstName: "Arya",
//     age: 16,
//     address: "VK4 2-2",
//   },
//   {
//     id: 5,
//     lastName: "Targaryen",
//     firstName: "Daenerys",
//     age: null,
//     address: "VK5 3-1",
//   },
//   {
//     id: 6,
//     lastName: "Melisandre",
//     firstName: null,
//     age: 150,
//     address: "VK5 4-2",
//   },
//   {
//     id: 7,
//     lastName: "Clifford",
//     firstName: "Ferrara",
//     age: 44,
//     address: "Mutiara 1-1",
//   },
//   {
//     id: 8,
//     lastName: "Frances",
//     firstName: "Rossini",
//     age: 36,
//     address: "Mutiara 4-1",
//   },
//   {
//     id: 9,
//     lastName: "Roxie",
//     firstName: "Harvey",
//     age: 65,
//     address: "Mutiara 3-3",
//   },
// ];

// Fetch data from the API endpoint
export const memberRows = async () => {
  try {
    const response = await fetch("http://localhost:8081/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// To test the fetch data
// export const memberRows = async () => {
//   try {
//     const response = await fetch("http://localhost:8081/");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log("Fetched data:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };

// Call the function for testing purposes
memberRows();
