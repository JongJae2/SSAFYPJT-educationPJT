import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
  description: '문해력 학습 서비스 심심한 사과의 로그인 페이지',
};

export default function Page() {
  return <div className='bg-yellow-400'>로그인 페이지</div>;
}