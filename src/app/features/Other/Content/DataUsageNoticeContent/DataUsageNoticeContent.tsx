import React, { useRef, useState } from 'react';
import Article from '../../../../common/components/Article';
import Checkbox from '../../../../common/components/Checkbox';

const DataUsageNoticeContent: React.FC<any> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modalButtonEnabled, setModalButtonEnabled] = useState(false);

  return (
    <Article
      ref={containerRef}
      onScrollToBottom={
                () => setModalButtonEnabled(true)
            }
      footer={
                (
                  <div className="row justify-content-center align-items-center py-2">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                      <Checkbox
                        className="d-flex align-items-center labelName"
                        classNames={{ labelClass: 'ms-2', inputClass: '' }}
                        disabled={!modalButtonEnabled}
                      >
                        本人已閱覽相關文件
                      </Checkbox>
                    </div>
                  </div>
                )
            }
    >
      <div className="row flex-column align-items-center p-3 fs-6 w-100">
        <p>臺銀人壽保險股份有限公司(下稱本公司)依據個人資料保護法（以下稱個資法）第六條第二項、第八條
          第一項(如為間接蒐集之個人資料則為第九條第一項)規定，向 台端告知下列事項，請 台端詳閱：
        </p>
        <p><strong>一、蒐集之目的：</strong></p>
        <p>(一) 人身保險(００一)。</p>
        <p>(二) 行銷(０四０)。</p>
        <p>(三) 金融服務業依法令規定及金融監理需要，所為之蒐集處理及利用(０五九)。</p>
        <p>(四) 其他經營合於營業登記項目或組織章程所定之業務(一八一) 。</p>
        <p><strong>二、蒐集之個人資料類別：</strong></p>
        <p>(一) 姓名。</p>
        <p>(二) 出生年月日及身分證統一編號。</p>
        <p>(三) 地址及電話等聯絡方式。</p>
        <p>(四) 病歷、醫療、健康檢查。</p>
        <p>(五) 其他詳如要保書等相關業務申請文件內容。</p>
        <p><strong>三、個人資料之來源（個人資料非由當事人提供間接蒐集之情形適用）：</strong></p>
        <p>(一) 要保人。</p>
        <p>(二) 當事人之法定代理人、輔助人。</p>
        <p>(三) 各醫療院所。</p>
        <p>(四) 與第三人共同行銷、交互運用客戶資料、合作推廣等關係、或於本公司各項業務內所委託往來之第三人。</p>
        <p><strong>四、個人資料利用之期間、對象、地區、方式：</strong></p>
        <p>(一) 期間：因執行業務所必須及依法令規定應為保存之期間。</p>
        <p>(二) 對象：本(分)公司及本公司海外分支機構、中華民國人壽保險商業同業公會、中華民國產
          物保險商業同業公會、財團法人保險事業發展中心、財團法人保險安定基金、財團
          法人金融消費評議中心、財團法人金融聯合徵信中心、財團法人聯合信用卡中心、
          台灣票據交換所、財金資訊公司、業務委外機構、合作推廣台端保險契約之保險代
          理人/保險經紀人、與本公司有再保業務往來之公司、依法有調查權機關或金融監理
          機關。
        </p>
        <p>(三) 地區：上述對象所在之地區。</p>
        <p>(四) 方式：合於法令規定之利用方式。</p>
        <p><strong>五、依據個資法第三條規定，台端就本公司保有 台端之個人資料得行使之權利及方式：</strong></p>
        <p>(一) 得向本公司行使之權利：</p>
        <p>1.向本公司查詢、請求閱覽或請求製給複製本。</p>
        <p>2.向本公司請求補充或更正。</p>
        <p>3.向本公司請求停止蒐集、處理或利用及請求刪除。</p>
        <p>(二) 行使權利之方式：以書面、電子郵件、傳真、電子文件。</p>
        <p><strong>六、台端不提供個人資料所致權益之影響（個人資料由當事人直接蒐集之情形適用）：</strong></p>
        <p>台端若未能提供相關個人資料時，本公司將可能延後或無法進行必要之審核及處理作業，因此可
          能婉謝承保、遲延或無法提供 台端相關服務或給付。
        </p>
      </div>
    </Article>
  );
};

export default DataUsageNoticeContent;
