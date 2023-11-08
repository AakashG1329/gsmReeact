import React, { Component } from 'react'
import './mobilesAccessories.css'
import noImage from '../../assert/notfoundImage.png';
import Header from '../header/header'
import { Col, Row } from 'react-bootstrap';
export default class mobilesAccessories extends Component {
    state = {
        offerProducts:[],
        apiLoading: false,
      };
      componentDidMount(): void {
        this.getMobileAccessorizesData();
      }
      getMobileAccessorizesData = async () => {
        this.setState({ apiLoading: true });
        // let userToken = localStorage.getItem("userToken");
        // let AuthToken = "Bearer " + userToken;
        const response = await fetch(
          "http://gsmoffers.somee.com/api/MobilesAccessorizes/All",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            //   Authorization: AuthToken,
            },
            body: JSON.stringify({
              "inputValue": "string"
            }),
          }
        );
        const responceData = await response.json();
        this.setState({ offerProducts: responceData });
        // console.log("bookcoverdata=", this.state.bestSellerData);
        console.log("best=s", this.state.offerProducts);


        this.setState({ apiLoading: false });
      };
  render() {
    return (
      <div className='homeContainer '>
        <Header />
 <div className="homeData container-fluid">
  {this.state.apiLoading ?<div className='loadingStyle'>
<div></div>
<div></div>
<div></div>
<div></div>
<div>Offer Products</div>
<div>Offer Products</div>
<div  style={{color:"#5F9EA0"}} className="la-line-scale la-2x loading">

    <div></div>

    <div></div>

    <div></div>

    <div></div>

    <div></div>

</div>
 </div>:
<>
<div></div>
<div></div>
<div></div>
<div></div>
<div>Offer Products</div>
<div>Offer Products</div>
{/* <div>Offer Products</div> */}
<Row >
{this.state.offerProducts.map((list: any, i) => (
     <Col className='cardWith' sm={3}>
     <div className="cardStyle p-2" key={i}>
     <div className="card-title">
        {/* <img src={backgroundImg} alt=""  width={70} height={70} /> */}
             {list.productDiscount}
           </div>
        <div className="imgDiv">
        {list.productImg == null ? (
             <img src={noImage} alt="image1" width={130} height={130} />
           ) : (
             <img src={list.productImg}  alt="image1" width={130} height={130} />
           )}
        </div>
        {!list.spending == null ? (
             <p> Price:₹0</p>
           ) : (
             <p> Price:₹{list.productPrice}</p>
           )}
           {!list.netRoyalties == null ? (
             <p>Offer Price:₹0</p>
           ) : (
             <p><span className='offerPrice'>Offer Price:₹{list.amazonPrice}</span></p>
           )}
           {list.productName ==null ? (
             <p>ss</p>
           ) : (
             <p>{list.productName}</p>
           )}
          <div className="buyBtn">
          {list.productLink == null ? (
             <p></p>
           ) : (
            <a href={list.productLink} ><button className='buyAmazonBtn'>Buy Amazon</button></a>
           )}
          </div>
     </div>
   </Col>
     ))}
</Row>
</>
  }
</div>
      </div>
    )
  }
}
