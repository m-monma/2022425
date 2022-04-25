import React from "react";
import "../Pages/BusinessTop.css";

class BusinessTop extends React.Component {
  render() {
    return (
      <>
        <div className="top">
          <h1 className="philosophyList">COMmunication</h1>
          <h1 className="philosophyList">Success</h1>
          <h1 className="philosophyList">Achievement</h1>
          <h1 className="philosophyList">Trust</h1>
          <h4 className="philosophyBottom">
            ITシステム付帯設備設計施工/インフラ構築/業務アプリケーション開発/ネットワークシステム運用
          </h4>
        </div>
      </>
    );
  }
}

export default BusinessTop;
