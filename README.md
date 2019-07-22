# project_03

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# vue_practice01

###내가 정리한 vue
```
0. git remote repository 연결 시
    git repository의 프로젝트가 생성될 상위 경로에서
    $ git clone https://github.com/alsandwls1/vue_practice01.git
    
    node_modules를 설치
    $ npm install

    서버실행
    $ npm run serve

1. App.vue 
    router-link와 router-view 태그가 있음.
2. 화면에 관련한 컴포넌트는 view 폴더에 생성
    Home.vue  : HelloWorld.vue가 import되어 export되어 태그로 사용됨.
    About.vue 
3. main.js 
    렌더링 작업이 실행
4. router.js
    vue-router를 import하여 vue가 use함(Vue.use(Router))
    Router인스턴스를 새로 생성하여 mode는 history로 base는 무슨역할인지 모르겠고,
        routes를 배열로 생성하여 Object(path, name, component)를 입력
        -> 입력된 패스로 router-link에 입력하면 해당 컴포넌트가 router-view에 나타남
```
