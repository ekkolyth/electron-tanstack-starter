import { app, BrowserWindow, protocol, net } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import electronSquirrelStartup from 'electron-squirrel-startup';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (electronSquirrelStartup) {
  app.quit();
}

// Custom protocol with V8 code caching — production JS is compiled once and
// cached as bytecode, eliminating the parse+compile cost on subsequent launches.
// Must be registered before app.whenReady().
if (!MAIN_WINDOW_VITE_DEV_SERVER_URL) {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: 'app',
      privileges: {
        standard: true,
        secure: true,
        supportFetchAPI: true,
        codeCache: true,
      },
    },
  ]);
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL('app://./index.html');
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Register protocol handler to serve renderer files via app:// scheme
  if (!MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    const rendererPath = path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}`);
    protocol.handle('app', (req) => {
      const url = new URL(req.url);
      const filePath = path.join(rendererPath, url.pathname);
      return net.fetch(`file://${filePath}`);
    });
  }

  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
