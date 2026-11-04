# SAP POU1

SAPUI5 기반 SAP Fiori freestyle 기본 프로젝트입니다. SAP의 Basic 템플릿 구조를 바탕으로 XML View, Controller, Component, 라우팅 및 다국어 리소스를 구성했습니다.

## 개발 환경

- Node.js 22 이상 (현재 구성은 Node.js 24에서도 검증)
- npm 8 이상
- SAPUI5 1.154.0 / UI5 CLI 4.0.71

## 실행

```powershell
cd "$env:USERPROFILE\Desktop\SAP_POU1"
npm ci
npm start
```

브라우저에서 http://localhost:8080/index.html 이 열립니다. 최초 실행 시 UI5 CLI가 SAPUI5 라이브러리를 다운로드하므로 인터넷 연결이 필요합니다. 서버를 종료하려면 터미널에서 `Ctrl+C`를 누르세요.

## 빌드

```powershell
npm run build
```

결과는 `dist/`에 생성됩니다. 배포 환경에서는 SAPUI5 리소스를 제공하도록 설정해야 합니다.

## 프로젝트 구조

```text
webapp/
  Component.js               # 컴포넌트 초기화 및 라우팅
  manifest.json              # 앱 정보, 모델, 라우트, Launchpad intent
  index.html                 # 독립 실행 진입점
  controller/                # 화면 이벤트 처리
  view/                      # XML 화면
  model/                     # 디바이스 모델
  i18n/                      # 영어 기본 / 한국어 번역
  css/                       # 앱 스타일
ui5.yaml                     # SAPUI5 라이브러리 및 빌드 설정
```

기본 화면의 **시작하기 / Get started** 버튼으로 이벤트 동작을 확인할 수 있습니다. `?sap-ui-language=ko` 또는 `?sap-ui-language=en`으로 표시 언어를 선택할 수 있습니다.

현재 앱은 백엔드 없이 실행됩니다. SAP OData 서비스 연결과 ABAP/BTP 배포 설정은 대상 시스템 정보에 맞게 추가하세요. `manifest.json`에는 향후 Fiori Launchpad 연결에 사용할 `SAPPOU1-display` intent가 정의되어 있습니다.

저장소: https://github.com/shinwokkang/SAP_POU1

템플릿 참고: https://github.com/SAP/open-ux-tools/tree/main/packages/fiori-freestyle-writer
