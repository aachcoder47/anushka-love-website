import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				love: {
					light: '#FFDEE2',
					DEFAULT: '#FF6B8B',
					dark: '#FF4370'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				heartbeat: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				flyAway: {
					'0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
					'100%': { transform: 'translateX(300px) translateY(-300px)', opacity: '0' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideIn: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				confetti: {
					'0%': { transform: 'translateY(0) rotate(0)', opacity: '1' },
					'100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'grow': {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' }
				},
				'bounce-subtle': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'fly-away': {
					'0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translate(calc(100px - 200px * Math.random()), -150px) scale(0) rotate(360deg)', opacity: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(255, 107, 139, 0.4)' },
					'50%': { boxShadow: '0 0 15px rgba(255, 107, 139, 0.8), 0 0 20px rgba(255, 107, 139, 0.4)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'fly-away': 'fly-away 1s forwards',
				'pulse-glow': 'pulse-glow 2s infinite',
				'fade-in': 'fadeIn 1s forwards',
				'slide-in': 'slideIn 0.8s forwards',
				'confetti': 'confetti 4s linear forwards',
				'fade-in-fast': 'fade-in 0.5s ease-out forwards',
				'fade-out-fast': 'fade-out 0.5s ease-out forwards',
				'grow': 'grow 0.5s ease-out forwards',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite'
			},
			backgroundImage: {
				'love-gradient': 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
				'pink-gradient': 'linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)',
				'soft-pink': 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
				'pink-blue': 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 50%, #d4e4fd 100%)',
				'pink-love': 'linear-gradient(90deg, hsla(341, 91%, 86%, 1) 0%, hsla(338, 100%, 76%, 1) 100%)',
				'purple-pink': 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 71%, 1) 100%)',
				'sunset': 'linear-gradient(to top, #ff758c 0%, #ff7eb3 100%)'
			},
			textShadow: {
				sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
				DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.1)',
				lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
			},
			boxShadow: {
				'love': '0 4px 14px 0 rgba(255, 107, 139, 0.39)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
