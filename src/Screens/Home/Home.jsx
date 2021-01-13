import React, { useState } from 'react';
import './Home.css';
import Websocket from 'react-websocket';
import Table from '../../Components/Table/Table';
import Loader from '../../Common/Loader/Loader';

export default function Home() {
  let stocks = new Map();
  const [data, setData] = useState(new Map());

  const handleData = (data) => {
    let result = JSON.parse(data);

    // let dummyObject = {
    //   apple: { oldPrice: 10, newPrice: 11 },
    //   LinkedIn: { prevPrice: 10, latestPrice: 11 },
    //   facebook: { prevPrice: 10, latestPrice: 11 },
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
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/899/899117.svg?token=exp=1610517281~hmac=56271ba8bcca99fa472a4da3aa8af61c"
              alt="btc-icon"
              height="20px"
              className="pl-1"
            />
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
                    <img
                      src="https://www.flaticon.com/svg/vstatic/svg/3798/3798624.svg?token=exp=1610517774~hmac=8b44b5b8f3af2967bf3e2e4c0b757654"
                      height="20px"
                      alt="trending-icon"
                      className="pl-1 mb-1"
                    />
                  </span>
                </h6>
                {data ? <Table data={data} /> : <Loader />}
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="right-section shadow">Right section</div>
            </div>{' '}
          </div>
        </div>
      </section>
      <div>
        <Websocket url="ws://stocks.mnet.website/" onMessage={handleData} />
      </div>
    </div>
  );
}
