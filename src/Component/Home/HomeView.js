import React from 'react';
import GetWinWidthHight from '../GetWinWidthHight/GetWinWidthHight'
// import { CustIcon } from '../../Svgs/Svgs'
import { AddToLocalStorage } from '../AddToLocalStorage/AddToLocalStorage';
import { ThemeMode } from '../ThemeMode/ThemeMode';
import { CustIcon } from 'cust-icon-svg';


const HomeView = ({
    toggleClassFunction, toggleClassState,
    addRemoveClassFunction, addRemoveClassState
}) => {
    // console.log(toggleClassState);
    return (
        <div className="homeView ">
            <h1 className="text-center mb-3">All component</h1>
            <div className="card mb-3">
                <div className="card-header">Click toggle Class Function </div>
                <div className="card-body">
                    <h5 className="card-title">Click <button className="btn btn-sm btn-success" onClick={toggleClassFunction}>here to toggle class</button></h5>
                    <p className={toggleClassState ? "card-text d-block" : "card-text d-none"}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header">Click Add class Function</div>
                <div className="card-body">
                    <h5 className="card-title">Click
                    <button className="btn btn-sm btn-success mx-2 " onClick={() => addRemoveClassFunction(false)}>Add class</button>
                        <button className="btn btn-sm btn-success" onClick={() => addRemoveClassFunction(true)}>remove class</button>
                    </h5>
                    <p className={addRemoveClassState ? "card-text" : "card-text d-none"}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header">Custom SVG Icon create</div>
                <div className="card-body">
                    <h5 className="card-title">SVG Icon  </h5>
                    <p>
                        <CustIcon type="home" className="krunal"/>
                        {/* <CustIcon type="sell" /> */}
                    </p>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header">Window width find</div>
                <div className="card-body">
                    <GetWinWidthHight></GetWinWidthHight>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header">Add to local storage</div>
                <div className="card-body">
                    <AddToLocalStorage />
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header">Theme Mode change</div>
                <div className="card-body">
                    <ThemeMode />
                </div>
            </div>
        </div>
    );
};

export default HomeView;