// import axios from "axios";
// import { useQuery, useMutation } from "react-query";

// // Define your API endpoint
// const API_ENDPOINT = "https://api.example.com";

// // Define your API functions
// const getDatas = async () => {
//   const response = await axios.get(`${API_ENDPOINT}/datas`);
//   return response.data;
// };

// const createData = async (data: any) => {
//   const response = await axios.post(`${API_ENDPOINT}/datas`, data);
//   return response.data;
// };

// // Define your component
// const MyComponent = () => {
//   // Fetch data using useQuery
//   const { data, isLoading, error } = useQuery("datas", getDatas);

//   // Create data using useMutation
//   const createDataMutation = useMutation(createData);

//   const handleCreateData = async (data: any) => {
//     try {
//       await createDataMutation.mutateAsync(data);
//       // Data created successfully, do something
//     } catch (error) {
//       // Error occurred while creating data, handle it
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {/* Render your data */}
//       {data && data.map((item: any) => <div key={item.id}>{item.name}</div>)}

//       {/* Create new data */}
//       <button onClick={() => handleCreateData({ name: "New Data" })}>
//         Create Data
//       </button>
//     </div>
//   );
// };

// export default MyComponent;
