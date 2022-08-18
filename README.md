# 채용 공고 등록 및 지원 시스템
> 원티드 프리온보딩 백엔드 코스 사전과제 입니다.



<br />

회사에서는 채용 공고의 등록, 수정, 삭제가 가능합니다.

지원자는 모든 채용 공고를 불러오거나,

'Python', '백엔드' 등 특정 키워드로 검색할 수 있습니다. 

그 중 관심 있는 채용 공고는 상세 내용 & 동일 회사의 다른 공고 리스트를 확인할 수 있습니다.

하나의 채용 공고에 대해 한 번만 지원할 수 있습니다.

<br />
<br />

# 테스트 방법

실행:

```sh
yarn
npm run debug
```

<br />

swagger:
[http://localhost:9000/docs](http://localhost:9000/docs)

<br />
<br />


# 사용 예제

## 1. 회사
### 1.1 등록 (POST)
Request URL : `http://localhost:9000/company/add`

Request Body Example : 
``` javascript
{
  "name":"가시",
  "contry":"한국",
  "region":"서울"
}
```

Resonse Example(등록된 회사 목록) : 
``` javascript
[
    {
        "id": 1,
        "name": "가시",
        "contry": "한국",
        "region": "서울"
    },
    ...
]
```

<br />

### 1.2 목록 보기 (GET)
Request URL : `http://localhost:9000/company/all`

Resonse Example : 
``` javascript
[
  {
    "id": 1,
    "name": "가시",
    "contry": "한국",
    "region": "서울"
  },
  ...
]
```

<br />
<br />

## 2. 채용 공고
### 2.1 등록 (POST)
Request URL : `http://localhost:9000/post/add`

Request Body Example:
``` javascript
{
  "name":"너랑나",
  "contry":"태국",
  "region":"방콕"
}
```

Response Example :
``` javascript
{
  "identifiers": [
    {
      "id": 5
    }
  ],
  "generatedMaps": [
    {
      "id": 5
    }
  ],
  "raw": [
    {
      "id": 5
    }
  ]
}`
```


<br />

### 2.2 목록 보기 (GET)
Request URL : `http://localhost:9000/post/all`

Resonse Example : 
```javascript
[
  {
    "id": 7,
    "shop_name": "원티드",
    "contry": "한국",
    "region": "서울",
    "pos": "백엔드",
    "price": 500,
    "tech": "Nest.js"
  },
  ...
]
```

<br />

### 2.3 검색 (GET)
Request URL : `http://localhost:9000/post?search={search}`

Resonse Example(search : '백엔드') : 
``` javascript
[
  {
    "id": 11,
    "shop_name": "원티드",
    "contry": "한국",
    "region": "서울",
    "pos": "백엔드",
    "price": 2020,
    "tech": "Python"
  },
  {
    "id": 7,
    "shop_name": "원티드",
    "contry": "한국",
    "region": "서울",
    "pos": "백엔드",
    "price": 500,
    "tech": "Nest.js"
  },
  ...
]
```

<br />

### 2.4 채용 공고 상세 (GET)
Request URL : `http://localhost:9000/post/{post_id}`

Resonse Example : 
``` javascript
{
  "id": 7,
  "shop_name": "원티드",
  "contry": "한국",
  "region": "서울",
  "pos": "백엔드",
  "price": 500,
  "tech": "Nest.js",
  "content": "내용입니다.",
  "others": [
    7,
    11
  ]
}
```

<br />

### 2.4 수정 및 삭제 (PUT, DELETE)
Request URL : `http://localhost:9000/post/{post_id}`

[수정] Request Body Example : 
``` javascript
{
  "pos":"DevOps",
  "price":0,
  "content":"수정된 내용입니다.",
  "tech":"Scala"
}
```

[수정] Resonse Example : `수정되었습니다. | 존재하지 않는 공고입니다.`

[삭제] Resonse Example : `삭제되었습니다. | 존재하지 않는 공고입니다.`

<br />
<br />

## 3. 사용자
### 3.1 지원 (POST)
Request URL : `http://localhost:9000/user/apply`

Request Body Example : 
``` javascript
{"id":1,"post_id":"4"}
```
Resonse Example : `지원되었습니다. | 이미 지원한 공고입니다.`

<br />
<br />

# 정보

나소현 – shna231@google.com

MIT 라이센스를 준수합니다.

<br />
<br />

# 기여 방법

1. (<https://github.com/yourname/yourproject/fork>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.