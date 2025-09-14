module.exports = async (req, res) => {
  try {
    const response = await fetch("https://pulsematch.xyz/index.php?league=nfl");
    const html = await response.text();

    // Debug: if the fetch came back empty
    if (!html || html.trim() === "") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      return res.status(200).send("⚠️ Proxy fetched no content from joshdixon.com");
    }

    // Normal case
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
  } catch (err) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(500).send("Error fetching source: " + err.toString());
  }
};
