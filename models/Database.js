const mongoose = require("mongoose");

class DataBaseConfig {
  constructor() {
    if (!DataBaseConfig.instance) {
      this.ConnectToDb();
      DataBaseConfig.instance = this;
    }
  }
  ConnectToDb = async () => {
    console.log(`[+] Connecting to DataBase`);
    mongoose
      .connect("mongodb://mongodb:27017/Image_Uploader_v1") /* Here be careful with the database service name */
      .then(() => {
        console.log("[+] MongoDB Connection Succeeded. ");
      })
      .catch((err) => {
        console.log("[-] Error in DB connection: " + err);
      });
  };
}
module.exports.mydb = new DataBaseConfig();
