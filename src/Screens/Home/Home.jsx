import React, { useState } from 'react';
import './Home.css';
import Websocket from 'react-websocket';
import Table from '../../Components/Table/Table';
import Loader from '../../Common/Loader/Loader';
import Advertisement from '../../Common/Advertisement/Advertisement';

const SocketUrl = process.env.NODE_ENV === 'development' ? 'ws://stocks.mnet.website/' : 'wss://stocks.mnet.website/';

export default function Home() {
  const [data, setData] = useState(new Map());

  const handleData = (response) => {
    let result = JSON.parse(response);
    let stocks = new Map(data);

    //Object structure for reference
    // let dummyObject = {
    //   apple: { oldPrice: [10,20,21], newPrice: 11 },
    //   LinkedIn: { oldPrice: [10,20,21], newPrice: 11 },
    //   facebook: { oldPrice: [10,20,21], newPrice: 11 },
    // };

    result.forEach(([name, price]) => {
      let singleStockPrice;
      //checking if stock name exist in the map
      if (stocks.has(name)) {
        let previousPrice = stocks.get(name).newPrice;

        //if exists then updating the prices
        let tempdata = stocks.get(name).oldPrice;

        singleStockPrice = {
          oldPrice: [...tempdata, previousPrice],
          newPrice: price,
        };
      } else {
        //if not then create a new price pair
        singleStockPrice = {
          oldPrice: [price],
          newPrice: price,
        };
      }
      stocks.set(name, singleStockPrice);
    });

    setData(stocks);
  };
  return (
    <div>
      <div className="container py-2">
        <h4 className="text-left text-white">Top 10 Stocks</h4>
        <p className="text-left text-white">
          Get deep insights of the stocks in minutes
          <span>
            <img src="assets/btc.svg" alt="btc-icon" height="20px" className="pl-1" />
          </span>
        </p>
      </div>

      <section className="graph-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="left-section">
                <h6 className="text-left text-white my-2">
                  Trending Stocks
                  <span>
                    <img src="assets/revenue.svg" height="20px" alt="trending-icon" className="pl-1 mb-1" />
                  </span>
                </h6>

                {data.size !== 0 ? <Table data={data} /> : <Loader />}
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <Advertisement />
            </div>{' '}
          </div>
        </div>
      </section>
      <div>
        <Websocket url={SocketUrl} onMessage={handleData} />
      </div>
    </div>
  );
}
