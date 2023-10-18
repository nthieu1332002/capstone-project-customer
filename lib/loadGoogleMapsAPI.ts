export function loadGoogleMapsAPI(apiKey: string, callback: () => void) {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.addEventListener("load", callback);
      document.head.appendChild(script);
    } else {
      callback();
    }
  }