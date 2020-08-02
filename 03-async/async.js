const axios = require("axios");

class Ajax {
  static echo(data) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (data) {
          res(data);
        } else {
          rej(new Error("error"));
        }
      }, 500);
    });
  }

  static async get() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = { Ajax };
