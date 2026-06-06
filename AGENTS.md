# AGENTS.md

## Project

Website project for Bear Essential Dog Care, a local mobile dog care business.

This website must help local dog owners understand the service, trust the business, and make a booking inquiry with as little friction as possible.

Treat every change as production-facing work for a real small business website.

## Primary Goals

- Build a professional, trustworthy, mobile-first website.
- Make the service feel convenient, safe, caring, local, and reliable.
- Help visitors quickly understand what Bear Essential Dog Care does.
- Make booking or contacting the business easy from every key page.
- Aim for Lighthouse scores of 95 to 100 for accessibility, performance, SEO, and best practices.
- Keep the site fast, clean, responsive, and easy to maintain.

## Business Context

Bear Essential Dog Care is a mobile dog care business.

The website should speak to:

- Local pet owners.
- Dog grooming clients.
- Busy families.
- Seniors.
- People who want convenient mobile pet care.
- Customers who care about comfort, safety, and reliable handling of their dog.

Use plain language. Avoid generic corporate copy.

Prioritize trust, comfort, convenience, local service, clear expectations, and easy booking.

## Design Direction

Use a clean, warm, friendly, professional design.

Requirements:

- Mobile-first layout.
- Strong spacing between sections.
- Large readable text.
- High contrast.
- Rounded cards where useful.
- Clear section hierarchy.
- Simple navigation.
- Clear repeated calls to action.
- Tap-friendly buttons and links.
- Professional pet care visuals without clutter.

Avoid:

- Busy layouts.
- Tiny text.
- Weak contrast.
- Stock-photo overload.
- Generic template styling.
- Hidden contact actions.
- Horizontal scrolling.
- Unnecessary animation.

## Content Standards

Write human, local-business copy.

Content should explain:

- What Bear Essential Dog Care does.
- Who the service is for.
- How the mobile service works.
- What areas are served.
- How customers book or request a visit.
- What customers can expect.
- How the business keeps dogs comfortable and safe.

Use short sections and clear headings.

Do not invent fake reviews, credentials, awards, years of experience, certifications, or unsupported claims.

## Recommended Pages or Sections

Use these unless the project structure already defines something better:

- Home
- Services
- Service Area
- About
- FAQ
- Contact or Book Now
- Testimonials, only if real testimonials are provided
- Privacy Policy, if a form collects customer information

## Home Page Priorities

The home page should include:

- Clear hero section.
- Business name.
- Service type.
- Location or service area.
- Primary call to action.
- Short explanation of the mobile benefit.
- Key services.
- How it works in 3 simple steps.
- Trust-building section.
- FAQ preview or common questions.
- Final booking call to action.

## Calls to Action

Use direct labels, such as:

- Book an Appointment
- Request a Visit
- Contact Bear Essential Dog Care
- Ask About Mobile Dog Care

Place calls to action in:

- Header or navigation.
- Hero section.
- Services section.
- Service area section.
- Contact section.
- Footer.

Contact details must be easy to find. Do not bury phone, email, or booking form access.

## Accessibility Requirements

Build toward WCAG-friendly, practical accessibility.

Requirements:

- Use semantic HTML.
- Use one clear H1 per page.
- Keep headings in logical order.
- Use descriptive link text.
- Use descriptive button labels.
- Use labels for all form fields.
- Add helper text where useful.
- Add clear error messages for form validation.
- Ensure all interactive elements work with keyboard navigation.
- Add visible focus states.
- Maintain strong colour contrast.
- Do not rely on colour alone to communicate meaning.
- Use descriptive alt text for meaningful images.
- Use empty alt text for decorative images.
- Respect prefers-reduced-motion.
- Avoid motion that could bother users.

Test at small mobile widths, including 320px.

## Performance Requirements

Keep the website lightweight.

Requirements:

- Avoid unnecessary JavaScript.
- Avoid large libraries unless clearly needed.
- Optimize all images.
- Use modern image formats where practical.
- Use correct image dimensions.
- Lazy-load non-critical images.
- Prevent layout shift.
- Keep above-the-fold content fast.
- Use efficient CSS.
- Prefer system fonts or carefully optimized web fonts.
- Do not add heavy animations.
- Keep third-party scripts to a minimum.

## SEO Requirements

Use local SEO naturally.

Requirements:

- Clear page titles.
- Useful meta descriptions.
- One strong H1 per page.
- Logical H2 and H3 structure.
- Clean URLs.
- Open Graph metadata.
- sitemap.xml.
- robots.txt.
- Structured data where appropriate.
- Prefer LocalBusiness, PetService, or service schema when relevant.
- Mention service area clearly.
- Use service keywords naturally.

