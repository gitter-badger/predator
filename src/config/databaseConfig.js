let cassandra = require('cassandra-driver');
let config = {
    type: process.env.DATABASE_TYPE,
    name: process.env.DATABASE_NAME,
    address: process.env.DATABASE_ADDRESS,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    cassandraReplicationFactor: process.env.CASSANDRA_REPLICATION_FACTOR || 1,
    cassandraConsistency: process.env.CASSANDRA_CONSISTENCY || cassandra.types.consistencies.localOne,
    sqlite_storage: process.env.SQLITE_STORAGE
};

module.exports = config;