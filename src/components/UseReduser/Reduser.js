import { Form } from 'formik';
import React, { useState } from 'react';

export default function Reduser() {
    const [bookName, setBookName] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');
    const bookList = [
        { id: 1, name: 'java' },
        { id: 2, name: 'Php' },
        { id: 3, name: 'Asp' }
    ];
    const [books, setBooks] = useState(bookList);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks((books) => {
            const newBook = {
                id: new Date().getTime().toString(),
                name: bookName
            };
            return [...books, newBook];
        });
        setModalOpen(true);
        setModalText('new book added');
    };
    const Modal = ({ modalText }) => {
        return <p>{modalText}</p>;
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
            {isModalOpen && <Modal modalText={modalText} />}
            {books.map((book) => {
                const { id, name } = book;
                return <li key={id}>{name}</li>;
            })}
        </div>
    );
}
