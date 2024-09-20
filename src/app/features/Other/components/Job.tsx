import React, { useState } from 'react';
import SelectField from '../../../common/components/Elements/SelectField';
import _ from 'lodash';
import { PlusOutlined } from '@ant-design/icons';

const Job: React.FC<any> = (props) => {
  const [partimeJobs, setPartimeJobs] = useState<any>([]);
  return (
    <>
      <div className="row py-2">
        <div className="col">
          <div className="form-label labelName">行業類別</div>
          <SelectField
            label=""
            className="w-100"
            name={`${props.name}.insurance.tradeType`}
            placeholder="請選擇行業類別"
          >
            <>
              <SelectField.Option value="00" key="00">
                一般職業
              </SelectField.Option>
              <SelectField.Option value="01" key="01">
                農牧業
              </SelectField.Option>
              <SelectField.Option value="02" key="02">
                漁業
              </SelectField.Option>
              <SelectField.Option value="03" key="03">
                木材森林業
              </SelectField.Option>
              <SelectField.Option value="04" key="04">
                礦業採石業
              </SelectField.Option>
              <SelectField.Option value="05" key="05">
                交通運輸業
              </SelectField.Option>
              <SelectField.Option value="06" key="06">
                餐旅業
              </SelectField.Option>
              <SelectField.Option value="07" key="07">
                建築工程業
              </SelectField.Option>
              <SelectField.Option value="08" key="08">
                製造業
              </SelectField.Option>
              <SelectField.Option value="09" key="09">
                新聞廣告業
              </SelectField.Option>
            </>
          </SelectField>
        </div>
        <div className="col">
          <div className="form-label labelName">行業</div>
          <SelectField
            label=""
            className="w-100"
            name={`${props.name}.insurance.trade`}
            placeholder="請選擇行業類別"
          >
            <>
              <SelectField.Option value="0201" key="0201">
                內陸漁業
              </SelectField.Option>
              <SelectField.Option value="0807" key="0807">
                化學原料業
              </SelectField.Option>
              <SelectField.Option value="0813" key="0813">
                手工藝品業
              </SelectField.Option>
              <SelectField.Option value="2123" key="2123">
                手球
              </SelectField.Option>
              <SelectField.Option value="0302" key="0302">
                木材加工業
              </SelectField.Option>
              <SelectField.Option value="2125" key="2125">
                水上摩托車
              </SelectField.Option>
              <SelectField.Option value="0806" key="0806">
                水泥業（包括水泥、石膏、石灰）
              </SelectField.Option>
              <SelectField.Option value="2122" key="2122">
                巧固球
              </SelectField.Option>
              <SelectField.Option value="2111" key="2111">
                民俗體育活動
              </SelectField.Option>
              <SelectField.Option value="1404" key="1404">
                瓦斯
              </SelectField.Option>
            </>
          </SelectField>

        </div>
        <div className="col">
          <div className="form-label labelName">職務</div>
          <SelectField
            label=""
            className="w-100"
            name={`${props.name}.insurance.job`}
            placeholder="請選擇職務"
          >
            <>
              <SelectField.Option value="00010010" key="00010010">
                內勤人員
              </SelectField.Option>
              <SelectField.Option value="00010020" key="00010020">
                外勤人員
              </SelectField.Option>
              <SelectField.Option value="01010010" key="01010010">
                農場經營者（不親自作業）
              </SelectField.Option>
              <SelectField.Option value="01010020" key="01010020">
                農夫
              </SelectField.Option>
              <SelectField.Option value="01010030" key="01010030">
                長短工
              </SelectField.Option>
              <SelectField.Option value="01010040" key="01010040">
                果農
              </SelectField.Option>
              <SelectField.Option value="01010050" key="01010050">
                苗圃栽培人員
              </SelectField.Option>
              <SelectField.Option value="01010060" key="01010060">
                花圃栽培人員
              </SelectField.Option>
              <SelectField.Option value="01010070" key="01010070">
                飼養家禽家畜人員
              </SelectField.Option>
              <SelectField.Option value="01010080" key="01010080">
                農業技師、指導員
              </SelectField.Option>
            </>
          </SelectField>
        </div>
      </div>

      {
        partimeJobs.map((p: any, index: number) => {
          return (
            <div key={index} className="row py-2">
              <div className="col">
                <h3 className="form-label labelName">兼職-行業類別</h3>
                <div className="flex flex-grow">
                  <SelectField
                    label=""
                    className="w-100"
                    name={`insurance.partTimeJob.${index}.tradeType`}
                    placeholder="請選擇行業類別"
                  >
                    <>
                      <SelectField.Option value="00" key="00">
                        一般職業
                      </SelectField.Option>
                      <SelectField.Option value="01" key="01">
                        農牧業
                      </SelectField.Option>
                      <SelectField.Option value="02" key="02">
                        漁業
                      </SelectField.Option>
                      <SelectField.Option value="03" key="03">
                        木材森林業
                      </SelectField.Option>
                      <SelectField.Option value="04" key="04">
                        礦業採石業
                      </SelectField.Option>
                      <SelectField.Option value="05" key="05">
                        交通運輸業
                      </SelectField.Option>
                      <SelectField.Option value="06" key="06">
                        餐旅業
                      </SelectField.Option>
                      <SelectField.Option value="07" key="07">
                        建築工程業
                      </SelectField.Option>
                      <SelectField.Option value="08" key="08">
                        製造業
                      </SelectField.Option>
                      <SelectField.Option value="09" key="09">
                        新聞廣告業
                      </SelectField.Option>
                    </>
                  </SelectField>
                </div>
              </div>
              <div className="col">
                <h3 className="form-label labelName">兼職-行業</h3>
                <div className="flex flex-grow">
                  <SelectField
                    label=""
                    className="w-100"
                    name={`insurance.partTimeJob.${index}.trade`}
                    placeholder="請選擇行業類別"
                  >
                    <>
                      <SelectField.Option value="0201" key="0201">
                        內陸漁業
                      </SelectField.Option>
                      <SelectField.Option value="0807" key="0807">
                        化學原料業
                      </SelectField.Option>
                      <SelectField.Option value="0813" key="0813">
                        手工藝品業
                      </SelectField.Option>
                      <SelectField.Option value="2123" key="2123">
                        手球
                      </SelectField.Option>
                      <SelectField.Option value="0302" key="0302">
                        木材加工業
                      </SelectField.Option>
                      <SelectField.Option value="2125" key="2125">
                        水上摩托車
                      </SelectField.Option>
                      <SelectField.Option value="0806" key="0806">
                        水泥業（包括水泥、石膏、石灰）
                      </SelectField.Option>
                      <SelectField.Option value="2122" key="2122">
                        巧固球
                      </SelectField.Option>
                      <SelectField.Option value="2111" key="2111">
                        民俗體育活動
                      </SelectField.Option>
                      <SelectField.Option value="1404" key="1404">
                        瓦斯
                      </SelectField.Option>
                    </>
                  </SelectField>
                </div>
              </div>
              <div className="col">
                <h3 className="form-label labelName">兼職-職務</h3>
                <div className="flex flex-grow">
                  <SelectField
                    label=""
                    className="w-100"
                    name={`insurance.partTimeJob.${index}.job`}
                    placeholder="請選擇職務"
                  >
                    <>
                      <SelectField.Option value="00010010" key="00010010">
                        內勤人員
                      </SelectField.Option>
                      <SelectField.Option value="00010020" key="00010020">
                        外勤人員
                      </SelectField.Option>
                      <SelectField.Option value="01010010" key="01010010">
                        農場經營者（不親自作業）
                      </SelectField.Option>
                      <SelectField.Option value="01010020" key="01010020">
                        農夫
                      </SelectField.Option>
                      <SelectField.Option value="01010030" key="01010030">
                        長短工
                      </SelectField.Option>
                      <SelectField.Option value="01010040" key="01010040">
                        果農
                      </SelectField.Option>
                      <SelectField.Option value="01010050" key="01010050">
                        苗圃栽培人員
                      </SelectField.Option>
                      <SelectField.Option value="01010060" key="01010060">
                        花圃栽培人員
                      </SelectField.Option>
                      <SelectField.Option value="01010070" key="01010070">
                        飼養家禽家畜人員
                      </SelectField.Option>
                      <SelectField.Option value="01010080" key="01010080">
                        農業技師、指導員
                      </SelectField.Option>
                    </>
                  </SelectField>
                  <button
                    value="刪除" onClick={() => {
                      const _clone = _.clone(partimeJobs);
                      const result = _clone.filter((p1: any) => p1.key !== p.key);
                      setPartimeJobs(result);
                    }} className="delete" style={{ marginTop: '15px', marginLeft: '5px', padding: '5px 5px', width: '50px', color: '#767676', border: '1px solid rgb(169, 169, 169)', borderRadius: '50px' }} aria-label="刪除"
                  >刪除
                  </button>
                </div>
              </div>
            </div>
          );
        })
      }
      {
        props.showPartimeJobsButton && (
          <div className="row justify-center d-flex m-2 py-2">
            <div className="col col-md-auto" style={{ margin: 'auto' }}>
              <button
                type="button" className="btn btn-custom btn-elife-outline-green" value="我有兼職工作"
                aria-label="我有兼職工作"
                onClick={() => {
                  const _clone = _.clone(partimeJobs);
                  _clone.push({
                    key: new Date()
                  });
                  setPartimeJobs(_clone);
                }}
              >
                我有兼職工作
                <PlusOutlined />
              </button>
            </div>
          </div>
        )
      }
    </>
  );
};

