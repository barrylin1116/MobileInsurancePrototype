import React, { useRef } from 'react';

const ArticleDisplayer: React.FC<any> = ({ ...props }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  /**
     * @description 檢查滾動至文字內容底部
     */
  const checkScrollToBottom = () => {
    // if (!contentRef.current) return;
    // const contentHeight = contentRef.current.clientHeight;
    // const scrollTop = Math.ceil(contentRef.current.scrollTop);
    // const scrollHeight = contentRef.current.scrollHeight;
    // scrollTop >= scrollHeight - contentHeight;
  };

  return (
    <>
      <div className="form related-doc">
        <div className="d-flex align-items-center justify-content-center">
          <div className="circle" />
          <h2>閱讀相關文件</h2>
          <div className="circle" />
        </div>
        <div className="box w-100 read-box">
          <div className="head">
            <div className="title">電子化付款授權約定條款</div>
            <input
              type="checkbox"
              className="d-none"
              aria-label="電子化付款授權約定條款"
              title="電子化付款授權約定條款"
              tabIndex={0}
            />
            <div className="notes">請下拉卷軸至內容文末</div>
          </div>
          <div
            ref={contentRef}
            className="body d-flex flex-column"
            onScroll={checkScrollToBottom}
            tabIndex={0}
          >
            <div className="wrapper">
              <ol style={{ listStyle: 'none' }}>
                <li>壹、一般條款
                  <ol style={{ listStyle: 'none' }}>
                    <li>1.立授權書人（以下簡稱甲方）同意授權由本授權書指定之金融機構之活期儲蓄存款、活期存款、郵局郵政存簿儲金或劃撥儲金等帳戶，自動轉帳交付本授權書所載之臺銀人壽保險股份有限公司（以下簡稱乙方）保險契約之首期或續期保險費及保單借款利息（以下合稱保險費息）。</li>
                    <li>2.甲方若非要保人本人，雖與乙方無保險契約關係，但對依授權書約定在其帳戶所扣得之要保人應繳保險費息，若有異議時除轉帳金額不符外，概由甲方負責，與乙方無涉。</li>
                    <li>3.如因授權書內容填寫不全、錯誤或其他原因致指定金融機構無法辦理轉帳者，則本授權書不生效力。</li>
                    <li>4.甲方若因結清自動轉帳指定付款帳戶或該帳戶遭到法院或行政執行機關強制執行而無法轉帳付款或未依本授權書約定條款「參、續期保險費條款」第
                      6 條後段規定交付者，本授權書之效力自動終止。
                    </li>
                    <li>5.甲方在同一帳戶內同時授權指定金融機構轉帳交付超過二張以上保單之保險費息時，以保險費息應繳日之先後次序作為轉帳交付保險費息之順序；若二張以上保單之保險費息應繳日皆為同一天時，則授權由指定金融機構衡量甲方之順序存款餘額與保險費息狀況權衡處理，甲方及要保人絕無異議。</li>
                    <li>6.本授權書所指定之保險契約有撤銷、終止、解除或契約無效等情形，如指定金融機構仍轉帳或代繳保險費息者，保險契約並不因此回復契約效力；甲方及要保人同意乙方得將應退還之保險費息無息退予本授權書所載之授權帳戶。保險契約因承保內容變更致生有退還保險費息之情事者，亦同。</li>
                    <li>7.本授權書指定授權轉帳扣款之金融機構為 ACH
                      媒體交換系統之金融機構者，指定授權轉帳之保單若經要保人辦理保單轉換，則轉換後之新保單不繼續在本授權書約定之效力範圍內，應另立新授權書，並於保險契約完成轉換程序前送達乙方始生效力。
                    </li>
                    <li>8.甲方如有冒用他人帳戶轉帳之行為，須自負法律上之責任。</li>
                    <li>9.甲方同意乙方得將甲方與乙方往來之資料提供本授權書指定之金融機構，並同意乙方於個人資料保護法所定之特定目的範圍內得為蒐集、處理、利用。</li>
                    <li>10.如因本授權書而發生訴訟時，甲、乙雙方同意以乙方總公司所在地地方法院為第一審管轄法院。</li>
                  </ol>
                </li>
              </ol>
              <ol style={{ listStyle: 'none' }}>
                <li>貳、首期/目標保險費條款
                  <ol style={{ listStyle: 'none' }}>
                    <li>1.本授權書授權繳交新保險契約首期/目標保險費者，應連同新保險契約要保書一併交予乙方，新保險契約經乙方同意承保，並確定自甲方指定金融機構受領首期保險費時，溯及乙方受理授權書之日開始生效。</li>
                    <li>2.若首期/目標保險費遭指定金融機構拒付，或因有授權上之瑕疵致使授權不生效力時，要保人應於乙方通知期限內繳足應繳保險費，逾期未補足者，視為保險費未繳，所指定保險契約自始無效。</li>
                    <li>3.甲方或要保人簽署授權書送件後，欲變更授權內容者，應另立授權書並於保險契約完成承保程序前送達乙方始生效力。</li>
                    <li>4.保險契約有因辦理撤銷、不同意承保或承保內容變更致生退還保險費等情事時，甲方及要保人同意乙方得將應退還之保險費無息退予本授權書所載之授權帳戶。</li>
                    <li>5.授權繳交新保險契約首期/目標保險費者，授權人若無反對意思表示，該新保險契約之續期/超額保險費息依照下列續期/超額保險費條款辦理。</li>
                  </ol>
                </li>
              </ol>
              <ol style={{ listStyle: 'none' }}>
                <li>參、續期/續保/超額保險費條款
                  <ol style={{ listStyle: 'none' }}>
                    <li>1.本授權書應於當期保險費息應繳之日起算 45
                      天前，送達乙方受理，始生效力；逾期送達者，則自次期保險費息應繳日始生授權之效力。
                    </li>
                    <li>2.甲方欲終止授權關係者，應於當期保險費息應繳之日起算 45
                      天前，填具書面通知並送達乙方；逾期通知，自次期保險費息應繳日始生終止授權之效力。
                    </li>
                    <li>3.本授權書有終止授權之情形，而未另立新授權書或未指定新的繳費方式時，要保人應改以臨櫃繳納、郵政劃撥或郵寄即期支票等方式交付應繳保險費息，改以前述各種方式付款時，以乙方實際受領或入帳始發生付款之效力，本約定事項不適用於投資型商品。</li>
                    <li>4.甲方欲變更原指定轉帳交付保險費息之帳戶時，應重新填具授權書，並於當期保險費息應繳之日起算 45
                      天前，將新授權書送達乙方轉送指定金融機構辦理變更，該新指定帳戶一經變更成功，原授權書即自動失效。
                    </li>
                    <li>5.投資型保單超額保險費自動轉帳付款每月 21
                      日扣款乙次，扣款日如適逢非金融機構營業日即順延，甲方須提前於扣款日前一個營業日存妥款項。非投資型保單保單生效日為
                      109 年 6 月 30 日(含)前且每期保險費息應繳日為 1 至 15 日者，其自動轉帳付款基準日為當月 15 日；應繳日為
                      16至 31 日者，其自動轉帳付款基準日為當月 30 日(2 月為 28 日)。保單生效日為 109 年 7 月 1
                      日(含)後且每期保險費息應繳日為當月 7 日至當月 21 日者，其自動轉帳付款基準日為當月 21
                      日；每期保險費息應繳日為當月
                      22 日至次月 6 日者，其自動轉帳付款基準日為次月 6 日。 自動轉帳付款基準日，如適逢假日順延，甲方須提前於基準日前一個營業日存妥款項。
                    </li>
                    <li>6.甲方指定之存款帳戶，因存款不足或其他原因致無法轉帳代繳保險費息，授權指定金融機構得不予轉帳並於轉帳日次營業日通知乙方。
                      乙方於通知要保人後，要保人應及時補足存款。若甲方非要保人時，要保人應負責通知甲方及時補足存款。如未能於前條所列轉帳付款基準日完成轉帳付款時，要保人應於保險契約條款所約定之寬限期限內，主動向乙方交付無轉帳折扣之該期足額應繳保險費息；若逾期未繳致保險契約停效或自動墊繳者，概由要保人自行負責。授權轉帳付款之保險契約因催告、墊繳、停效等情形或其他原因致指定金融機構無法進行轉帳付款作業時，要保人應於保險契約條款約定寬限期間內，自行向乙方交付無轉帳折扣之足額應繳保險費息。本項約定事項不適用於投資型商品。
                    </li>
                    <li>7.乙方於每期保險費息入帳後，應郵寄保險費息送金單/收據予要保人作為繳費憑證。甲方如因授權指定金融機構自動轉帳金額與應繳保險費息金額不符，或對保險費息率計算有異議時，或未收到保險費息送金單/收據時，應自行向乙方洽詢。</li>
                    <li>8.投資型保單續期/超額保險費扣除前置費用後之投資判定日，為甲方指定金融機構扣款成功，並乙方受領入帳後之次一營業日。</li>
                    <li>9.其他有關保險契約之應繳保險費息日期、寬限期間、停效、自動墊繳等事項或未盡事宜悉依保險契約之約定條款辦理。</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="form-check mt-0 confirm-read">
          <div className="col-12 field-radioGroup">
            <div className="name" />
            <div className="d-flex mb-3 mt-1 flex-wrap">
              <div className="form-check field-radio">
                <input type="radio" className="form-check-input me-2 mb-1" name="radio" id="radio-0" value="1" />
                <label className="form-check-label me-2 text-nowrap" htmlFor="radio-0">本人已審閲及同意以上説明</label>
              </div>
              <div className="form-check field-radio">
                <input type="radio" className="form-check-input me-2 mb-1" name="radio" id="radio-1" value="2" />
                <label className="form-check-label me-2 text-nowrap" htmlFor="radio-1">不同意</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ArticleDisplayer.defaultProps = {
  scrollbar: false
};

export default React.memo(ArticleDisplayer);
