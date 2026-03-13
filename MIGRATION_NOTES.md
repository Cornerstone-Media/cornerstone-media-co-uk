# Domain Migration Checklist — cornerstone-media.co.uk

## GoDaddy
- [ ] Point DNS for cornerstone-media.co.uk to the new hosting/deployment (update A record or CNAME)
- [ ] Set up a 301 redirect from cornerstonemedialtd.com → cornerstone-media.co.uk at the domain level (via GoDaddy domain forwarding)
- [ ] Also set up 301 redirect from cornerstonemedia.com → cornerstone-media.co.uk if you own that domain
- [ ] Confirm SSL certificate is active on cornerstone-media.co.uk before going live
- [ ] Allow up to 48 hours for DNS propagation
- [ ] Test in an incognito browser once DNS has propagated

## Google Search Console
- [ ] Add cornerstone-media.co.uk as a new property (use Domain property type for full coverage)
- [ ] Verify ownership using the meta tag in `<head>` — replace `[GSC_VERIFICATION_CODE]` with your code
- [ ] Submit the new sitemap: `https://cornerstone-media.co.uk/sitemap.xml`
- [ ] Use the Change of Address tool in GSC on the old property (cornerstonemedialtd.com) to notify Google
- [ ] Monitor indexing status daily for the first 2 weeks
- [ ] Check for crawl errors and fix any 404s that appear

## Google Analytics / GA4
- [ ] Update the website URL in your GA4 property settings
- [ ] Verify that GTM container (GTM-PQ847N3G) is firing correctly on the new domain
- [ ] Add cornerstone-media.co.uk to referral exclusion list if needed
- [ ] Test conversion tracking (form submissions, phone clicks)

## Google Business Profile
- [ ] Update your website URL to https://cornerstone-media.co.uk
- [ ] Verify the new URL is reflected in your listing
- [ ] Update the `sameAs` array in the website's JSON-LD schema with your actual Google Business CID URL

## Bing Webmaster Tools
- [ ] Add cornerstone-media.co.uk as a new property
- [ ] Verify ownership using the meta tag placeholder in `<head>`
- [ ] Submit the sitemap

## Email Configuration (Resend / DNS)
- [ ] Add MX records for cornerstone-media.co.uk if using custom email
- [ ] Add DKIM TXT record for Resend: `resend._domainkey` pointing to your Resend DKIM value
- [ ] Add SPF TXT record if required
- [ ] Verify domain in Resend dashboard
- [ ] Update the `from` address in the edge function once domain is verified
- [ ] Test email delivery (contact form submission, auto-reply)

## Social Media Profiles
- [ ] Update website URL on LinkedIn company page
- [ ] Update website URL on Facebook page
- [ ] Update website URL on Instagram bio
- [ ] Update website URL on Twitter/X profile
- [ ] Add social profile URLs to the `sameAs` array in JSON-LD schema

## Yell.com / Directory Listings
- [ ] Update your Yell.com listing URL to cornerstone-media.co.uk
- [ ] Update any other directory listings (Yelp, FreeIndex, Thomson Local, etc.)
- [ ] Add Yell listing URL to `sameAs` array in JSON-LD schema

## Post-Migration Monitoring
- [ ] Check Google Search Console for indexing of new URLs (daily for 2 weeks)
- [ ] Monitor organic traffic in GA4 for any drops
- [ ] Verify all 301 redirects are working (old domain → new domain, page-level)
- [ ] Check backlink profile — notify major linking sites of domain change if possible
- [ ] Run a full site crawl (Screaming Frog) to check for broken links or mixed references
- [ ] Test all forms, phone links, and email links on the live site
- [ ] Verify OG/Twitter card images render correctly (use Facebook Sharing Debugger & Twitter Card Validator)

## Legal Pages
- [ ] Have Privacy Policy reviewed by a solicitor
- [ ] Have Terms & Conditions reviewed by a solicitor
- [ ] Verify Cookie Policy accurately reflects all cookies used
- [ ] Test cookie consent banner functionality

## Notes
- The codebase has been fully updated to reference `cornerstone-media.co.uk`
- All canonical tags, OG tags, JSON-LD schema, sitemap, and robots.txt use the new domain
- Form submissions are sent to `info@cornerstone-media.co.uk` and `cis.shafiq@gmail.com`
- GTM container ID: `GTM-PQ847N3G` (already installed)
