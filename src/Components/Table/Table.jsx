import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

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
              History
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from(data.entries(), ([key, value]) => (
            <tr>
              {/* {console.log(value)} */}
              <td className="text-left">{key}</td>
              <td className="text-left">{parseFloat(value.newPrice).toFixed(2)}</td>
              <td className="text-left">
                {parseFloat(value.newPrice) === parseFloat(value.oldPrice) ? 'few seconds ago' : 'not updated'}
              </td>
              <td className="text-left">{parseFloat(value.newPrice).toFixed(2)}</td>
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
