<img width="1172" height="917" alt="image" src="https://github.com/user-attachments/assets/17b751d0-1806-4298-b64b-564efdbea978" /># Vaishnavi Shewale — Portfolio

Responsive React + Vite portfolio with a dark navy / neon pink visual theme and your uploaded portrait.
LIVE LINK: https://vaishnavi-portfolio-sand.vercel.app/
## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP and open the folder in VS Code.
3. In the terminal run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

## Build for deployment
```bash
npm run build
```
Upload the project to GitHub and import the repository into Vercel. Vercel will detect Vite automatically.

## Included
- Responsive portfolio sections and mobile navigation
- Your portrait at `public/vaishnavi.png`
- Resume PDF at `public/Vaishnavi_Shewale_Resume.pdf`
- Active LinkedIn, GitHub, email, phone, and navigation links
- Contact form that opens the visitor's email app (it does not send mail through a server)

## Before publishing
- Verify every resume detail and date, especially the current RetailPulse date and internship details.
- The FitScore and SafeSphere project cards currently link to your GitHub profile because individual repository URLs were not supplied. Replace their `link` values in `src/main.jsx` when you have the exact repositories.
- If you update your resume, replace the PDF in `public/` while keeping the same filename.


## Certificate placeholders
The certificate cards and internship certificate previews are clearly marked sample placeholders. Replace these SVG files in `public/certificates/` with your own genuine certificate images before publishing; do not present the samples as earned credentials.


## Latest design updates
- Header name uses matching bold weight and size for both first and last name.
- Internship Certificates heading is simplified; certificate previews are shown without extra descriptive text.
- Project technology chips match the supplied resume entries.
- Project and skills panels are larger; certificate previews use contain sizing so the full certificate image is visible.
- The downloadable resume was replaced with the resume PDF supplied by the user.


## Latest requested adjustment
- Internship certificate previews are now designed to fit beside the corresponding internship information block rather than appearing much taller.
- JavaScript has been removed from the visible skills/technology lists.


## Latest corrections
- Internship certificates are in the same row as their matching internship details and sized to fit that row, rather than using a tall separate column.
- Project summaries and bullet points now follow the wording supplied in the resume; project technology tags match each resume entry.
