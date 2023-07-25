import { useState } from "react";
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import Menù from "./img/menù.jpeg";

export const LikePhoto = () => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const toogleLike = () => {
        if (!like) {
            setLike(true);
            setCount(count + 1);
        } else {
            setLike(false);
            setCount(count - 1);
        }
    }

    return (
        <div className="container text-center">
            <h1 className="title">Like my photo</h1>
            <h2 className="subtitle">{`Likes ${count}`}</h2>
            <div className="card card-dark m-auto shadow-md"
                style={{ width: 300, cursor: "pointer" }}
            >
                <div className="card-header fs-xl d-flex">
                    <AiFillSmile className="mr-2" />
                    <small>Menù</small>
                </div>
                <img
                    src={Menù}
                    alt="img"
                    style={{ height: "fit-content" }}
                    onDoubleClick={toogleLike} />

                <div className="card-footer fs-xl d-flex"
                    style={{ justifyContent: "space-between" }}>
                    <AiOutlineComment /> {" "}
                    {like ? (
                        <AiFillHeart className="text-danger" onClick={toogleLike} />
                    ) : (
                        <AiOutlineHeart onClick={toogleLike} />
                    )}
                </div>
            </div>
        </div>
    )
}
