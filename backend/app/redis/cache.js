/**
 * @file            : cache.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
class UserRedis {
    /**
     * 
     * @param {Object} info 
     * @returns response or null
     */
  findAll = async (info) => {
    try {
      const res = await info.client.get(info.key);
      console.log("____________in redis " + res);
      return res;
    } catch (err) {
      return null;
    }
  };
}
module.exports = new UserRedis();
