const apiKey = 'OgdR0x5YyRiBgtXgMi1J9TDBB76B4nOJh3Sq3Ry1Dft9GkowCyi76VQVVmmjmRmpOodNbqBeLv3SH_3mJOM6gIWOlMapj6gkzG5JZUpm06ZNv2Q9QEwGht3-cH6CXnYx'; // Insert API key here.
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
 }
export default Yelp;







//old
//import { CLIENT_ID, SECRET } from './YelpInfo.js';
//var accessToken = '';
//var CLIENT_ID = 'RShZblzXb3OmIiAlLi6d2A';
//var SECRET = 'OgdR0x5YyRiBgtXgMi1J9TDBB76B4nOJh3Sq3Ry1Dft9GkowCyi76VQVVmmjmRmpOodNbqBeLv3SH_3mJOM6gIWOlMapj6gkzG5JZUpm06ZNv2Q9QEwGht3-cH6CXnYx';


//const Yelp = {
   // getAccessToken() {
       // if(accessToken === true){
           // return new Promise(resolve => {
              //  resolve(accessToken);
            //});
       // }
        //var x = new XMLHttpRequest();   // or fetch
  
       // return /*fetch*/x.open('GET',`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${SECRET}`, {

       /*     method: 'POST'
        }).then((response) => {
            if(response.ok){
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            accessToken = jsonResponse.access_token;
            return accessToken
        });
    },
    search(term, location, sortBy) {
        return Yelp.getAccessToken().then(() => {
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Request failed!');
                }, networkError => console.log(networkError.message)
            ).then(jsonResponse => {
                console.log(jsonResponse)
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => (
                        {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url
                        }
                    ))
                }
            })
        })
    }
};



export default Yelp;*/
