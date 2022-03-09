import React, { useEffect, useState } from "react";

import "./scss/styled.scss";
import TodoItems from "./todoItems";

const TodoApp = () => {
    const randomID = () => (Math.random() * 100000) | 0;

    const [content, setContent] = useState({
        todos: {
            key: "todos",
            tickets: [
                {
                    uid: randomID(),
                    title: "this to do 1",
                },
            ],
        },
        inProgress: {
            key: "in-progress",
            tickets: [],
        },
        done: {
            key: "done",
            tickets: [],
        },
        needReview: {
            key: "need-review",
            tickets: [],
        },
    });

    const [inputText, setInputText] = useState("");
    const updateInput = (e) => {
        setInputText(e.target.value);
    };
    const [openAddItem, setAddItemStatus] = useState(false);

    const currentTime = () => {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        let today = new Date();
        return `${today.getDate()}-${
            months[today.getMonth()]
        }-${today.getFullYear()}`;
    };

    const changeColumn = (id, cur, tar) => {
        let _lists = { ...content },
            _cur = _lists[cur].tickets,
            _tar = _lists[tar].tickets;

        let _new = _cur.filter((e) => e.uid === id);
        _tar.push(..._new);

        content[cur].tickets = _cur.filter((e) => e.uid !== id);
        content[tar].tickets = _tar;
        setContent({ ...content });
    };
    const [itemIsEdit, setItemEditState] = useState(false);
    const [itemIsEditText, setItemEditTextState] = useState("");

    const deleteItem = (id, cur) => {
        content[cur].tickets = content[cur].tickets.filter((e) => e.uid !== id);
        setContent({ ...content });
    };
    const editItem = () => {
        setItemEditState(!itemIsEdit);
    };
    const editText = (e) => {
        setItemEditTextState(e.target.value);
    };
    const itemCommitEdit = (e) => {
        console.log(e);
    };

    const createNewItem = () => {
        const title = inputText;
        let _item = { uid: randomID(), title };
        content.todos.tickets = [...content.todos.tickets, _item];

        setInputText("");
        setContent({ ...content });
    };

    const CreateRow = (props) => {
        const { type, data } = props;
        switch (type) {
            case "todos": {
                return (
                    <div className="container">
                        <div className="tabitem">
                            {itemIsEdit ? (
                                <div>
                                    <input
                                        type="text"
                                        value={itemIsEditText}
                                        onChange={(e) => editText(e)}
                                    />
                                    <button
                                        onClick={() => itemCommitEdit(data.uid)}
                                    >
                                        ok
                                    </button>
                                </div>
                            ) : (
                                data.title
                            )}

                            <div className="cb-buttons">
                                <button
                                    className="btn btn-delete"
                                    onClick={() => deleteItem(data.uid, type)}
                                >
                                    delete
                                </button>

                                <button
                                    className="btn btn-edit"
                                    onClick={() => editItem()}
                                >
                                    edit
                                </button>
                            </div>
                        </div>
                        <div className="tabitem">
                            <button
                                className="btn btn-join"
                                onClick={() =>
                                    changeColumn(data.uid, type, "inProgress")
                                }
                            >
                                join
                            </button>
                        </div>
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "done")
                                }
                            >
                                join
                            </button>
                        </div>
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "needReview")
                                }
                            >
                                join
                            </button>
                        </div>
                    </div>
                );
                break;
            }

            case "inProgress": {
                return (
                    <div className="container">
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "todos")
                                }
                            >
                                join
                            </button>
                        </div>
                        <div className="tabitem"> {data.title}</div>
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "done")
                                }
                            >
                                join
                            </button>
                        </div>
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "needReview")
                                }
                            >
                                join
                            </button>
                        </div>
                    </div>
                );
                break;
            }

            case "done": {
                return (
                    <div className="container">
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "todos")
                                }
                            >
                                join
                            </button>
                        </div>
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "inProgress")
                                }
                            >
                                join
                            </button>
                        </div>
                        <div className="tabitem"> {data.title}</div>
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "needReview")
                                }
                            >
                                join
                            </button>
                        </div>
                    </div>
                );
                break;
            }

            case "needReview": {
                return (
                    <div className="container">
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "todos")
                                }
                            >
                                join
                            </button>
                        </div>
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "inProgress")
                                }
                            >
                                join
                            </button>
                        </div>{" "}
                        <div className="tabitem">
                            <button
                                onClick={() =>
                                    changeColumn(data.uid, type, "done")
                                }
                            >
                                join
                            </button>
                        </div>
                        <div className="tabitem"> {data.title}</div>
                    </div>
                );
                break;
            }

            default:
                return (
                    <>
                        <div className="tabitem"></div>
                        <div className="tabitem"></div>
                        <div className="tabitem"></div>
                        <div className="tabitem"></div>
                    </>
                );
                break;
        }
    };

    return (
        <>
            <div className="lists">
                <div className="container">
                    <div className="tabitem ">Todo</div>
                    <div className="tabitem ">In process</div>
                    <div className="tabitem ">Done</div>
                    <div className="tabitem ">Review</div>
                </div>
            </div>

            {/* {content.todos.tickets.map((item, i) => (
                <CreateRow key={i} type="todos" data={item} />
            ))} */}
            {/* {content.inProgress.tickets.map((item, i) => (
                <CreateRow key={i} type="inProgress" data={item} />
            ))}
            {content.done.tickets.map((item, i) => (
                <CreateRow key={i} type="done" data={item} />
            ))}
            {content.needReview.tickets.map((item, i) => (
                <CreateRow key={i} type="needReview" data={item} />
            ))}  */}
            {/* {["todos", "inProgress", "done", "needReview"].map((val) =>
                content[val].tickets.map((e, i) => (
                    <CreateRow key={i} type={val} data={e} />
                ))
            )} */}
            <TodoItems />
            <div>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => updateInput(e)}
                />
                <button onClick={() => createNewItem()}>ok</button>
            </div>
        </>
    );
};

export default TodoApp;
