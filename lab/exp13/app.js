// Needs MongoDB running locally (mongodb://127.0.0.1:27017) or an Atlas URI in MONGO_URI
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const students = client.db("college").collection("students");

    await students.deleteMany({});
    await students.insertOne({ name: "Asha", course: "CSE", marks: 88 });                       // Create
    await students.insertMany([{ name: "Ravi", course: "IT", marks: 75 }, { name: "Neha", course: "CSE", marks: 92 }]);
    console.log("All:", await students.find().toArray());                                      // Read
    console.log("CSE >80:", await students.find({ course: "CSE", marks: { $gt: 80 } }).toArray());
    await students.updateOne({ name: "Ravi" }, { $set: { marks: 80 } });                        // Update
    await students.deleteOne({ name: "Asha" });                                                // Delete
    console.log("After update/delete:", await students.find().sort({ marks: -1 }).toArray());
  } catch (e) { console.error(e); }
  finally { await client.close(); }
}
main();