Job.defaultProps = {
  showPartimeJobsButton: true
};

// const Job: React.FC<any> = (props) => {
//   const [partimeJobs, setPartimeJobs] = useState<any>([]);
//   return (
//       <div className="row m-0">
//         <div className="grid grid-cols-1 gap-x-4 w-full pc:grid-cols-3">
//           <div className="flex flex-column flex-nowrap w-full block">
//             <h3 className="flex-grow labelName">行業類別</h3>
//             <div className="flex flex-grow">
//               <SelectField
//                   label=""
//                   className="w-100"
//                   name={`${props.name}.insurance.tradeType`}
//                   placeholder="請選擇行業類別"
//               >
//                 <>
//                   <SelectField.Option value="00" key="00">
//                     一般職業
//                   </SelectField.Option>
//                   <SelectField.Option value="01" key="01">
//                     農牧業
//                   </SelectField.Option>
//                   <SelectField.Option value="02" key="02">
//                     漁業
//                   </SelectField.Option>
//                   <SelectField.Option value="03" key="03">
//                     木材森林業
//                   </SelectField.Option>
//                   <SelectField.Option value="04" key="04">
//                     礦業採石業
//                   </SelectField.Option>
//                   <SelectField.Option value="05" key="05">
//                     交通運輸業
//                   </SelectField.Option>
//                   <SelectField.Option value="06" key="06">
//                     餐旅業
//                   </SelectField.Option>
//                   <SelectField.Option value="07" key="07">
//                     建築工程業
//                   </SelectField.Option>
//                   <SelectField.Option value="08" key="08">
//                     製造業
//                   </SelectField.Option>
//                   <SelectField.Option value="09" key="09">
//                     新聞廣告業
//                   </SelectField.Option>
//                 </>
//               </SelectField>
//             </div>
//           </div>
//           <div className="flex flex-column flex-nowrap w-full block">
//             <h3 className="flex-grow labelName">行業</h3>
//             <div className="flex flex-grow">
//               <SelectField
//                   label=""
//                   className="w-100"
//                   name={`${props.name}.insurance.trade`}
//                   placeholder="請選擇行業類別"
//               >
//                 <>
//                   <SelectField.Option value="0201" key="0201">
//                     內陸漁業
//                   </SelectField.Option>
//                   <SelectField.Option value="0807" key="0807">
//                     化學原料業
//                   </SelectField.Option>
//                   <SelectField.Option value="0813" key="0813">
//                     手工藝品業
//                   </SelectField.Option>
//                   <SelectField.Option value="2123" key="2123">
//                     手球
//                   </SelectField.Option>
//                   <SelectField.Option value="0302" key="0302">
//                     木材加工業
//                   </SelectField.Option>
//                   <SelectField.Option value="2125" key="2125">
//                     水上摩托車
//                   </SelectField.Option>
//                   <SelectField.Option value="0806" key="0806">
//                     水泥業（包括水泥、石膏、石灰）
//                   </SelectField.Option>
//                   <SelectField.Option value="2122" key="2122">
//                     巧固球
//                   </SelectField.Option>
//                   <SelectField.Option value="2111" key="2111">
//                     民俗體育活動
//                   </SelectField.Option>
//                   <SelectField.Option value="1404" key="1404">
//                     瓦斯
//                   </SelectField.Option>
//                 </>
//               </SelectField>
//             </div>
//           </div>
//           <div className="flex flex-column flex-nowrap w-full block">
//             <h3 className="flex-grow labelName">職務</h3>
//             <div className="flex flex-grow">
//               <SelectField
//                   label=""
//                   className="w-100"
//                   name={`${props.name}.insurance.job`}
//                   placeholder="請選擇職務"
//               >
//                 <>
//                   <SelectField.Option value="00010010" key="00010010">
//                     內勤人員
//                   </SelectField.Option>
//                   <SelectField.Option value="00010020" key="00010020">
//                     外勤人員
//                   </SelectField.Option>
//                   <SelectField.Option value="01010010" key="01010010">
//                     農場經營者（不親自作業）
//                   </SelectField.Option>
//                   <SelectField.Option value="01010020" key="01010020">
//                     農夫
//                   </SelectField.Option>
//                   <SelectField.Option value="01010030" key="01010030">
//                     長短工
//                   </SelectField.Option>
//                   <SelectField.Option value="01010040" key="01010040">
//                     果農
//                   </SelectField.Option>
//                   <SelectField.Option value="01010050" key="01010050">
//                     苗圃栽培人員
//                   </SelectField.Option>
//                   <SelectField.Option value="01010060" key="01010060">
//                     花圃栽培人員
//                   </SelectField.Option>
//                   <SelectField.Option value="01010070" key="01010070">
//                     飼養家禽家畜人員
//                   </SelectField.Option>
//                   <SelectField.Option value="01010080" key="01010080">
//                     農業技師、指導員
//                   </SelectField.Option>
//                 </>
//               </SelectField>
//             </div>
//           </div>
//         </div>
//         {
//           partimeJobs.map((p: any, index: number) => {
//             return (
//                 <div key={index} className="grid grid-cols-1 gap-x-4 w-full pc:grid-cols-3 mt-5">
//                   <div className="flex flex-column flex-nowrap w-full block">
//                     <h3 className="flex-grow labelName">兼職-行業類別</h3>
//                     <div className="flex flex-grow">
//                       <SelectField
//                           label=""
//                           className="w-100"
//                           name={`insurance.partTimeJob.${index}.tradeType`}
//                           placeholder="請選擇行業類別"
//                       >
//                         <>
//                           <SelectField.Option value="00" key="00">
//                             一般職業
//                           </SelectField.Option>
//                           <SelectField.Option value="01" key="01">
//                             農牧業
//                           </SelectField.Option>
//                           <SelectField.Option value="02" key="02">
//                             漁業
//                           </SelectField.Option>
//                           <SelectField.Option value="03" key="03">
//                             木材森林業
//                           </SelectField.Option>
//                           <SelectField.Option value="04" key="04">
//                             礦業採石業
//                           </SelectField.Option>
//                           <SelectField.Option value="05" key="05">
//                             交通運輸業
//                           </SelectField.Option>
//                           <SelectField.Option value="06" key="06">
//                             餐旅業
//                           </SelectField.Option>
//                           <SelectField.Option value="07" key="07">
//                             建築工程業
//                           </SelectField.Option>
//                           <SelectField.Option value="08" key="08">
//                             製造業
//                           </SelectField.Option>
//                           <SelectField.Option value="09" key="09">
//                             新聞廣告業
//                           </SelectField.Option>
//                         </>
//                       </SelectField>
//                     </div>
//                   </div>
//                   <div className="flex flex-column flex-nowrap w-full block">
//                     <h3 className="flex-grow labelName">兼職-行業</h3>
//                     <div className="flex flex-grow">
//                       <SelectField
//                           label=""
//                           className="w-100"
//                           name={`insurance.partTimeJob.${index}.trade`}
//                           placeholder="請選擇行業類別"
//                       >
//                         <>
//                           <SelectField.Option value="0201" key="0201">
//                             內陸漁業
//                           </SelectField.Option>
//                           <SelectField.Option value="0807" key="0807">
//                             化學原料業
//                           </SelectField.Option>
//                           <SelectField.Option value="0813" key="0813">
//                             手工藝品業
//                           </SelectField.Option>
//                           <SelectField.Option value="2123" key="2123">
//                             手球
//                           </SelectField.Option>
//                           <SelectField.Option value="0302" key="0302">
//                             木材加工業
//                           </SelectField.Option>
//                           <SelectField.Option value="2125" key="2125">
//                             水上摩托車
//                           </SelectField.Option>
//                           <SelectField.Option value="0806" key="0806">
//                             水泥業（包括水泥、石膏、石灰）
//                           </SelectField.Option>
//                           <SelectField.Option value="2122" key="2122">
//                             巧固球
//                           </SelectField.Option>
//                           <SelectField.Option value="2111" key="2111">
//                             民俗體育活動
//                           </SelectField.Option>
//                           <SelectField.Option value="1404" key="1404">
//                             瓦斯
//                           </SelectField.Option>
//                         </>
//                       </SelectField>
//                     </div>
//                   </div>
//                   <div className="flex flex-column flex-nowrap w-full block">
//                     <h3 className="flex-grow labelName">兼職-職務</h3>
//                     <div className="flex flex-grow">
//                       <SelectField
//                           label=""
//                           className="w-100"
//                           name={`insurance.partTimeJob.${index}.job`}
//                           placeholder="請選擇職務"
//                       >
//                         <>
//                           <SelectField.Option value="00010010" key="00010010">
//                             內勤人員
//                           </SelectField.Option>
//                           <SelectField.Option value="00010020" key="00010020">
//                             外勤人員
//                           </SelectField.Option>
//                           <SelectField.Option value="01010010" key="01010010">
//                             農場經營者（不親自作業）
//                           </SelectField.Option>
//                           <SelectField.Option value="01010020" key="01010020">
//                             農夫
//                           </SelectField.Option>
//                           <SelectField.Option value="01010030" key="01010030">
//                             長短工
//                           </SelectField.Option>
//                           <SelectField.Option value="01010040" key="01010040">
//                             果農
//                           </SelectField.Option>
//                           <SelectField.Option value="01010050" key="01010050">
//                             苗圃栽培人員
//                           </SelectField.Option>
//                           <SelectField.Option value="01010060" key="01010060">
//                             花圃栽培人員
//                           </SelectField.Option>
//                           <SelectField.Option value="01010070" key="01010070">
//                             飼養家禽家畜人員
//                           </SelectField.Option>
//                           <SelectField.Option value="01010080" key="01010080">
//                             農業技師、指導員
//                           </SelectField.Option>
//                         </>
//                       </SelectField>
//                       <button
//                           value="刪除" onClick={() => {
//                         const _clone = _.clone(partimeJobs);
//                         const result = _clone.filter((p1: any) => p1.key !== p.key);
//                         setPartimeJobs(result);
//                       }} className="delete" style={{ marginTop: '15px', marginLeft: '5px', padding: '5px 5px', width: '50px', color: '#767676', border: '1px solid rgb(169, 169, 169)', borderRadius: '50px' }} aria-label="刪除"
//                       >刪除
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//             );
//           })
//         }
//         {
//             props.showPartimeJobsButton && (
//                 <div className="row justify-center d-flex">
//                   <div className="col-4" style={{ margin: 'auto' }}>
//                     <button
//                         type="button" className="btn btn-outline-primary button-with-add-icon mt-5 mb-5" value="我有兼職工作"
//                         aria-label="我有兼職工作"
//                         onClick={() => {
//                           const _clone = _.clone(partimeJobs);
//                           _clone.push({
//                             key: new Date()
//                           });
//                           setPartimeJobs(_clone);
//                         }}
//                     >
//                       我有兼職工作
//                       <div className="add-icon" />
//                     </button>
//                   </div>
//                 </div>
//             )
//         }
//       </div>
//   );
// };
//
// Job.defaultProps = {
//   showPartimeJobsButton: true
// };

export default React.memo(Job);
