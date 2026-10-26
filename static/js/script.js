document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (hash) {
    const targetTabTrigger = document.querySelector(`[data-bs-target="${hash}"], [href="${hash}"]`);

    if (targetTabTrigger) {
      const tab = new bootstrap.Tab(targetTabTrigger);
      tab.show();
    }
  }

  const tabTriggers = document.querySelectorAll(`[data-bs-toggle="tab"], [data-bs-toggle="pill"]`);
  tabTriggers.forEach(function (trigger) {
    trigger.addEventListener("shown.bs.tab", function (event) {
      const targetHash = event.target.getAttribute("data-bs-target") || event.target.getAttribute("href");

      if (targetHash && targetHash.startsWith("#")) {
        history.replaceState(null, null, targetHash);
      }
    });
  });
});