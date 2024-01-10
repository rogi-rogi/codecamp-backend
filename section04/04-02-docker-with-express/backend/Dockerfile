# 컴퓨터 만드는 설명서

# 빌드 명령어(이미지 생성) : docker build . 
# image 확인 : docker images
# 현재 프로세스 확인 : docker ps
# 도커 실행 : docker run [이미지ID]
# 도커 종료 : docker stop [컨테이너ID]
# 컨테이너 내부 접속 : docker exex -it [컨테이너ID] /bin/bash
# 포트포워딩 : docker run -p [컴퓨터포트]:[도커내부이미지포트,3000] [이미지ID]

# 1. 운영체제 설치(node 14버전과 npm과 yarn이 모두 설치되어있는 리눅스)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY . /myfolder/
WORKDIR /myfolder/
RUN yarn install


# 3. 도커안에서 index.js 실행시키기
CMD yarn start:dev