import React, { useState } from 'react';
import './Home.css';
import Websocket from 'react-websocket';
import Table from '../../Components/Table/Table';
import Loader from '../../Common/Loader/Loader';

export default function Home() {
  const [data, setData] = useState({});
  let stocks = new Map();
  const handleData = (data) => {
    let result = JSON.parse(data);

    // let ddd = {
    //   apple: { oldPrice: 10, newPrice: 11 },
    //   LinkedIn: { prevPrice: 10, latestPrice: 11 },
    //   facebook: { prevPrice: 10, latestPrice: 11 },
    // };

    result.forEach(([name, price]) => {
      let singleStockPrice;

      if (stocks.has(name)) {
        let previousPrice = stocks.get(name).newPrice;

        singleStockPrice = {
          oldPrice: previousPrice,
          newPrice: price,
        };
      } else {
        singleStockPrice = {
          oldPrice: price,
          newPrice: price,
        };
      }
      stocks.set(name, singleStockPrice);
      //console.log(stocks);
    });
    setData(stocks);
    console.log(stocks);
  };
  return (
    <div>
      <div className="container py-4">
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
            <div className="col-md-8 col-md-offset-2">
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
            <div className="col-md-4">
              <div className="right-section shadow">Right section</div>
            </div>{' '}
          </div>
        </div>
      </section>
      {/* <div>
        <Websocket url="ws://stocks.mnet.website/" onMessage={handleData} />
      </div> */}
    </div>
  );
}
