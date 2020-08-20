const { MongoClient } = require("mongodb");

const url = "mongodb://localhost/issuetracker";

async function testWithCallbacks(callback) {
  console.log("\n--- testWithCallbacks ---");
  const client = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db();
    const collection = db.collection("employees");

    const employee = { id: 2, name: "B. Async", age: 16 };
    const result = await collection.insertOne(employee);
    console.log("Result of insert:\n", result.insertedId);

    const docs = await collection.find({ _id: result.insertedId }).toArray();
    console.log("Result of find:\n", docs);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

testWithCallbacks(function (err) {
  if (err) {
    console.log(err);
  }
  testWithAsync();
});
