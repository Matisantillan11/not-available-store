import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      "@root": path.resolve(__dirname, './src'),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@UI": path.resolve(__dirname, './src/UI'),
      "@locale": path.resolve(__dirname, './src/modules/common/locale')     
    
    }
  }
})
