const { MongoClient } = require('mongodb');

async function seed() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testdb');
    const users = db.collection('User');

    // 清空原有資料
    await users.deleteMany({});

    // 插入新資料
    await users.insertMany([
      { username: 'Alice', email: "alice@gmail.com" }
    ]);

    console.log('Seed 完成');
  } catch (err) {
    console.error('Seed 失敗:', err);
  } finally {
    await client.close();
  }
}

seed();