/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'tm-Primary-1': '#F0EBFA',
        'tm-Primary-2': '#CFBBF4',
        'tm-Primary-3': '#B498E9',
        'tm-Primary-4': '#A688E1',
        'tm-Primary-5': '#976FE5',
        'tm-Primary-6': '#7F4FDA',
        'tm-Primary-7': '#6935CC',
        'tm-Primary-8': '#3C08A0',

        'tm-Secondary-1': '#FFDEEC',
        'tm-Secondary-2': '#F8A5C9',
        'tm-Secondary-3': '#F68FBC',
        'tm-Secondary-4': '#F479AF',
        'tm-Secondary-5': '#F363A2',
        'tm-Secondary-6': '#F14C94',
        'tm-Secondary-7': '##EF3687',
        'tm-Secondary-8': '#ED1F79',
         
        'tm-Neutral-1': '#FFFFFF',
        'tm-Neutral-2': '#FAF5F5',
        'tm-Neutral-3': '#E2E3FF',
        'tm-Neutral-4': '#777777',
        'tm-Neutral-5': '#10022D',
        
        'tm-Cheap-1': '#E2E2FF',
        'tm-Cheap-2': '#F4EFFC',
        'tm-Cheap-3': '#FED2E5',
        'tm-Cheap-4': '#D5E8FA',
        'tm-Cheap-5': '#F4F1D2',
        'tm-Cheap-6': '#AE85FD',       
        'tm-Cheap-7': '#CEECF7',
        'tm-Cheap-8': '#FAF5F5',
        'tm-Cheap-9': '#D3E1FD',
     
        Error: {
          DEFAULT: '#ED1F79',
        },
        Success: {
          DEFAULT: '#15AB24',
        },
        Disable: {
          DEFAULT: '#E3E3E3',
        },
        Grey: {
          DEFAULT: '#A4A4A4',
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate"),require("daisyui")],
}