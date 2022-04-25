import React from "react";
import "../Pages/AchievementTitle.css";

const AchievementTitle = () => {
  return (
    <>
      <div className="achievement">
        <h2>Achievement</h2>

        <div className="achievementTitle">
          <span>
            <h2>Business</h2>
          </span>
        </div>
        <div className="gradWrap">
          <input id="trigger1" className="gradTrigger" type="checkbox" />
          <label className="gradBtn" for="trigger1"></label>
          <div class="gradItem">
            <h3 className="contentTitle">システム構想策定支援</h3>
            <p className="contentList">
              不動産会社の物件管理と顧客管理のシステム構築提案の支援
            </p>
            <p className="contentList">顧客情報の活用についての支援</p>
            <h3 className="contentTitle">業務改革支援</h3>
            <p className="contentList">
              食肉加工会社の在庫管理と物流の改善作業支援
            </p>
            <p className="contentList">販売管理システムの発注ミス</p>
            <p className="contentList">
              手配漏れ、在庫の重複管理等に関する支援
            </p>
            <p className="contentList">業務フロー等の整理及び改善提案</p>
            <p className="contentList">
              システム入替時の導入展開のプロマネに関するアドバイザリ業務
            </p>
            <h3 className="contentTitle">評価・診断支援</h3>
            <p className="contentList">
              食肉加工会社の在庫管理と流通の見直しに関する調査、分析支援
            </p>
            <p className="contentList">
              医療公法人の電子請求システムに係わるコスト削減可能性調査、分析支援
            </p>
          </div>
        </div>

        <div className="achievementTitle">
          <span>
            <h2>Development</h2>
          </span>
        </div>
        <div className="gradWrap">
          <input id="trigger1" className="gradTrigger" type="checkbox" />
          <label className="gradBtn" for="trigger1"></label>
          <div class="gradItem">
            <h3 className="contentTitle">Application Development</h3>
            <h4 className="contentTitle">アプリケーション開発</h4>
            <p className="contentList">IT建設業業務管理システム</p>
            <p className="contentList">自治体向け保育園システム</p>
            <p className="contentList">公文書管理システム</p>
            <p className="contentList">各自治体向け水道料金徴収システム</p>
            <p className="contentList">電力会社向け基幹システム</p>
            <p className="contentList">政府系金融会社向け認証システム</p>
            <p className="contentList">金融システム（証券・銀行)</p>
            <p className="contentList">ファーストフード向け宅配業務システム</p>
            <p className="contentList">会員管理・ポイント管理システム</p>
            <p className="contentList">非接触カードを使った受付登録システム</p>
            <h4 className="contentTitle">ORACLE EBS開発</h4>
            <p className="contentList">製造業社向け会計・原価管理システム</p>
            <p className="contentList">飲料業社向け会計・原価管理システム</p>
            <h4 className="contentTitle">デジタル変換支援</h4>
            <p className="contentList">書籍、写真、ネガ等のデジタル化</p>
            <p className="contentList">
              アナログ（ＶＨＳテープ等）のデジタル化
            </p>
            <p className="contentList">CAD設計</p>
          </div>
        </div>

        <div className="achievementTitle">
          <span>
            <h2>IT Management</h2>
          </span>
        </div>
        <div className="gradWrap">
          <input id="trigger1" className="gradTrigger" type="checkbox" />
          <label className="gradBtn" for="trigger1"></label>
          <div class="gradItem">
            <div className="gradItem"></div>
            <h4 className="contentTitle">ネットワーク運用支援</h4>
            <p className="contentList"> テクニカルコールセンター向け派遣支援</p>
            <p className="contentList"> ネットワークオペレーション業務</p>
            <p className="contentList">ホームページ作成代行サービス</p>
            <p className="contentList">
              Windows Active Directory等設計構築導入サービス
            </p>
            <h4 className="contentTitle">システム運用支援</h4>
            <p className="contentList">通信会社向けシステム運要員派遣</p>
            <p className="contentList">
              リバース業務（VB・COBOL・アセンブラソースからの仕様書作成）
            </p>
            <p className="contentList">
              社内教育及びシステム導入時の説明会等の講師派遣
            </p>
            <p className="contentList">パソコン教室等の教師派遣</p>
            <h4 className="contentTitle">インフラ構築支援</h4>
            <p className="contentList">中小企業向けインフラ構築</p>
            <p className="contentList"> IT展開サービス</p>
            <h4 className="contentTitle">IT関連商品販売</h4>
            <p className="contentList">
              全事業に関連する部品、消耗品、中古品、付属品の販売
            </p>
          </div>
        </div>

        <div className="achievementTitle">
          <span>
            <h2>Service</h2>
          </span>
        </div>

        <p className="contentList">眼科医院様向け予約管理システム</p>
      </div>
    </>
  );
};

export default AchievementTitle;
