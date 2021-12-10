/**
 * @file            : logger.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
 const {
    createLogger,
    transports,
    format } = require('winston');
/**
 * @description createLogger method of winston is used to generate log messages
 * transports defines storage path, it can be configured at various levels
 */
const logger = createLogger({
    level: 'info',
    format: format.combine(format.timestamp({format:"MMM-DD-YYYY HH:mm:ss"}), format.json()),
    transports: [
        new transports.File({ filename: 'logs/Error_Logs_For_Date '+ new Date().toLocaleDateString().replace(/\D/g, '-')+'.log', level: 'error' }),
    ],
});

module.exports = logger; 