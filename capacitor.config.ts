import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'todo-app',
  webDir: 'build',
  server:{
    url: 'http://192.168.29.157:3000 ',
    cleartext: true
  }
};

export default config;
