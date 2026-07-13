# Melbourne Commercial Property Lead Gen

A lead generation landing page for commercial property investment in Melbourne. Visitors can use interactive ROI, rental yield, loan repayment, and cash flow calculators, then submit their contact and investment details through a lead capture form. Submissions are sent instantly to a Telegram chat via the Telegram Bot API.

## Tech Stack

- Next.js (App Router) + React
- TypeScript
- Tailwind CSS with shadcn/ui components (Radix UI primitives)
- Telegram Bot API for lead notifications

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env.local` file with your Telegram credentials:
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token
   TELEGRAM_CHAT_ID=your_chat_id
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   npm start
   ```

## How it works

- `app/page.tsx` renders the landing page and calculators.
- `components/lead-capture-form.tsx` collects investor details.
- `app/api/lead/route.ts` validates the submitted form and forwards it as a formatted message to Telegram.
- `app/test-telegram` provides a simple page for verifying the Telegram integration is configured correctly.
