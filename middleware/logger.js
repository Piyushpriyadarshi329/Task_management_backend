

const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'application.log' }),
    ],
  });


function log(req,res,next){

    logger.info(req.body)
    next()

}

module.exports= log