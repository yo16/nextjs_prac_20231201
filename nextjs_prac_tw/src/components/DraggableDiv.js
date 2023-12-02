'use client';
import { useState } from "react";

// https://www.w3schools.com/howto/howto_js_draggable.asp
// https://www.delftstack.com/ja/howto/react/react-component-div-draggable/
export default function DraggableDiv(){
    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({});

    const _dragStart = (e) => {
        // drag start
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
        setDragging(true);
    };
    const _dragging = (e) => {
        if(dragging){
            setStyles({
                left: e.screenX - diffX,
                top: e.screenY - diffY
            });
        }
    };
    const _dragEnd = () => {
        setDragging(false);
    };

    return (
        <div
            className="absolute z-9 bg-gray-50 border border-solid border-gray-400 text-center"
            style={styles}
        >
            <div
                className="p-2 cursor-move z-10 bg-blue-600 text-white"
                onMouseDown={e => _dragStart(e)}
                onMouseMove={e => _dragging(e)}
                onMouseUp={() => _dragEnd()}
            >Click here to move</div>
            <p>Move</p>
            <p>this</p>
            <p>DIV</p>
        </div>
    );
}
