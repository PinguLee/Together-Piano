# Together Piano
## 설명
온라인에서 피아노를 연주 하고 소통할 수 있는 웹 애플리케이션

## 사용 기술과 그 이유
### Node.js
- 비동기식 입출력 처리를 지원하여, 동시에 많은 연결을 처리할 수 있습니다. 따라서 여러 유저들이 동시에 이용하는 피아노 커뮤니케이션 서비스인 만큼 대기하지 않고 여러 작업을 동시에 처리하기 위해 채택했습니다.
- Windows, macOS, Linux 등 다양한 플랫폼에서 실행될 수 있습니다. 이 3가지 운영체제를 모두 사용하기 때문에 채택했습니다.
### Express.js
- Node.js 위에서 동작하며, Node.js의 비동기 및 이벤트 기반 모델을 활용할 수 있습니다. Node.js를 사용하는 서비스이기 때문에 높은 성능과 확장성을 제공하기 위해 채택했습니다.
- RESTful API를 쉽게 구축할 수 있도록 도와주는 다양한 기능을 제공하는데 이는 클라이언트와 서버 간의 효율적인 통신을 가능케 합니다. 유저들간 소통이 중요한 서비스이기 때문에 채택했습니다.
- 모듈성이 뛰어나며, 다른 패키지와 함께 사용하기 용이합니다. 
- 라우팅 기능을 제공하여 어플리케이션의 엔드포인트를 손쉽게 관리할 수 있습니다. 이를 통해 URL과 해당하는 함수 간의 매핑을 쉽게 설정할 수 있습니다. Together Piano 개발 초창기에는 fs moudule을 사용하여 정적 웹 페이지를 제공했으나, 코드의 양이 방대해져 간결성을 위해 채택했습니다.
### Socket.IO
- Together Piano 개발 초창기 http 통신 방식인 XMLHttpRequest, Fetch API, Axios, AJAX를 각각 사용해봤습니다. 클라이언트가 서버에게 요청을 보내고, 서버가 응답을 보내는 '단방향'통신이기에 상태를 유지하지 않아 실시간 데이터를 전송해야하는 서비스의 취지에 맞지 않다 판단했습니다. 따라서 양방향 통신이 가능한 Socket 통신을 사용하기로 했습니다.  
먼저 WebSocket을 사용하였습니다. 하지만 Together Piano는 서버에서 연결된 소켓(사용자)들을 세밀하게 관리해야하는 서비스이기 때문에 Broadcasting 기능이 있는 Socket.IO을 쓰는게 유지보수 측면에서 훨씬 이점이 많다고 판단하여 채택했습니다.
### ECMAScript
- 비동기적으로 모듈을 로딩하기 때문에 브라우저 환경에서 성능을 향상시키는 데 도움이 됩니다. Together Piano는 실시간 통신을 해야하는 서비스이기 때문에 채택했습니다.
- 정적 분석이 가능하므로, 런타임 이전에 불필요한 코드를 제거하고 최적화하는 데 도움이 됩니다.
- JavaScript 생태계는 계속 발전하고 있으며, 새로운 프로젝트는 주로 ESM을 선택하고 있습니다. 새로운 기능과 향상된 생산성을 위해 미래를 대비하는 것이 중요하다 생각되어 채택했습니다.
### Typescript
- 변수, 함수, 객체 등에 타입을 명시할 수 있습니다. 이는 코드의 가독성을 높이고 디버깅을 용이하게 만듭니다. 정적 타입 검사를 통해 런타임 오류를 사전에 방지할 수 있어 안정성이 향상되기에 채택했습니다.
- TypeScript 에디터는 코드 어시스트와 자동 완성을 지원하여 개발자가 빠르게 코드를 작성하고 API를 사용할 수 있도록 도와주기 때문에 개발 생산성을 향상시키기 위해 채택했습니다.
- 최신 ECMAScript 기능을 지원하기 때문에 ECMAScript 방식을 사용하는 Together Piano는 타입스크립트를 사용하기 최적의 조건이라 판단하여 채택했습니다.
- 타입 정보를 기반으로 코드를 변경하면, 관련된 부분을 자동으로 업데이트하거나 오류를 사전에 감지할 수 있는 강력한 리팩터링 기능을 지원하기 때문에 보다 완벽한 서비스를 제공하기 위해 채택했습니다.
## 특징
## 진행 상황
## 개선점
## 참조
https://nodejs.org/  
https://expressjs.com/  
https://socket.io/  
https://developer.mozilla.org/ko/  
https://www.npmjs.com/  