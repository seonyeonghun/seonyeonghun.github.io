import React, { useState } from "react";
import "./App.css";

function App() {
  // 화살함수
  const convert = () => console.log("단위를 min에서 hours로 변경합니다");
  const [amount, setAmount] = useState("0");

  // 일반함수
  function handleChange(event) {
    setAmount(event.target.value);
  }

  // 화살표 함수 표기법
  const resetInput = () => setAmount("0");
  const handleSubmit = (e) => e.preventDefault(); // 이벤트 전파를 막아서 새로고침을 안되게!
  return (
    <div className='main'>
      <h1 className='site-header'>단위 환산 앱</h1>
      <div className='unit-converter'>
        <div className='ad'>
          구글 광고나 네이버 광고 이미지가 옵니다. 광고주님들, 연락주세요 ㅠ
        </div>
        <div className='converter'>
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <input
                  type='text'
                  value={amount}
                  onChange={handleChange}
                  placeholder='값을 입력하세요'
                />
                <label>minutes</label>
              </li>
              <li>
                <input
                  type='text'
                  value={amount / 60}
                  placeholder='값을 입력하세요'
                />
                <label>hours</label>
              </li>
              <li>
                <button onClick={resetInput}>리셋</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
