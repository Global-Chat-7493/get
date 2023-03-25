/**
 * @function `guild` - Get information about a guild using Global Chat.
 * @param { number } [id] - The ID of the guild.
 * @returns { object } - An object with information about the guild.
 */

const axios = require("axios");

module.exports = async function guild(id) {
    if(!id) return new SyntaxError("No guild ID provided");
    if(!Number(id)) return new TypeError("Invalid guild ID provided");

    let res;

    try {
        const request = await axios.get(`https://gc-api.wdh.gg/guild?id=${id}`);

        res = request.data;
    } catch(err) {
        throw err;
    }

    return res;
}