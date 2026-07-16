<<<<<<< HEAD
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> e6a0d9f5a81e16ed787cbb4bfa19de41c59bb98d
