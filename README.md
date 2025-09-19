# LinguaCzech - Base MiniApp

A comprehensive Czech language learning platform built as a Base MiniApp, connecting learners with native speakers and providing curated learning resources.

## Features

### 🤝 Practice Partner Finder
- Connect with native Czech speakers and advanced learners
- Filter by proficiency level, interests, and availability
- Real-time conversation practice opportunities

### 📚 Curated Learning Resources
- Grammar guides, vocabulary lists, and exercises
- Categorized by difficulty level
- Premium content for advanced learners

### 📰 Personalized Content Aggregator
- Czech news, blogs, and podcasts
- Personalized recommendations based on interests
- Relevance scoring for better content discovery

### 🎬 Subtitled Media Hub
- Czech films, series, and YouTube channels
- Accurate subtitles for comprehension aid
- Cultural immersion through entertainment

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Base Integration**: MiniKit for Farcaster integration
- **OnchainKit**: Base ecosystem components
- **TypeScript**: Full type safety
- **Icons**: Lucide React

## Getting Started

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd linguaczech-miniapp
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
# Add your MiniKit and OnchainKit API keys
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main application page
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error boundary
│   └── providers.tsx      # MiniKit provider setup
├── components/            # Reusable UI components
│   ├── AppShell.tsx       # Main app layout with navigation
│   ├── ProfileCard.tsx    # User and partner profile cards
│   ├── ResourceCard.tsx   # Learning resource cards
│   ├── ContentCard.tsx    # Content suggestion cards
│   ├── MediaCard.tsx      # Media item cards
│   ├── Button.tsx         # Button component with variants
│   ├── Input.tsx          # Input component with validation
│   └── Dropdown.tsx       # Dropdown with single/multi select
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript type definitions
│   ├── utils.ts           # Utility functions
│   ├── constants.ts       # App constants
│   └── mock-data.ts       # Mock data for development
└── public/                # Static assets
```

## Design System

### Colors
- **Background**: `hsl(210, 50%, 95%)` - Light blue-gray
- **Primary**: `hsl(210, 90%, 50%)` - Bright blue
- **Accent**: `hsl(130, 70%, 45%)` - Green
- **Surface**: `hsl(0, 0%, 100%)` - White

### Typography
- **Display**: `text-3xl font-bold`
- **Heading**: `text-2xl font-semibold`
- **Body**: `text-base font-normal`

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Three variants (primary, secondary, outline)
- **Animations**: Smooth transitions with 200ms duration

## Business Model

### Subscription Tiers

**Free Tier**:
- Basic partner matching
- Limited resource access
- 5 connection requests per month
- Basic content suggestions

**Premium Tier ($5/month)**:
- Unlimited partner matching
- Full resource library access
- Unlimited connection requests
- Personalized content feed
- Advanced filtering options
- Priority support

## API Integration

The app is designed to integrate with:
- **Farcaster API**: User authentication and profile data
- **Base Network**: On-chain identity and transactions
- **Partner Matching Service**: Backend logic for partner recommendations
- **Content Aggregation API**: Czech news, blogs, and podcasts
- **Media API**: Subtitled Czech media content

## Development

### Adding New Features

1. **Define types** in `lib/types.ts`
2. **Create components** in `components/`
3. **Add mock data** in `lib/mock-data.ts`
4. **Implement UI** in `app/page.tsx`

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the design system tokens
- Implement mobile-first responsive design
- Use semantic color names from the design system

## Deployment

The app is optimized for deployment on Vercel or similar platforms that support Next.js 15.

1. **Build the application**:
```bash
npm run build
```

2. **Deploy to your preferred platform**
3. **Configure environment variables** in production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
