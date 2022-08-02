### **프로젝트 소개( Introduction )**

---

###

<aside>

**[🪑 나만의 색으로 채우는 룸 인테리어 서비스( Click Me )](https://roomplanet.netlify.app/)**

</aside>

> 내가 선호하는 색(Color)만으로 나만의 공간을 꾸미고 싶지만 구체화가 어려울 때 <br>해당 웹사이트로 접속하여 가상의 `Room Planet` 에서 그 결과를 확인할 수 있습니다.</br> <br>#️⃣ Room Interior Design #️⃣ Colorful #️⃣ 3D</br>

![Room Planet 시연영상](https://user-images.githubusercontent.com/93423531/182112670-cf4cf753-b320-47b2-902d-c67982aaf612.gif)

### **프로젝트 동기( Motivation )**

---

###

> 1인 가구로서 나만의 공간🏠은 단순 의식주 해결 그 이상의 의의를 지닙니다. 나의 취향, 그리고 데일리 패턴 등이 오롯이 반영됨은 물론 제3자의 간섭으로부터 또한 자유롭습니다. 즉 스스로 판단하고 실천해야 하는 일이 보다 많아진 만큼 공간(일상)의 분위기가 끼치는 영향력은 더욱 지배적일 것입니다. 이때 컬러야말로 그러한 분위기를 가장 쉽고, 빠르게 전환시킬 수 있는 요소라 판단하였습니다. 이러한 동기를 토대로 `Room Planet` 은 상단의 기획 의도와 함께 탄생하였습니다.

### **실행 방법( How to run )**

---

- git clone

  ```
  $ git clone https://github.com/krystarline/room-planet-frontend.git
  ```

- npm start

  ```
  $ npm start
  ```

### **프로젝트 일정( Schedule )**

---

###

**📆 전체 기간**

`2022년 6월 27일 ~ 2022년 7월 15일`

<details><summary>Week 1 - 기획 및 설계</summary>

`2022년 6월 27일 ~ 2022년 7월 3일`

- 아이디어 구상 및 선정
- Mock Up 작성
- PoC 및 기술 스택 선정
- [KANBAN 작성](https://www.notion.so/03e5c992890741e39d65a535adb9bc69)

</details>

<details><summary>Week 2 - 기능 개발</summary>

`2022년 7월 4일 ~ 2022년 7월 10일`

- 가구 배치 기능 구현
  - 가구 배치 버튼 클릭 시, Canvas 내 camera 각도 변경( = 탑 뷰 )
  - @use-gesture/react + useDrag( 커스텀 훅 ) 활용으로 마우스 기반의 배치 가능
- ColorPicker 컴포넌트 구현
  - Color 모드 클릭 시, 각도 조정 및 OrbitControl 가능
  - Canvas 내 Model 한정 Color Pick 가능( 조건부 렌더링 )
- ModelCarousel 컴포넌트 구현
  - Model 더블클릭 시, Plan Page 내 Room 컴포넌트의 Canvas로 이동
    <br>( `position={[0, 0, 0]}` )</br>

---

- Model( furniture ) 선정
- Landing / Plan Page 레이아웃 구현

---

- Room 이미지 다운로드 기능 구현
  - 배치 완료된( 혹은 배치중 ) Canvas에 한해, ScreenCapture 가능
  - Local Download 가능( .png 확장자 )
- PlanGuide / PageBackWarning 모달창 구현

</details>

<details><summary>Week 3 - 기능 개발 + Stand Up 준비</summary>

`2022년 7월 11일 ~ 2022년 7월 15일`

- Rotate 기능 구현
  - Rotate 버튼 클릭 시, Model Rotate 가능
- Loading 컴포넌트 구현
  - React Suspense 활용

---

- 전체 UI / UX 다듬기
  - 사용자 입장에서 시각/체감적으로 불편함 여부 확인
- 기능상 버그 수정
- 배포 완료( Netlify )

</details>

### **프로젝트 설명( How to play )**

---

<details><summary>🎨 기술 스택</summary>

### _FrontEnd_

- React
  - Styled Components
  - Material UI
- Jotai
- Three.js
  - React-three/fiber
  - React-three/drei
  - React-three/canon

### _Infrastructure_

- Netlify

</details>

<details><summary>📌 주요 기능</summary>

---

|                                                                                                                                                                                                                                                                                                                                                                                                     **1. 가구 모델 렌더링시키기**                                                                                                                                                                                                                                                                                                                                                                                                      |                                                    **2. 가구 배치 및 회전 모드**                                                    |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| ![1. 가구 모델 렌더링시키기](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/88c70afc-f16b-4ae7-aca2-1e47210ebd09/1.-%EA%B0%80%EA%B5%AC-%EB%AA%A8%EB%8D%B8-%EB%A0%8C%EB%8D%94%EB%A7%81%EC%8B%9C%ED%82%A4%EA%B8%B0_%EC%9E%90%EB%A7%89.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220802T074014Z&X-Amz-Expires=86400&X-Amz-Signature=316cf3e1a796f4e56bd2aa9bd7f8f66d42c13b147b4bc9909a306770d4313ad7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%221.-%25EA%25B0%2580%25EA%25B5%25AC-%25EB%25AA%25A8%25EB%258D%25B8-%25EB%25A0%258C%25EB%258D%2594%25EB%25A7%2581%25EC%258B%259C%25ED%2582%25A4%25EA%25B8%25B0_%25EC%259E%2590%25EB%25A7%2589.gif%22&x-id=GetObject) | ![2. 가구 배치 및 회전 모드](https://user-images.githubusercontent.com/93423531/182111188-31f5e6e7-3e1d-4cbc-995a-477537c7a162.gif) |
|                                                                                                                                                                                                                                                                                                                                                                                                        **3. 나만의 색 입히기**                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                     ![3. 나만의 색 입히기](https://user-images.githubusercontent.com/93423531/182111506-d8f9cbc6-a968-45f0-95f5-eede9a954ff7.gif)                                                                                                                                                                                                                                                                                                                                                      |

</details>

<details><summary>🚀 My Challenge</summary>

### **2D와 3D의 불협화음 - 가구 배치 이슈**

마우스 기반의 드래그 앤 드랍을 모티브로 기획 및 구현하게 된 기능입니다. ToggleButton 중 하나인 '가구 배치 버튼' 을 클릭하면 Room 컴포넌트의 Canvas 내 camera 각도 변경이 이뤄지며, ‘탑 뷰(Top View)’ 가 조성됩니다. 동시에 해당 각도가 유지되어야 하기에 Room 컴포넌트의 OrbitControl 또한 동작하지 않습니다. 결과적으로 탑 뷰 구현을 통해, 가구를 옮기는 동안 Z축까지 고려해야 하는 3D 환경의 한계를 일시적 2D 환경으로 전환하였습니다.

@use-gesture/react 라이브러리의 useDrag 함수는 웹 페이지에서 마우스 이동에 대한 이벤트를 다룰 수 있습니다. 앞 전의 탑 뷰 기능으로 일시적 2D 환경에서의 배치는 가능해졌지만, 마우스 이동 거리와 Canvas 내 모델의 이동 거리 간 괴리감이 존재하였습니다. 이는 Canvas와 웹 페이지 간 영역의 크기 차이에서 비롯된 것으로, Canvas의 크기를 나타내는 `size` 와 웹 페이지에서 표시되는 화면의 크기를 나타내는 `viewport` 에 각각 동일 비율을 적용해 문제를 해결할 수 있었습니다.

---

### **Continuously Context Lost - Canvas 상태 공유 이슈**

이번 프로젝트에서는 전역 상태 관리 라이브러리를 도입해 prop drilling으로 유지 보수가 어려운 등의 부작용을 최소화했습니다. 해당 라이브러리로 Jotai를 채택했는데, 원자(Atom) 단위의 상태 또는 원자를 조합한 상태 등의 사용은 곧 최소한의 리렌더링으로 성능 향상을 이끌 수 있을 거라 생각했기 때문입니다. 더불어 Jotai는 Three.js 래퍼 라이브러리(@react-three/\*) 개발 그룹에서 만든 라이브러리로, 높은 호환성과 다량의 참고 자료 또한 기대되는 부분이었습니다. 하지만 Jotai가 늘 ‘최적의’ 라이브러리였던 것은 아니었습니다.

@react-three/fiber 라이브러리 내 Canvas 컴포넌트의 새로운 context 생성으로 인해, Canvas 내외 간 상태 공유가 이뤄지지 않았습니다. Canvas에서 모델을 렌더링할 때 필수 데이터인 ‘모델 컬러’의 변경이 누락되면서 `Context Lost` 라는 치명적 오류로 인해 서비스가 제대로 동작하지 않았던 것입니다. 결국 React 내부에서 전역 상태를 관리하는 Jotai만으론 context 간 상태 공유 문제를 해결하기 힘든 상황에 놓이게 되었습니다.

> **Valtio의 도움으로 문제를 해결하다! ( feat. Proxy 패턴 )**

`Context Lost` 가 반복됨에도 불구하고, Jotai의 장점(리액트 훅과 같은 편리성 등)을 살려 어떻게든 스택 변경 없이 해결하고 싶었습니다. 문제를 해결하던 중 ‘@react-three/\*’ 개발 그룹의 관심사 분리를 위한 context 철학을 접하게 되었고, 추측건대 Canvas 내 context의 용도 또한 관심사 분리에 따른 결과임을 알게 되었습니다. 따라서 Zustand, Valtio 등 외부 상태 관리를 가능케 하는 스택의 추가를 통해 Jotai와의 결합을 꾀하였습니다.

결과적으로 `Jotai + Valtio` 조합으로 특정 데이터의 경우 context 외부에서 또한 사용 가능하도록 하여, 트러블 슈팅을 해낼 수 있었습니다. Valtio의 존재를 깨달은 뒤부턴 굳이 Jotai까지 더할 필요가 있을까 하는 고민이 들었지만, Jotai의 Integration( 연계 )에 의거해 보다 정돈된 코드 스타일 + 성능 향상 등의 결과를 이끌 수 있다면 두 가지 스택 이상의 연계 활용이 적절하다 생각합니다.

</details>

### **회고( Retrospect )**

---

**모든 시작은 KANBAN 관리로부터**

기획부터 개발, 그리고 배포까지 모든 과정을 스스로의 판단 하에 책임으로 임해야 하는 부분이라 멘탈적으로 힘겨웠던 시점이 분명 존재하였습니다. 예상치 못한 이슈로 일정상 딜레이가 있었고, 그럴 때마다 무엇을 어떻게 접근할지 몰라 혼란스러웠는데 결국 의지할 수 있던 건 오직 제 KANBAN 뿐이었습니다. 자가 점검을 통한 KANBAN 조정으로 남은 작업을 어떻게 풀어나가면 좋을지에 대한 가닥을 잡은 뒤에야 작업 몰입도를 올릴 수 있었습니다.

**끝 맺음은 언제나 데일리 로그**

개발 기간 동안 데일리 로그라고 잠들기 전 작업 일기를 작성중인데, 하루의 마침표를 찍는 기분으로 임하고 있어 굉장히 보람찹니다. 가끔 지나치게 열중한 나머지 뒷 날은 생각지 않고 작업할 때가 있는데, 의도야 어쨌든 항상성이 떨어진다고 판단했습니다. 결과적으로 오래 달리기 위해선 마침표 또한 중요하다 생각하였고, 이왕이면 더 보람찬 하루의 마무리가 될 수 있지 않을까 하는 생각에서 도입하게 되었습니다.

**메타인지가 높은 개발자로의 성장**

메타인지가 높은 개발자가 되고 싶습니다. 해낼 수 있는 부분과 그렇지 못한 부분에 대한 판단이, 철저한 자기객관화를 통해 비롯될 수 있었으면 합니다. KANBAN 기반의 협업이 기본 업무 양식인 만큼 원활한 일정 관리를 위해서라도 해당 부분에 대한 인지가 빠르게 이뤄져, 공유 사항까지도 잘 다듬어 전달할 수 있는 개발자로 성장하길 바랍니다.
