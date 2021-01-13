import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';
function Table({ data }) {
  return (
    <div>
      <table className="table text-white">
        <thead>
          <tr>
            <th scope="col" className="text-left">
              Ticker
            </th>
            <th scope="col" className="text-left">
              Price
            </th>
            <th scope="col" className="text-left">
              Last Update
            </th>
            <th scope="col" className="text-left">
              History (Chart)
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from(data.entries(), ([key, value]) => (
            <tr>
              <td className="text-left">{key}</td>

              <td className="text-left">
                {' '}
                {parseFloat(value.newPrice) === parseFloat(value.oldPrice) ? (
                  <span style={{ backgroundColor: 'white', color: 'black', padding: 7 }}>
                    {parseFloat(value.newPrice).toFixed(2)}
                  </span>
                ) : parseFloat(value.newPrice) > parseFloat(value.oldPrice[value.oldPrice.length - 1]) ? (
                  <span style={{ backgroundColor: 'green', padding: 7 }}>{parseFloat(value.newPrice).toFixed(2)}</span>
                ) : (
                  <span style={{ backgroundColor: 'red', padding: 7 }}>{parseFloat(value.newPrice).toFixed(2)}</span>
                )}
              </td>
              <td className="text-left">
                {parseFloat(value.newPrice) === parseFloat(value.oldPrice[value.oldPrice.length - 1])
                  ? 'few seconds ago'
                  : 'not updated'}
              </td>
              <td className="text-left">
                <Sparklines data={value.oldPrice}>
                  <SparklinesLine color="white" />
                </Sparklines>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
Table.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Table;
