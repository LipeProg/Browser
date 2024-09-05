const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Carrega uma página web que voce especificar
  win.loadURL('https://iq-option.com/lp/mobile-registr/pt/?aff=41&afftrack=BT_BING_BR_PT_01_Brand_Web&msclkid=987ee0cab494114717818613265007de');

  // Abre as ferramentas de desenvolvimento (DevTools)
  //win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