Useful keywords may include:

- mobile dog care
- mobile pet care
- dog grooming
- dog washing
- nail trims
- local dog care
- dog care service area

Do not keyword stuff. Write for real customers first.

## Responsive Requirements

Design mobile first, then scale up.

Check these widths:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- Desktop widths

Requirements:

- Navigation must work well on phones.
- Buttons must be easy to tap.
- Forms must be easy to complete on mobile.
- Cards must stack cleanly.
- Images must resize without important subjects being awkwardly cropped.
- No horizontal scrolling.
- Footer must remain clean and readable.

## Forms

Forms should be simple and mobile-friendly.

Requirements:

- Use proper labels.
- Use useful placeholder text only as support, never as the only label.
- Keep required fields reasonable.
- Add clear validation.
- Show a clear success message after submission.
- Include privacy-aware wording if personal information is collected.
- Do not ask for unnecessary personal details.

Recommended fields:

- Name
- Phone or email
- Dog name
- Service needed
- General location or service area
- Message or notes

## Code Quality

Keep the code clean and maintainable.

Requirements:

- Use simple file structure.
- Use reusable components where helpful.
- Avoid duplicate styling.
- Use clear class names.
- Keep CSS organized.
- Remove unused code.
- Avoid overbuilding.
- Prefer simple solutions that improve launch quality.
- Do not add features that are not needed for the current website.

## Testing Checklist

Before finishing any task, check the affected pages for:

- Mobile layout issues.
- Desktop layout issues.
- Keyboard navigation.
- Visible focus states.
- Heading order.
- Missing alt text.
- Colour contrast issues.
- Form validation problems.
- Broken links.
- Console errors.
- Image sizing problems.
- Layout shift.
- Metadata issues.
- sitemap.xml and robots.txt accuracy.
- Open Graph preview basics.

When package scripts exist, run the relevant checks:

```bash
npm run lint
npm run build
```

If the project uses different scripts, inspect `package.json` and run the closest equivalent checks.

## Lighthouse Target

Use Lighthouse as the quality baseline.

Target scores:

- Performance: 95 to 100
- Accessibility: 95 to 100
- Best Practices: 95 to 100
- SEO: 95 to 100

If a score drops, explain what changed and what should be fixed.

## Development Priorities

When choosing between options, prioritize in this order:

1. Customer trust.
2. Mobile usability.
3. Accessibility.
4. Performance.
5. Local SEO.
6. Booking conversion.
7. Maintainability.
8. Visual polish.

Do not sacrifice clarity for design effects.

## Small Business Marketing Rules

Think like a local service business owner.

Every page should answer:

- What do you do?
- Where do you serve?
- Why should I trust you with my dog?
- How does mobile service work?
- What do I do next?

Use specific, helpful copy.

Avoid vague claims like:

- Best service in town
- Premium care guaranteed
- We do it all
- Trusted by everyone

Prefer clear claims like:

- Mobile dog care brought to your home.
- Simple booking for local dog owners.
- Gentle care focused on your dog’s comfort.
- Clear service options before you book.

## Privacy and Trust

If collecting customer details:

- Include a Privacy Policy page.
- Explain how contact form information is used.
- Do not collect unnecessary information.
- Do not expose form submissions publicly.
- Avoid tracking scripts unless needed.
- Make consent and contact expectations clear.

## Do Not Do

Do not:

- Add fake testimonials.
- Add fake credentials.
- Add unsupported claims.
- Add heavy JavaScript frameworks without need.
- Add animations that hurt usability.
- Hide contact information.
- Use vague CTA labels like “Learn More” when a clearer action is possible.
- Use images without proper sizing or alt handling.
- Create pages with thin or duplicate content.
- Break mobile layout to improve desktop appearance.

## Expected Output From Codex

For each task:

- Make focused changes.
- Keep the implementation simple.
- Explain what changed.
- List files changed.
- Mention checks run.
- Mention any checks that could not be run.
- Flag risks or follow-up items clearly.

Do not claim a check passed unless it was actually run.

## Suggested Commit Message Style

Use short, clear commit messages, such as:

- Improve mobile booking CTA layout
- Add local service area SEO metadata
- Optimize homepage dog care sections
- Improve contact form accessibility
- Add LocalBusiness structured data
- Fix mobile navigation spacing
- Improve image sizing and lazy loading
