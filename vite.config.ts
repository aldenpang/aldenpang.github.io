
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 如果你的仓库名不是 aldenpang.github.io 而是子路径，请修改此处
});
