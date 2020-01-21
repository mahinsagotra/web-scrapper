### web-scrapper
Web scraping refers to the process of gathering information from a website through automated scripts. This eases the process of gathering large amounts of data from websites where no official API has been defined.

Simple web scrapper to Scrap a static website with Axios and Cheerio.

Dependencies:

             *Axios: Promise-based HTTP client for Node.js and the browser.
             *Cheerio: jQuery implementation for Node.js. Cheerio makes it easy to select, edit and view DOM elements.

What it does?

        1. Fetches the HTML source code of the Premier League website through an HTTP request or by using a headless browser.
        2. Parsing the raw data to extract just the information you're interested in.
        (specifically, we'll scrap the Top 20 goalscorers in Premier League history.)
