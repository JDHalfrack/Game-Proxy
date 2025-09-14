module.exports = async (req, res) => {
  try {
    const response = await fetch("https://joshdixon.com/index.php?league=nfl");
    const html = await response.text();

    // Allow any site to fetch this (CORS)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("Error fetching source: " + err.toString());
  }
};
