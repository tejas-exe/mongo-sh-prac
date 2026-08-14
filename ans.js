// 🟢 Fundamentals

const { db } = require("./src/models/SuperCar");

// 1. Count orders
// Find the total number of orders in the collection.
// db.orders.aggregate([
//     {$group:{_id:"",count:{$sum:1}}},
//     {$project:{_id:0,count:1}}
// ])
// db.orders.aggregate([
//     {$count:"total orders"}
// ])
// -----------------------------------------------------------------------------------------------------------------

// 2. Orders by status
// Find how many orders exist for each status.
// db.orders.aggregate([
//     {$group:{_id:"$status",count_of_orders:{$sum:1}}}
// ])
// -----------------------------------------------------------------------------------------------------------------

// 3. Orders by payment method
// // Find the number of orders for each payment method.
// db.orders.aggregate([
//   { $group: { _id: "$payment.method", count: { $sum: 1 } } },
//   {
//     $project: {
//       _id: 0,
//       payment_method: "$_id",
//       count_of_methods: "$count",
//     },
//   },
// ]);

// -----------------------------------------------------------------------------------------------------------------
// 4. Delivered orders
// Return only orders whose status is "Delivered".
// db.orders.aggregate([
//     {$match:{status:"Delivered"}}
// ])

// -----------------------------------------------------------------------------------------------------------------

// 5. Paid orders
// Find how many orders have a payment status of "Paid".
// db.orders.aggregate([
//   { $match: { "payment.status": "Paid" } },
//   { $count: "no_orders_paid" },
// ]);

// -----------------------------------------------------------------------------------------------------------------
// 6. Orders by city
// Find the number of orders placed by customers from each city.
// db.orders.aggregate([
//   {
//     $group: {
//       _id: "$customer.city",
//       count:{$sum:1}
//     },
//   },
// ]);

// -----------------------------------------------------------------------------------------------------------------

// 7. Total quantity sold
// Find the total quantity of products sold across all orders each.
// Remember that an order can contain multiple items.
// db.orders.aggregate([
//   { $unwind: "$items" },
//   {
//     $group: {
//       _id:null,
//       total: { $sum: "$items.quantity" },
//     },
//   },
// ]);

// -----------------------------------------------------------------------------------------------------------------
// 8. Total revenue
// Calculate the total revenue generated from all orders.
// db.orders.aggregate([
//     {$unwind:"$items"},
//     {$group:{_id:null, totalCost:{$sum:{$multiply:["$items.price","$items.quantity"]}}}}
// ])

// -----------------------------------------------------------------------------------------------------------------
// 9. Revenue by order
// Calculate the total value of every individual order.
// db.orders.aggregate([
//   { $unwind: "$items" },
//   {
//     $group: {
//       _id: "$orderId",
//       totalOrderVal: {
//         $sum: { $multiply: ["$items.price", "$items.quantity"] },
//       },
//     },
//   },
// ]);

// -----------------------------------------------------------------------------------------------------------------

// 10. Average order value
// Calculate the average value of an order.
// db.orders.aggregate([
//   { $unwind: "$items" },
//   {
//     $group: {
//       _id: "$orderId",
//       avgOrderPrice: {
//         $sum: { $multiply: ["$items.price", "$items.quantity"] },
//       },
//     },
//   },
//   {$group:{_id:null,avgOrderValue:{$avg:"$avgOrderPrice"}}}
// ]);

// -----------------------------------------------------------------------------------------------------------------
// 11. Minimum and maximum order value
// Find:
// highest order value
// lowest order value
// average order value
// db.orders.aggregate([
//   { $unwind: "$items" },
//   {
//     $group: {
//       _id: "$orderId",
//       total: {
//         $sum: { $multiply: ["$items.price", "$items.quantity"] },
//       },
//     },
//   },
//   {
//     $group: {
//       _id: null,
//       min: { $min: "$total" },
//       max: { $max: "$total" },
//       avg: { $avg: "$total" },
//     },
//   },
// ]);
// -----------------------------------------------------------------------------------------------------------------
// 12. Revenue by payment method
// Calculate the total revenue generated through:
// UPI
// Credit Card
// Debit Card
// db.orders.aggregate([
//   { $unwind: "$items" },
//   {
//     $group: {
//       _id: "$payment.method",
//       total: {
//         $sum: {
//           $multiply: ["$items.price", "$items.quantity"],
//         },
//       },
//     },
//   },
// ]);
