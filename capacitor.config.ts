import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'todo-app',
  webDir: 'build',
  server:{
    url: 'https://todo-app-xoro-a7k7.vercel.app/ ',
    cleartext: true
  }
};

export default config;
