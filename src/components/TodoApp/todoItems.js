import React from "react";
import TodoItem from "./todoItem";

const TodoItems = (props) => {
    const { itemdata, onCallback } = props;
    const changeItemTag = (e) => {
        let _item = { ...itemdata };
        _item.tag = e;
        onCallback("edit", _item);
    };
    const deleteItem = (e) => {
        let _item = { ...itemdata };
        onCallback("delete", _item);
    };
    const changeItemTitle = (e) => {
        onCallback("edit", e);
    };
    return (
        <div className="container">
            {["todo", "in-progress", "done", "review"].map((val, ind) =>
                val === itemdata.tag ? (
                    <TodoItem
                        key={ind}
                        itemData={itemdata}
                        onCallback={changeItemTitle}
                        onCallbackDelete={deleteItem}
                    />
                ) : (
                    <div className="tabitem" key={ind}>
                        <button
                            className="btn btn--join"
                            onClick={() => changeItemTag(val)}
                        >
                            Join
                        </button>
                    </div>
                )
            )}
        </div>
    );
};

export default TodoItems;
