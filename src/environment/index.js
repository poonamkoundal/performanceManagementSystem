/*
 * @file: index.js
 * @description: It Contain environment variables.
 * @date: 04.07.2018
 * @author: 
 */

const local = {
    apiUrl: 'http://172.24.0.218:3000/api/v1',
    socketUrl: 'http://172.24.0.218:3000'
};
const production = {
    apiUrl: 'https://ba49e75e.ngrok.io/api/v1',
    socketUrl: 'https://ba49e75e.ngrok.io'
};

if (process.env.NODE_ENV === 'production') {
    module.exports = production;
} else {
    module.exports = local;
}