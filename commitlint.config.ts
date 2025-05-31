import type { UserConfig, Rule } from '@commitlint/types';

const footerIssueRequired: Rule = (parsed) => {
  const header = parsed.header ?? '';
  const hasIssue = /\(#\d+\)/.test(header);
  return hasIssue
    ? [true]
    : [false, '커밋 메시지에 이슈 번호 (#번호) 를 포함해야 합니다.'];
};

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 타입은 소문자만 허용
    'type-case': [2, 'always', 'lower-case'],

    // type 강제 목록 설정
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'refactor', 'style', 'test', 'chore', 'init'],
    ],

    // 타입, 메시지 필수
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],

    // 제목은 마침표로 끝나지 않게
    'subject-full-stop': [2, 'never', '.'],

    // 제목 길이는 100자 이내 권장
    'header-max-length': [2, 'always', 50],

    // 커밋 메시지에 (#숫자) 필수 ➡️ 커스텀 룰
    'footer-issue-required': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'footer-issue-required': footerIssueRequired,
      },
    },
  ],
};

export default config;
