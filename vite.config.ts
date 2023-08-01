/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        // coverage: {
        //   reporter: ['text', 'html'],
        //   exclude: [
        //     'node_modules/',
        //     'src/setupTests.ts',
        //   ],
        // },
      },
})


// /// <reference types="vitest" />
// import { defineConfig } from 'vite'

// export default defineConfig({
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './src/setupTests.ts',
//     coverage: {
//       reporter: ['text', 'html'],
//       exclude: [
//         'node_modules/',
//         'src/setupTests.ts',
//       ],
//     },
//   },
// });
