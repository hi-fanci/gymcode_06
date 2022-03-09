import React from "react";

const TodoItem = (props) => {
    const { itemData, onCallback, onCallbackDelete } = props;
    const [item, setItem] = React.useState(itemData);
    const [isEdit, setEditState] = React.useState(false);

    const onchangeTitle = (e) => {
        let _title = e.target.value;
        setItem({ ...item, title: _title });
    };
    const onchangeTitleSubmit = () => {
        let _check = checkItemTitle(item.title);
        if (_check) {
            setEditState(!isEdit);
            onCallback(item);
        } else {
            setItem(itemData);
        }
    };
    const changeEditState = () => {
        setEditState(!isEdit);
    };
    const deleteMe = () => {
        onCallbackDelete(item);
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
    return (
        <div className="tabitem active">
            {isEdit ? (
                <div className="group-inline">
                    <input
                        type="text"
                        value={item.title}
                        onChange={(e) => onchangeTitle(e)}
                    />
                    <button
                        className="btn btn--ok"
                        onClick={() => onchangeTitleSubmit()}
                    >
                        ok
                    </button>
                </div>
            ) : (
                <>
                    <span>{item.dateCreate}</span>
                    <h3>{item.title}</h3>
                </>
            )}
            <div className="cb-buttons">
                <button
                    className="btn btn--edit"
                    onClick={() => changeEditState()}
                >
                    edit
                </button>
                <button className="btn btn--delete" onClick={() => deleteMe()}>
                    delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
