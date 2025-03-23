# AI Agent Dashboard

A sophisticated AI chat application built with Next.js 15, featuring real-time conversations, advanced prompt caching, and intelligent tool orchestration powered by LangChain and Claude 3.5 Sonnet.

## Features

- 🤖 Advanced AI chat interface with Claude 3.5 Sonnet
- 🎨 Modern and responsive UI with Tailwind CSS
- 🔐 Authentication with Clerk
- 💾 Real-time data storage with Convex
- ⚡ Built with Next.js 15 and React 19
- 🌊 Advanced streaming responses with custom implementation
- 📱 Mobile-friendly design
- 🧠 Prompt caching for optimized token usage
- 🔧 Intelligent tool orchestration with LangGraph
- 🔄 Real-time updates and tool execution feedback
- 📚 Integration with various data sources via wxflows

## Tech Stack

- **Frontend Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: Convex
- **AI Integration**: LangChain, Claude 3.5 Sonnet
- **Data Integration**: IBM WxFlows
- **Type Safety**: TypeScript

## Prerequisites

Before you begin, you'll need:

- Node.js (Latest LTS version recommended)
- PNPM package manager (recommended) or NPM
- [Clerk Account](https://clerk.com) for authentication
- [Convex Account](https://convex.dev) for database
- [Anthropic API Key](https://anthropic.com) for Claude AI
- [IBM WxFlows Account](https://ibm.biz/wxflows-sonny) for data integration

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Convex Database
CONVEX_DEPLOYMENT=your_convex_deployment_id
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# Anthropic AI
ANTHROPIC_API_KEY=your_anthropic_api_key

# IBM WxFlows
WXFLOWS_APIKEY=your_wxflows_api_key
WXFLOWS_ENDPOINT=your_wxflows_endpoint
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-agent-dashboard.git
cd ai-agent-dashboard
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Set up your environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your credentials from Clerk, Convex, Anthropic, and WxFlows

4. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
ai-agent-dashboard/
├── app/                # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions and helpers
├── public/            # Static assets
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

## Features in Detail

### AI and Prompt Management
- Optimized token usage with prompt caching
- 4096 token context window management
- Tool-augmented responses
- Context-aware conversations

### Tool Integration
- WxFlows integration for data sources
- YouTube transcript support
- Google Books API integration
- Custom data source tooling

### Real-time Features
- Live updates with Convex
- Real-time tool interaction display
- Efficient message history tracking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org) for the amazing framework
- [Clerk](https://clerk.com) for authentication
- [Convex](https://convex.dev) for the real-time database
- [Anthropic](https://anthropic.com) for Claude AI
- [IBM WxFlows](https://ibm.biz/wxflows-sonny) for data integration
