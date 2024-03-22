import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        default: {
          primary: '#3498db', // Blue as main color
          'primary-5': '#e6f0fb',
          'primary-10': '#cce2f7',
          'primary-20': '#99c5ef',
          'primary-30': '#66a8e7',
          'primary-40': '#339be0',
          'primary-50': '#007bff', // Default shade of primary
          'primary-60': '#006ed1',
          'primary-70': '#0058ac',
          'primary-80': '#004184',
          'primary-90': '#002b5d',
          'primary-100': '#001437',
          secondary: '#6c757d', // Secondary color
          'secondary-10': '#f2f2f2',
          'secondary-20': '#e6e6e6',
          'secondary-30': '#bfbfbf',
          'secondary-40': '#999999',
          'secondary-50': '#6c757d', // Default shade of secondary
          'secondary-60': '#4d5560',
          'secondary-70': '#33383d',
          'secondary-80': '#1a1e21',
          'secondary-90': '#000000',
          'secondary-100': '#000000',
          neutral: '#6c757d', // Neutral color
          'neutral-10': '#f2f2f2',
          'neutral-20': '#e6e6e6',
          'neutral-30': '#bfbfbf',
          'neutral-40': '#999999',
          'neutral-50': '#6c757d', // Default shade of neutral
          'neutral-60': '#4d5560',
          'neutral-70': '#33383d',
          'neutral-80': '#1a1e21',
          'neutral-90': '#000000',
          'neutral-100': '#000000',
          success: '#28a745', // Success color
          'success-10': '#e6f5e2',
          'success-20': '#ccebcc',
          'success-30': '#99d699',
          'success-40': '#66c266',
          'success-50': '#28a745', // Default shade of success
          'success-60': '#1f8f3b',
          'success-70': '#196c2e',
          'success-80': '#114921',
          'success-90': '#0a260f',
          'success-100': '#051205',
          warning: '#ffc107', // Warning color
          'warning-10': '#fff8e5',
          'warning-20': '#ffedcc',
          'warning-30': '#ffd699',
          'warning-40': '#ffcc66',
          'warning-50': '#ffc107', // Default shade of warning
          'warning-60': '#e6a100',
          'warning-70': '#bf8c00',
          'warning-80': '#996600',
          'warning-90': '#735000',
          'warning-100': '#4d3300',
          info: '#17a2b8', // Info color
          'info-10': '#e5f7fa',
          'info-20': '#ccf0f5',
          'info-30': '#99e0eb',
          'info-40': '#66d0e1',
          'info-50': '#17a2b8', // Default shade of info
          'info-60': '#148ea3',
          'info-70': '#107280',
          'info-80': '#0c5966',
          'info-90': '#083d4d',
          'info-100': '#041f26',
          error: '#dc3545', // Error color
          'error-10': '#f7e6e9',
          'error-20': '#f0ccd3',
          'error-30': '#e199a7',
          'error-40': '#d2667b',
          'error-50': '#dc3545', // Default shade of error
          'error-60': '#c62a3e',
          'error-70': '#a62334',
          'error-80': '#821c29',
          'error-90': '#5c141e',
          'error-100': '#330a10',
        },
      },
    },
  },
  plugins: [],
};
export default config;
