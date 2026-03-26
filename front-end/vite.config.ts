import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/granperfil/teste/',
  resolve: {
    alias: {
      // O '$' garante que o Vite não tente adicionar subcaminhos ao arquivo .css
      'swiper/css$': path.resolve(__dirname, 'node_modules/swiper/swiper.min.css'),
      'swiper/css/pagination$': path.resolve(__dirname, 'node_modules/swiper/modules/pagination.css'),
      'swiper/css/navigation$': path.resolve(__dirname, 'node_modules/swiper/modules/navigation.css'),
    },
  },
})
