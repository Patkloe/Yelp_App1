    import React from 'react';
    import './Business.css';
    let business = {
         imagesSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
         name: 'MarginOtto pizzeria',
         address: '1010 Paddington Way',
         city: 'Flavortown',
         state: 'NY',
         zipCode: '10101',
         category: 'Italian',
         rating: 4.5,
         reviewCount :90,
} // fin object business
     //const biz = 'Nouveau';
    class Business extends React.Component {
    render() {
        return <div className="Business">
  <div className="image-container">
    <img src= {business.imagesSrc} title='React welcome'/>
  </div>
  <h2>{business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{business.address}</p>
      <p>{business.city}</p>
      <p>{business.state} {business.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{business.category.toUpperCase()}</h3>
      <h3 className="rating">{business.rating} stars</h3>
      <p>{business.reviewCount} reviews</p>
    </div>
  </div>
</div>;
    } // fin/end render()
} // fin/end  component React added, Business 
       //juste pour tester
/*class Business extends React.Component {
 
 legume = () => {
 
  const objectLegume = { carottes: 10, clémentine: 6, salade: 2, tomate: 5}
  const test = Object
                .keys(objectLegume)
                .map((key) => <li key={key}>{key} : {objectLegume[key]} </li> );
  return test
  }
  busytest = () => {
      const montre = Object
                      .keys(business)
  return montre.category
  } 
 
  render() {
 
    return (
      <section className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1>test</h1>
               {this.legume()}
          </div>
          <h3>test2 category</h3>
            {this.busytest()}
        </div>
      </section>
      );
  }
}*/
export default Business;