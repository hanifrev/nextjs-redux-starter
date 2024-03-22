import fetcher from '@/common/utils/fetcher';
import ExampleClientComponent from '@/modules/ExampleClientComponent/page';

export default async function Home() {
  const getData = await fetcher<any, any>({
    path: '/users',
    isExternal: true,
  });

  console.log(getData);

  return <ExampleClientComponent />;
}
