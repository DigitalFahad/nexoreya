import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
const eslintConfig = [...nextVitals, ...nextTypescript, { ignores: ['out/**', 'dist/**', 'test-results/**'] }];

export default eslintConfig;
