# 🕹 Interaction

![logo-removebg](https://github.com/howinteraction/interaction/assets/126459089/c81a3ce4-f1ee-4e13-959e-94addee50369)

Interaction은 정적인 웹페이지에서 1인칭 시점을 기준으로 키보드로 플레이어를 이동하고 마우스로 물체를 드래그하며 각 스테이지에 스며들어 있는 물체간의 착시를 이용해서 퍼즐로 되어있는 스테이지를 클리어 하는 방식으로 구성된 웹 게임 입니다.

# 🔗 Links

[Deployed web](https://inter-action.co)

# 📖 Contents

- [동기](#-동기)
- [기술 스택](#-기술-스택)
- [게임 소개](#-게임-소개)
- [기술 챌린지](#-기술-챌린지)
  - [1. 모든 스테이지 공통 기능](#1-모든-스테이지-공통-기능)
    - [1-1 어떻게 몰입감을 주기 위해 1인칭 시점으로 플레이어 이동을 구현할 수 있을까?](#1-1-어떻게-몰입감을-주기위해-1인칭-시점으로-플레이어-이동을-구현할-수-있을까)
    - [1-2 물체를 이용한 드래그 앤 드롭 기능은 어떻게 구현할 수 있을까?](#1-2-물체를-이용한-드래그-앤-드롭-기능은-어떻게-구현할-수-있을까)
    - [1-3 유저의 게임 플레이 흐름을 생각하며 작업을 할 수 있을까?](#1-3-게임을-플레이-하는-시나리오-외에도-랭킹-등의-기능들을-웹앱에-어떻게-녹이고-유저가-게임-흐름을-어떻게-가져가게-할-것-인가)
  - [2. 각 스테이지별 기능](#2-각-스테이지-별-기능)
    - [2-1 물체가 커지고 작아지는 원근법 기능은 어떻게 구현할 수 있을까?](#2-1-물체가-커지고-작아지는-원근법-기능은-어떻게-구현할-수-있을까)
    - [2-2 물체들이 바뀌는 착시 기능은 어떻게 구현할 수 있을까?](#2-2-물체들이-바뀌는-착시-기능은-어떻게-구현할-수-있을까)
- [일정](#-일정)
- [팀원](#-팀원)

<br>
<br>

# 👀 동기

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

- 원근법 착시 기능을 이용하여 포탈로 이동합니다.
  - 플레이어가 물체를 드래그한 후 벽으로 이동하면 물체의 크기가 작아집니다.
  - 플레이어가 물체를 드래그한 후 마우스 커서를 위로 이동하면 물체의 크기가 커집니다.
- 물체의 크기를 키운 후 점프 기능으로 스테이지를 클리어합니다.

- 일반 점프 거리로는 포탈에 도달할수 없기 때문에 물체의 크기를 키운 후 점프 기능으로 스테이지를 클리어합니다.

<br>

### 스테이지2

<p align="center">
  <img width="700" alt="threejs-structure" src="https://github.com/howinteraction/interaction/assets/126459089/5dec0de9-c355-49cc-abe4-caa4b35bcfac">
</p>

- 스테이지2에 들어가게 되면 플레이어는 제공된 힌트를 통해 퍼즐을 풀게 됩니다.
  - 스크린에 나오는 힌트를 통해, 플레이어는 삼각형 물체를 찾아야 합니다.
  - 기둥에 분리된 물체들을 보고, 플레이어는 이동과 카메라의 시점 이동을 통한 착시로, 3d 물체를 획득하게 됩니다.
  - 획득한 3d 물체를 드래그 하고, "attached" 라는 문구가 써져 있는 올바른 위치에 드롭해서 해당 스테이지를 클리어 합니다.

<br>

### 스테이지3

<p align="center">
  <img width="700" alt="threejs-structure" src="https://github.com/howinteraction/interaction/assets/126459089/b491c35e-ca7c-4f0e-b39f-fe6a29cce9a4">
</p>

- 스테이지3에 들어가게 되면 플레이어는 여러가지 2D 사진들을 볼 수 있습니다.

  - 2D사진을 드래그 앤 드롭 하면 3D 물체로 바뀌는 기능을 가진 사진이 있습니다.
  - 플레이어는 해당 기능을 가진 사진을 이용해 스테이지를 클리어 할 수 있습니다.

- 스테이지3을 클리어하면 클리어시간이 기록된 랭킹 페이지를 볼 수 있습니다.

<br>
<br>

# 🏔 기술 챌린지

## 1. 모든 스테이지 공통 기능

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

모든 스테이지에 공통적으로 들어가는 기능들에 대한 기술적 챌린지 입니다.

<br>

## 1-1 어떻게 몰입감을 주기위해 1인칭 시점으로 플레이어 이동을 구현할 수 있을까?

<details><summary>플레이어 이동 영상</summary>

<p align="center">
<img width="700" alt="player-movement" src="https://github.com/howinteraction/interaction/assets/126459089/81e4ac6b-29a1-4680-b6ea-3afd9c6f23a0">
</p>

</details>
<br>

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

특히, 1인칭 플레이 방식을 선택함에 따라 플레이어가 이동하는 방식도 이에 맞추어 설계되었습니다. 저희는 플레이어를 구현 후, 아래의 다이어그램과 같은 이동방식을 세우고 접근해봤습니다.

- **플레이어 이동을 도식화한 다이어그램**
<p align="center">
<img width="700" alt="스크린샷 2024-05-10 오후 4 35 03" src="https://github.com/howinteraction/interaction/assets/116258834/ca948c1e-fb62-4f18-99a6-b14466dff879">
</p>

플레이어의 이동은 키보드 입력을 통해 결정됩니다. 이를 구현하기 위해 앞으로 이동(forward), 뒤로 이동(backward), 왼쪽으로 이동(left), 오른쪽으로 이동(right) 등의 방향을 나타내는 변수들을 설정하고, 이를 벡터(Vector)로 변환하여 사용했습니다. 

이동에 사용된 주요 벡터는 frontVector와 sideVector입니다. frontVector는 앞뒤 이동을 담당하고, sideVector는 좌우 이동을 담당합니다. 최종 이동 방향인 direction은 frontVector와 sideVector를 합친 후, 이를 정규화(normalize)하여 주어진 이동 속도와 카메라의 회전 방향을 반영하여 계산됩니다.

- 플레이어 이동 계산
```jsx
import { MOVE_SPEED } from "../../utils/constants";

// 프레임 업데이트마다 플레이어의 위치와 이동 방향을 계산
useFrame((state) => {
  const { forward, backward, left, right } = usePlayerControl();

  const frontVector = new THREE.Vector3(0, 0, backward - forward);
  const sideVector = new THREE.Vector3(left - right, 0, 0);
  direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED).applyEuler(state.camera.rotation);

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
</br>

## 1-2 물체를 이용한 드래그 앤 드롭 기능은 어떻게 구현할 수 있을까?

<details><summary>드래그 앤 드롭 영상</summary>
<p align="center"> 
<img width="700" alt="drag-drop" src="https://github.com/howinteraction/interaction/assets/126459089/a8624c0d-6376-49dd-9572-f6c9b04f823a">
</p>
</details>
</br>

#### 1. 초기 드래그 구현 시행착오
초기 개발 단계에서 드래그를 어떤 방식으로 구현할 수 있을지 여러 방법을 직접 비교해가며 결정했습니다.
| 방법                              | 장점                                                                                     | 단점                                                                                                  |
|---------------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| *HTML5 Drag and Drop API*      | - 브라우저에 기본적으로 내장되어 있어 추가 라이브러리나 프레임워크 없이 사용할 수 있었습니다.<br>- HTML 요소의 드래그 앤 드롭을 쉽게 구현할 수 있었습니다. | - 2D 평면 상에서의 드래그 앤 드롭 기능만 제공하여 3D 드래그에는 적합하지 않았습니다.<br>- 커스터마이징이 제한적이며 복잡한 상호작용을 구현하기 어려웠습니다. |
| *React DnD (Drag and Drop) 라이브러리* | - React와 잘 통합되며, 다양한 드래그 앤 드롭 시나리오를 쉽게 구현할 수 있었습니다.<br>- 커스터마이징 가능성이 높고, 드래그 소스와 드롭 타겟을 정의하기 쉬웠습니다. | - 주로 2D 드래그 앤 드롭을 지원하며, 3D 공간에서의 드래그 구현에는 추가 작업이 필요했습니다.                                           |
| *use-gesture 라이브러리의 useDrag 훅* | - React Hook 형태로 제공되어 React와 쉽게 통합할 수 있었습니다.<br>- 사용이 간편하며, 직관적인 API를 제공했습니다. | - 주로 2D 평면 상의 좌표를 제공하여 3D 드래그 구현에는 제한이 있었습니다.<br>- 3D 드래그 앤 드롭 기능을 완전히 지원하지 않으므로 추가 구현이 필요했습니다.  |

그 중 `use-gesture` 라이브러리의 `useDrag` 훅을 사용해서 컴포넌트를 드래그 할 수 있는 방식을 채택했습니다.
- useDrag를 사용한 드래그 테스트 영상
<p align="center">
<img width="700" alt="first-drag-drop" src="https://github.com/howinteraction/interaction/assets/116258834/784150ac-e339-423b-8a51-ccde25335210">
</p>

##### 문제점
초기 개발 단계에서 드래그를 어떤 방식으로 구현할 수 있을지 여러 방법을 모색해 보았고, 그 중 "use-gesture" 라이브러리의 useDrag 훅을 사용해서 컴포넌트를 드래그 할 수 있는 방식을 채택했었습니다. 그러나 useDrag의 드래그 방식은 Interaction 게임에서 필요로 하는 3D 드래그를 구현하는데 제약사항이 있었습니다.
##### 원인
useDrag 훅은 드래그 시, 마우스 포인터의 좌표들이 x, y축 2D 평면 상에서의 좌표만 제공해주었습니다. 하지만 Interaction 게임은 3D 상에서의 드래그 좌표들(x, y축 그리고 z축)이 필요했습니다.
##### 해결방법
rapier 물리엔진을 이용하여 드래그 기능을 직접 구현하기로 결정했습니다. 물리 엔진과 Three.js를 사용하여 3D 드래그 기능을 구현했습니다.

</br>

#### 2. 드래그 직접 구현

드래그 앤 드롭 기능은 게임에서 물체를 마우스로 클릭하고 움직일 수 있게 해주는 게임 플레이에 매우 중요한 기능입니다. 저희는 여러 단계를 통해 이 기능을 구현하였습니다.

- **드래그 앤 드롭을 도식화한 다이어그램**
<p align="center">
<img width="300" height="600" alt="스크린샷 2024-05-10 오후 4 35 28" src="https://github.com/howinteraction/interaction/assets/116258834/ed40d2a0-1aed-4412-9e00-93163e05dfb6">
</p>

1. **물리 엔진 사용**: 게임에서 물체가 어떻게 움직이고 상호작용할지 계산하는 것은 매우 복잡했습니다. 이를 위해, 저희는 처음부터 물리 법칙을 다시 만드는 대신 이미 만들어진 ‘rapier’라는 물리엔진 라이브러리를 사용하기로 결정했습니다. 이 라이브러리는 물체의 움직임을 자연스럽게 계산해줍니다.

</br>

2. **가상의 선을 사용해 물체 잡기**: 플레이어가 게임 내에서 마우스로 물체를 클릭하면,카메라 위치에서 마우스 커서가 가리키는 방향으로 가상의 선(ray)을 발사합니다. 이 선이 게임 내의 물체와 교차하면 해당 물체를 선택할 수 있습니다. 이 과정을 ‘raycasting’이라고 합니다.

- 설명을 위한 예시 코드
```jsx
import * as THREE from 'three';

// 마우스 클릭 시 raycasting을 사용해 물체를 선택하는 이벤트 핸들러입니다.
useEffect(() => {
  const handleClick = () => {
    const origin = new THREE.Vector3().copy(camera.position);
    const direction = new THREE.Vector3();

    camera.getWorldDirection(direction);

    const originOffset = 2;
    const maxToi = 100;
    const ray = new RAPIER.Ray(origin.add(direction.multiplyScalar(originOffset)), direction);
    const castRay = world.castRay(ray, maxToi, true);

    if (castRay) {
      const selectedRigidBody = world.getRigidBody(castRay.collider.parent().handle);
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
  <img width="500" alt="스크린샷 2024-04-08 20 41 35" src="https://github.com/howinteraction/interaction/assets/126459089/59754129-34d6-4a78-9bb3-1fe4f8f37902">
</p>

드래그 중 물체의 위치를 계속 업데이트 해주기 위한 새로운 위치는 위의 수식처럼 현재 카메라 위치에 카메라 방향 벡터와 초기 거리를 곱한 값을 더하여 계산합니다. 이동중에는 잠시 중력의 영향을 받지 않도록 해주어 자연스럽게 이동하도록 했습니다.

- 설명을 위한 예시 코드
```jsx
// 선택된 물체를 마우스 이동에 따라 드래그하는 로직입니다.
useFrame(() => {
  if (selectedHandle && isDragging) {
    const direction = new THREE.Vector3();

    camera.getWorldDirection(direction);

    const newPosition = direction.multiplyScalar(initialDistance).add(camera.position);
    const adjustedPosition = restrictPosition(newPosition, minX, maxX, clickedPosition.y, maxY, minZ, maxZ);

    world.getRigidBody(selectedHandle).setTranslation(adjustedPosition, true);
  }
});
```
</br>

4. **드래그 종료 및 물체 놓기**: 플레이어가 마우스로 물체를 한번 더 클릭하면, 드래그가 종료됩니다. 이때, 물체는 다시 중력의 영향을 받아 자연스럽게 바닥으로 떨어집니다.

- 설명을 위한 예시 코드
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

이렇게 드래그 앤 드롭 기능은 게임 내에서 물체를 손쉽게 움직이고 조작할 수 있게해서 게임의 재미와 몰입감을 향상시켰습니다. 이 기능을 통해 플레이어는 게임 세계와의 상호작용을 더욱 직관적으로 경험할 수 있습니다.

<br>

## 1-3 게임을 플레이 하는 시나리오 외에도 랭킹 등의 기능들을 웹/앱에 어떻게 녹이고, 유저가 게임 흐름을 어떻게 가져가게 할 것 인가?

웹에서 플레이하며 어떻게 최대한 자연스럽게 유저가 게임을 플레이하는 것처럼 몰입감을 주고, 웹 게임에서 그치지 않고 하나의 작업물로 평가받을 수 있을까 라는 고민들을 많이 해보았습니다.

그렇기에 저희 프로젝트와 비슷한 카테고리의 게임들을 잠깐이나마 플레이 해보고 플레이 영상들을 직접 보며 취할 것들은 취하며 게임적인 요소들을 어떻게 저희 프로젝트에 녹일 수 있는지 참고하였습니다.

우선 스테이지 중간중간에 로딩 컴포넌트를 삽입했고 플레이어가 어떻게 게임을 플레이 해야하는지 조작법이나 스테이지의 간단한 설명 등을 기재해 두었습니다. 해당 로딩 화면을 보고 어떻게 클리어해야 하는지 힌트를 주고, 배경음악등을 삽입해 실제로 몰입감을 줄 수 있도록 하였습니다.

또한 구현된 스테이지 까지 모두 클리어하게 되면 앞서 받았던 유저 이름을 이용한 플레이 타임을 기록한 테이블이 나오게 됩니다. 플레이타임을 시간 순으로 정렬해 빠르게 클리어한 순위로 나열 후 렌더링 하였으며, 추후 플레이어들끼리의 경쟁요소로 사용하기 위해 제작하였습니다.

<br>

## 2. 각 스테이지 별 기능

각 스테이지에 들어가는 기능들에 대한 기술적 챌린지 입니다.

<br>

## 2-1 물체가 커지고 작아지는 원근법 기능은 어떻게 구현할 수 있을까?

<details><summary>원근법 착시 기능 영상</summary>

<p align="center">
<img width="700" alt="perspective" src="https://github.com/howinteraction/interaction/assets/126459089/409e3e41-cb15-4ef3-bf21-640398add94a">
</p>

</details>
<br>

스테이지1 에서의 원근법 착시 기능은 플레이어, 물체, 그리고 물체와 벽 사이의 거리를 고려하여 물체의 크기 조절 기능을 구현하였고, 이를 ‘원근법 착시’라는 이름으로 명명했습니다.

플레이어가 물체를 선택하면, 먼저 카메라와 물체 사이의 초기 거리와 초기 크기를 기록합니다. 그 후, 카메라에서 물체로의 방향 vector와 플레이어가 물체를 드래그하는 동안의 거리 변화를 감지하여 물체의 새 위치를 계산하고, 물체의 새 크기(scale)는 초기 거리와 현재 거리의 비율에 따라 조절됩니다.

이러한 방식으로 구현함으로써 플레이어에게 실시간으로 원근감을 제공하였습니다.

<br>
<br>

<p align="center">
  <img width="500" alt="스크린샷 2024-04-08 20 41 44" src="https://github.com/howinteraction/interaction/assets/126459089/015d9a04-2704-4134-87cb-867cf7b3aa66">
</p>

<br>

## 2-2 물체들이 바뀌는 착시 기능은 어떻게 구현할 수 있을까?

<details><summary>분리된 물체 착시 기능 영상</summary>

<p align="center">
<img width="700" alt="separate-illusion" src="https://github.com/howinteraction/interaction/assets/126459089/ea84902c-1a87-47f3-a005-0574b5ded556">
</p>

</details>

<br>

<details><summary>2D사진 -> 3D물체 착시기능 영상</summary>

<p align="center">
<img width="700" alt="2d-3d-illusion" src="https://github.com/howinteraction/interaction/assets/126459089/b1b58dae-509f-4363-8a24-f3b3c1b0f2e8">
</p>
<p align="center">
<img width="700" alt="2d-3d-illusion" src="https://github.com/howinteraction/interaction/assets/126459089/c4874999-5322-4bfa-94ac-8f088add9486">
</p>

</details>

<br>
<br>

게임 내에서 **비주얼 착시**라는 독특한 기능은 플레이어가 스테이지2를 클리어하는 데에 핵심적인 역할을 합니다.

이 기능을 통해 플레이어는 분리된 물체의 조각들을 하나의 완전한 3D 물체로 복원할 수 있습니다. 이 과정은 카메라의 시점과 회전 각도를 조절하여, 물체가 온전하게 맞물리는 특정 시점을 찾는 것에 주안점을 두었습니다.

먼저 react-three/fiber 라이브러리의 useThree 훅을 사용하여 camera 객체를 생성하였습니다. camera 객체의 특성중 **position**은 카메라의 위치, **rotation**은 카메라가 바라보는 방향과 관련이 있다는 것을 알게 되었습니다. 그리고 분리된 지점을 연결하여 얻은 벡터값을 camera 객체처럼 표현할 수 있다면 분리된 지점의 좌표 정보만으로도 착시효과를 일으키는 시야각을 계산해 낼 수 있다는 결론을 도출하였습니다.

1. **카메라 회전의 이해**: 게임 내에서 카메라의 회전은 플레이어가 바라보는 방향을 결정합니다. 이 회전은 x, y, z축을 따라 설정되며, 각 축에 대한 회전 각도를 오일러 각도라고 합니다. 오일러 각도는 카메라가 어떻게 기울어져 있는지를 나타내는 각도입니다.

2. **라디안 단위의 적용**: 카메라의 회전 각도는 라디안이라는 단위로 측정됩니다. 라디안은 각도를 수치화하는 방법 중 하나로, 플레이어가 카메라를 정확한 방향으로 조정할 수 있도록 도와줍니다.

<p align="center">
  <img width="359" alt="스크린샷 2024-04-08 20 42 05" src="https://github.com/howinteraction/interaction/assets/126459089/8210cf9f-9432-484b-bccb-0305e17da331">
  <img width="359" alt="스크린샷 2024-04-08 20 42 13" src="https://github.com/howinteraction/interaction/assets/126459089/ea24a568-82bf-4231-8a00-6a8231b29ef0">
</p>

3. **완벽한 맞물림 찾기**: 플레이어는 게임에서 특정 위치에서 카메라를 조작하여, 분리된 물체 조각들이 완벽하게 맞물리는 시점을 찾아야 합니다. 이는 카메라를 조금씩 회전시키며, 조각들이 하나의 완전한 물체로 보이는 순간을 포착하는 것을 의미합니다.

4. **오차 범위 조정**: 물체의 조각들이 완전히 일치하도록, 카메라의 위치와 각도에 따른 오차 범위를 조정합니다. 오차 범위는 `_CAMERA_POSITION`, `_CAMERA_ROTATION` 라는 변수명으로 분리된 지점의 좌표에 대한 최소값, 최대값을 상수화하였습니다. 이를 통해 플레이어는 물체를 정확히 맞추고, 온전한 3D 물체로 바꿀 수 있습니다.


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

5. **2D사진 -> 3D물체 착시 기능**: 스테이지3에서 사용된 이 기능은 앞서 사용한 메인 기능들을 종합해서 물체의 상태를 바꾸는 착시 현상입니다. 플레이어가 스테이지3을 클리어 하기 위해선 어떤 구간에서 어느 물체가 필요한지 예상해서 드래그 앤 드롭 기능으로 2D 물체를 잡은 후 다시 클릭해서 드롭하게 된다면 2D 사진의 상태가 변화하면서 3D 물체로 바뀌게 됩니다.

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
