# 개발 환경 구축

## Node.js

### What is Node.js

Node.js는 Chrome V8 JavaScript Engine으로 빌드된 JavaScript Runtime Environment입니다.

* 공식문서 : <https://nodejs.org/ko/about/>
  * 비동기 이벤트 주도 JavaScript 런타임
  * 확장성 있는 네트워크 애플리케이션을 만들 수 있도록 설계
* V8 : <https://v8.dev/>
  * V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++.
* Runtime : <https://ko.wikipedia.org/wiki/런타임>
  * **"런타임"**이라는 용어는 컴퓨터 언어 안에 쓰인 프로그램을 관리하기 위해 특정한 컴파일러나 가상 머신이 사용하는 기본 코드의 라이브러리나 프로그램을 가리키는 런타임 라이브러리라고도 일컫는다.
  * **런타임 환경**(영어: runtime environment)은 컴퓨터가 실행되는 동안 프로세스나 프로그램을 위한 소프트웨어 서비스를 제공하는 가상 머신의 상태이다. 운영 체제 자체에 속하는 경우도 있고 운영 체제에서 작동하는 소프트웨어를 뜻할 수도 있다.

### Install Node.js

## Create NPM Project

### What is NPM

NPM(Node Package Manager)은 Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공합니다.

* npm docs : <https://docs.npmjs.com/about-npm>
* blog about npm : <https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html>

### Add NPM Dependency

`devDependencies`

<https://docs.npmjs.com/cli/v8/configuring-npm/package-json#devdependencies>

## Install Webpack Dev Server

### What is Webpack Dev Server

왜 Webpack을 사용하는가?에 대한 답을 얻어내는데 초점을 두고 학습

* 웹팩 핸드북 : <https://joshua1988.github.io/webpack-guide/guide.html>
* JavaScript Modules
  * A background on modules : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules#a_background_on_modules>
  * JavaScript 표준 API 라이브러리 제작 그룹 CommonJS, AMD : <https://d2.naver.com/helloworld/12864>
    * CommonJS
      * JavaScript를 브라우저에서뿐만 아니라, *서버사이드* 애플리케이션이나 *데스크톱* 애플리케이션에서도 사용하려고 조직한 **자발적 워킹 그룹**
      * CommonJS의 'Common'은 JavaScript를 브라우저에서만 사용하는 언어가 아닌 **일반적인 범용 언어**로 사용할 수 있도록 하겠다는 의지를 나타내고 있는 것
      * CommonJS를 만든 목적이 서버사이드에서 JavaScript를 사용하는 것이었기 때문에 서버사이드 용으로 사용할 때에 장점이 많다.
    * AMD
      * Asynchronous Module Definition

## Webpack Dev Server

### Install and Execution

## Install and Configure ESLint

### What is ESLint

### Install and Configure
