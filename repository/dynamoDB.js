const AWS = require('aws-sdk')

AWS.config.update({
    region: "us-east-1", // replace the region value with the region in which
    // you created your DynamoDB table
});

const documentClient = new AWS.DynamoDB.DocumentClient()

module.exports = documentClient;