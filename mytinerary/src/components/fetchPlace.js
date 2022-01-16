export const fetchPlace = async (text) => {
    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${"pk.eyJ1IjoiZ3VybWFudG9vciIsImEiOiJja3lneXYyYjcxeHlyMnVxa2FxcDlyYXh3In0.I-Is5SvW4_lJSTJMfz4M5Q"}&cachebuster=1625641871908&autocomplete=true&types=place`
      );
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    } catch (err) {
      return { error: "Unable to retrieve places" };
    }
  };