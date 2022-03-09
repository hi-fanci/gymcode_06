import React from "react";
import "./scss/styled.scss";
import TodoItems from "./todoItems";

const TodoApp = () => {
    const randomID = () => (Math.random() * 100000) | 0;
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

    const [todoLists, setTodoLists] = React.useState([
        {
            uid: randomID(),
            title: "lorem 123",
            tag: "todo",
            dateCreate: currentTime(),
        },
        {
            uid: randomID(),
            title: "no title",
            tag: "done",
            dateCreate: currentTime(),
        },
    ]);

    const [inputNewItem, setInputNewItem] = React.useState("");

    const onInputNewItemChange = (e) => {
        setInputNewItem(e.target.value);
    };

    const checkItemTitle = (e) => {
        if (e === "") {
            console.log("?");
            alert("Please enter content for ticket");
            return false;
        }
        if (!e || e.length <= 4) {
            alert("Please enter at least 4 characters!");
            return false;
        }

        return true;
    };
    const addNewItem = () => {
        let _check = checkItemTitle(inputNewItem);

        if (_check) {
            let _item = {
                uid: randomID(),
                title: inputNewItem,
                dateCreate: currentTime(),
                tag: "todo",
            };
            itemHandle("add", _item);
            setInputNewItem("");
        }
    };

    const itemHandle = (act, item) => {
        switch (act) {
            case "edit": {
                let _todoLists = [...todoLists];
                _todoLists.forEach((val, ind) => {
                    if (val.uid === item.uid) {
                        val.title = item.title;
                        val.tag = item.tag;
                    }
                });
                setTodoLists(_todoLists);

                break;
            }
            case "delete": {
                let _todoLists = todoLists.filter(
                    (val) => val.uid !== item.uid
                );
                setTodoLists(_todoLists);
                break;
            }
            case "add": {
                let _todoLists = [...todoLists, item];
                setTodoLists(_todoLists);
                break;
            }
            default:
                break;
        }
    };
    return (
        <div className="lists">
            <div className="group-inline add-new">
                <input
                    type="text"
                    onChange={(e) => onInputNewItemChange(e)}
                    value={inputNewItem}
                />
                <button className="btn btn--ok" onClick={() => addNewItem()}>
                    Ok
                </button>
            </div>
            <div className="container">
                <div className="tabitem none">Todo</div>
                <div className="tabitem none">In progress</div>
                <div className="tabitem none">Done</div>
                <div className="tabitem none">Review</div>
            </div>
            {todoLists.map((val, ind) => (
                <TodoItems key={ind} itemdata={val} onCallback={itemHandle} />
            ))}
        </div>
    );
};

export default TodoApp;
