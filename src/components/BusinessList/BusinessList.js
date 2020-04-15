import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import Business from '../Business/Business.js';


class BusinessList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
            //let val = 0;
            let restrauntInfo = this.props.businesses.map((business) => {
           // let val = restrauntInfo.length;
            //if(val == 0)
             // {
                //  return( alert('Unknown Business'));
             // }
     //render() {
            let name = business['name'];
            let image = business['imageSrc']
            let address = business['address'];
            let city = business['city'];
            let state = business['state'];
            let zip = business['zipCode'];
            let rating = business['rating'];
            let review = business['reviewCount'];
            let url = business['url'];
            return <Business 
                key={business.id}
                image={image}
                name={name} 
                address={address} 
                city={city} 
                state={state} 
                zipCode={zip} 
                rating={rating} 
                reviewCount={review}
                url={url}
                />
        })
         let res = restrauntInfo.length;
         console.log(restrauntInfo);
         console.log(res);
        return(
            <div className="BusinessList">
                {restrauntInfo}
            </div>
        );
       // console.log(5);
    };
};
//console.log(" test a voir" + {restrauntInfo});
export default BusinessList;