# New money ideas (built 2026-11-03)

## The 10 ideas, ranked by speed to first dollar at $0 cost
| # | Idea | Where the money comes from | Verdict |
|---|------|----------------------------|---------|
| 1 | **Puzzle books on Amazon KDP** | Amazon search traffic buys paperbacks, ~$2.50 royalty each | **BUILT** (2 books) |
| 2 | **Free money-tools website** | Search traffic → links to your Gumroad products; ads later | **BUILT** (6 pages) |
| 3 | **Original browser game on itch.io** | Pay-what-you-want downloads + tips, itch has its own browse traffic | **BUILT** (Lantern Drift) |
| 4 | More KDP titles from the same generators (seniors word search, Easter, kids' mazes, Bible word search) | Same as #1, each title is another lottery ticket | Next, ~20 min each |
| 5 | Game asset packs on itch.io (UI icons, backgrounds) | Indie devs pay $2-10 per pack | Good follow-up |
| 6 | Free Firefox / Edge browser extension (free to list) with "support" link | Tips, funnels to Gumroad | Possible, slow |
| 7 | Kindle ebook versions of the money guides | KDP ebook royalties 70% | Possible, low volume |
| 8 | Notion / Google Sheets template gallery listings (free directories) | Funnels to Gumroad | Cheap win, small |
| 9 | Paid GitHub bounties (Claude fixes issues for cash) | Bounty payouts | **Dropped**: bounty boards are flooded with spam and AI-slop PRs, maintainers ban it |
| 10 | Medium / blog Partner Program articles | Per-read payouts | **Dropped** for now: needs Stripe in an eligible country and lots of writing to pay anything |

## What's ready
- `kdp/` → `christmas-word-search/` and `large-print-sudoku/` each with `interior.pdf` + `cover.pdf`; listing copy in `kdp/KDP-LISTINGS.md`.
- `money-tools-site/` → static site (index, invoice generator, freelance rate, debt snowball vs avalanche, savings goal, Christmas budget). Tested in Chromium, no errors, mobile OK. Every page has one honest link to the matching Gumroad product.
- `itch-game/` → `index.html` (the whole game), `lantern-drift-html5.zip` (upload this), `images/` (630x500 cover + 3 screenshots).

## Publishing plan (done by Claude via Remote Control on your PC, once you OK it)
1. **Website** → GitHub Pages on your existing GitHub account (`ChietruProgramatoru`), repo `free-money-tools`. URL will be `https://chietruprogramatoru.github.io/free-money-tools/`. Then submit to Google Search Console, add to Pinterest pins.
2. **KDP** → you create a KDP account once (kdp.amazon.com, your Amazon login) and finish the Tax Interview + bank details. Claude uploads both books. Amazon reviews in up to 72 hours.
3. **itch.io** → you sign up once (itch.io/register). Claude creates the page: HTML5 playable in browser, "No payments required, donations welcome" at a suggested $2.

## itch.io page copy
- **Title:** Lantern Drift
- **Short description:** Guide a paper lantern through the night sky. One button, cozy vibes, one more try.
- **Genre:** Arcade · **Tags:** one-button, casual, cozy, arcade, endless, relaxing, mobile-friendly, high-score
- **Kind:** HTML, "This file will be played in the browser", viewport 480 x 800, enable "Mobile friendly" + fullscreen button.
- **Pricing:** No payments required, suggested donation $2.
- **Description:**
> Hold to rise on warm air, let go to drift down. Steer your paper lantern through a starry night, catch fireflies to keep your flame alive, and dodge branches, rain clouds and swooping crows.
>
> - Plays in your browser, on desktop or phone
> - Chain fireflies for combo points
> - Wind gusts, rain and crows keep every run different
> - Your best score is saved
>
> Controls: hold mouse / touch / Space to rise. Move the mouse or your finger to steer.
>
> If you enjoyed it, a small tip helps me make more little games. Thank you!

## Honest expectations
Each of these is a small, slow-building stream: realistically $0-30 in the first month across all three, more as the KDP catalog grows and the site gets indexed. The Christmas book has the best short-term shot because December is its season.
