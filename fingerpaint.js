(async () => {
  const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3').then(FingerprintJS => FingerprintJS.load());

  const fp = await fpPromise;

  const result = await fp.get();

  fetch("https://webhook.site/18719c6b-6c38-4e4b-93a9-13fb8a5d4856", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      visitorId: result.visitorId,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    })
  });
})();
