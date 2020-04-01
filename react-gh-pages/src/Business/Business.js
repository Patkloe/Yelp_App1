    import React from 'react';
    import './Business.css';
    
    class Business extends React.Component {
    render() {
        return <div className="Business">
  <div className="image-container">
    <img src= {business.imagesSrc} title='React welcome'/>
  </div>
  <h2>{business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.props.business.address}</p>
      <p>{this.props.business.city}</p>
      <p>{this.props.business.state} {this.props.business.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.props.business.category.toUpperCase()}</h3>
      <h3 className="rating">{business.rating} stars</h3>
      <p>{this.props.business.reviewCount} reviews</p>
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