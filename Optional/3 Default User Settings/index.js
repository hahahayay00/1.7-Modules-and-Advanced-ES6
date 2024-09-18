// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const userSettings = {
    theme: null,
    fontSize: "large",
    notifications: undefined
};
const theme = userSettings.theme ?? "light";
const fontSize = userSettings.fontSize ?? "medium";
const notifications = userSettings.notifications ?? true;