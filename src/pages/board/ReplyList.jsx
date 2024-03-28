import useCustomAxios from "@hooks/useCustomAxios.mjs";
import ReplyItem from "@pages/board/ReplyItem";
import ReplyNew from "@pages/board/ReplyNew";
import { useParams } from "react-router-dom";
import { useInfiniteQuery } from '@tanstack/react-query';


// import { useEffect, useState } from "react";

function ReplyList(){

  const axios = useCustomAxios();
  const { _id } = useParams();


  // const [data, setData] = useState(null);

  // const fetchList = async () => {
  //   const res = await axios.get(`/posts/${ _id }/replies`, { params: { sort: JSON.stringify({ _id: -1 }) } });
  //   setData(res.data);
  // }

  // useEffect(() => {
  //   fetchList();
  // }, []);


  const { data } = useInfiniteQuery({
    queryKey: ['posts', _id, 'replies'],
    queryFn: ({ pageParam=1 }) => axios.get(`/posts/${ _id }/replies?delay=3000`, { params: { page: pageParam, limit: import.meta.env.VITE_REPLY, sort: JSON.stringify({ _id: -1 }) } }),
    select: response => response.data,
    // refetchInterval: 1000

    // 마지막 페이지와 함께 전체 페이지 목록을 받아서 queryFn에 전달할 pageParam 값을 리턴하도록 구현한다.
    // false를 리턴하면 더 이상 queryFn이 호출되지 않고 무한 스크롤 종료
    getNextPageParam: (lastPage, allPage) => {
      console.log(lastPage, allPage);
      // const totalPage = lastPage.data
      return 2;
    }
  });

  const list = data?.item.map(item => <ReplyItem key={ item._id } item={ item } />);

  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 { list?.length || 0 }개</h4>
      { list }

      <ReplyNew />

    </section>
  );
}

export default ReplyList;