# 의미 있는 commit

다들 TDD 싸이클이 익숙해지신 것 같으니, 굳이 RED GREEN REFACTOR에 강박적으로 맞춰서 commit을 억지로 나누실 필요가 없습니다.

실제 프로젝트에선 지금과 같이 commit을 나누면 작업의 의미를 파악하기 어려워서 리뷰를 하는 사람도, 리뷰를 받는 사람도 힘든 상황이 올 겁니다.

지금까진 훈련을 위해 의식적으로 TDD 싸이클을 강제했었을 뿐이죠.

그렇다면 이제는 의미있는 커밋 메시지 작성을 훈련해보세요. ‘왜’ 이 작업을 했는지 커밋 메시지에 충분히 드러나야 합니다.

<https://github.com/microprotect/microprotect.com/pull/179> 에서 좋은 예시를 볼 수 있습니다.

closed pull request 목록(<https://github.com/microprotect/microprotect.com/pulls?q=is:pr+is:closed>) 을 보시면 참고하실 부분이 많을 겁니다. 변화 내용을 하나 하나 적을 필요는 없습니다. file changes를 통해 파악할 수 있는 부분이 많기 때문이죠. file changes를 통해 파악할 수 없는 부분은 작업 의도입니다. 내가 이 작업을 왜 했는지를 반드시 나타내주세요!
