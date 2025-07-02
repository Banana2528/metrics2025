(async () => {
  await new Promise(resolve => setTimeout(resolve, 250));

  const creep = new Creep();
  const report = creep.report();

  fetch("S 	https://webhook.site/18719c6b-6c38-4e4b-93a9-13fb8a5d4856", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      source: "creepjs",
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      report: report
    })
  });
})();
