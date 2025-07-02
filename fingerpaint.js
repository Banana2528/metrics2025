(async () => {
  const fpPromise = import('https://fp.jscdn.com/v3/t8yl2gZP5f32IUq5fvet').then(FingerprintJS => FingerprintJS.load({
    region: 'us'
  }));

  const fp = await fpPromise;
  const result = await fp.get();

  fetch("https://webhook.site/18719c6b-6c38-4e4b-93a9-13fb8a5d4856", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      visitorId: result.visitorId,
      confidence: result.confidence,
      ip: result.ip,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    })
  });
})();
