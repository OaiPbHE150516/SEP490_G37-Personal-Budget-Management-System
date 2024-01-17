import React from "react";
import Header from "../Components/Header/Header";
import "../CSS/Overview.css";

const Overview = ({ toggleSidebar }) => {
  const surplusValue = 161612.26;
  const creditCardValue = -100251.25;
  const total = 161612.26;
  const getValueColor = (value) => {
    return value >= 0 ? "green" : "red";
  };
  return (
    <div className="Overview">
      <Header toggleSidebar={toggleSidebar} />

      <div className="Summary_Account">
        <div className="Summary">
          <span className="title">Sơ lược</span>
          <div className="Surplus_Card">
            <div className="item">
              <span className="itemTitle">Số dư:</span>
              <div
                className="value"
                style={{ color: getValueColor(surplusValue) }}
              >
                {surplusValue} đ
              </div>
            </div>
            <div className="item">
              <span className="itemTitle">Thẻ tín dụng:</span>
              <div
                className="value"
                style={{ color: getValueColor(creditCardValue) }}
              >
                {creditCardValue} đ
              </div>
            </div>
            <hr />
            <div className="itemTotal">
              <div
                className="valueTotal"
                style={{ color: getValueColor(total) }}
              >
                {total} đ
              </div>
            </div>
          </div>
        </div>
        <div className="summaryAccount">
          <span className="title">Các tài khoản</span>
          <div className="item">
            <span className="itemTitle">Số dư:</span>
            <div
              className="value"
              style={{ color: getValueColor(surplusValue) }}
            >
              {surplusValue} đ
            </div>
          </div>
          <hr />
          <div className="item">
            <span className="itemTitle">Thẻ tín dụng:</span>
            <div
              className="value"
              style={{ color: getValueColor(creditCardValue) }}
            >
              {creditCardValue} đ
            </div>
          </div>
          <hr />
          <div className="item">
            <span className="itemTitle">Số dư:</span>
            <div
              className="value"
              style={{ color: getValueColor(surplusValue) }}
            >
              {surplusValue} đ
            </div>
          </div>
          <hr />
          <div className="item">
            <span className="itemTitle">Thẻ tín dụng:</span>
            <div
              className="value"
              style={{ color: getValueColor(creditCardValue) }}
            >
              {creditCardValue} đ
            </div>
          </div>
        </div>
      </div>

      <div className="Summary_Week">
        <span className="title">7 ngày qua</span>
      </div>

      <div className="Transaction_Surplus">
        <div className="summaryTransaction">
          <span className="title">Các giao dịch</span>
        </div>
        <div className="summarySurplus">
          <span className="title">Số dư</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
