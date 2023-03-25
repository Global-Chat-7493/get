/**
 * @function `user` - Get information about a user using Global Chat.
 * @param { number } [id] - The ID of the user.
 * @returns { object } - An object with information about the user.
 */

const axios = require("axios");

module.exports = async function user(id) {
    if(!id) return new SyntaxError("No user ID provided");
    if(!Number(id)) return new TypeError("Invalid user ID provided");

    let res;

    try {
        const request = await axios.get(`https://gc-api.wdh.gg/user?id=${id}`);

        res = request.data;
    } catch(err) {
        throw err;
    }

    return res;
}