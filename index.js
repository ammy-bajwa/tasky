const electron = require("electron");
const path = require("path");

const { app, BrowserWindow, Tray } = electron;

let mainBrowserWindow, tray;

app.on("ready", () => {
  mainBrowserWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    height: 500,
    show: false,
    resizable: false,
    width: 300
  });

  mainBrowserWindow.loadURL(`file://${__dirname}/src/index.html`);

  const iconName =
    process.platform === "win32" ? "windows-icon.png" : "iconTemplate.png";

  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  tray = new Tray(iconPath);

  tray.on("click", () => {
    if (mainBrowserWindow.isVisible()) {
      mainBrowserWindow.hide();
    } else {
      mainBrowserWindow.show();
    }
  });
});
