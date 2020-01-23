const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="waterfall_938396"]/div/div[2]/div[1]/div[1]/div[2]/a[1]/img'
  );
  const src = el.getProperty("src");
  const img = (await src).jsonValue();

  const [el1] = await page.$x(
    '//*[@id="waterfall_938396"]/div/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]'
  );
  const txt1 = el1.getProperty("textContent");
  const title = (await txt1).jsonValue();

  const [el2] = await page.$x(
    '//*[@id="waterfall_938396"]/div/div[2]/div[1]/div[1]/div[3]/div[4]/span[2]'
  );
  const txt2 = el2.getProperty("textContent");
  const price = (await txt2).jsonValue();

  console.log({ img, title, price });

  browser.close();
}

scrapeProduct(
  "https://www.amazon.in/b/ref=s9_acss_bw_cg_BRECHPJa_3a1_w?node=9700231031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-3&pf_rd_r=KZ0AG58MS2RMDBGVPMPT&pf_rd_t=101&pf_rd_p=e2b6f818-4cbc-4cbe-b6ef-ad1b85a6e16e&pf_rd_i=976389031"
);
