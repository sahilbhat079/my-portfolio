import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Ensure the slash at the beginning and end
});

// https://github.com/sahilbhat079/my-portfolio.git


