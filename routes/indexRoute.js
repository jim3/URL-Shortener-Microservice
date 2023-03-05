const express = require("express");
const router = express.Router();
const dns = require("dns");

const urlData = []; // array to store the URL and short URL (test-only mock database)

function generateShortUrl() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let shortUrl = "";
    for (let i = 0; i < 6; i++) {
        shortUrl += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(`Generated short URL: ${shortUrl}`);
    return shortUrl;
}

router.get("/api/shorturl/:shorturl", (req, res) => {
    const shortUrl = req.params.shorturl;
    const urlObj = urlData.find((obj) => obj.shortUrl === shortUrl);
    if (urlObj) {
        res.redirect(urlObj.url);
    } else {
        res.json({
            error: "No short URL found for the given input",
        });
    }
});

router.post("/api/shorturl", (req, res) => {
    const url = req.body.url;
    const urlObject = new URL(url);
    
    dns.lookup(urlObject.hostname, (err, address, family) => {
        if (err) {
            console.log(`DNS lookup error: ${err}`);
            res.json({
                error: "invalid URL",
            });
        } else {
            const shortUrl = generateShortUrl(); // generate a short URL
            urlData.push({ url, shortUrl }); // add the URL and short URL to the array
            console.log(`Original URL: ${url}, Short URL: ${shortUrl}`);
            return res.json({
                original_url: url,
                short_url: shortUrl,
            });
        }
    });
});

module.exports = router;
