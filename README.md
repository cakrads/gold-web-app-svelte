# Gold Daily / Emas Terkini

This is simple application to show the latest Gold price. It is bootstrapped with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

[![Gold Daily](./static/images/screenshot/home-screenshot.png)](https://gold-web-app-sveltekit.vercel.app)

## Tech Stack

- **Framework:** [Sveltekit](https://kit.svelte.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **Database** [PlanetScale](https://planetscale.com)
- **Chart** [LayerCake](https://layercake.graphics)

## Features to be implemented
### As a User View

- [x] User can see the latest gold price
- [x] User can see history gold price
- [x] User can filter history gold price
- [x] User can see variant gold price today
- [ ] User can get daily notification for updated gold price 
- [ ] User can input gold they have
- [ ] User can see list gold they have with the total
- [ ] Users can see the profit of gold they have
### As a Development View
- [x] Implement **Dark and Light Theme**
      `script location: src\lib\components\nav\theme.svelte`
- [x] Use **svelte/store** to handle state
      `script location: src\lib\stores\main-info.ts`
- [x] Use **drizzle-orm** to handle ORM
      `script location: src\lib\db\\* and scr\lib\services\\*`
- [x] Use **planet-scale** to save data
- [x] Use **layer-cake** to showing the Price History Chart
      `script location: src\lib\components\chart\\*`
- [x] Create daily scraping to get the daily gold price with
      `script location: src\routes\api\generate\\+server.ts`
- [x] Use **cheerio** for scraping
      `script location: src\routes\api\generate\scrap*.ts`
- [x] Use [cron-job](https://cron-job.org) to run scraping script daily
- [ ] Impement Two Language, Bahasa and English
- [ ] Impement push notification
- [ ] Use **?????** to handle and maintain push notification
- [ ] Implement PWA
- [ ] Using **?????** methodology to handle cache (PWA)
- [ ] Get over 90 in Lighthouse Performance web and mobile
- [ ] Get over 90 in Lighthouse Accessibility web and mobile
- [ ] Get over 90 in Lighthouse Best Practice web and mobile
- [ ] Get over 90 in Lighthouse SEO web and mobile
- [ ] Impement and Create Unit Test
- [ ] Use **?????** to unit test

## Running Locally

1. Clone the repository

```bash
git clone https://github.com/sadmann7/skateshop.git
```

2. Install dependencies using pnpm

```bash
pnpm install
```

3. Copy the `.env.example` to `.env` and update the variables.

```bash
cp .env.example .env
```

4. Start the development server

```bash
pnpm run dev
```

5. Push the database schema

```bash
pnpm run db:push
```
6. Setup VS Code for svelte development
- Install ***latest VS Code***
- Install Plugin: ***Svelte : extensions for svelte***
- Install Plugin: ***Svelte for VS Code***

## Generate History Gold Price
1. Setup for geting gold price in dollar
a. Access [https://data-asg.goldprice.org/GetDataHistorical/USD-XAU/0](https://data-asg.goldprice.org/GetDataHistorical/USD-XAU/0)
b. Copy the result and paste to key `data` in file `src/routes/api/generate-history/data-gold-en.json`
2. Setup for getting gold price in rupiah
a. Access [https://www.logammulia.com/id/harga-emas-hari-ini](https://www.logammulia.com/id/harga-emas-hari-ini)
b. Then in Network dev-tools, choose `https://www.logammulia.com/data-base-price/gold/sell?_token=[TOKEN]`.
c. Copy the result and paste to key `data` in file `C:\xampp2\htdocs\emasku\app\src\routes\api\generate-history\data-antam.json`
3. Run the project and access `localhost:4000/api/generate-history`

## How do I deploy this?

Follow the deployment guides for [Vercel](https://vercel.com/docs/frameworks/sveltekit)


