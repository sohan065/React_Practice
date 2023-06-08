/* eslint-disable max-lines */
import React, { useReducer, useState } from 'react';

const bookList = [
    { id: 1, name: 'java' },
    { id: 2, name: 'Php' },
    { id: 3, name: 'Asp' }
];
export default function Reduser() {
    const [bookName, setBookName] = useState('');
    // const [isModalOpen, setModalOpen] = useState(false);
    // const [modalText, setModalText] = useState('');
    // const [books, setBooks] = useState(bookList);

    const reducer = (state, action) => {
        if (action.type === 'ADD') {
            const allBoooks = [...state.books, action.payload];
            return {
                ...state,
                books: allBoooks,
                isModalOpen: true,
                modalText: 'new book added'
            };
        }
        if (action.type === 'REMOVE') {
            console.log(action.payload);
            const filterBoooks = [...state.books].filter((book) => book.id !== action.payload);
            return {
                ...state,
                books: filterBoooks,
                isModalOpen: true,
                modalText: 'book removed'
            };
        }
    };
    const [bookState, dispatch] = useReducer(reducer, {
        books: bookList,
        isModalOpen: false,
        modalText: 'new book added'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            id: new Date().getTime().toString(),
            name: bookName
        };
        dispatch({ type: 'ADD', payload: newBook });
        setBookName('');
    };
    const Modal = ({ modalText }) => {
        return <p>{modalText}</p>;
    };
    const removeBook = (id) => {
        dispatch({ type: 'REMOVE', payload: { id } });
    };
    return (
        <div>
            <h1>Book List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={bookName}
                    onChange={(e) => {
                        setBookName(e.target.value);
                    }}
                />
                <button type="submit">submit</button>
            </form>
            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
            {bookState.books.map((book) => {
                const { id, name } = book;
                return (
                    <li key={id}>
                        {name}
                        <button
                            onClick={() => {
                                removeBook(id);
                            }}>
                            remove
                        </button>
                    </li>
                );
            })}
        </div>
    );
}
