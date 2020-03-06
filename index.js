const electron = require("electron");

const { app, BrowserWindow } = electron;

let mainBrowserWindow;

app.on("ready", () => {
  mainBrowserWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    height: 500,
    resizable: false,
    width: 300
  });

  mainBrowserWindow.loadURL(`file://${__dirname}/src/index.html`);
});
