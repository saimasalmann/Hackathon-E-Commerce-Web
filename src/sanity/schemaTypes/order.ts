// export const orderSchema ={
//     name: "order",
//     title: "Order",
//     type: "document",
//     fields: [
//       {
//         name: "customerName",
//         title: "Customer Name",
//         type: "string",
//       },
//       {
//         name: "email",
//         title: "Email",
//         type: "string",
//       },
//       {
//         name: "phone",
//         title: "Phone Number",
//         type: "string",
//       },
//       {
//         name: "address",
//         title: "Shipping Address",
//         type: "string",
//       },
//       {
//         name: "city",
//         title: "City",
//         type: "string",
//       },
//       {
//         name: "postalCode",
//         title: "Postal Code",
//         type: "string",
//       },
//       {
//         name: "items",
//         title: "Items",
//         type: "array",
//         of: [
//           {
//             type: "object",
//             fields: [
//               { name: "productName", title: "Product Name", type: "string" },
//               { name: "price", title: "Price", type: "number" },
//               { name: "quantity", title: "Quantity", type: "number" },
//               { name: "image", title: "Image", type: "url" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "totalAmount",
//         title: "Total Amount",
//         type: "number",
//       },
//     ],
//   };
  
export const orderSchema ={
  name: "order",
  type: "document",
  title: "Orders",
  fields: [
    { name: "customerName", type: "string", title: "Customer Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "phone", type: "string", title: "Phone" },
    { name: "address", type: "string", title: "Address" },
    { name: "city", type: "string", title: "City" },
    { name: "postalCode", type: "string", title: "Postal Code" },
    { name: "items", type: "array", of: [{ type: "object", fields: [{ name: "productName", type: "string" }] }] },
    { name: "totalAmount", type: "number", title: "Total Amount" },
    { name: "status", type: "string", title: "Status", options: { list: ["pending", "shipped", "delivered"] } },
  ],
};
