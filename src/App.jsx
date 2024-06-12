import Accordion from "./component/Accordion/Accordion";
import TicTacToeGame from "./component/TicTacToeGame/TicTacToeGame";

export default function App() {
  const Array = [
    {
      title: "title",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.",
      id: 1,
    },
    {
      title: "title",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.",
      id: 2,
    },
    {
      title: "title",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure.",
      id: 3,
    },
    {
      title: "title",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.",
      id: 4,
    },
    {
      title: "title",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.",
      id: 5,
    },
    {
      title: "title",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.",
      id: 6,
    },
    {
      title: "title",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.",
      id: 7,
    },
    {
      title: "title",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere adipisci beatae dignissimos similique consectetur iure. Deleniti voluptas architecto nobis? Perferendis eveniet quod ducimus magnam assumenda quo accusantium repellendus placeat.",
      id: 8,
    },
  ];

  return (
    <>
      <TicTacToeGame/>
      <Accordion infoArray={Array} />
    </>
  );
}
