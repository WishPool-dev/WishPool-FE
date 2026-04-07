# 🎁 WishPooL: 마음이 모여, 넘쳐 흐르는 곳
<div align="center"><img src="https://github.com/user-attachments/assets/76bd6881-b437-48cb-8867-f26279038a03" width="500"/></div>

---

## 🎁 WishPooL 서비스 소개

친구들과 함께 만드는 위시리스트로, **선물을 준비하는 과정을 편리하고 즐거운 경험**으로 만들어주는 서비스입니다. <br>
**생일자의 취향에 맞는 선물**을 고르는 과정에 집중하여, 생일자와 참여자 모두가 만족할 수 있는 선물 준비 경험을 제공합니다.

---

## 🔗 배포 링크
| | |
|---|---|
| 🌐 WishpooL 서비스 | [WishpoooL](https://wishpool.store) |
| **Frontend** Repository | [WishPool-FE](https://github.com/WishPool-dev/WishPool-FE) |
| **Backend** Repository | [WishPool-BE](https://github.com/WishPool-dev/WishPool-BE) |

---


## ✨ 주요 기능

### 위시풀 생성
한 사람이 대표로 위시풀을 생성합니다. 
<br> 선물을 함께 준비할 사람들에게 카카오톡 초대 링크를 공유합니다.

<div align="">
<img src="https://github.com/user-attachments/assets/985762e8-0f64-404f-b726-4ff4fd43ed1e" width="320"/>
<img src="https://github.com/user-attachments/assets/852aadf7-7411-48d8-9257-7f021fb426f9" width="320"/>
</div>
 

---

### 선물 제안
위시풀에서는 생일자에게 주고 싶은 선물을 자유롭게 제안할 수 있습니다.<br>
상품 이미지, 링크, 이름 정보를 포함하여 여러 개의 선물을 등록할 수 있습니다.
<div align="">
<img src="https://github.com/user-attachments/assets/0ff0d1c1-448e-4fc3-98fb-f020efe93d6b" width="320"/>
<img src="https://github.com/user-attachments/assets/8b26bf75-9339-4c4b-93f2-b683913ae3e3" width="320"/>
</div>

---

### 🎯 생일자 선물 선택

생일자는 친구들이 제안한 선물 중 취향에 맞지 않는 선물을 드래그로 제거하며 부담 없이 원하는 선물을 선택할 수 있습니다.
<div align="">
<img src="https://github.com/user-attachments/assets/3834eb8d-2a04-4548-a6ec-ae9dc6e9fd0c" width="320"/>
<img src="https://github.com/user-attachments/assets/b99ba069-778e-4408-bf9b-e5f4cb3efcdb" width="320"/>
</div>

---

## 🛠️ 기술 스택

### Frontend
- Next.js
- React
- TypeScript
- TanStack Query
- Tailwind CSS

### Tooling
- ESLint
- Prettier
- Husky

---

## 📂 프로젝트 구조

```text
src/
├─ api/          # API 요청 및 TanStack Query hooks
├─ components/   # 공통 UI 컴포넌트
├─ pages/        # 페이지 단위 컴포넌트
├─ styles/       # 스타일 및 디자인 토큰
├─ types/        # 공통 타입 정의
└─ utils/        # 공통 유틸 함수
