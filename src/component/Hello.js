import React from "react";
import Modals from "./modals/homeModals";
import Head from "./../shared/table-head";

class Hello extends React.Component {
  render() {
    return (
      <div className="contriner mt-5">
        <div className="text-center">
          <h1>Home</h1>
          <div className='mt-3'>
            <Modals />
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;
