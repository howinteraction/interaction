# 🕹 Interaction

![logo-removebg](https://github.com/howinteraction/interaction/assets/126459089/c81a3ce4-f1ee-4e13-959e-94addee50369)

Interaction은 정적인 웹페이지에서 1인칭 시점을 기준으로 키보드로 플레이어를 이동하고 마우스로 물체를 드래그하며 각 스테이지에 스며들어 있는 물체간의 착시를 이용해서 퍼즐로 되어있는 스테이지를 클리어 하는 방식으로 구성된 웹 게임 입니다.

# 🔗 Links

[Deployed web](https://inter-action.co)

# 📖 Contents

- [개발 동기](#-개발-동기)
- [기술 스택](#-기술-스택)
- [게임 소개](#-게임-소개)
- [기술적 챌린지](#-기술적-챌린지)
  - [모든 스테이지 공통 기능](#모든-스테이지-공통-기능)
    - [1. 몰입감을 위한 1인칭 시점 이동은 어떻게 구현할까?](#1-몰입감을-위한-1인칭-시점-이동은-어떻게-구현할까)
      - [1-1 애니메이션 루프의 선택](#1-1-애니메이션-루프의-선택-requestanimationframe-vs-useframer3f)
      - [1-2 문제: 시점(카메라) 이동만으로는 플레이어 구현에 한계가 있다](#1-2-문제-시점카메라-이동만으로는-플레이어-구현에-한계가-있다)
      - [1-3 구현 과정: 오브젝트(물체)와 카메라를 통합하여 구현하기](#1-3-구현-과정-오브젝트물체와-카메라를-통합하여-구현하기)
      - [1-4 결과: 3D 이동 구현의 성과와 개선할 점](#1-4-결과-3d-이동-구현의-성과와-개선할-점)
    - [2. 드래그 앤 드롭은 3D 상에서 어떻게 구현할 수 있을까?](#2-드래그-앤-드롭은-3d-상에서-어떻게-구현할-수-있을까)
      - [2-1 문제: 라이브러리를 사용한 드래그 앤 드롭의 한계](#2-1-문제-라이브러리를-사용한-드래그-앤-드롭의-한계)
      - [2-2 구현 과정: 드래그 앤 드롭 직접 구현하기](#2-2-구현-과정-드래그-앤-드롭-직접-구현하기)
      - [2-3 트러블슈팅: 드래그 중 물체가 벽을 통과한다?](#2-3-트러블슈팅-드래그-중-물체가-벽을-통과한다)
      - [2-4 결과: 드래그 앤 드롭 기능의 구현 성과와 게임에 미친 영향](#2-4-결과-드래그-앤-드롭-기능의-구현-성과와-게임에-미친-영향)
  - [각 스테이지별 기능](#각-스테이지-별-기능)
    - [3. 물체가 커지고 작아지는 원근법 기능은 어떻게 구현할 수 있을까?](#3-물체가-커지고-작아지는-원근법-기능은-어떻게-구현할-수-있을까)
      - [3-1 가설: 상호 작용을 이용한 물체의 크기 변경](#3-1-가설-상호-작용을-이용한-물체의-크기-변경)
      - [3-2 구현 과정: 드래그 앤 드롭 로직에 원근법 착시 기능을 입혀보자](#3-2-구현-과정-드래그-앤-드롭-로직에-원근법-착시-기능을-입혀보자)
      - [3-3 결과: 원근법 착시 기능의 구현과 한계점](#3-3-결과-원근법-착시-기능의-구현과-한계점)
    - [4. 물체들이 바뀌는 착시 기능은 어떻게 구현할 수 있을까?](#4-물체들이-바뀌는-착시-기능은-어떻게-구현할-수-있을까)
      - [4-1 가설: 플레이어가 이동시키는 카메라 시점(마우스 커서)의 좌표를 이용해보자](#4-1-가설-플레이어가-이동시키는-카메라-시점마우스-커서의-좌표를-이용해보자)
      - [4-2 구현 과정: 카메라 회전각도 수치화, 물체의 상태변화 이용 ](#4-2-구현-과정-카메라-회전각도-수치화--물체의-상태변화-이용)
      - [4-3 결과: 물체 변화 착시 기능의 구현과 한계점](#4-3-결과-물체-변화-착시-기능의-구현과-한계점)
  - [유저 경험 개선](#유저-경험-개선)
- [일정](#-일정)
- [팀원](#-팀원)

<br>
<br>

# 👀 개발 동기

정적인 웹페이지에서 유저가 간단하고 재미있게 할 수 있는 것들이 무엇이 있을까? 라는 고민을 시작으로 게임이라는 주제를 정해 프로젝트를 시작하게 되었습니다.

게임에도 여러 종류가 있지만 가장 몰입도가 높고 재미있게 플레이 할 수 있는 방식은 1인칭 시점으로 플레이하는 방식이 가장 적합하다 생각해서 해당 방식을 선택하고 진행하였습니다.

또한, 1인칭 시점을 이용하면서 착시를 이용한 퍼즐 방식의 스테이지들을 클리어하는 방식은 플레이어에게 매력적일 수도 있다는 생각과 관심을 끌 수 있을 좋은 주제라고 판단하여 Interaction 게임을 기획하고 개발하게 되었습니다.

[FigmaLink](https://www.figma.com/file/Xlwf8I0o8Rwxeqk9aKjGls/Interaction?type=design&node-id=1669%3A162202&mode=design&t=rXddIoh90n0gr2nV-1) 게임 시나리오 flow 기획

<br>

# 🔨 기술 스택

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
<br>

# 🎮 게임 소개

### 튜토리얼

<p align="center">
  <img width="700" alt="player-movement" src="https://github.com/howinteraction/interaction/assets/126459089/f88e64e7-e837-4734-b419-f611a084ae12">
</p>

- 튜토리얼에 들어가게 되면 플레이어는 W A S D 스페이스바를 사용하여 포탈로 이동할 수 있습니다.
- 포탈로 이동하면 로그인을 통해 게임을 시작할 수 있습니다.

<br>

### 스테이지1

<p align="center">
  <img width="700" alt="threejs-structure" src="https://github.com/howinteraction/interaction/assets/126459089/c6af1632-b16e-4325-a2f4-8a3d9c159dd7">
</p>

- 스테이지1에 들어가게 되면 플레이어는 맵에 놓여져 있는 여러개의 물체와 포탈을 보게 됩니다.
  - 여러개의 물체 중 하나의 물체만 원근법 착시 기능이 적용되어 있는 물체입니다.
  - 물체들을 적절한 방법으로 이용해서 포탈로 이동해야 합니다.
- 일반 점프 거리로는 포탈에 도달할 수 없기 때문에 원근법 착시 기능을 이용하여 포탈로 이동해야 합니다.
  - 원근법 착시 기능은 플레이어가 물체를 드래그 한 후 벽으로 이동하면 물체의 크기가 작아지고,
  - 물체를 드래그 한 후 마우스 커서를 위쪽으로(y축으로) 올리면 물체의 크기가 커집니다.
- 원근법 기능을 이용해서 물체의 크기를 키운 후 점프 기능으로 스테이지를 클리어합니다.

<br>

### 스테이지2

<p align="center">
  <img width="700" alt="threejs-structure" src="https://github.com/howinteraction/interaction/assets/126459089/5dec0de9-c355-49cc-abe4-caa4b35bcfac">
</p>

- 스테이지2에 들어가게 되면 플레이어는 제공된 힌트를 통해 퍼즐을 풀게 됩니다.
  - 스크린에 나오는 힌트를 통해, 플레이어는 삼각형 물체를 찾아야 합니다.
  - 기둥에 분리된 물체들을 보고, 플레이어는 이동과 카메라의 시점 이동을 통한 착시로, 3d 물체를 획득하게 됩니다.
  - 획득한 3D 물체를 드래그 하고, "ATTACHED" 라는 문구가 써져 있는 올바른 위치에 드롭해서 해당 스테이지를 클리어 합니다.

<br>

### 스테이지3

<p align="center">
  <img width="700" alt="threejs-structure" src="https://github.com/howinteraction/interaction/assets/126459089/b491c35e-ca7c-4f0e-b39f-fe6a29cce9a4">
</p>

- 스테이지3에 들어가게 되면 플레이어는 게시판에 붙어있는 여러가지 2D 사진들을 보게 됩니다.
  - 2D사진을 드래그 앤 드롭 하면 3D 물체로 바뀌는 기능을 가진 사진이 곳곳의 게시판에 붙여져 있습니다.
  - 플레이어는 2D에서 3D로 바뀌는 기능을 이용해 해당 사진이 필요한 곳에 적절히 사용하며 스테이지를 클리어 할 수 있습니다.

<br>
<br>

# 🏔 기술적 챌린지

## 모든 스테이지 공통 기능

웹에서 3D를 작업하는 방법을 서치 해보니,
**WebGL** Web Graphics Library의 약자로 웹에서 2D 및 3D를 렌더링 하기 위한 Javascript API 입니다. OpenGL ES 2.0을 기반으로 브라우저 엔진에 내장된 HTML5 Canvas 요소위에 그리는 방식이 있었습니다.

WebGL은 대부분 3D API가 아닌 좌표 기반인 저수준의 래스터 (작은 점을 무수히 여러번 찍어 만들어낸 이미지) API 입니다. 그래서 canvas에 물체들을 그려넣는데에는 좌표 시스템을 이용해야 했고, 그러기 위해 **x, y, z** 축들을 사용한 작업들이 굉장히 많았습니다.

대표적으로 바닐라 자바스크립트 만을 이용한 Vanilla Threejs, 그리고 React를 이용한 React Three Fiber(R3F)를 사용하여 3D 작업을 할 수 있다는 것을 알게 되었습니다.

저희 프로젝트의 초기 작업 방향은 **“threeJS 만을 이용해서 게임을 구현하자”** 였습니다.

그러나 기능 구현을 제외하고도 물체를 만들고, 화면에 만든 물체들을 세팅할 때 적절한 조명과 카메라 각도를 세팅하지 않거나 리사이즈 로직을 적절한 곳에 추가하지 않는 등 세세한 작업까지 직접 해주지 않으면 화면 및 물체들이 깨지는 일이 빈번하게 발생했습니다.

이러한 이유들로 인해 React3D 라이브러리들을 찾게 되었고, 3D 작업 효율을 높이기 위해 해당 라이브러리 사용을 채택하였습니다.

<p align="center">
  <img width="477" alt="threejs-structure" src="https://github.com/howinteraction/interaction/assets/126459089/26299d39-5f72-4fca-b5f2-f4d267e4c4f4">
</p>

<br>

| R3F                                                                                            | DREI                                                             | RAPIER                                                                                |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 리액트에서 Three JS를 쉽게 사용할 수 있도록 Three.js의 클래스들을 컴포넌트화 해놓은 라이브러리 | Three.js의 기능들을 훅을 통해 사용할 수 있게 도와주는 라이브러리 | 3D 물체들에 물리작용을 적용시켜주는 기능을 리액트에서 사용 가능캐 도와주는 라이브러리 |

<br>

R3F는 react의 생태계와 통합되어 있어, 기존의 상태 관리 라이브러리, 데이터 가져오기 추상화 같은 React의 기능을 3D 그래픽과 결합하여 사용할 수 있습니다. 이를 통해 3D 장면과 React 프로젝트의 다른 부분 간에 데이터와 props를 전달할 수 있습니다.

또한 Three.js의 명령형 코딩 방식과 달리 React 컴포넌트와 훅을 사용하여 3D 객체를 선언적으로 생성하고 관리할 수 있게 도와줍니다. 이는 코드의 가독성과 유지 보수를 용이하게 도와줬습니다.

그리고 재사용 가능한 컴포넌트를 사용하여 동적인 장면들을 구축할 수 있습니다. 이 컴포넌트들은 상태 변화에 반응하며, 상호 작용이 가능합니다.

저희는 3주라는 시간 안에 작업물을 완성해야 했기에 순수 바닐라 자바스크립트와 Threejs 만을 이용해 작업하는 것이 아닌 리액트를 이용해서 작업을 하는 방향으로 선회했고, 컴포넌트화된 코드들을 재사용하며 게임에 적용하기 위해 해당 라이브러리들 사용을 결정하였습니다.

또한 라이브러리들을 적재적소에 사용하기 위해 공식 문서를 꼼꼼히 검색했고, 결국 필요한 모든 정보들은 공식 문서에 있었다는 걸 다시 한번 깨닫게 되었던 경험을 하였습니다.

<br>
<br>

## 1. 몰입감을 위한 1인칭 시점 이동은 어떻게 구현할까?

<p align="center">
  <img width="700" alt="player-movement" src="https://github.com/howinteraction/interaction/assets/126459089/81e4ac6b-29a1-4680-b6ea-3afd9c6f23a0">
  <br>
  🔺 1인칭 플레이어 이동 영상
</p>

<br>

### 1-1 애니메이션 루프의 선택: requestAnimationFrame VS useFrame(R3F)

---

저희가 구현하고자 하는 3D 게임 내 플레이어 및 물체들의 이동을 구현하기 위해서는 매 프레임마다 실행되어야 하는 로직을 처리하는 메커니즘이 필요했습니다. 이를 위해 `requestAnimationFrame과` `R3F`의 `useFrame을` 비교해 보았습니다.

`requestAnimationFrame은` 브라우저 API로, 브라우저가 최적화된 방식으로 애니메이션을 실행할 수 있게 도와줍니다. `useFrame은` React Three Fiber (R3F) 라이브러리의 훅으로, React 생태계 내에서 3D 애니메이션을 쉽게 구현할 수 있도록 설계되었습니다. 두 가지 방법은 각각의 장단점이 있어, 프로젝트의 요구사항에 따라 선택할 필요가 있습니다.

| 기능                     | requestAnimationFrame                                             | useFrame (R3F)                                                                 |
| ------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **사용성**               | 브라우저의 기본 API로, 직접 호출하고 관리해야 함.                 | R3F의 훅으로, React 컴포넌트 내에서 쉽게 사용할 수 있음.                       |
| **구현 복잡도**          | 구현이 복잡하고 반복적으로 호출해야 하는 로직을 직접 관리해야 함. | R3F가 내부적으로 관리하므로, 간단하게 프레임마다 실행될 로직을 정의할 수 있음. |
| **통합성**               | 다른 라이브러리와의 통합이 어려울 수 있음.                        | Three.js 및 물리 엔진과의 통합이 용이함.                                       |
| **성능 최적화**          | 성능 최적화를 위해 직접 관리해야 함.                              | R3F가 성능을 최적화하여 관리함.                                                |
| **개발 생산성**          | 개발자가 많은 부분을 직접 관리해야 하므로 시간이 많이 소요됨.     | R3F가 많은 부분을 자동으로 처리하여 개발 생산성을 높임.                        |
| **애니메이션 루프 관리** | 직접 관리 필요                                                    | 자동 관리                                                                      |
| **3D 컨텍스트 통합**     | 추가 코드 필요                                                    | 컨텍스트를 통해 3D 씬 요소에 접근 용이                                         |

</br>

이와 같이 두 방법은 각각의 용도와 상황에 맞게 선택하여 사용할 수 있었습니다. 간단한 2D 애니메이션이나 브라우저 전반적인 애니메이션 제어가 필요하다면 `requestAnimationFrame이` 적합하고, `React와` 3D 씬을 다루는 프로젝트에서는 `useFrame이` 더 편리하다고 판단하였습니다.

따라서, `useFrame`(R3F)을 활용하여 물체, 플레이어 이동 및 상호작용에 대해 구현하기로 하였습니다.

게임 내 플레이어 및 물체들의 이동을 구현하기 위해서는 우선, `useFrame` 에 대해 이해하고 적용해야 했습니다.

`useFrame` 훅은 매 프레임마다 실행되어야 하는 로직을 처리하는 데 사용됩니다. 이는 일반적으로 애니메이션 효과, 물리적 계산, 또는 사용자 입력에 응답하는 동적인 상호작용을 구현할 때 필요합니다.

작동방식은 첫 번째 인자로 콜백 함수를 받습니다. 이 콜백 함수는 렌더링 루프의 일부로 호출되며, 렌더링이 발생하는 매 프레임마다 실행됩니다. 콜백 함수는 두 가지 매개변수를 받을 수 있습니다.

1. `state`: 현재 렌더링 상태에 대한 정보를 포함하고 있는 객체입니다. 이 객체는 camera, scene, size, viewport 등과 같은 속성들을 포함할 수 있습니다.
2. `delta`: 마지막 프레임 이후 경과한 시간(초)입니다. 이 값은 프레임 간 지연을 처리하거나 프레임 속도와 독립적인 애니메이션을 구현할 때 유용하게 사용됩니다.

- 이해를 위한 예시 코드

```jsx
useFrame((state, delta) => {
  // 매 프레임마다 실행되는 로직
  meshRef.current.rotation.y += 0.01; // 매 프레임마다 메쉬를 y축으로 약간씩 회전
});
```

이 코드는 3D 객체인 메쉬를 y축으로 매 프레임마다 약간씩 회전시키는 간단한 예시입니다. 이와 같이 `useFrame`을 사용하면 실시간으로 3D 씬을 업데이트하면서 동적인 효과를 만들 수 있습니다.

</br>

### 1-2 문제: 시점(카메라) 이동만으로는 플레이어 구현에 한계가 있다

---

애니메이션 루프를 선택하였으므로, 이제 캐릭터 이동을 구현하려 하였습니다. 이를 위해 우선적으로 이해해야 하는 부분은 카메라 였습니다.

여기서 말하는 카메라는 Three.js 라이브러리의 카메라 객체를 의미합니다. Three.js는 JavaScript로 작성된 오픈 소스 3D 라이브러리로, 웹 브라우저에서 복잡한 3D 그래픽을 쉽게 구현할 수 있도록 도와줍니다. Three.js의 카메라는 3D 장면(Scene)을 렌더링하기 위한 시점을 정의하는 데 사용됩니다.

따라서, 카메라의 위치와 방향을 설정하여 플레이어가 보는 화면을 결정할 수 있었습니다. 예를 들어, 1인칭 게임에서는 카메라가 플레이어의 눈 역할을 하며, 플레이어가 보는 모든 장면을 렌더링합니다.

</br>

#### Three.js의 카메라 정의

Three.js에서는 여러 종류의 카메라를 제공하지만, 주로 사용되는 카메라는 다음 두 가지입니다.

1. PerspectiveCamera (원근 카메라)</br>실제 인간의 눈으로 보는 것과 비슷한 방식으로 원근법을 적용하여 3D 장면을 렌더링합니다. 원거리의 물체는 작게, 가까이 있는 물체는 크게 보이는 효과를 제공합니다.

```jsx
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
```

- fov(Field of View): 카메라의 시야각을 결정합니다.
- aspect: 카메라의 가로세로 비율입니다.
- near: 카메라 앞쪽의 절단면입니다.
- far: 카메라 뒤쪽의 절단면입니다.

2. OrthographicCamera (직교 카메라)</br>원근법을 적용하지 않고, 모든 물체를 같은 크기로 렌더링합니다. 주로 2D 게임이나 UI 렌더링에 사용됩니다.

```jsx
const camera = new THREE.OrthographicCamera(
  left,
  right,
  top,
  bottom,
  near,
  far,
);
```

- left, right, top, bottom: 카메라의 절단면을 정의합니다.
- near: 카메라 앞쪽의 절단면입니다.
- far: 카메라 뒤쪽의 절단면입니다.

</br>

위의 카메라 중, 저희가 구현하고자 했던 몰입감 있고, 원근을 표현할 수 있는 1인칭 시점 플레이어 이동을 위해 `PerspectiveCamera` 를 사용하기로 결정하였습니다. </br>
그리고 R3F 환경에서 카메라는 Canvas 컴포넌트 내에 정의되며, `useThree` 훅을 사용하여 카메라 객체에 접근할 수 있었습니다.

</br>

#### ❗️ 고민의 시작: 카메라만 이동하면 부자연스럽다.

카메라를 정한 후, 플레이어의 이동을 구현하기 위해 고민해봤습니다. 초기에는 독립적으로 카메라 자체를 이동하는 방법에 대해 시도해 보았습니다. 그리고 아래의 **시도 1**과 같은 문제점을 발견하여 자료를 조사하던 중 일반적인 1인칭 시점 게임에서는 **시도 2**와 같은 방법을 사용한다는 것을 알게되어 시도해 보았습니다.

- **시도 1: 독립적인 카메라 이동**</br>처음에는 카메라 자체를 직접 이동시키는 방법을 시도했습니다. 카메라의 위치와 방향을 조작하여 플레이어의 움직임을 구현하려 했습니다. 하지만 이 방법은 카메라의 이동과 물체의 물리적 반응을 별도로 관리해야 하는 어려움이 있었습니다.
- **시도 2: 오브젝트에 카메라 부착**</br> 다음으로, 카메라를 오브젝트에 부착하는 방법을 시도했습니다. 이렇게 하면 카메라가 오브젝트의 이동과 회전에 따라 자동으로 움직이며, 물리적인 상호작용도 자연스럽게 처리할 수 있었습니다. 이를 통해 플레이어의 이동이 보다 직관적이고 자연스럽게 구현될 수 있었습니다.

</br>

#### 💡 해결책: 오브젝트(물체)와 카메라의 통합

최종적으로, 오브젝트(플레이어)와 카메라를 통합하여 구현하는 방법을 선택했습니다. 이 방법은 카메라를 오브젝트에 부착하여, 오브젝트가 이동하거나 회전할 때 카메라가 이를 따라가도록 하는 방식입니다. 이를 통해 플레이어의 시점 이동과 물리적 상호작용을 일관성 있게 처리할 수 있었습니다.

</br>

</br>

### 1-3 구현 과정: 오브젝트(물체)와 카메라를 통합하여 구현하기

---

#### 1. 플레이어 초기 설정과 카메라 배치

먼저 3D 환경에서 플레이어가 키보드로 이동하는 방식을 구현하는 과정을 살펴보겠습니다. 저희는 3D 공간 내에서 플레이어의 시점과 이동을 제어하기 위해 물체(mesh)를 생성하고 그 안에 카메라를 배치했습니다. 이렇게 함으로써, 카메라의 위치와 방향에 따라 플레이어가 보는 시점이 결정됩니다.

```jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const direction = new THREE.Vector3();
const Player = ({ position }) => {
  const playerRef = useRef();

  // 프레임 업데이트마다 카메라 위치를 플레이어의 현재 위치로 업데이트
  useFrame((state) => {
    const { x, y, z } = playerRef.current.translation();
    state.camera.position.set(x, y, z);
  });

  return (
    <RigidBody ref={playerRef} position={position}>
      <mesh>
        <capsuleGeometry args={[1, 1]} />
      </mesh>
    </RigidBody>
  );
};
```

</br>
</br>

#### 2. 플레이어 이동과 점프

특히, 1인칭 플레이 방식을 선택함에 따라 플레이어가 이동하는 방식도 이에 맞추어 설계되었습니다. 저희는 플레이어를 구현 후, 도식화한 다이어그램과 같은 이동방식의 순서를 정의해보고 접근해봤습니다.

- **플레이어 이동을 도식화한 다이어그램**
<p align="center">
<img width="700" alt="스크린샷 2024-05-10 오후 4 35 03" src="https://github.com/howinteraction/interaction/assets/116258834/ca948c1e-fb62-4f18-99a6-b14466dff879">
</p>

</br>

플레이어의 이동은 키보드 입력을 통해 결정됩니다. 이를 구현하기 위해 앞으로 이동(forward), 뒤로 이동(backward), 왼쪽으로 이동(left), 오른쪽으로 이동(right) 등의 방향을 나타내는 변수들을 설정하고, 이를 벡터(Vector)로 변환하여 사용했습니다.

이동에 사용된 주요 벡터는 `frontVector`와 `sideVector`입니다. `frontVector`는 앞뒤 이동을 담당하고, `sideVector`는 좌우 이동을 담당합니다. 최종 이동 방향인 `direction`은 `frontVector`와 `sideVector`를 합친 후, 이를 정규화(normalize)하여 주어진 이동 속도와 카메라의 회전 방향을 반영하여 계산됩니다.

- 플레이어 이동 계산

```jsx
import { MOVE_SPEED } from "../../utils/constants";

// 프레임 업데이트마다 플레이어의 위치와 이동 방향을 계산
useFrame((state) => {
  const { forward, backward, left, right } = usePlayerControl();

  const frontVector = new THREE.Vector3(0, 0, backward - forward);
  const sideVector = new THREE.Vector3(left - right, 0, 0);
  direction
    .subVectors(frontVector, sideVector)
    .normalize()
    .multiplyScalar(MOVE_SPEED)
    .applyEuler(state.camera.rotation);

  playerRef.current.setLinvel({
    x: direction.x,
    y: velocity.y,
    z: direction.z,
  });
});
```

</br>

점프 기능은 플레이어가 땅에 닿아 있는 ‘grounded’ 상태일 때만 가능하도록 설정했습니다. 이 상태는 Rapier 물리 엔진의 CastRay 함수를 사용하여 확인합니다. 플레이어가 점프를 시도할 때, 수직 속도(y축)가 점프 속도로 설정되어, 플레이어가 위로 점프하게 됩니다.

이와 같은 방식으로 키보드 입력에 따른 플레이어의 3D 이동 및 점프가 구현되었으며, 이를 통해 플레이어에게 보다 몰입감 있는 게임 경험을 제공하였습니다.

</br>

### 1-4 결과: 3D 이동 구현의 성과와 개선할 점

---

플레이어 이동을 구현하면서 R3F와 Rapier를 사용한 결과, 다음과 같은 주요 성과와 개선할 사항들을 도출할 수 있었습니다.

- **향상된 사용자 경험 (UX)**: 플레이어는 게임 내에서 1인칭 시점으로 자유롭게 이동할 수 있게 되었습니다. 직관적인 이동과 점프 기능을 통해 게임의 몰입감이 크게 향상되었습니다.
- **기술적 성과**: Three.js, R3F, 및 Rapier 물리 엔진의 통합을 통해 자연스러운 물리 기반 상호작용과 이동을 구현할 수 있었습니다. 이를 통해 플레이어의 움직임이 더욱 자연스럽고 현실감 있게 표현되었습니다.
- **문제 해결 능력 강화**: 카메라를 오브젝트에 부착하는 방법을 통해, 카메라와 플레이어의 물리적 상호작용을 일관성 있게 처리할 수 있었습니다. 이를 통해 카메라만 이동시키는 방법에서 발생하는 부자연스러운 움직임 문제를 해결할 수 있었습니다.
- **긍정적인 피드백**: 초기 테스트 플레이어들로부터 직관적이고 재미있다는 긍정적인 피드백을 받았습니다. 이는 플레이어 이동 기능이 게임의 중요한 재미 요소로 자리 잡았음을 보여줍니다.

</br>

하지만 R3F와 Rapier를 사용하여 3D 이동을 구현하면서 많은 성과를 얻었지만, 아쉬운 점도 있었습니다. 현재의 입력 시스템은 키보드와 마우스에 국한되어 있어 다양한 입력 장치(예: 모바일 환경)를 지원하는 방향으로 개선이 필요할 것으로 판단됩니다. 추후 개선할 예정입니다.

</br>
</br>

## 2. 드래그 앤 드롭은 3D 상에서 어떻게 구현할 수 있을까?

게임 플레이어가 3D 공간 내에서 물체(객체)를 자연스럽게 선택하고 조작할 수 있는 메커니즘이 필요했습니다.

이를 위해 초기 개발 단계에서 3D 환경에서의 드래그를 어떤 방식으로 구현할 수 있을지 여러 방법을 모색해 보았고, 우선적으로 기존에 있는 라이브러리를 최대한 활용해보려 하였습니다. 그에따라, HTML5 Drag and Drop API, React DnD, use-gesture 의 장단점을 비교해 보았습니다.
| 방법 | 장점 | 단점 |
|---------------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| _HTML5 Drag and Drop API_ | - 브라우저에 기본적으로 내장되어 있어 추가 라이브러리나 프레임워크 없이 사용할 수 있었습니다.<br>- HTML 요소의 드래그 앤 드롭을 쉽게 구현할 수 있었습니다. | - 2D 평면 상에서의 드래그 앤 드롭 기능만 제공하여 3D 드래그에는 적합하지 않았습니다.<br>- 커스터마이징이 제한적이며 복잡한 상호작용을 구현하기 어려웠습니다. |
| _React DnD (Drag and Drop) 라이브러리_ | - React와 잘 통합되며, 다양한 드래그 앤 드롭 시나리오를 쉽게 구현할 수 있었습니다.<br>- 커스터마이징 가능성이 높고, 드래그 소스와 드롭 타겟을 정의하기 쉬웠습니다. | - 주로 2D 드래그 앤 드롭을 지원하며, 3D 공간에서의 드래그 구현에는 추가 작업이 필요했습니다. |
| _use-gesture 라이브러리의 useDrag 훅_ | - React Hook 형태로 제공되어 React와 쉽게 통합할 수 있었습니다.<br>- 사용이 간편하며, 직관적인 API를 제공했습니다. | - 주로 2D 평면 상의 좌표를 제공하여 3D 드래그 구현에는 제한이 있었습니다.<br>- 3D 드래그 앤 드롭 기능을 완전히 지원하지 않으므로 추가 구현이 필요했습니다. |

그 중 React Hook 형태로 제공되고 사용이 간편하고 직관적인 API를 제공하는 `use-gesture` 라이브러리의 `useDrag` 훅을 사용해서 컴포넌트를 드래그 할 수 있는 방식으로, 해당 라이브러리와 훅을 커스터마이징 하여 3D 상에서의 드래그 앤 드롭을 구현하려 했습니다.

<br>

### 2-1 문제: 라이브러리를 사용한 드래그 앤 드롭의 한계

---

하지만 `useDrag`의 드래그 방식은 Interaction 게임에서 필요로 하는 3D 드래그를 구현하는데 제약사항이 있었습니다.

- `useDrag`를 사용한 드래그 테스트 영상
<p align="center">
<img width="700" alt="first-drag-drop" src="https://github.com/howinteraction/interaction/assets/116258834/784150ac-e339-423b-8a51-ccde25335210">
</p>

`useDrag` 훅은 드래그 시, 마우스 포인터의 좌표들이 x, y축 2D 평면 상에서의 좌표만 제공해주었습니다. 하지만 Interaction 게임은 3D 상에서의 드래그 좌표들(x, y축 그리고 z축)이 필요했습니다.

하지만 직접 코드를 구현해보니 위의 테스트 영상 처럼 3D환경에서 2D 드래그를 하는 것 이상으로는 개발할 수 없었습니다. 즉, 축을 하나 더 부여하고 싶어도 부여가 되지 않았습니다.

그리고 해당 라이브러리의 3D 환경에서의 한계점을 분석해 봤습니다.

| 한계점                       | 설명                                                                                                                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **좌표 시스템의 제한**       | `useDrag` 훅은 주로 2D 평면 상에서의 좌표(x, y)만 제공하기 때문에 3D 공간에서의 z축 좌표를 지원하지 못했습니다. 이는 3D 드래그를 구현하는 데 있어 큰 제약이었습니다.                            |
| **정확한 상호작용의 어려움** | 3D 모델과의 상호작용을 구현하기 위해서는 마우스 포인터의 위치를 정확히 추적하고, 이를 3D 공간에서의 객체 위치로 변환하는 작업이 필요했습니다. `useDrag` 훅은 이러한 변환을 지원하지 않았습니다. |
| **물리적 상호작용 미지원**   | 3D 공간에서는 객체들이 서로 물리적으로 상호작용해야 합니다. `useDrag` 훅은 이러한 물리적 상호작용을 지원하지 않기 때문에 객체 간의 충돌이나 반응을 처리하는 데 한계가 있었습니다.               |
| **복잡한 수학적 연산 필요**  | 3D 드래그를 구현하기 위해서는 벡터와 행렬 연산 등 복잡한 수학적 연산이 필요했습니다. 이는 `useDrag` 훅만으로는 구현하기 어려웠습니다.                                                           |

위와 같은 이유로 한계를 느껴, rapier 물리 엔진과 Three.js 및 R3F를 사용하여 3D 드래그 기능을 구현하기로 결정했습니다.

</br>

### 2-2 구현 과정: 드래그 앤 드롭 직접 구현하기

---

<details><summary>드래그 앤 드롭 영상</summary>
<p align="center">
<img width="700" alt="drag-drop" src="https://github.com/howinteraction/interaction/assets/126459089/a8624c0d-6376-49dd-9572-f6c9b04f823a">
</p>
</details>

</br>

드래그 앤 드롭 기능은 게임에서 물체를 마우스로 클릭하고 움직일 수 있게 해주는 게임 플레이에 매우 중요한 기능입니다. 저희는 여러 단계를 통해 이 기능을 구현하였습니다.

- **드래그 앤 드롭을 도식화한 다이어그램**
<p align="center">
<img width="300" height="600" alt="스크린샷 2024-05-10 오후 4 35 28" src="https://github.com/howinteraction/interaction/assets/116258834/ed40d2a0-1aed-4412-9e00-93163e05dfb6">
</p>

1. **물리 엔진 사용**: 게임에서 물체가 어떻게 움직이고 상호작용할지 계산하는 것은 매우 복잡했습니다. 이를 위해, 저희는 처음부터 물리 법칙을 다시 만드는 대신 ‘rapier’라는 물리엔진 라이브러리를 사용하기로 결정했습니다. 이 라이브러리는 물체의 움직임을 자연스럽게 계산해줍니다.

</br>

2. **가상의 선을 사용해 물체 잡기**: 플레이어가 게임 내에서 마우스로 물체를 클릭하면,카메라 위치에서 마우스 커서가 가리키는 방향으로 가상의 선(ray)을 발사합니다. 이 선이 게임 내의 물체와 교차하면 해당 물체를 선택할 수 있습니다. 이 과정을 ‘raycasting’이라고 합니다.

```jsx
import * as THREE from "three";

// 마우스 클릭 시 raycasting을 사용해 물체를 선택하는 이벤트 핸들러입니다.
useEffect(() => {
  const handleClick = () => {
    const origin = new THREE.Vector3().copy(camera.position);
    const direction = new THREE.Vector3();

    camera.getWorldDirection(direction);

    const originOffset = 2;
    const maxToi = 100;
    const ray = new RAPIER.Ray(
      origin.add(direction.multiplyScalar(originOffset)),
      direction,
    );
    const castRay = world.castRay(ray, maxToi, true);

    if (castRay) {
      const selectedRigidBody = world.getRigidBody(
        castRay.collider.parent().handle,
      );
      setSelectedHandle(selectedRigidBody.handle);
    }
  };

  document.addEventListener("click", handleClick);
  return () => document.removeEventListener("click", handleClick);
}, [camera, isDragging, world]);
```

</br>

3. **물체 드래그하기**: 물체를 잡은 후, 플레이어가 마우스를 움직이면 물체도 함께 움직입니다. 드래그하는 동안 물체는 카메라로부터 일정한 거리를 유지하면서 마우스를 따라 이동합니다. 이 거리는 플레이어가 처음 물체를 클릭했을 때의 위치에 따라 결정됩니다.

<p align="center">
  <img width="500" alt="스크린샷 2024-04-08 20 41 35" src="https://github.com/howinteraction/interaction/assets/116258834/e62abedd-25ae-4bc1-8265-5d6fb27c0d71">
</p>

드래그 중 물체의 위치를 계속 업데이트 해주기 위한 새로운 위치는 위의 수식처럼 현재 카메라 위치에 카메라 방향 벡터와 초기 거리를 곱한 값을 더하여 계산합니다. 이동중에는 잠시 중력의 영향을 받지 않도록 해주어 자연스럽게 이동하도록 했습니다.

```jsx
// 선택된 물체를 마우스 이동에 따라 드래그하는 로직입니다.
useFrame(() => {
  if (
    selectedHandle &&
    isDragging &&
    world.getRigidBody(selectedHandle).userData?.isDraggable
  ) {
    const direction = new THREE.Vector3();

    camera.getWorldDirection(direction);

    const newPosition = direction
      .multiplyScalar(initialDistance)
      .add(camera.position);
    const selectedRigidBody = world.getRigidBody(selectedHandle);

    selectedRigidBody.setTranslation(newPosition, true);
    selectedRigidBody.setBodyType(2);
  }
});
```

</br>

4. **드래그 종료 및 물체 놓기**: 플레이어가 마우스로 물체를 한번 더 클릭하면, 드래그가 종료됩니다. 이때, 물체는 다시 중력의 영향을 받아 자연스럽게 바닥으로 떨어집니다.

```jsx
// 드래그를 종료하고 물체를 놓는 로직입니다.
if (selectedHandle && isDragging) {
  world.getRigidBody(selectedHandle).setBodyType(RAPIER.RigidBodyType(0);
  setIsDragging(false);
  setSelectedHandle(null);
  setInitialDistance(null);
}
```

</br>

### 2-3 트러블슈팅: 드래그 중 물체가 벽을 통과한다?

---

드래그 앤 드롭 로직 구현 후 테스트를 해보니, 물체 드래그 시 배경모델의 벽을 뚫는 현상이 발생했습니다.

<p align="center">
  <img width="700" alt="image" src="https://github.com/howinteraction/interaction/assets/116258834/7b33b7e6-4e57-4d94-99e1-74a4a0e2b722">
  </br>🔺 드래그 중 벽을 뚫는 현상
</p>

해당 문제에 대해 분석해 보았고 아래와 같은 문제가 있었습니다.

- 물체를 클릭하고 드래그 할 때에는 벽을 뚫는 현상이 발생한다.
- 물체를 다시 클릭하여 드롭할 때에는 벽 안으로 물체가 돌아온다.

</br>

위의 문제를 해결하기 위해 드래그 시 물체가 이동하는 위치의 제한이 필요했습니다. 따라서 해당 드래그 로직에 사용할 util 함수를 작성해 보았습니다.

```jsx
export default function restrictPosition(value, min, max) {
  return Math.max(min, Math.min(value, max));
}
```

위의 `restrictPosition` 함수는 x, y, z 위치 값을 연산하여 물체의 현재 위치값(value)이 min 미만의 값 또는 max를 초과하는 값을 갖지 않도록, 물체의 위치를 제한할 수 있도록 작성해 보았습니다.

</br>

<details>
<summary>restrictPosition을 적용한 드래그 컨트롤 코드</summary>

```jsx
// minX, maxX, maxY, minZ, maxZ 지정하여 각 스테이지마다 DragControl의 prop으로 넣어준다.
export default function DragControl({ minX, maxX, maxY, minZ, maxZ }) {
  // 중간 생략..

  useFrame(() => {
    if (
      selectedHandle &&
      isDragging &&
      world.getRigidBody(selectedHandle).userData?.isDraggable
    ) {
      const direction = new THREE.Vector3();

      camera.getWorldDirection(direction);

      const newPosition = direction
        .multiplyScalar(initialDistance)
        .add(camera.position);
      const selectedRigidBody = world.getRigidBody(selectedHandle);
      // 물체 위치 제한, 각 (X, Y, Z) 를 제한한다.
      const adjustedPositionX = restrictPosition(newPosition.x, minX, maxX);
      const adjustedPositionY = restrictPosition(
        newPosition.y,
        clickedPosition.y,
        maxY,
      );
      const adjustedPositionZ = restrictPosition(newPosition.z, minZ, maxZ);
      // 선택된 물체는 useFrame 내부에서 벽을 통과할 수 없게 된다.
      selectedRigidBody.setTranslation(
        new THREE.Vector3(
          adjustedPositionX,
          adjustedPositionY,
          adjustedPositionZ,
        ),
        true,
      );

      selectedRigidBody.setBodyType(2);
    }
  });
}
```

</details>

</br>

그리고 위의 함수를 기존의 드래그 로직에 적용함으로써, 각 Stage에서 호출 시 props로 max, min 값을 넘겨주도록 하였습니다. 따라서 물체의 위치가 지정한 값을 초과하지 않게 되어 드래그 시 벽을 뚫는 현상을 막을 수 있었습니다.

</br>

- 물체가 벽을 뚫는 현상 해결

  ![벽 뚫기 및 드랍 해결](https://github.com/howinteraction/interaction/assets/116258834/c90f8e88-cbb2-47b5-af0b-38cf8da8d3d5)

</br>

이렇게 드래그 앤 드롭 기능은 게임 내에서 물체를 손쉽게 움직이고 조작할 수 있게해서 게임의 재미와 몰입감을 향상시켰습니다. 이 기능을 통해 플레이어는 게임 세계와의 상호작용을 더욱 직관적으로 경험할 수 있습니다.

</br>

### 2-4 결과: 드래그 앤 드롭 기능의 구현 성과와 게임에 미친 영향

---

드래그 앤 드롭 기능을 성공적으로 구현한 결과, Interaction 게임은 플레이어와의 상호작용성을 크게 향상시킬 수 있었습니다. 다음은 해당 기능의 구현으로 인해 얻은 주요 성과와 긍정적인 영향들입니다.

- **향상된 사용자 경험 (UX)**: 플레이어는 게임 내 오브젝트를 직관적으로 조작할 수 있게 되었습니다. 이를 통해 게임의 몰입감이 크게 향상되었습니다. 복잡한 조작 없이 마우스 클릭과 드래그만으로 물체(오브젝트)를 움직일 수 있어, 게임 플레이가 더욱 쉽고 재미있어졌습니다.
- **게임 플레이의 다양성 증가**: 다양한 게임 플레이 요소를 추가할 수 있는 기반이 마련되었습니다. 예를 들어, 특정 위치에 물체를 배치하거나 퍼즐을 풀기 위한 드래그 앤 드롭 기능을 활용할 수 있게 되었습니다. 드래그 앤 드롭 기능을 통해 상호작용이 필요한 퀘스트나 미션을 추가할 수 있어, 게임의 콘텐츠를 더욱 풍부하게 만들 수 있었습니다.
- **기술적 성과**: Three.js, R3F 및 rapier 물리 엔진과의 통합을 통해 3D 환경에서의 자연스러운 물리 기반 상호작용을 구현할 수 있었습니다. 복잡한 수학적 연산과 물리 엔진의 활용을 통해 3D 드래그 앤 드롭을 매끄럽게 처리할 수 있었습니다.
- **문제 해결 능력 강화**: 드래그 중 물체(오브젝트)가 벽을 뚫고 지나가는 문제를 해결함으로써, 게임 내 물리 법칙의 일관성을 유지할 수 있었습니다. 제한된 좌표 시스템을 보완하기 위해 restrictPosition 함수를 도입하여, 물체(오브젝트)의 위치를 제한하고, 예기치 않은 동작을 방지할 수 있었습니다.
- **긍정적인 피드백**: 초기 테스트 플레이어들로부터 직관적이고 재미있다는 긍정적인 피드백을 받았습니다. 이는 드래그 앤 드롭 기능이 게임의 중요한 재미 요소로 자리 잡았음을 보여줍니다.

</br>

결과적으로, 드래그 앤 드롭 기능의 성공적인 구현은 Interaction 게임의 사용자 경험을 크게 향상시키고, 게임 플레이의 다양성과 몰입감을 높이는 중요한 요소가 되었습니다.

</br>
</br>

## 각 스테이지 별 기능

각 스테이지에 들어가는 기능들에 대한 기술적 챌린지 입니다.

## 3. 물체가 커지고 작아지는 원근법 기능은 어떻게 구현할 수 있을까?

스팀사의 [슈퍼리미널 게임](https://www.youtube.com/watch?v=_SX8XMwMw6Y&t=21s)을 참고하여 게임 플레이에 핵심이 되는 원근법을 이용한 착시 기능을 구현하고자 했습니다. 물체가 커지는 경우와 작아지는 경우를 나누어 가설을 세워보았습니다.

### 3-1 가설: 상호 작용을 이용한 물체의 크기 변경

---

물체가 커지거나 작아지는 경우를 나누어 가설을 세웠습니다. 이 가설은 플레이어와 물체 간의 상호 작용이 물체의 크기를 어떻게 변화시킬 수 있는지를 설명합니다. 슈퍼리미널 게임의 사례를 참고하여, 다음과 같은 상호 작용에 따른 크기 변화를 가정했습니다:

- **물체가 커지는 경우**:

  - 플레이어가 물체를 잡고 벽을 보면서 뒤로 가는 경우: 이 상황에서는 물체가 멀어지면서 더 커보이게 됩니다. 이는 원근법의 원리에 따라, 동일한 크기의 물체가 멀어질수록 더 크게 보이기 때문입니다.
  - 플레이어가 물체를 잡고 천장을 바라보는 경우: 이 경우, 물체가 플레이어의 시야에서 위쪽으로 멀어지며 더 커보이게 됩니다. 이는 천장이 멀리 있을 때 물체가 상대적으로 더 큰 크기로 인식되기 때문입니다.

- **물체가 작아지는 경우**:
  - 플레이어가 물체를 잡고 벽을 보면서 가까이 가는 경우: 물체가 플레이어에게 가까워지면서 더 작아보이게 됩니다. 이는 물체가 가까울수록 작은 크기로 인식되기 때문입니다.
  - 플레이어가 물체를 잡고 바닥으로 숙이는 경우: 이 경우, 물체가 플레이어의 시야에서 아래쪽으로 가까워지며 더 작아보이게 됩니다. 이는 바닥이 가까울 때 물체가 상대적으로 더 작은 크기로 인식되기 때문입니다.

### 3-2 구현 과정: 드래그 앤 드롭 로직에 원근법 착시 기능을 입혀보자

---

1. **원근법 착시의 개요**: 스테이지1에서는 원근법 착시 기능이 플레이어, 물체, 그리고 물체와 벽 사이의 거리를 고려하여 물체의 크기 조절 기능을 구현하였습니다. 이를 **원근법 착시**라는 이름으로 명명했습니다. 이 기능은 플레이어가 물체를 드래그하고 이동시킬 때, 물체의 크기와 위치가 원근법에 따라 변하는 착시 효과를 제공합니다.

2. **초기 거리 및 크기 기록**: 플레이어가 물체를 선택하면, 먼저 카메라와 물체 사이의 초기 거리와 초기 크기를 기록합니다. 이를 위해 카메라의 위치와 물체의 위치를 이용하여 초기 거리를 계산하고, 물체의 초기 크기를 저장합니다. 물체를 선택했을 때, 카메라와 물체 사이의 초기 거리(initialDistance)를 계산하여 상태로 저장합니다.

3. **물체의 새 위치 계산**: 플레이어가 물체를 드래그하는 동안, 카메라에서 물체로의 방향 벡터와 거리 변화를 감지하여 물체의 새 위치를 계산합니다. 이를 통해 실시간으로 물체를 이동시킵니다. **useFrame** 훅을 사용하여 드래그 중인 물체의 새 위치를 계속 업데이트합니다. 이를 통해 물체는 카메라의 방향과 거리에 따라 움직입니다.

4. **물체의 크기 조절**: 물체의 새 위치를 계산한 후, 초기 거리와 현재 거리의 비율에 따라 물체의 크기를 조절합니다. 이를 통해 플레이어에게 실시간으로 원근감을 제공합니다.

<p align="center">
  <img width="500" alt="스크린샷 2024-04-08 20 41 44" src="https://github.com/howinteraction/interaction/assets/101324787/a46fded2-3ab0-417b-babb-e3d7141c6d0a">
</p>

### 3-3 결과: 원근법 착시 기능의 구현과 한계점

---

<p align="center">
<img width="700" alt="perspective" src="https://github.com/howinteraction/interaction/assets/126459089/409e3e41-cb15-4ef3-bf21-640398add94a">
<br>
🔺 원근법 착시 기능 영상
</p>

결과적으로 특히, 물체가 커지는 경우는 플레이어가 물체를 잡고 천장을 바라보는 경우, 물체가 작아지는 경우는 플레이어가 물체를 잡고 벽을 보고 가까이 가는 경우에 대해서만 구현할 수 있었습니다.

두 가지 경우만 구현할 수 있던 이유는 다음과 같습니다:

- **물체가 커지는 경우**: 플레이어가 물체를 잡고 벽을 보면서 뒤로 가는 상황에서 물체가 커지는 현상을 구현하지 못했습니다. 이는 어느 벽을 기준으로 해야 할지가 모호했기 때문입니다. 게임 환경에서 플레이어가 벽을 등지고 있을 때, 여러 벽이 존재할 수 있으며, 각 벽과의 거리를 실시간으로 계산하고 판단하는 로직을 구현하는 데 어려움이 있었습니다. 벽이 여러 개일 경우 특정 벽을 기준으로 삼아야 하는데, 이를 정확하게 판단하고 적용하는 과정에서 혼란이 발생했습니다.

- **물체가 작아지는 경우**: 플레이어가 물체를 잡고 바닥으로 숙이는 경우 물체가 작아지는 현상을 구현하는 데 어려움을 겪었습니다. 이는 각도 문제 때문이었습니다. 플레이어가 물체를 바닥으로 숙일 때, 물체와 카메라 사이의 각도가 너무 작아지거나 변화가 미미하여 원근법 착시 효과를 충분히 반영하기 어려웠습니다. 각도에 따른 물체 크기 조절 로직이 섬세하게 작동하지 않아 바닥으로 숙이는 경우의 효과를 시각적으로 충분히 나타내지 못했습니다.

아쉬운 점으로는 물체의 크기가 실시간으로 변하지 않고 드롭 시에 변하는 점이 있었습니다. 이는 플레이어가 물체를 드래그하는 동안 실시간으로 크기가 변하는 로직을 구현하는 데 있어 렌더링 성능 이슈 때문이었습니다. 추후에는 이러한 한계점을 개선하여, 드래그 중에도 실시간으로 물체의 크기가 변하도록 수정하고 싶습니다. 이를 통해 플레이어가 더욱 몰입감 있게 원근법 착시 효과를 경험할 수 있도록 만들 계획입니다.

<br>
<br>

## 4. 물체들이 바뀌는 착시 기능은 어떻게 구현할 수 있을까?

[슈퍼리미널 게임을 참고하여](https://www.youtube.com/watch?v=Jv-yXlqsbJc&t=17s) 분리된 물체를 온전한 물체로 바꾸는 착시 기능을 구현하고자 했고, 물체가 맞물리는 시점을 코드를 통해 찾을 수 있는 방법에 대한 가설을 세워보았습니다.

### 4-1 가설: 플레이어가 이동시키는 카메라 시점(마우스 커서)의 좌표를 이용해보자

---

- 플레이어의 카메라 시점 좌표를 이용
  - 만약 플레이어가 보고 있는 카메라의 시점을 이용해서 분리된 물체가 맞물려지는 시점과 보고 있는 시점이 같다면, 물체가 맞물려지는 상황이 나오게 되는 것이니 "맞물리는 특정 시점 대한 좌표(position)를 이용해보자" 에 주안점을 두었습니다.

### 4-2 구현 과정: 카메라 회전각도 수치화 / 물체의 상태변화 이용

---

1. **카메라 회전의 이해**: 먼저 react-three/fiber 라이브러리의 useThree 훅을 사용하여 camera 객체를 생성하였습니다. camera 객체의 특성중 **position**은 카메라의 위치, **rotation**은 카메라가 바라보는 방향과 관련이 있다는 것을 알게 되었습니다. <br><br> 그리고 분리된 지점을 연결하여 얻은 벡터값을 camera 객체처럼 표현할 수 있다면 분리된 지점의 좌표 정보만으로도 착시효과를 일으키는 시야각을 계산해 낼 수 있다는 결론을 도출 하였습니다. <br><br> 게임 내에서 카메라의 회전은 플레이어가 바라보는 방향을 결정합니다. 이 회전은 x, y, z축을 따라 설정되며, 각 축에 대한 회전 각도를 오일러 각도라고 합니다. <br><br> 오일러 각도는 카메라가 어떻게 기울어져 있는지를 나타내는 각도입니다. 카메라의 회전 각도는 라디안이라는 단위로 측정됩니다. <br><br>라디안은 각도를 수치화하는 방법 중 하나로, 플레이어가 카메라를 정확한 방향으로 조정할 수 있도록 도와줍니다.

<p align="center">
  <img width="360" alt="스크린샷 2024-04-08 20 42 05" src="https://github.com/howinteraction/interaction/assets/126459089/8210cf9f-9432-484b-bccb-0305e17da331">
  <img width="360" alt="스크린샷 2024-04-08 20 42 13" src="https://github.com/howinteraction/interaction/assets/126459089/ea24a568-82bf-4231-8a00-6a8231b29ef0">
</p>

<br>

2. **물체의 맞물리는 지점 찾기**: 플레이어는 게임에서 특정 위치에서 카메라를 조작하여, 분리된 물체 조각들이 완벽하게 맞물리는 지점을 찾아야 합니다. 이는 카메라를 조금씩 회전시키며, 조각들이 하나의 완전한 물체로 보이는 순간을 포착하는 것을 의미합니다. <br><br> 물체의 조각들이 완전히 일치하도록, 카메라의 위치와 각도에 따른 오차 범위를 조정합니다. 오차 범위는 `_CAMERA_POSITION`, `_CAMERA_ROTATION` 라는 변수명으로 분리된 지점의 좌표에 대한 최소값, 최대값을 상수화하였습니다. 이를 통해 플레이어는 물체를 정확히 맞추고, 온전한 3D 물체로 바꿀 수 있습니다.

<br>

- 설명을 위한 예시 코드

  ```js
  // 비주얼 착시 함수입니다.
  export default function VisualIllusion() {
    // ...

    const isCombined = useSelector((state) => state.twoIllusion.isCombined);

    // 카메라의 시점과 회전 각도가 오차 범위에 있는지 확인합니다.
    function checkCameraRange() {
      const isInRange =
        camera.position.x > MIN_CAMERA_POSITION_X &&
        camera.position.x < MAX_CAMERA_POSITION_X &&
        // ...

        camera.rotation.x > MIN_CAMERA_ROTATION_X &&
        camera.rotation.x < MAX_CAMERA_ROTATION_X &&
        // ...

      // 오차 범위에 있다면 전역 상태를 업데이트 합니다.
      if (isInRange) {
        dispatch(setIsCombined(true));
      }
    }

    // 온전한 3D 물체를 렌더링합니다.
    return (
      isCombined && (
        <RigidBody>
          <TetrahedronCube />
        </RigidBody>
      )
    );
  }
  ```

<br>

3. **물체의 상태 변화를 이용한 2D사진 -> 3D물체 변화**: 스테이지3 에서 이용할 2D사진들은 플레이어가 어떤 구간에 어떤 물체가 필요한지 찾아서 해당하는 물체에 대한 2D사진을 적절한 곳에 드래그 앤 드롭 하며 스테이지를 클리어 하게끔 개발해야 했습니다. <br><br> 스테이지를 클리어 하는데 있어서 사진을 드래그 했을 때 상태 변화를 일으키기 위해 해당하는 물체들에 boolean 값으로 상태를 설정 해둔 뒤, 적합한 물체라면 드롭했을 때 상태를 바꿔서 2D사진을 3D물체로의 변화를 일으켰습니다. <br><br> 2D 사진을 만드는 작업은, 블렌더를 이용해 직접 3D 물체들에 이미지를 입히는 방향으로 시도 했었습니다. 그러나 외부 툴에 의존하는 것보다 직접 코드로 문제해결을 하는 것이 맞다는 판단을 하였습니다.<br><br> 블렌더를 이용하는 작업은 3D 물체나 맵을 만드는 작업까지만 하고, Three.js의 `textureLoader` 메서드를 통해 이미지 파일들을 3D 물체에 부착하는 방법을 택했습니다. 이미지 파일을 3D mesh에 부착할 알맞는 좌표값을 찾아서 직접 조정해주는 방식으로 해결하였습니다.

<p align="center">
<img width="430" alt="스크린샷 2024-05-16 20 48 04" src="https://github.com/howinteraction/interaction/assets/126459089/df371f29-a6fb-4833-a4f1-e5955688b8e0">
</p>

- 설명을 위한 예시 코드

  ```jsx
  import { CuboidCollider, RigidBody } from "@react-three/rapier";
  import * as THREE from "three";

  export default function StageThreeColumn2d() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      "assets/images/stage3-picture/column-2d.png",
    );

    return (
      <RigidBody
        position={[-35.8, -10, -20.6]}
        rotation={[0, 11.5, 0]}
        userData={{ isDraggable: true }}
        lockRotations
      >
        <mesh>
          <planeGeometry args={[3.5, 3.5]} />
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
          <CuboidCollider args={[1.8, 1.8, 0.05]} />
        </mesh>
      </RigidBody>
    );
  }
  ```

<br>
<br>

---

<br>

<p align="center">
<img width="700" alt="separate-illusion" src="https://github.com/howinteraction/interaction/assets/126459089/ea84902c-1a87-47f3-a005-0574b5ded556">
<br>
🔺 분리된 물체 -> 온전한 물체 착시 기능 영상
</p>

<br>

<p align="center">
<img width="700" alt="2d-3d-illusion" src="https://github.com/howinteraction/interaction/assets/126459089/c4874999-5322-4bfa-94ac-8f088add9486">
<br>
🔺 2D사진 -> 3D물체 착시 기능 영상
</p>

<br>

### 4-3 결과: 물체 변화 착시 기능의 구현과 한계점

물체 변화 착시 기능을 구현하면서 카메라의 좌표값과 상태들을 이용한 결과, 다음과 같은 주요 성과와 개선 사항을 도출할 수 있었습니다.

- **향상된 사용자 경험 (UX)**: 플레이어는 게임 내에서 물체 변화 착시 기능들을 사용하면서 게임에 대한 재미요소가 크게 향상 되었다는 피드백을 동기분들께 받았습니다.
- **문제 해결 능력 강화**: 플레이어의 시점을 이용하기 위한 카메라의 프로퍼티들을 찾아가며 3D 환경에서의 카메라 객체를 사용하는 방법을 익히게 되었고, 카메라 객체 내부의 오일러 각도와 같은 프로퍼티를 이용하여 유저와 물체간의 원할한 상호작용을 구현해야만 하는 문제를 해결할 수 있었습니다.

아쉬운 점은 스테이지3 에서 2D 사진을 드래그 앤 드롭할 때 3D 물체로 변하는 과정에서 적절한 물체를 선택하고 드롭했을 때의 상태변화는 올바르게 동작하지만, 정확한 위치(좌표)에 놓았을 때 까지의 조건이 포함된 물체변화는 이루어지지 않고 있습니다. 추후 해당 개선사항을 반영한 기능으로 변경 예정입니다.

---

## 유저 경험 개선

개발하는 과정에서 저희는 게임에 익숙하고 기존에 해왔던 작업이기에 익숙한 나머지 유저경험을 신경쓰지 못하는 경우가 있었는데, 실제로 플레이 하는데 있어서 어떤점이 불편한지 부트캠프 동기분들과 지인분들께 불편한 점이 무엇인지 여쭤보고 개선 해보았습니다.

1. 게임을 들어와서 무엇을 어떻게 플레이 해야하는지 모르겠습니다.

- 스테이지 중간 로딩 컴포넌트를 삽입했고, 플레이어가 어떻게 게임을 플레이 해야하는지 조작법이나 각 스테이지의 간단한 설명 및 컨셉 등을 설명해주었습니다. 해당 로딩 화면을 보고 어떻게 클리어해야 하는지 힌트를 주고, 배경음악등을 삽입해 실제로 몰입감을 줄 수 있도록 하였습니다.

2. 스테이지는 다 클리어 했는데, 그 이후에는 다른 컨텐츠는 없을까요?

- 구현되어 있는 스테이지 까지 모두 클리어하게 되면 앞서 받았던 유저 이름을 이용한 플레이 타임을 기록한 테이블이 나오게 됩니다. 플레이타임을 시간 순으로 정렬해 빠르게 클리어한 순위로 나열 후 렌더링 하였으며, 추후 플레이어들끼리의 경쟁요소를 통한 재미를 제공해주기 위해 랭킹페이지를 제작하였습니다.

<p align="center">
<img width="400" alt="스크린샷 2024-05-16 14 44 36" src="https://github.com/howinteraction/interaction/assets/126459089/52a50666-72b1-432c-9bad-7ca561edf11b">
<img width="400" alt="스크린샷 2024-05-16 14 15 36" src="https://github.com/howinteraction/interaction/assets/126459089/77e16795-61e4-49fb-bda6-6a087871e5bd"></p>
</p>

<br>
<br>

# 🗓 일정

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

<br>

# 🧑🏻‍💻 팀원

금서하 [개인 Github 링크](https://github.com/seohag) <br>
조양우 [개인 Github 링크](https://github.com/erv2bh) <br>
최기원 [개인 Github 링크](https://github.com/originchoi)
