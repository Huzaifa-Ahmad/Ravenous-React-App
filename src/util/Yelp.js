const apiKey =
  "UpH6AXGlsaQrRprqCn39YgB-LZ5xeILoqwiLHgIbL7t4FPTc7y2Y1LSM-ZLBscQRMHonTTDg9Bpc7tcFWyKs6TKvKPKpc9_Bj9RcMAtZUGlLo4JUZcezC3c1PIQJXnYx";

const fetch = window.fetch.bind(window);

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.business) {
          return jsonResponse.business.map(business => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  }
};

export default Yelp;
