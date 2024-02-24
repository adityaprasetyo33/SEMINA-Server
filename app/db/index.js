// import package mongoose
const mongoose = require("mongoose");

// import konfigurasi mongoDB dari app/config.js
const { urlDb } = require("../config");

// connect ke mongoDB menggunakan konfigurasi yang telah diimport
mongoose.connect(urlDb);

// simpan koneksi dalam constant db
const db = mongoose.connection;

// export db
module.exports = db;
