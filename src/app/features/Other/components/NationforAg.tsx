import React from 'react';

const Nation: React.FC = () => {
  return (
    <>
      <div className="col-12">
        <div className="name labelName-Ag">國籍</div>
        <div className="d-flex form-row mt-1">
          <div className="d-flex col-12 col-lg-5">
            <input
              type="radio" name="applicantNationType" id="applicantNationType-0"
              className="form-check-input me-2 mb-1" data-field-invalid="false" aria-label="Domestic" value="Domestic"
            />
            <label className="form-check-label me-2 text-nowrap labelName" htmlFor="applicantNationType-0">中華民國</label>
          </div>
          <div className="d-flex col-12 col-lg-5">
            <input
              type="radio" name="applicantNationType" id="applicantNationType-1"
              className="form-check-input me-2 mb-1" data-field-invalid="false" aria-label="Foreign" value="Foreign"
            />
            <label className="form-check-label me-2 text-nowrap labelName" htmlFor="applicantNationType-1">其他</label>
            <div className="dropdown bootstrap-select disabled">
              <select
                id="applicant-nationalityId" name="applicant.nationalityId" className=""
                placeholder="請選擇"
              >
                <option className="bs-title-option" value="" />
                <option value="JP" title="日本" aria-label="日本">日本</option>
                <option value="KR" title="韓國；南韓" aria-label="韓國；南韓">韓國；南韓</option>
                <option value="CN" title="中國" aria-label="中國">中國</option>
                <option value="HK" title="香港" aria-label="香港">香港</option>
                <option value="MO" title="澳門" aria-label="澳門">澳門</option>
                <option value="AF" title="阿富汗" aria-label="阿富汗">阿富汗</option>
                <option value="IQ" title="伊拉克" aria-label="伊拉克">伊拉克</option>
                <option value="IR" title="伊朗" aria-label="伊朗">伊朗</option>
                <option value="JO" title="約旦" aria-label="約旦">約旦</option>
                <option value="KG" title="吉爾吉斯" aria-label="吉爾吉斯">吉爾吉斯</option>
                <option value="KP" title="朝鮮；北韓" aria-label="朝鮮；北韓">朝鮮；北韓</option>
                <option value="LB" title="黎巴嫩" aria-label="黎巴嫩">黎巴嫩</option>
                <option value="NE" title="尼日；尼日爾" aria-label="尼日；尼日爾">尼日；尼日爾</option>
                <option value="NP" title="尼泊爾" aria-label="尼泊爾">尼泊爾</option>
                <option value="PK" title="巴基斯坦" aria-label="巴基斯坦">巴基斯坦</option>
                <option value="SY" title="敘利亞" aria-label="敘利亞">敘利亞</option>
                <option value="TL" title="東帝汶" aria-label="東帝汶">東帝汶</option>
                <option value="YE" title="葉門" aria-label="葉門">葉門</option>
                <option value="AE" title="阿拉伯聯合大公國" aria-label="阿拉伯聯合大公國">阿拉伯聯合大公國</option>
                <option value="AM" title="亞美尼亞" aria-label="亞美尼亞">亞美尼亞</option>
                <option value="AZ" title="阿塞拜疆" aria-label="阿塞拜疆">阿塞拜疆</option>
                <option value="BD" title="孟加拉" aria-label="孟加拉">孟加拉</option>
                <option value="BH" title="巴林" aria-label="巴林">巴林</option>
                <option value="BN" title="文萊" aria-label="文萊">文萊</option>
                <option value="BT" title="不丹" aria-label="不丹">不丹</option>
                <option value="CC" title="科科斯群島" aria-label="科科斯群島">科科斯群島</option>
                <option value="CY" title="塞浦路斯" aria-label="塞浦路斯">塞浦路斯</option>
                <option value="GE" title="格魯吉亞" aria-label="格魯吉亞">格魯吉亞</option>
                <option value="ID" title="印度尼西亞" aria-label="印度尼西亞">印度尼西亞</option>
                <option value="IL" title="以色列" aria-label="以色列">以色列</option>
                <option value="IN" title="印度" aria-label="印度">印度</option>
                <option value="IO" title="英屬印度洋領地" aria-label="英屬印度洋領地">英屬印度洋領地</option>
                <option value="KH" title="柬埔寨" aria-label="柬埔寨">柬埔寨</option>
                <option value="KW" title="科威特" aria-label="科威特">科威特</option>
                <option value="KZ" title="哈薩克斯坦" aria-label="哈薩克斯坦">哈薩克斯坦</option>
                <option value="LA" title="老撾；寮國" aria-label="老撾；寮國">老撾；寮國</option>
                <option value="LK" title="斯里蘭卡" aria-label="斯里蘭卡">斯里蘭卡</option>
                <option value="MM" title="緬甸" aria-label="緬甸">緬甸</option>
                <option value="MN" title="蒙古" aria-label="蒙古">蒙古</option>
                <option value="MV" title="馬爾代夫" aria-label="馬爾代夫">馬爾代夫</option>
                <option value="MY" title="馬來西亞" aria-label="馬來西亞">馬來西亞</option>
                <option value="NG" title="尼日利亞" aria-label="尼日利亞">尼日利亞</option>
                <option value="OM" title="阿曼" aria-label="阿曼">阿曼</option>
                <option value="PH" title="菲律賓" aria-label="菲律賓">菲律賓</option>
                <option value="PS" title="巴勒斯坦" aria-label="巴勒斯坦">巴勒斯坦</option>
                <option value="QA" title="卡塔爾" aria-label="卡塔爾">卡塔爾</option>
                <option value="SA" title="沙烏地阿拉伯" aria-label="沙烏地阿拉伯">沙烏地阿拉伯</option>
                <option value="SG" title="新加坡" aria-label="新加坡">新加坡</option>
                <option value="TH" title="泰國" aria-label="泰國">泰國</option>
                <option value="TJ" title="塔吉克斯坦" aria-label="塔吉克斯坦">塔吉克斯坦</option>
                <option value="TM" title="土庫曼斯坦" aria-label="土庫曼斯坦">土庫曼斯坦</option>
                <option value="TR" title="土耳其" aria-label="土耳其">土耳其</option>
                <option value="UZ" title="烏茲別克斯坦" aria-label="烏茲別克斯坦">烏茲別克斯坦</option>
                <option value="VN" title="越南" aria-label="越南">越南</option>
                <option value="10" title="亞洲其他可承保地區" aria-label="亞洲其他可承保地區">亞洲其他可承保地區
                </option>
                <option value="BE" title="比利時" aria-label="比利時">比利時</option>
                <option value="DE" title="德國" aria-label="德國">德國</option>
                <option value="FR" title="法國" aria-label="法國">法國</option>
                <option value="GB" title="英國" aria-label="英國">英國</option>
                <option value="IT" title="義大利" aria-label="義大利">義大利</option>
                <option value="RU" title="俄羅斯" aria-label="俄羅斯">俄羅斯</option>
                <option value="UA" title="烏克蘭" aria-label="烏克蘭">烏克蘭</option>
                <option value="AD" title="安道爾" aria-label="安道爾">安道爾</option>
                <option value="AL" title="阿爾巴尼亞" aria-label="阿爾巴尼亞">阿爾巴尼亞</option>
                <option value="AT" title="奧地利" aria-label="奧地利">奧地利</option>
                <option value="AX" title="奧蘭群島" aria-label="奧蘭群島">奧蘭群島</option>
                <option value="BA" title="波黑" aria-label="波黑">波黑</option>
                <option value="BG" title="保加利亞" aria-label="保加利亞">保加利亞</option>
                <option value="BY" title="白俄羅斯" aria-label="白俄羅斯">白俄羅斯</option>
                <option value="CH" title="瑞士" aria-label="瑞士">瑞士</option>
                <option value="CZ" title="捷克" aria-label="捷克">捷克</option>
                <option value="DK" title="丹麥" aria-label="丹麥">丹麥</option>
                <option value="EE" title="愛沙尼亞" aria-label="愛沙尼亞">愛沙尼亞</option>
                <option value="ES" title="西班牙" aria-label="西班牙">西班牙</option>
                <option value="FI" title="芬蘭" aria-label="芬蘭">芬蘭</option>
                <option value="FO" title="法羅群島" aria-label="法羅群島">法羅群島</option>
                <option value="GG" title="根西島" aria-label="根西島">根西島</option>
                <option value="GI" title="直布羅陀" aria-label="直布羅陀">直布羅陀</option>
                <option value="GR" title="希臘" aria-label="希臘">希臘</option>
                <option value="HR" title="克羅埃西亞" aria-label="克羅埃西亞">克羅埃西亞</option>
                <option value="HU" title="匈牙利" aria-label="匈牙利">匈牙利</option>
                <option value="IE" title="愛爾蘭" aria-label="愛爾蘭">愛爾蘭</option>
                <option value="IM" title="馬恩島" aria-label="馬恩島">馬恩島</option>
                <option value="IS" title="冰島" aria-label="冰島">冰島</option>
                <option value="JE" title="澤西島" aria-label="澤西島">澤西島</option>
                <option value="LI" title="列支敦士登" aria-label="列支敦士登">列支敦士登</option>
                <option value="LT" title="立陶宛" aria-label="立陶宛">立陶宛</option>
                <option value="LU" title="盧森堡" aria-label="盧森堡">盧森堡</option>
                <option value="LV" title="拉脫維亞" aria-label="拉脫維亞">拉脫維亞</option>
                <option value="MC" title="摩納哥" aria-label="摩納哥">摩納哥</option>
                <option value="MD" title="摩爾多瓦" aria-label="摩爾多瓦">摩爾多瓦</option>
                <option value="ME" title="黑山" aria-label="黑山">黑山</option>
                <option value="MK" title="馬其頓" aria-label="馬其頓">馬其頓</option>
                <option value="MT" title="馬爾他" aria-label="馬爾他">馬爾他</option>
                <option value="NL" title="荷蘭" aria-label="荷蘭">荷蘭</option>
                <option value="NO" title="挪威" aria-label="挪威">挪威</option>
                <option value="PL" title="波蘭" aria-label="波蘭">波蘭</option>
                <option value="PT" title="葡萄牙" aria-label="葡萄牙">葡萄牙</option>
                <option value="RO" title="羅馬尼亞" aria-label="羅馬尼亞">羅馬尼亞</option>
                <option value="RS" title="塞爾維亞" aria-label="塞爾維亞">塞爾維亞</option>
                <option value="SE" title="瑞典" aria-label="瑞典">瑞典</option>
                <option value="SI" title="斯洛文尼亞" aria-label="斯洛文尼亞">斯洛文尼亞</option>
                <option
                  value="SJ" title="斯瓦爾巴和揚馬延群島"
                  aria-label="斯瓦爾巴和揚馬延群島"
                >斯瓦爾巴和揚馬延群島
                </option>
                <option value="SK" title="斯洛伐克" aria-label="斯洛伐克">斯洛伐克</option>
                <option value="SM" title="聖馬力諾" aria-label="聖馬力諾">聖馬力諾</option>
                <option value="SU" title="蘇聯" aria-label="蘇聯">蘇聯</option>
                <option value="VA" title="梵蒂岡" aria-label="梵蒂岡">梵蒂岡</option>
                <option value="04" title="歐洲其他可承保地區" aria-label="歐洲其他可承保地區">歐洲其他可承保地區
                </option>
                <option value="AU" title="澳大利亞、澳洲" aria-label="澳大利亞、澳洲">澳大利亞、澳洲</option>
                <option value="NZ" title="紐西蘭" aria-label="紐西蘭">紐西蘭</option>
                <option value="PW" title="帛琉" aria-label="帛琉">帛琉</option>
                <option value="AS" title="美屬薩摩亞" aria-label="美屬薩摩亞">美屬薩摩亞</option>
                <option value="CK" title="庫克群島" aria-label="庫克群島">庫克群島</option>
                <option value="CX" title="聖誕島" aria-label="聖誕島">聖誕島</option>
                <option value="FJ" title="斐濟" aria-label="斐濟">斐濟</option>
                <option value="FM" title="密克羅尼西亞" aria-label="密克羅尼西亞">密克羅尼西亞</option>
                <option value="GU" title="關島" aria-label="關島">關島</option>
                <option value="KI" title="基里巴斯" aria-label="基里巴斯">基里巴斯</option>
                <option value="MH" title="馬紹爾群島" aria-label="馬紹爾群島">馬紹爾群島</option>
                <option value="MP" title="北馬里亞納群島" aria-label="北馬里亞納群島">北馬里亞納群島</option>
                <option value="NC" title="新喀里多尼亞" aria-label="新喀里多尼亞">新喀里多尼亞</option>
                <option value="NF" title="諾福克島" aria-label="諾福克島">諾福克島</option>
                <option value="NR" title="瑙魯" aria-label="瑙魯">瑙魯</option>
                <option value="NU" title="紐埃" aria-label="紐埃">紐埃</option>
                <option value="PF" title="法屬波利尼西亞" aria-label="法屬波利尼西亞">法屬波利尼西亞</option>
                <option value="PG" title="巴布亞新幾內亞" aria-label="巴布亞新幾內亞">巴布亞新幾內亞</option>
                <option value="PN" title="皮特凱恩島" aria-label="皮特凱恩島">皮特凱恩島</option>
                <option value="SB" title="所羅門群島" aria-label="所羅門群島">所羅門群島</option>
                <option value="TK" title="托克勞" aria-label="托克勞">托克勞</option>
                <option value="TO" title="湯加" aria-label="湯加">湯加</option>
                <option value="TV" title="圖瓦魯" aria-label="圖瓦魯">圖瓦魯</option>
                <option value="VU" title="萬那杜" aria-label="萬那杜">萬那杜</option>
                <option value="WF" title="瓦利斯和富圖納群島" aria-label="瓦利斯和富圖納群島">瓦利斯和富圖納群島
                </option>
                <option value="WS" title="薩摩亞" aria-label="薩摩亞">薩摩亞</option>
                <option
                  value="18" title="大洋洲其他可承保地區"
                  aria-label="大洋洲其他可承保地區"
                >大洋洲其他可承保地區
                </option>
                <option value="OAK" title="OAK" aria-label="OAK">OAK</option>
                <option value="1027" title="1111028" aria-label="1111028">1111028</option>
                <option value="US" title="美國" aria-label="美國">美國</option>
                <option value="CA" title="加拿大" aria-label="加拿大">加拿大</option>
                <option value="HT" title="海地" aria-label="海地">海地</option>
                <option value="AG" title="安提瓜和巴布達島" aria-label="安提瓜和巴布達島">安提瓜和巴布達島</option>
                <option value="AI" title="安圭拉島" aria-label="安圭拉島">安圭拉島</option>
                <option value="AN" title="荷蘭安的列斯群島" aria-label="荷蘭安的列斯群島">荷蘭安的列斯群島</option>
                <option value="AW" title="阿魯巴" aria-label="阿魯巴">阿魯巴</option>
                <option value="BB" title="巴貝多" aria-label="巴貝多">巴貝多</option>
                <option value="BL" title="聖巴泰勒米島" aria-label="聖巴泰勒米島">聖巴泰勒米島</option>
                <option value="BM" title="百慕達" aria-label="百慕達">百慕達</option>
                <option value="modi" title="testmo" aria-label="testmo">testmo</option>
                <option
                  value="BQ" title="博奈爾、聖尤斯特歇斯和薩巴"
                  aria-label="博奈爾、聖尤斯特歇斯和薩巴"
                >博奈爾、聖尤斯特歇斯和薩巴
                </option>
                <option value="BS" title="巴哈馬群島" aria-label="巴哈馬群島">巴哈馬群島</option>
                <option value="BZ" title="貝里斯" aria-label="貝里斯">貝里斯</option>
                <option value="CR" title="哥斯達黎加" aria-label="哥斯達黎加">哥斯達黎加</option>
                <option value="CU" title="古巴" aria-label="古巴">古巴</option>
                <option value="DM" title="多米尼克聯邦" aria-label="多米尼克聯邦">多米尼克聯邦</option>
                <option value="DO" title="多明尼加" aria-label="多明尼加">多明尼加</option>
                <option value="GD" title="格林納達" aria-label="格林納達">格林納達</option>
                <option value="GL" title="格陵蘭" aria-label="格陵蘭">格陵蘭</option>
                <option value="GP" title="瓜得羅普島" aria-label="瓜得羅普島">瓜得羅普島</option>
                <option value="GT" title="危地馬拉" aria-label="危地馬拉">危地馬拉</option>
                <option value="HN" title="洪都拉斯" aria-label="洪都拉斯">洪都拉斯</option>
                <option value="JM" title="牙買加" aria-label="牙買加">牙買加</option>
                <option
                  value="KN" title="聖克里斯多福及尼維斯"
                  aria-label="聖克里斯多福及尼維斯"
                >聖克里斯多福及尼維斯
                </option>
                <option value="KY" title="開曼群島" aria-label="開曼群島">開曼群島</option>
                <option value="LC" title="聖盧西亞" aria-label="聖盧西亞">聖盧西亞</option>
                <option value="MF" title="法屬聖馬丁島" aria-label="法屬聖馬丁島">法屬聖馬丁島</option>
                <option value="MQ" title="馬提尼克" aria-label="馬提尼克">馬提尼克</option>
                <option value="MS" title="蒙特塞拉特" aria-label="蒙特塞拉特">蒙特塞拉特</option>
                <option value="MX" title="墨西哥" aria-label="墨西哥">墨西哥</option>
                <option value="NI" title="尼加拉瓜" aria-label="尼加拉瓜">尼加拉瓜</option>
                <option value="PA" title="巴拿馬" aria-label="巴拿馬">巴拿馬</option>
                <option
                  value="PM" title="聖皮埃爾島和密克隆島"
                  aria-label="聖皮埃爾島和密克隆島"
                >聖皮埃爾島和密克隆島
                </option>
                <option value="PR" title="波多黎各" aria-label="波多黎各">波多黎各</option>
                <option value="SV" title="薩爾瓦多" aria-label="薩爾瓦多">薩爾瓦多</option>
                <option value="SX" title="荷屬聖馬丁" aria-label="荷屬聖馬丁">荷屬聖馬丁</option>
                <option value="TC" title="特克斯和凱科斯群島" aria-label="特克斯和凱科斯群島">特克斯和凱科斯群島
                </option>
                <option value="TT" title="千里達及托巴哥" aria-label="千里達及托巴哥">千里達及托巴哥</option>
                <option
                  value="VC" title="聖文森特和格林納丁斯"
                  aria-label="聖文森特和格林納丁斯"
                >聖文森特和格林納丁斯
                </option>
                <option value="VG" title="英屬維爾京群島" aria-label="英屬維爾京群島">英屬維爾京群島</option>
                <option value="VI" title="美屬維京群島" aria-label="美屬維京群島">美屬維京群島</option>
                <option
                  value="25" title="北美洲其他可承保地區"
                  aria-label="北美洲其他可承保地區"
                >北美洲其他可承保地區
                </option>
                <option value="BR" title="巴西" aria-label="巴西">巴西</option>
                <option value="AR" title="阿根廷共和國" aria-label="阿根廷共和國">阿根廷共和國</option>
                <option value="BO" title="玻利維亞" aria-label="玻利維亞">玻利維亞</option>
                <option value="CL" title="智利" aria-label="智利">智利</option>
                <option value="CO" title="哥倫比亞" aria-label="哥倫比亞">哥倫比亞</option>
                <option value="CW" title="古拉索" aria-label="古拉索">古拉索</option>
                <option value="EC" title="厄瓜多爾" aria-label="厄瓜多爾">厄瓜多爾</option>
                <option value="FK" title="福克蘭群島" aria-label="福克蘭群島">福克蘭群島</option>
                <option value="GF" title="法屬圭亞那" aria-label="法屬圭亞那">法屬圭亞那</option>
                <option value="GY" title="圭亞那" aria-label="圭亞那">圭亞那</option>
                <option value="PE" title="秘魯" aria-label="秘魯">秘魯</option>
                <option value="PY" title="巴拉圭" aria-label="巴拉圭">巴拉圭</option>
                <option value="SR" title="蘇里南" aria-label="蘇里南">蘇里南</option>
                <option value="UY" title="烏拉圭" aria-label="烏拉圭">烏拉圭</option>
                <option value="VE" title="委內瑞拉" aria-label="委內瑞拉">委內瑞拉</option>
                <option
                  value="27" title="南美洲其他可承保地區"
                  aria-label="南美洲其他可承保地區"
                >南美洲其他可承保地區
                </option>
                <option value="ZA" title="南非共和國" aria-label="南非共和國">南非共和國</option>
                <option value="CD" title="剛果民主共和國" aria-label="剛果民主共和國">剛果民主共和國</option>
                <option value="CF" title="中非共和國" aria-label="中非共和國">中非共和國</option>
                <option value="CG" title="剛果共和國" aria-label="剛果共和國">剛果共和國</option>
                <option value="CI" title="科特迪瓦；象牙海岸" aria-label="科特迪瓦；象牙海岸">科特迪瓦；象牙海岸</option>
                <option value="CM" title="喀麥隆" aria-label="喀麥隆">喀麥隆</option>
                <option value="DZ" title="阿爾及利亞" aria-label="阿爾及利亞">阿爾及利亞</option>
                <option value="ET" title="衣索比亞" aria-label="衣索比亞">衣索比亞</option>
                <option value="GW" title="幾內亞比索" aria-label="幾內亞比索">幾內亞比索</option>
                <option value="LY" title="利比亞" aria-label="利比亞">利比亞</option>
                <option value="MG" title="馬達加斯加" aria-label="馬達加斯加">馬達加斯加</option>
                <option value="ML" title="馬利；馬里" aria-label="馬利；馬里">馬利；馬里</option>
                <option value="MR" title="茅利塔尼亞" aria-label="茅利塔尼亞">茅利塔尼亞</option>
                <option value="SD" title="蘇丹" aria-label="蘇丹">蘇丹</option>
                <option value="SO" title="索馬利亞" aria-label="索馬利亞">索馬利亞</option>
                <option value="TD" title="查德" aria-label="查德">查德</option>
                <option value="TG" title="多哥" aria-label="多哥">多哥</option>
                <option value="ZW" title="辛巴威" aria-label="辛巴威">辛巴威</option>
                <option value="BI" title="蒲隆地；布隆迪" aria-label="蒲隆地；布隆迪">蒲隆地；布隆迪</option>
                <option value="AC" title="阿森松島" aria-label="阿森松島">阿森松島</option>
                <option value="AO" title="安哥拉" aria-label="安哥拉">安哥拉</option>
                <option value="BF" title="布吉納法索" aria-label="布吉納法索">布吉納法索</option>
                <option value="BJ" title="貝寧" aria-label="貝寧">貝寧</option>
                <option value="BW" title="波札那" aria-label="波札那">波札那</option>
                <option value="CV" title="佛得角" aria-label="佛得角">佛得角</option>
                <option value="DJ" title="吉布提" aria-label="吉布提">吉布提</option>
                <option value="EG" title="埃及" aria-label="埃及">埃及</option>
                <option value="EH" title="西撒哈拉" aria-label="西撒哈拉">西撒哈拉</option>
                <option value="ER" title="厄立特里亞" aria-label="厄立特里亞">厄立特里亞</option>
                <option value="GA" title="加蓬" aria-label="加蓬">加蓬</option>
                <option value="GH" title="迦納" aria-label="迦納">迦納</option>
                <option value="GM" title="岡比亞" aria-label="岡比亞">岡比亞</option>
                <option value="GN" title="幾內亞" aria-label="幾內亞">幾內亞</option>
                <option value="GQ" title="赤道幾內亞" aria-label="赤道幾內亞">赤道幾內亞</option>
                <option value="KE" title="肯尼亞" aria-label="肯尼亞">肯尼亞</option>
                <option value="KM" title="科摩羅" aria-label="科摩羅">科摩羅</option>
                <option value="LR" title="利比里亞" aria-label="利比里亞">利比里亞</option>
                <option value="LS" title="萊索托" aria-label="萊索托">萊索托</option>
                <option value="MA" title="摩洛哥" aria-label="摩洛哥">摩洛哥</option>
                <option value="MU" title="模里西斯" aria-label="模里西斯">模里西斯</option>
                <option value="MW" title="馬拉維" aria-label="馬拉維">馬拉維</option>
                <option value="MZ" title="莫桑比克" aria-label="莫桑比克">莫桑比克</option>
                <option value="NA" title="納米比亞" aria-label="納米比亞">納米比亞</option>
                <option value="RE" title="留尼汪島" aria-label="留尼汪島">留尼汪島</option>
                <option value="RW" title="盧旺達" aria-label="盧旺達">盧旺達</option>
                <option value="SC" title="塞席爾" aria-label="塞席爾">塞席爾</option>
                <option
                  value="SH" title="聖赫勒拿、阿森松和特里斯坦-達庫尼亞群島"
                  aria-label="聖赫勒拿、阿森松和特里斯坦-達庫尼亞群島"
                >聖赫勒拿、阿森松和特里斯坦-達庫尼亞群島
                </option>
                <option value="SL" title="塞拉利昂" aria-label="塞拉利昂">塞拉利昂</option>
                <option value="SN" title="塞內加爾" aria-label="塞內加爾">塞內加爾</option>
                <option value="SS" title="南蘇丹" aria-label="南蘇丹">南蘇丹</option>
                <option value="ST" title="聖多美和普林西比" aria-label="聖多美和普林西比">聖多美和普林西比</option>
                <option value="SZ" title="斯威士蘭" aria-label="斯威士蘭">斯威士蘭</option>
                <option value="TN" title="突尼西亞" aria-label="突尼西亞">突尼西亞</option>
                <option value="TZ" title="坦桑尼亞" aria-label="坦桑尼亞">坦桑尼亞</option>
                <option value="UG" title="烏干達" aria-label="烏干達">烏干達</option>
                <option value="YT" title="馬約特" aria-label="馬約特">馬約特</option>
                <option value="ZM" title="贊比亞" aria-label="贊比亞">贊比亞</option>
                <option value="12" title="非洲其他可承保地區" aria-label="非洲其他可承保地區">非洲其他可承保地區
                </option>
                <option value="AQ" title="南極洲" aria-label="南極洲">南極洲</option>
                <option value="BV" title="布韋島" aria-label="布韋島">布韋島</option>
                <option
                  value="GS" title="南喬治亞島和南桑威奇群島"
                  aria-label="南喬治亞島和南桑威奇群島"
                >南喬治亞島和南桑威奇群島
                </option>
                <option
                  value="HM" title="赫德島和麥克唐納群島"
                  aria-label="赫德島和麥克唐納群島"
                >赫德島和麥克唐納群島
                </option>
                <option value="TF" title="法屬南部領地" aria-label="法屬南部領地">法屬南部領地</option>
                <option value="UM" title="美國本土外小島嶼" aria-label="美國本土外小島嶼">美國本土外小島嶼</option>
              </select>
              <button
                type="button" className="btn dropdown-toggle bs-placeholder btn-light"
                data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-9" aria-haspopup="listbox"
                aria-expanded="false" title="請選擇" data-id="applicant-nationalityId" aria-disabled="true"
              >
                <div className="filter-option">
                  <div className="filter-option-inner">
                    <div className="filter-option-inner-inner">請選擇</div>
                  </div>
                </div>
              </button>
              <div className="dropdown-menu" style={{ maxHeight: '374.333px', overflow: 'hidden', minHeight: '112px' }}>
                <div
                  className="inner show" role="listbox" id="bs-select-9"
                  style={{ maxHeight: '358.333px', overflowY: 'auto', minHeight: '96px' }}
                >
                  <ul
                    className="dropdown-menu inner show" role="presentation"
                    style={{ marginTop: '0px', marginBottom: '0px' }}
                  >
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-0">
                        <span className="labelName">日本</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-1">
                        <span className="labelName">韓國；南韓</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-2">
                        <span className="labelName">中國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-3">
                        <span className="labelName">香港</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-4">
                        <span className="labelName">澳門</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-5">
                        <span className="labelName">阿富汗</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-6">
                        <span className="labelName">伊拉克</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-7">
                        <span className="labelName">伊朗</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-8">
                        <span className="labelName">約旦</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-9">
                        <span className="labelName">吉爾吉斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-10">
                        <span className="labelName">朝鮮；北韓</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-11">
                        <span className="labelName">黎巴嫩</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-12">
                        <span className="labelName">尼日；尼日爾</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-13">
                        <span className="labelName">尼泊爾</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-14">
                        <span className="labelName">巴基斯坦</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-15">
                        <span className="labelName">敘利亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-16">
                        <span className="labelName">東帝汶</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-17">
                        <span className="labelName">葉門</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-18">
                        <span className="labelName">阿拉伯聯合大公國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-19">
                        <span className="labelName">亞美尼亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-20">
                        <span className="labelName">阿塞拜疆</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-21">
                        <span className="labelName">孟加拉</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-22">
                        <span className="labelName">巴林</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-23">
                        <span className="labelName">文萊</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-24">
                        <span className="labelName">不丹</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-25">
                        <span className="labelName">科科斯群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-26">
                        <span className="labelName">塞浦路斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-27">
                        <span className="labelName">格魯吉亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-28">
                        <span className="labelName">印度尼西亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-29">
                        <span className="labelName">以色列</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-30">
                        <span className="labelName">印度</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-31">
                        <span className="labelName">英屬印度洋領地</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-32">
                        <span className="labelName">柬埔寨</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-33">
                        <span className="labelName">科威特</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-34">
                        <span className="labelName">哈薩克斯坦</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-35">
                        <span className="labelName">老撾；寮國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-36">
                        <span className="labelName">斯里蘭卡</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-37">
                        <span className="labelName">緬甸</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-38">
                        <span className="labelName">蒙古</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-39">
                        <span className="labelName">馬爾代夫</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-40">
                        <span className="labelName">馬來西亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-41">
                        <span className="labelName">尼日利亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-42">
                        <span className="labelName">阿曼</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-43">
                        <span className="labelName">菲律賓</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-44">
                        <span className="labelName">巴勒斯坦</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-45">
                        <span className="labelName">卡塔爾</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-46">
                        <span className="labelName">沙烏地阿拉伯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-47">
                        <span className="labelName">新加坡</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-48">
                        <span className="labelName">泰國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-49">
                        <span className="labelName">塔吉克斯坦</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-50">
                        <span className="labelName">土庫曼斯坦</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-51">
                        <span className="labelName">土耳其</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-52">
                        <span className="labelName">烏茲別克斯坦</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-53">
                        <span className="labelName">越南</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-54">
                        <span className="labelName">亞洲其他可承保地區</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-55">
                        <span className="labelName">比利時</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-56">
                        <span className="labelName">德國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-57">
                        <span className="labelName">法國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-58">
                        <span className="labelName">英國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-59">
                        <span className="labelName">義大利</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-60">
                        <span className="labelName">俄羅斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-61">
                        <span className="labelName">烏克蘭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-62">
                        <span className="labelName">安道爾</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-63">
                        <span className="labelName">阿爾巴尼亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-64">
                        <span className="labelName">奧地利</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-65">
                        <span className="labelName">奧蘭群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-66">
                        <span className="labelName">波黑</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-67">
                        <span className="labelName">保加利亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-68">
                        <span className="labelName">白俄羅斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-69">
                        <span className="labelName">瑞士</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-70">
                        <span className="labelName">捷克</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-71">
                        <span className="labelName">丹麥</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-72">
                        <span className="labelName">愛沙尼亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-73">
                        <span className="labelName">西班牙</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-74">
                        <span className="labelName">芬蘭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-75">
                        <span className="labelName">法羅群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-76">
                        <span className="labelName">根西島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-77">
                        <span className="labelName">直布羅陀</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-78">
                        <span className="labelName">希臘</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-79">
                        <span className="labelName">克羅埃西亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-80">
                        <span className="labelName">匈牙利</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-81">
                        <span className="labelName">愛爾蘭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-82">
                        <span className="labelName">馬恩島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-83">
                        <span className="labelName">冰島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-84">
                        <span className="labelName">澤西島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-85">
                        <span className="labelName">列支敦士登</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-86">
                        <span className="labelName">立陶宛</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-87">
                        <span className="labelName">盧森堡</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-88">
                        <span className="labelName">拉脫維亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-89">
                        <span className="labelName">摩納哥</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-90">
                        <span className="labelName">摩爾多瓦</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-91">
                        <span className="labelName">黑山</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-92">
                        <span className="labelName">馬其頓</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-93">
                        <span className="labelName">馬爾他</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-94">
                        <span className="labelName">荷蘭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-95">
                        <span className="labelName">挪威</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-96">
                        <span className="labelName">波蘭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-97">
                        <span className="labelName">葡萄牙</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-98">
                        <span className="labelName">羅馬尼亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-99">
                        <span className="labelName">塞爾維亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-100">
                        <span className="labelName">瑞典</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-101">
                        <span className="labelName">斯洛文尼亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-102">
                        <span className="labelName">斯瓦爾巴和揚馬延群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-103">
                        <span className="labelName">斯洛伐克</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-104">
                        <span className="labelName">聖馬力諾</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-105">
                        <span className="labelName">蘇聯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-106">
                        <span className="labelName">梵蒂岡</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-107">
                        <span className="labelName">歐洲其他可承保地區</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-108">
                        <span className="labelName">澳大利亞、澳洲</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-109">
                        <span className="labelName">紐西蘭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-110">
                        <span className="labelName">帛琉</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-111">
                        <span className="labelName">美屬薩摩亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-112">
                        <span className="labelName">庫克群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-113">
                        <span className="labelName">聖誕島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-114">
                        <span className="labelName">斐濟</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-115">
                        <span className="labelName">密克羅尼西亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-116">
                        <span className="labelName">關島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-117">
                        <span className="labelName">基里巴斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-118">
                        <span className="labelName">馬紹爾群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-119">
                        <span className="labelName">北馬里亞納群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-120">
                        <span className="labelName">新喀里多尼亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-121">
                        <span className="labelName">諾福克島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-122">
                        <span className="labelName">瑙魯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-123">
                        <span className="labelName">紐埃</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-124">
                        <span className="labelName">法屬波利尼西亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-125">
                        <span className="labelName">巴布亞新幾內亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-126">
                        <span className="labelName">皮特凱恩島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-127">
                        <span className="labelName">所羅門群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-128">
                        <span className="labelName">托克勞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-129">
                        <span className="labelName">湯加</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-130">
                        <span className="labelName">圖瓦魯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-131">
                        <span className="labelName">萬那杜</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-132">
                        <span className="labelName">瓦利斯和富圖納群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-133">
                        <span className="labelName">薩摩亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-134">
                        <span className="labelName">大洋洲其他可承保地區</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-135">
                        <span className="labelName">OAK</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-136">
                        <span className="labelName">1111028</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-137">
                        <span className="labelName">美國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-138">
                        <span className="labelName">加拿大</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-139">
                        <span className="labelName">海地</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-140">
                        <span className="labelName">安提瓜和巴布達島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-141">
                        <span className="labelName">安圭拉島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-142">
                        <span className="labelName">荷蘭安的列斯群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-143">
                        <span className="labelName">阿魯巴</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-144">
                        <span className="labelName">巴貝多</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-145">
                        <span className="labelName">聖巴泰勒米島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-146">
                        <span className="labelName">百慕達</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-147">
                        <span className="labelName">testmo</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-148">
                        <span className="labelName">博奈爾、聖尤斯特歇斯和薩巴</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-149">
                        <span className="labelName">巴哈馬群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-150">
                        <span className="labelName">貝里斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-151">
                        <span className="labelName">哥斯達黎加</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-152">
                        <span className="labelName">古巴</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-153">
                        <span className="labelName">多米尼克聯邦</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-154">
                        <span className="labelName">多明尼加</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-155">
                        <span className="labelName">格林納達</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-156">
                        <span className="labelName">格陵蘭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-157">
                        <span className="labelName">瓜得羅普島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-158">
                        <span className="labelName">危地馬拉</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-159">
                        <span className="labelName">洪都拉斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-160">
                        <span className="labelName">牙買加</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-161">
                        <span className="labelName">聖克里斯多福及尼維斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-162">
                        <span className="labelName">開曼群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-163">
                        <span className="labelName">聖盧西亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-164">
                        <span className="labelName">法屬聖馬丁島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-165">
                        <span className="labelName">馬提尼克</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-166">
                        <span className="labelName">蒙特塞拉特</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-167">
                        <span className="labelName">墨西哥</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-168">
                        <span className="labelName">尼加拉瓜</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-169">
                        <span className="labelName">巴拿馬</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-170">
                        <span className="labelName">聖皮埃爾島和密克隆島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-171">
                        <span className="labelName">波多黎各</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-172">
                        <span className="labelName">薩爾瓦多</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-173">
                        <span className="labelName">荷屬聖馬丁</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-174">
                        <span className="labelName">特克斯和凱科斯群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-175">
                        <span className="labelName">千里達及托巴哥</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-176">
                        <span className="labelName">聖文森特和格林納丁斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-177">
                        <span className="labelName">英屬維爾京群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-178">
                        <span className="labelName">美屬維京群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-179">
                        <span className="labelName">北美洲其他可承保地區</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-180">
                        <span className="labelName">巴西</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-181">
                        <span className="labelName">阿根廷共和國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-182">
                        <span className="labelName">玻利維亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-183">
                        <span className="labelName">智利</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-184">
                        <span className="labelName">哥倫比亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-185">
                        <span className="labelName">古拉索</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-186">
                        <span className="labelName">厄瓜多爾</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-187">
                        <span className="labelName">福克蘭群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-188">
                        <span className="labelName">法屬圭亞那</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-189">
                        <span className="labelName">圭亞那</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-190">
                        <span className="labelName">秘魯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-191">
                        <span className="labelName">巴拉圭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-192">
                        <span className="labelName">蘇里南</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-193">
                        <span className="labelName">烏拉圭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-194">
                        <span className="labelName">委內瑞拉</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-195">
                        <span className="labelName">南美洲其他可承保地區</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-196">
                        <span className="labelName">南非共和國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-197">
                        <span className="labelName">剛果民主共和國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-198">
                        <span className="labelName">中非共和國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-199">
                        <span className="labelName">剛果共和國</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-200">
                        <span className="labelName">科特迪瓦；象牙海岸</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-201">
                        <span className="labelName">喀麥隆</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-202">
                        <span className="labelName">阿爾及利亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-203">
                        <span className="labelName">衣索比亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-204">
                        <span className="labelName">幾內亞比索</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-205">
                        <span className="labelName">利比亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-206">
                        <span className="labelName">馬達加斯加</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-207">
                        <span className="labelName">馬利；馬里</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-208">
                        <span className="labelName">茅利塔尼亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-209">
                        <span className="labelName">蘇丹</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-210">
                        <span className="labelName">索馬利亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-211">
                        <span className="labelName">查德</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-212">
                        <span className="labelName">多哥</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-213">
                        <span className="labelName">辛巴威</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-214">
                        <span className="labelName">蒲隆地；布隆迪</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-215">
                        <span className="labelName">阿森松島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-216">
                        <span className="labelName">安哥拉</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-217">
                        <span className="labelName">布吉納法索</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-218">
                        <span className="labelName">貝寧</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-219">
                        <span className="labelName">波札那</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-220">
                        <span className="labelName">佛得角</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-221">
                        <span className="labelName">吉布提</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-222">
                        <span className="labelName">埃及</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-223">
                        <span className="labelName">西撒哈拉</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-224">
                        <span className="labelName">厄立特里亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-225">
                        <span className="labelName">加蓬</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-226">
                        <span className="labelName">迦納</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-227">
                        <span className="labelName">岡比亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-228">
                        <span className="labelName">幾內亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-229">
                        <span className="labelName">赤道幾內亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-230">
                        <span className="labelName">肯尼亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-231">
                        <span className="labelName">科摩羅</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-232">
                        <span className="labelName">利比里亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-233">
                        <span className="labelName">萊索托</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-234">
                        <span className="labelName">摩洛哥</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-235">
                        <span className="labelName">模里西斯</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-236">
                        <span className="labelName">馬拉維</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-237">
                        <span className="labelName">莫桑比克</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-238">
                        <span className="labelName">納米比亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-239">
                        <span className="labelName">留尼汪島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-240">
                        <span className="labelName">盧旺達</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-241">
                        <span className="labelName">塞席爾</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-242">
                        <span className="labelName">聖赫勒拿、阿森松和特里斯坦-達庫尼亞群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-243">
                        <span className="labelName">塞拉利昂</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-244">
                        <span className="labelName">塞內加爾</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-245">
                        <span className="labelName">南蘇丹</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-246">
                        <span className="labelName">聖多美和普林西比</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-247">
                        <span className="labelName">斯威士蘭</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-248">
                        <span className="labelName">突尼西亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-249">
                        <span className="labelName">坦桑尼亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-250">
                        <span className="labelName">烏干達</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-251">
                        <span className="labelName">馬約特</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-252">
                        <span className="labelName">贊比亞</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-253">
                        <span className="labelName">非洲其他可承保地區</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-254">
                        <span className="labelName">南極洲</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-255">
                        <span className="labelName">布韋島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-256">
                        <span className="labelName">南喬治亞島和南桑威奇群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-257">
                        <span className="labelName">赫德島和麥克唐納群島</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-258">
                        <span className="labelName">法屬南部領地</span>
                      </a>
                    </li>
                    <li>
                      <a role="option" className="dropdown-item" id="bs-select-9-259">
                        <span className="labelName">美國本土外小島嶼</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nation;
