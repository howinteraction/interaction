# Interaction 🕹️

![logo-removebg](https://github.com/howinteraction/interaction/assets/126459089/c81a3ce4-f1ee-4e13-959e-94addee50369)

Interaction은 정적인 웹페이지에서 1인칭 시점을 기준으로 키보드로 플레이어를 이동하고 마우스로 물체를 드래그하며 각 스테이지에 스며들어 있는 물체간의 착시를 이용해서 퍼즐로 되어있는 스테이지를 클리어 하는 방식으로 구성된 웹 게임 입니다.

# Links 🔗

Deployed web / [Frontend repo](https://github.com/howinteraction/interaction)

# Contents 📖

- [Inteaction](#interaction-🕹️)
- [Links](#links-🔗)
- [Motivation](#motivation-👀)
- [Tech Stack](#tech-stack-🔨)
- [Why use those Library](#why-use-those-Library-❓)
- [Game play flow](#gameplay-flow-🎮)
- [Technial Challenges](#technical-challenges-🏔️)
  - [플레이어 이동](#어떻게-몰입감을-주기위해-1인칭-시점으로-플레이어-이동을-구현할-수-있을까-❓)
  - [드래그 앤 드롭 기능](#물체를-이용한-드래그-앤-드롭-기능은-어떻게-구현할-수-있을까-❓)
  - [원근법 착시 기능](#드래그-앤-드롭-기능이-구현되었다면-물체가-커지고-작아지는-원근법-기능은-어떻게-구현할-수-있을까-❓)
  - [찢어진 물체 착시 기능](#찢어진-물체를-온전한-3d-물체로-바꾸는-착시-기능은-어떻게-구현할-수-있을까-❓)
  - [2D -> 3D 착시 기능](#2d-사진을-3d-물체로-바꾸는-착시-기능은-어떻게-구현할-수-있을까-❓)
  - [물체와의 상호 작용](#라이브러리-사용여부를-어떤-기준으로-판단했고-웹-게임에서의-플레이어와-물체간의-상호작용을-어떤-방식으로-해결했을까-❓)
  - [Canvas는 어떻게 다뤘을까?](#3d-물체와-유저가-상호작용-하는-기능들을-react-dom-조작을-하면서-canvas는-어떻게-다뤘나-❓)
- [Game Disign Challenges](#game-design-challengs-⛰️)
  - [게임의 확장성을 염두에 놓고 작업을 했을까?](#게임의-스테이지를-추가하거나-다른-기능들을-추가할-수-있게-확장성을-염두에-놓고-작업을-했을까-❓)
  - [유저의 게임 플레이 흐름을 생각하며 작업을 했을까?](#게임을-플레이-하는-시나리오-외에도-랭킹-등의-기능들을-웹앱에-어떻게-녹이고유저가-게임-flow를-어떻게-가져가게-할-것-인가❓)
- [Scehedule](#schedule-🗓️)
- [Members](#members-🧑🏻‍💻)

<br>
<br>


# Motivation 👀

정적인 웹페이지에서 유저가 간단하고 재미있게 할 수 있는 것들이 무엇이 있을까? 라는 고민을 시작으로 게임이라는 주제를 정해 프로젝트를 시작하게 되었습니다.

게임에도 여러 종류가 있지만 가장 몰입도가 높고 재미있게 플레이 할 수 있는 방식은 1인칭 시점으로 플레이하는 방식이 가장 적합하다 생각해서 해당 방식을 선택하고 진행하였습니다.

또한 1인칭 시점을 이용하면서 착시를 이용한 퍼즐 방식의 스테이지들을 클리어 하는 방식은 플레이어들에게 매력적일수도 있다는 생각과 관심을 끌 수 있을 좋은 주제라고 판단하여 Interaction 게임을 기획하고 개발하게 되었습니다.

<br>

# Tech Stack 🔨

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white)
![](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![](https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styled-components&logoColor=white)

![](https://img.shields.io/badge/R3F-336DFF?style=flat-square&logo=React&logoColor=black)
![](https://img.shields.io/badge/DREI-CC0000?style=flat-square&logo=React&logoColor=black)
![](https://img.shields.io/badge/Rapier-0B5394?style=flat-square&logo=React&logoColor=black)

![](https://img.shields.io/badge/redux-%23593d88.svg?style=flat-square&logo=redux&logoColor=white)

![](https://img.shields.io/badge/netlify-%23000000.svg?style=flat-square&logo=netlify&logoColor=#00C7B7)

![](https://img.shields.io/badge/React%20Dom%20Testing-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)
![](https://img.shields.io/badge/Vitest-%2344A833.svg?style=flat-square&logoColor=white)
![](https://img.shields.io/badge/-jest-%23C21325?style=flat-square&logo=jest&logoColor=white)

<br>

# Why use those Library ? ❓

웹에서 3D를 작업하는 방법을 서치 해보니,
**WebGL** Web Graphics Library의 약자로 웹에서 2D 및 3D를 렌더링 하기 위한 Javascript API 입니다. OpenGL ES 2.0을 기반으로 브라우저 엔진에 내장된 HTML5 Canvas 요소위에 그리는 방식이 있었습니다.

WebGL은 대부분 3D API가 아닌 좌표 기반인 저수준의 래스터 (작은 점을 무수히 여러번 찍어 만들어낸 이미지) API 입니다. 그래서 canvas에 물체들을 그려넣는데에는 좌표 시스템을 이용해야 했고, 그러기 위해 **x, y, z** 축들을 사용한 작업들이 굉장히 많았습니다.

대표적으로 바닐라 자바스크립트 만을 이용한 Vanilla Threejs, 그리고 React를 이용한 React Three Fiber(r3f) 를 사용하여 3D 작업을 할 수 있다는 것을 알게 되었습니다.

저희 프로젝트의 초기 작업 방향은 **“threeJS 만을 이용해서 게임을 구현하자”** 였습니다.

그러나 기능 구현을 제외하고도 물체를 만들고, 화면에 만든 물체들을 세팅할 때 적절한 조명과 카메라 각도를 세팅하지 않거나 리사이즈 로직을 적절한 곳에 추가하지 않는 등 세세한 작업까지 직접 해주지 않으면 화면 및 물체들이 깨지는 일이 빈번하게 일어났습니다.

그렇기에 리액트 라이브러리 들을 찾게 되었고, 3D 작업 효율을 높이기 위해 해당 라이브러리 사용을 체택하였습니다.

<p align="center">
  <img width="477" alt="threejs-structure" src="https://github.com/howinteraction/interaction/assets/126459089/26299d39-5f72-4fca-b5f2-f4d267e4c4f4">
</p>

<br>

| R3F                                                                                             | DREI                                                             | RAPIER                                                                                |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 리액트에서 Three JS를 쉽게 사용할 수 있도록 Three.js의 클래스들을 컴포넌트화 해놓은 라이브러리 | Three.js의 기능들을 훅을 통해 사용할 수 있게 도와주는 라이브러리 | 3D 물체들에 물리작용을 적용시켜주는 기능을 리액트에서 사용 가능캐 도와주는 라이브러리 |

<br>

- R3F는 react의 생태계와 통합되어 있어, 기존의 상태 관리 라이브러리, 데이터 가져오기 추상화 같은 React의 기능을 3D 그래픽과 결합하여 사용할 수 있습니다. 이를 통해 3D 장면과 React 프로젝트의 다른 부분 간에 데이터와 props를 전달할 수 있습니다.

- 또한 Three.js의 명령형 코딩 방식과 달리 React 컴포넌트와 훅을 사용하여 3D 객체를 선언적으로 생성하고 관리할 수 있게 도와줍니다. 이는 코드의 가독성와 유지 보수를 용이하게 도와줬습니다.

- 그리고 재사용 가능한 컴포넌트를 사용하여 동적인 장면들을 구축할 수 있습니다. 이 컴포넌트들은 상태 변화에 반응하며, 상호 작용이 가능합니다.

- 저희는 3주라는 시간안에 작업물을 완성해야 했기에 순수 바닐라 자바스크립트와 Threejs 만을 이용해 작업하는게 아닌 리액트를 이용해서 작업을 하는 방향으로 선회했고, 컴포넌트화 된 코드들을 재사용하며 게임에 적용시키기 위해 해당 라이브러리들 사용을 결정하였습니다.

- 또한 라이브러리들을 적재적소에 사용하기 위해 공식문서를 꼼꼼히 서치했고, 결국 필요한 모든 정보들은 공식문서에 있었다는걸 다시 한번 깨닫게 되었던 경험을 하였습니다.

<br>
<br>

# Gameplay flow 🎮

<details><summary>튜토리얼</summary>
  
![Monosnap screencast 2024-04-08 18-38-43 (1)](https://github.com/howinteraction/interaction/assets/126459089/f88e64e7-e837-4734-b419-f611a084ae12)
</details>

<details><summary>스테이지1</summary>

![Monosnap screencast 2024-04-08 18-55-37](https://github.com/howinteraction/interaction/assets/126459089/c6af1632-b16e-4325-a2f4-8a3d9c159dd7)
</details>

<details><summary>스테이지2</summary>

![Monosnap screencast 2024-04-08 19-18-39 (1)](https://github.com/howinteraction/interaction/assets/126459089/5dec0de9-c355-49cc-abe4-caa4b35bcfac)
</details>

<details><summary>스테이지3</summary>

![Monosnap screencast 2024-04-08 19-38-00](https://github.com/howinteraction/interaction/assets/126459089/b491c35e-ca7c-4f0e-b39f-fe6a29cce9a4)
</details>

<br>
<br>

# Technical Challenges 🏔️

### 어떻게 몰입감을 주기위해 1인칭 시점으로 플레이어 이동을 구현할 수 있을까? ❓

<details><summary>플레이어 이동 영상</summary>

![Monosnap screencast 2024-04-08 20-59-37](https://github.com/howinteraction/interaction/assets/126459089/81e4ac6b-29a1-4680-b6ea-3afd9c6f23a0)
</details>
<br>

- 처음 접하는 3D 작업에서 어떻게 플레이어가 키보드로 이동하는 방식을 구현할 수 있을까? 로 접근해보았습니다.

- 우선 가장 간단하게 해볼 수 있었던 방법은 물체(mesh)를 하나 생성한 후에 그 물체 안에 카메라를 담으면서 시작해 보았습니다. 3D 상에선 카메라를 어떻게 사용하느냐에 따라 시점이 바뀌고 플레이어 에게 보이는 방식이 천차만별로 바뀌었습니다.

- 저희는 기존에 정했던 1인칭 플레이 방식. 즉 플레이어로 정한 물체를 키보드로 움직이면 1인칭 구현방식이 되겠구나 라는 점을 인지하고, 플레이어의 이동 방향을 키보드 입력에 따라 결정되게 코드를 작성했습니다.

- 이를 위해 forward, backward, left, right 변수를 만들어 사용하여 이동 방향을 Vector로 변환하였습니다.

- frontvector / sidevector 로 앞뒤 및 좌우 이동에 대한 Vector 값을 구해주고, 최종 이동방향인 direction 값은 frontVector와 sideVector를 합친 후 정규화하여, 정해놓은 이동속도를 곱하고 카메라의 회전 방향을 곱하여 이동거리를 계산 해주었습니다.

- 또한 점프는 player가 ‘grounded’ 상태 즉 땅에 있는 상태여야만 가능하게 했으며, 이는 Rapier 물리엔진의 CastRay 라는 함수를 사용하여 확인하였습니다. 점프 함수가 실행될 때, 플레이어의 (y축) 수직 속도가 점프 속도로 설정되게 하였습니다.

<br>
<br>

### 물체를 이용한 드래그 앤 드롭 기능은 어떻게 구현할 수 있을까? ❓

<details><summary>드래그 앤 드롭 영상</summary>

![Monosnap screencast 2024-04-08 20-10-51](https://github.com/howinteraction/interaction/assets/126459089/a8624c0d-6376-49dd-9572-f6c9b04f823a)
</details>
<br>

- 우선 저희 interaction 게임은 현실에선 불가능한 물리법칙이 몇몇 적용되어 있습니다. 첫번째로 Stage1 에서의 드래그 앤 드롭 기능입니다.

- 해당 기능을 구현하기 위해선 물리엔진이 필요합니다. 직접 구현을 시도했지만 react 3d에서의 물리엔진 적용은 2d와 굉장히 너무 달랐고, 4x4 매트릭스 기반의 물리적인 요소를 모두 직접 구현하는 것은 기간내에 불가능 하다는 팀원들과의 판단으로 물리엔진 라이브러리를 사용하였습니다.

- 드래그 앤 드롭 기능은 게임적 요소인 raycasting 이라는 기능을 활용해 가상의 선을 이용해야만 했습니다.

- 플레이어가 가상의 선으로 물체를 포착하며 물체의 드래그 앤 드롭 기능이 시작됩니다. 이제 물체를 잡은 상태에서 잡은 물체를 움직이는 (드래그) 기능 구현이 필요했습니다.

- 플레이어가 물체를 클릭한다면, 카메라 위치에서 클릭 방향으로 rayCasting 을 수행하고, 드래그 가능한 물체와 충돌하게 되면 그때 드래그 기능이 시작됩니다.

- 초기 클릭 위치와 물체까지의 거리를 저장하고, 드래그 하는 동안 물체를 카메라로부터 일정한 거리로 유지하는데 사용합니다.

- 드래그 중 물체의 위치를 계속 업데이트(렌더링) 해주기 위한 새로운 위치는 현재 카메라 위치에 카메라 방향 vector 와 초기 거리를 곱한 값을 더하여 계산합니다.

- 이동 중에는 잠시 중력의 영향을 받지 않도록 해주어 자연스럽게 이동하도록 했습니다.

- 드래그 종료 조건으로는 사용자가 한번 더 클릭하여 물체를 놓으면 종료되고, 이때 다시 중력을 적용시켜 물체가 놓아진 위치에서 y축 아래 방향으로 자연스럽게 떨어지도록 구현했습니다.

<br>
<br>

<p align="center">
  <img width="500" alt="스크린샷 2024-04-08 20 41 35" src="https://github.com/howinteraction/interaction/assets/126459089/59754129-34d6-4a78-9bb3-1fe4f8f37902">
</p>

<br>
<br>

### 드래그 앤 드롭 기능이 구현되었다면 물체가 커지고 작아지는 원근법 기능은 어떻게 구현할 수 있을까? ❓

<details><summary>원근법 착시 기능 영상</summary>
  
![Monosnap screencast 2024-04-08 20-19-26](https://github.com/howinteraction/interaction/assets/126459089/409e3e41-cb15-4ef3-bf21-640398add94a)
</details>
<br>

- 플레이어와 물체와의 그리고 물체와 벽과의 거리를 통해 물체가 커지고 작아지는 기능을 구현하고자 원근법 착시라는 이름으로 명명하였습니다.

- 물체를 선택하고, 사용자의 시점에 따라 물체의 크기를 실시간으로 조절하여 원근감을 제공하는 것을 목표로 하였습니다.

- 우선 사용자가 물체를 선택하면 카메라와 물체 사이의 초기거리를 캐싱하고 동시에 초기 크기도 캐싱합니다.

- 카메라에서 물체로의 방향 vector와 사용자가 물체를 드래그 하는 동안의 거리를 사용하여 물체가 떨어질 새 위치를 계산해주고, 물체의 새 스케일은 초기 거리와 현재 거리의 비율에 따라 조정되도록 구현하였습니다.

<br>
<br>

<p align="center">
  <img width="500" alt="스크린샷 2024-04-08 20 41 44" src="https://github.com/howinteraction/interaction/assets/126459089/015d9a04-2704-4134-87cb-867cf7b3aa66">
</p>

<br>
<br>

### 찢어진 물체를 온전한 3D 물체로 바꾸는 착시 기능은 어떻게 구현할 수 있을까? ❓

<details><summary>찢어져 있는 물체 착시 기능 영상</summary>
  
![Monosnap screencast 2024-04-08 19-34-30](https://github.com/howinteraction/interaction/assets/126459089/ea84902c-1a87-47f3-a005-0574b5ded556)
</details>
<br>

- 해당 기능은 메인 착시 요소 중 하나인 찢어진 물체를 온전한 3D 물체로 바꾸는 메인 착시 기능 중 하나 입니다. 이 기능 또한 게임을 플레이하고 스테이지를 클리어하는데 핵심적인 요소로 작용되는 기능이며 비쥬얼 착시 라는 이름을 명명 하였습니다.

- 해당 기능은 플레이어가 제어하는 카메라의 시점 및 좌표를 통해 구현하였습니다.

- 먼저 카메라의 회전 각도를 조절해서 찢어져 있는 물체의 조각들이 하나의 온전한 물체로 완벽하게 맞물리는 시점을 찾는 방식을 적용시키는 것이 목표였습니다.

- 카메라의 회전은 게임 내에서 카메라가 바라보는 방향을 정하는데 사용되며, 이는 x, y, z 축에 대한 각도(오일러 각)으로 표현됩니다.

- 이 각도들은 Radian 단위로 측정되며 카메라의 방향을 정확하게 수치화 합니다.

- 즉 플레이어는 게임 속에서 특정 좌표에 서서 카메라를 정확한 방향으로 회전 시키며, 찢어져 있는 물체들이 하나의 완벽한 물체로 보여지는 그 포인터를 잡는데 있어서 카메라의 위치와 회전 각도가 중요한 역할을 합니다.

- 이 수치화한 값을 통해 물체와 맞닿는 오차 범위를 조금씩 지정해주며 해당 비쥬얼 착시 기능을 구현 하였습니다.

- 카메라의 회전은 x, y, z 축에 대한 회전 각도(오일러 각도) 으로 표현
- 회전값을 라디안(Radian) 값으로 측정 후 카메라의 방향 (플레이어가 보고 있는 시점) 을 정확하게 수치화

<br>
<br>

<p align="center">
  <img width="359" alt="스크린샷 2024-04-08 20 42 05" src="https://github.com/howinteraction/interaction/assets/126459089/8210cf9f-9432-484b-bccb-0305e17da331">
  <img width="359" alt="스크린샷 2024-04-08 20 42 13" src="https://github.com/howinteraction/interaction/assets/126459089/ea24a568-82bf-4231-8a00-6a8231b29ef0">
</p>


<br>
<br>

### 2D 사진을 3D 물체로 바꾸는 착시 기능은 어떻게 구현할 수 있을까? ❓

<details><summary>2D -> 3D 착시기능 영상</summary>

![Monosnap screencast 2024-04-08 20-30-30](https://github.com/howinteraction/interaction/assets/126459089/b1b58dae-509f-4363-8a24-f3b3c1b0f2e8)
![Monosnap screencast 2024-04-08 20-32-05](https://github.com/howinteraction/interaction/assets/126459089/c4874999-5322-4bfa-94ac-8f088add9486)
</details>
<br>

- 해당 기능은 앞서 구현한 메인 기능들을 이용한 메인 기능들을 종합해서 물체의 상태를 바꾸는 착시 현상입니다.

- 플레이어가 스테이지를 클리어 하기 위해선 어느 부분에 어느 물체가 필요한지 예상해서 드래그 기능으로 2D 물체를 잡은 후 다시 클릭해서 놓게 된다면 그 물체의 상태가 변화되면서 2D 사진이 3D 물체로 바뀌게 됩니다.

- 이는 게임적인 요소가 크게 가미된 착시현상이며, 추후 확장 가능성을 염두에 두고 작업한 기능입니다.

<br>
<br>

---

### 라이브러리 사용여부를 어떤 기준으로 판단했고, 웹에서 플레이어와 물체간의 상호작용을 어떤 방식으로 해결했을까? ❓

- 초기 개발 단계에서 드래그를 어떤 방식으로 구현할 수 있을지 여러 방법을 서치 중에 use-gesture 라이브러리의 useDrag 훅을 사용해서 컴포넌트를 드래그 할 수 있는 방식을 서치했습니다. 그러나 useDrag의 드래그 방식은 저희 interaction 게임에서 필요로 하는 드래그 방식과는 다른 메커니즘으로 기능을 제공하고 있었습니다.

- useDrag hook은 드래그 되서 찍히는 마우스 포인터의 좌표들이 x, y축. 측 2D 평면 상에서의 좌표만 제공해주고 있었습니다. 그러나 Interaction 게임은 3D 상에서의 드래그 좌표들 x, y축 그리고 z축 까지 필요했기 때문에 rapier 물리엔진을 이용한 드래그 기능을 직접 구현하기로 결정 후 개발하였습니다.

<br>
<br>

### 3D 물체와 유저가 상호작용 하는 기능들을 React DOM 조작을 하면서 canvas는 어떻게 다룰 수 있을까? ❓

- React DOM을 조작하는 것은 react의 **상태(state)** 및 **프롭스(props)** 를 사용하여 DOM 요소를 업데이트 하였습니다. 예를 들어 react의 상태를 변경하거나, 이벤트 핸들러를 사용하여 React DOM 요소를 업데이트 하였습니다.

- Canvas를 다룰 때는 우선 r3f는 React 컴포넌트 기반으로 3D Scene을 생성하고 관리합니다. 이러한 컴포넌트는 Three.js를 기반으로 하며, 이를 사용하여 `<Canvas>` 를 조작했습니다.

- `<Canvas>` 컴포넌트는 Three.js의 WebGLRenderer를 래핑하고 React의 컴포넌트 생명주기를 활용하여 Scene을 렌더링 합니다.

- React 컴포넌트로 3D 객체를 생성하고 조작하며 `<Canvas>` 에 추가할 수 있게 되고, 이를 위해 `<mesh>` 라는 요소를 사용했으며, 이들을 React 컴포넌트로 래핑하며 사용했습니다. 이 작업을 통해 state나 props를 사용하여 3D 객체를 조작할 수 있었습니다.

<br>
<br>

<p align="center">
  <img width="500" alt="스크린샷 2024-04-08 20 49 04" src="https://github.com/howinteraction/interaction/assets/126459089/b42395db-b33c-44d6-a977-aa8ed4e62c6d">
  <img width="500" alt="스크린샷 2024-04-08 20 48 45" src="https://github.com/howinteraction/interaction/assets/126459089/d034d4ca-b001-4f27-a99c-6afea29d3f9e">
</p>

<br>
<br>

# Game Design Challengs ⛰️

[FigmaLink](https://www.figma.com/file/Xlwf8I0o8Rwxeqk9aKjGls/Interaction?type=design&node-id=1669%3A162202&mode=design&t=rXddIoh90n0gr2nV-1) 게임 시나리오 flow 기획

### 게임의 스테이지를 추가하거나 다른 기능들을 추가할 수 있게 확장성을 염두에 놓고 작업을 했을까? ❓

- 현재 구현된 착시 기능 말고도 다른 요소들이 가미된 착시현상들이 떠오르면 그때 그때 스테이지를 추가할 수 있도록 확장성을 염두에 두었습니다.

- 드래그 앤 드롭 기능, 원근법 기능들을 고도화해 해당 기능들을 제대로 사용해 클리어 할 수 있는 스테이지 들도 제작하는 것들도 염두에 두고 작업을 진행 했습니다.

<br>
<br>

### 게임을 플레이 하는 시나리오 외에도 랭킹 등의 기능들을 웹/앱에 어떻게 녹이고, 유저가 게임 flow를 어떻게 가져가게 할 것 인가?❓

- 웹에서 플레이 하며 어떻게 최대한 자연스럽게 유저가 게임을 플레이하는 것처럼 몰입감을 주고, 웹 게임에서 그치지 않고 하나의 작업물로 평가받을 수 있을까 라는 고민들을 많이 해보았습니다.

- 그렇기에 저희 프로젝트와 비슷한 카테고리의 게임들을 잠깐이나마 플레이 해보고 플레이 영상들을 직접보며 취할 것들은 취하며 게임적인 요소들을 어떻게 저희 프로젝트에 녹일 수 있는지 참고하였습니다.

- 우선 스테이지 중간중간에 로딩 컴포넌트를 삽입했고 플레이어가 어떻게 게임을 플레이 해야하는지 조작법이나 스테이지의 간단한 설명등을 기재해 두었습니다. 해당 로딩화면을 보고 어떻게 클리어 해야하구나 라는 힌트를 주고, 배경음악등을 삽입해 실제로 몰입감을 줄 수 있도록 하였습니다.

- 또한 구현되어 있는 스테이지 까지 모두 클리어하게 되면 앞서 받았던 유저 이름을 이용한 플레이 타임을 기록한 테이블이 나오게 됩니다. 플레이타임을 시간 순으로 정렬해 빠르게 클리어한 순위로 나열 후 렌더링 하였으며, 추후 플레이어들끼리의 경쟁요소로 사용하기 위해 제작하였습니다.

<br>
<br>

# Schedule 🗓️

- 1주차

  - 아이디어 수집 선정

  - git flow 결정

  - eslint prettier, husky 팀 협업 규칙 설정

  - Kanban 작성

- 2주차

  - Stage1 맵 렌더링, 이동 및 점프 기능,

  - 물체 드래그, 물체와의 상호작용 기능 완료

- 3주차

  - Stage2 맵 렌더링, 착시 기능 구현,

  - Stage3 맵 렌더링, 착시 기능 구현, 플레이 타임 기록 화면

  - 전체적인 리팩토링 / 버그 수정

  - 리드미 작성

  - 배포

# Members 🧑🏻‍💻

금서하 [개인 Github 링크](https://github.com/seohag) <br>
조양우 [개인 Github 링크](https://github.com/erv2bh) <br>
최기원 [개인 Github 링크](https://github.com/originchoi)
