import React, { useRef } from 'react';

interface ArticleDisplayerFieldProps {
  onScrollToBottom: () => void;
}

const ArticleDisplayerFieldInsurance: React.FC<ArticleDisplayerFieldProps> = ({ onScrollToBottom }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const checkScrollToBottom = () => {
    if (!contentRef.current) return;
    const contentHeight = contentRef.current.clientHeight;
    const scrollTop = Math.ceil(contentRef.current.scrollTop);
    const scrollHeight = contentRef.current.scrollHeight;
    if (scrollTop >= scrollHeight - contentHeight) {
      onScrollToBottom();
    }
  };

  return (
    <div
      ref={contentRef}
      className="content-container"
      onScroll={checkScrollToBottom}
    >
      <p>1. 「業務員登錄證」？<br />
        業務員登錄證係業務員所屬之保險公司依財政部公佈之「保險業務員管理規則」核發，為具有招攬保險之資格證件，業務員招攬保險時，應出示登錄證，並詳細告知授權範圍。
      </p>

      <p>2. 什麼是要保書？<br />
        要保書是指要保人向保險公司申請投保時所填寫的書面文件。主要內容包括：要保人與被保險人之姓名、出生年月日、職業、地址、電話、身分證字號；受益人姓名；要保事項；要保人、被保險人告知及聲明事項、要保人與被保險人簽章等。
      </p>

      <p>3. 誰來填寫要保書？<br />
        要保書應由要保人及被保險人本人就有關內容親自填寫並簽章，未經契約當事人同意或授權，保險經紀人、代理人及業務員均不得代填寫或簽章。若要保人或被保險人為未成年人，需經其法定代理人的同意，並於要保書上簽章。
      </p>

      <p>4. 什麼是「要保人」？<br />
        要保人是指對保險標的具有保險利益，向保險人申請訂立保險契約，並負有交付保險費義務之人，其權利及義務為：<br />
        (一)權利：<br />
        1.指定各類保險金之受益人。<br />
        2.申請契約變更。<br />
        3.申請保單貸款。<br />
        4.終止契約。<br />
        (二)義務：<br />
        1.繳納保險費。<br />
        2.被保險人職業或職務變更及保險事故發生之通知。<br />
        3.告知義務。
      </p>

      <p>5. 什麼是「被保險人」？<br />
        所謂被保險人，指保險事故發生時，遭受損害，享有賠償請求權之人。<br />
        另依保險法第一百零七條規定，以十五足歲以下之未成年人為被保險人，除喪葬費用之給付外，其餘死亡給付之約定於被保險人滿十五足歲之日起發生效力；被保險人滿十五足歲以前死亡者，其身故保險金變更為喪葬費用保險金。訂立本契約時，以受監護宣告尚未撤銷者為被保險人，其身故保險金變更為喪葬費用保險金。喪葬費用保險金額總和（不限本公司），不得超過遺產及贈與稅法第十七條有關遺產稅喪葬費用扣除額之半數，其超過部分本公司不負給付責任，本公司並應無息退還該超過部分之已繳保險費。
      </p>

      <p>6. 「要保人」與「被保險人」之間必須有什麼關係？<br />
        要保人對於被保險人須有保險利益，才可以訂立保險契約，而依保險法第十六條之規定，要保人對於左列各人之生命或身體，有保險利益。<br />
        (一)本人或其家屬。<br />
        (二)生活費或教育費所仰給之人。<br />
        (三)債務人。<br />
        (四)為本人管理財產或利益之人。
      </p>

      <p>7. 什麼是「受益人」？<br />
        (一) 所謂「受益人」係指被保險人或要保人約定享有賠償請求權之人。<br />
        (二) 受益人通常除有請求保險金之權利外，並可基於利害關係人之身分代繳保險費。<br />
        (三) 受益人之義務則應於知悉保險事故發生後通知保險公司。
      </p>

      <p>8. 受益人怎麼指定？<br />
        受益人由要保人指定，人數無限制，中途得以變更，次數亦無限制。
      </p>

      <p>9. 要保書上要填寫什麼「地址」？有何重要性？(本項由各公司自行決定文字內容)<br />
        要保人的住所有變更時，應即以書面通知本公司。<br />
        要保人不做前項通知時，本公司按本契約所載的最後住所所發送的通知，視為已送達要保人。
      </p>

      <p>10. 要保書上的「年齡」如何計算？<br />
        被保險人的投保年齡，以足歲計算，但未滿一歲的零數超過六個月的加算一歲，要保人在申請投保時，應將被保險人的真實出生年月日，在要保書填明。
      </p>

      <p>11. 什麼是「主契約」或「主約」？<br />
        要保人可向保險公司單獨購買之保險商品，該商品通稱為主契約或主約。
      </p>

      <p>12. 什麼是「附加契約」或「附約」？<br />
        附加契約係指附加在主契約，用以保障特定事故的保險商品，一般稱「附約」。「附約」是不單獨販賣的。
      </p>

      <p>13. 保險費繳付的方式有幾種？<br />
        保險費之交付方式，分一次交付及分期交付二種。採用一次交付方式繳交總保費者為「躉繳」；而採用分期交付方式者分年繳、半年繳、季繳、月繳，保戶可視個人之經濟狀況及需要作選擇，事後仍可申請變更。
      </p>

      <p>14. 什麼是「保單紅利」？領取的方式有哪些？<br />
        (一) 保單紅利：<br />
        保險公司依各項預定率向保戶收取的金額與實際支付金額的差額產生盈餘時，將盈餘依保險種類、保險經過期間、保險金額等計算返還保戶，謂之「保單紅利」。<br />
        (二) 保單紅利領取方式：原則上有下列四種，可自行選取。<br />
        1.現金給付：以現金支付保單紅利。<br />
        2.抵繳保費：以保單紅利扣抵保險費。<br />
        3.儲存生息：將保單紅利積存至契約終止為止，或保戶有請求時支付。依財政部核定之紅利分配利率(加權平均)以複利計息。<br />
        4.增加保險金額：將保單紅利移做增購保險契約，以增加保險金額。
      </p>

      <p>15. 什麼是「保險費自動墊繳」？<br />
        依保單條款規定，要保人若未依規定繳納保險費時，保險公司在取得要保人同意後，得以該保險單所有之保單價值準備金（如有保險單借款者，以扣除其借款本息後的餘額）自動墊繳應繳保險費及利息的制度，即為保險費自動墊繳制度。
      </p>

      <p>16. 什麼是「告知事項」？<br />
        告知事項主要為要保書中有關被保險人身體狀況等之詢問事項。應據實說明，如有隱匿或遺漏不為說明，或為不實之說明，足以變更或減少保險人對危險之估計者，保險人得解除契約；其危險發生後亦同。
      </p>

      <p>17. 要保書中對健康狀況的告知義務年期或期間(「過去兩年」、「最近兩個月」、「過去五年」等期間)如何認定？<br />
        以要保人填寫要保書所載之申請日期起回溯計算兩個月、兩年、五年稱之。
      </p>

      <p>18. 什麼是「健康檢查有異常情形」？<br />
        (一)健康檢查結果異於檢查標準的正常值或參考值者。<br />
        (二)醫師要求或建議作進一步追蹤、檢查或治療者。
      </p>

      <p>19. 什麼是「治療、診療或用藥」？<br />
        (一)治療：針對疾病、傷害等異常現象直接加以手術、用藥或物理治療、心理治療等。<br />
        (二)診療：對於身體狀況有異常之問診、檢查或治療。<br />
        (三)用藥：服用、施打或外敷藥品。
      </p>

      <p>20. 「住院七日以上」怎麼認定？<br />
        (一)自辦理住院手續當日至辦理出院手續當日止。<br />
        (二)前述計算方式，中間如遇有轉院等中斷住院之情形時，需連續計算在內。
      </p>

      <p>21. 對要保書中告知事項所列疾病名稱有疑問時，該怎麼辦？<br />
        (一) 詢問診斷醫師。<br />
        (二) 請洽本公司免費服務電話詢問，電話號碼為：0800-011966。
      </p>

      <p>22. 要保書還有什麼附件？<br />
        除了要保書本身之外，尚有投保人須知、要保書填寫說明及保險單條款樣張或影本等附件，提供給要保人及被保險人於填寫要保書參考。
      </p>

      <p>23. 什麼時候需要法定代理人簽章？<br />
        未成年者訂立保險契約時，須經其法定代理人簽章同意。
      </p>

      <p>附註： 本填寫說明僅供填寫參考，有關之權利義務，仍請詳閱契約條款之約定。</p>

    </div>
  );
};

export default ArticleDisplayerFieldInsurance;
