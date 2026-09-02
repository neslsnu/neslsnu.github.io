# NESL 홈페이지

서울대학교 항법전자시스템연구실(Navigation and Electronics System Lab) 홈페이지입니다.

기존 `nesl.snu.ac.kr` 사이트가 내려간 뒤, 공개 웹 아카이브에 남은 자료를 근거로
정적 사이트로 다시 만들고 있습니다. GitHub Pages로 배포합니다.

## 현재 상태

- [x] 아카이브 자료 수집 (Wayback Machine 기준, 중복 제거 296개 원본 보존)
- [x] 대문(첫 화면) 정적 복구 — 히어로 슬라이더, 반응형, 접근성 처리 포함
- [x] RESEARCH — 4개 분야, 본문 12개 항목 중 12개 복구
- [x] LECTURE — 5개 과목 전부 복구
- [ ] PUBLICATION 하위 페이지
- [ ] MEMBER 페이지
- [ ] PROJECT / BBS / LINK 페이지

상단 메뉴 8개 중 아직 개별 페이지가 없는 항목은 클릭 시 안내 메시지를 표시합니다.

### 복구하지 못한 부분

아카이브에 캡처가 남아 있지 않아 되살리지 못한 자료입니다.

- RESEARCH 하위 4개 항목(HW Redundant Algorithm, Analytic Algorithm,
  Unscented Kalman Filter, Particle Filter) — 메뉴 구성에만 존재가 확인됩니다.
- 본문에 실려 있던 도표 28장 — 위치와 설명만 남기고 자리 표시로 대체했습니다.

## 구성

```
index.html      대문
research/       연구 분야 (개요 + 4개 분야 페이지)
lecture/        강의 (5개 과목)
styles.css      전체 스타일
script.js       슬라이더·메뉴·안내 메시지
assets/images/  아카이브에서 복원한 이미지
```

## 로컬에서 확인하기

정적 파일이라 별도 빌드가 필요 없습니다.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000` 으로 접속합니다.

## 아카이브 원본 자료

수집한 아카이브 원본(`reference/`)과 작업 중 캡처한 확인용 스크린샷(`verification/`)은
저장소 용량과 배포 범위를 고려해 커밋에서 제외했습니다.
복구 근거 자료가 필요하면 작업자에게 문의해 주세요.

## 출처

- Internet Archive Wayback Machine — 주요 출처
- Common Crawl, Arquivo.pt — 대조 확인

복구본이며 원본 서버 코드나 데이터베이스를 그대로 되살린 것은 아닙니다.
구성원·논문 등 최신 정보는 연구실에서 직접 갱신해야 합니다.
